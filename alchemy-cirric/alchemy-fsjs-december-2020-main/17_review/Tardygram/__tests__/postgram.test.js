const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const Postgram = require('../lib/models/Postgram');
const UserService = require('../lib/services/UserService');


describe('. routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  
  afterAll(() => {
    return pool.end();
  });


  it('adds a postgram image url into postgram table using post', async() => {
    const agent = request.agent(app);
    const user = await UserService.create({
      email: 'test@test.com',
      password: 'password',
      profilePhotoURL: 'myspecialphoto.jpg' 
    });
      
    await agent 
      .post('/api/v1/auth/login')
      .send({
        email: 'test@test.com',
        password: 'password',
        profilePhotoURL: 'myspecialphoto.jpg' 
      });
    
    const res = await agent
      .post('/api/v1/postgram')
      .send({
        userId: user.id,
        photoURL: 'selfphoto.jpg',
        caption: 'cool story bro',
        tags: ['yolo', 'carpe diem']
      });
    expect(res.body).toEqual({
      id: expect.any(String),
      userId: user.id,
      photoURL: 'selfphoto.jpg',
      caption: 'cool story bro',
      tags: ['yolo', 'carpe diem']
    }); 
  });
    
  it('get all posts', async() => {
    const agent = request.agent(app);
    const user = await UserService.create({
      email: 'test@test.com',
      password: 'password',
      profilePhotoURL: 'myspecialphoto.jpg' 
    });
      
    await agent 
      .post('/api/v1/auth/login')
      .send({
        email: 'test@test.com',
        password: 'password',
        profilePhotoURL: 'myspecialphoto.jpg' 
      });
    
    await Promise.all([
      { 
        userId: user.id,
        photoURL: 'selfphoto.jpg',
        caption: 'cool story bro',
        tags: ['yolo', 'carpe diem'] },
      { userId: user.id,
        photoURL: 'jim.jpg',
        caption: 'cool story Jim',
        tags: ['mofo', 'fomo'] }
    ].map(postgram => Postgram.insert(postgram)));
    
    const res = await agent
      .get('/api/v1/postgram');
        
    expect(res.body).toEqual([{
      id: expect.any(String),
      userId: user.id,
      photoURL: 'selfphoto.jpg',
      caption: 'cool story bro',
      tags: ['yolo', 'carpe diem']
    }, {
      id: expect.any(String),
      userId: user.id,
      photoURL: 'jim.jpg',
      caption: 'cool story Jim',
      tags: ['mofo', 'fomo'] 
    }]); 
  });

  it('get post by id', async() => {
    const agent = request.agent(app);
    const user = await UserService.create({
      email: 'test@test.com',
      password: 'password',
      profilePhotoURL: 'myspecialphoto.jpg' 
    });
      
    await agent 
      .post('/api/v1/auth/login')
      .send({
        email: 'test@test.com',
        password: 'password',
        profilePhotoURL: 'myspecialphoto.jpg' 
      });
    
    const gram = await Postgram
      .insert({ 
        userId: user.id,
        photoURL: 'selfphoto.jpg',
        caption: 'cool story bro',
        tags: ['yolo', 'carpe diem']
      });
      
    const res = await agent
      .get(`/api/v1/postgram/${gram.id}`);  

    expect(res.body).toEqual({
      id: expect.any(String),
      userId: user.id,
      photoURL: 'selfphoto.jpg',
      caption: 'cool story bro',
      tags: ['yolo', 'carpe diem']
    }); 
  });

  it('updates a post caption with PATCH', async() => {
    const agent = request.agent(app);
    const user = await UserService.create({
      email: 'test@test.com',
      password: 'password',
      profilePhotoURL: 'myspecialphoto.jpg' 
    });
    
    await agent 
      .post('/api/v1/auth/login')
      .send({
        email: 'test@test.com',
        password: 'password',
        profilePhotoURL: 'myspecialphoto.jpg' 
      });
  
    const gram = await Postgram
      .insert({ 
        userId: user.id,
        photoURL: 'selfphoto.jpg',
        caption: 'cool story bro',
        tags: ['yolo', 'carpe diem']
      });
      
    const res = await agent
      .put(`/api/v1/postgram/${gram.id}`)
      .send({
        caption:'Living my best life'
      });
      
    expect(res.body).toEqual({
      id: expect.any(String),
      userId: user.id,
      photoURL: 'selfphoto.jpg',
      caption:'Living my best life',
      tags: ['yolo', 'carpe diem']
    }); 
  });

  it('deletes a post', async() => {
    const agent = request.agent(app);
    const user = await UserService.create({
      email: 'test@test.com',
      password: 'password',
      profilePhotoURL: 'myspecialphoto.jpg' 
    });
    
    await agent 
      .post('/api/v1/auth/login')
      .send({
        email: 'test@test.com',
        password: 'password',
        profilePhotoURL: 'myspecialphoto.jpg' 
      });
  
    const gram = await Postgram
      .insert({ 
        userId: user.id,
        photoURL: 'selfphoto.jpg',
        caption: 'cool story bro',
        tags: ['yolo', 'carpe diem']
      });
      
    return await agent 
      .delete(`/api/v1/postgram/${gram.id}`)
      
      .then(res => {
        expect(res.body).toEqual({ id: expect.any(String),
          userId: user.id,
          photoURL: 'selfphoto.jpg',
          caption:'cool story bro',
          tags: ['yolo', 'carpe diem'] });
      });
  });

  it('get popular posts', async() => {
    await pool.query(fs.readFileSync('./sql/seed.sql', 'utf-8'));
    const agent = request.agent(app);
    const user = await UserService.create({
      email: 'test@test.com',
      password: 'password',
      profilePhotoURL: 'myspecialphoto.jpg' 
    });

    await agent 
      .post('/api/v1/auth/login')
      .send({
        email: 'test@test.com',
        password: 'password',
        profilePhotoURL: 'myspecialphoto.jpg' 
      });
    
    const post = await Postgram.find();
    
    const res = await agent
      .get('/api/v1/postgram/popular');
        
    expect(res.body).toEqual([
      post[3],
      post[6],
      post[5],
      post[1]
    ]); 
  });
});
