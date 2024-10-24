const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const PostGram = require('../lib/models/PostGram');
const UserService = require('../lib/services/UserService');

describe('gram routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  
  afterAll(() => {
    pool.end();
  });

  it('creates a PostGram via POST', async() => {
    const agent = request.agent(app);
    const user = await agent
      .post('/api/v1/auth/signup')
      .send({
        email: 'test@test.com',
        password: 'password',
        profilePhotoURL: 'profile.jpg'
      });
    const res = await agent
      .post('/api/v1/post_grams')
      .send({ 
        userId: user.id, 
        photoURL: 'photo.jpg',
        caption: 'caption',
        tags:
         [ 
           'tag',
           'tagged',
           'tagger'
         ],
      });
      
    expect(res.body).toEqual({
      id: expect.any(String),
      userId: user.body.id, 
      photoURL: 'photo.jpg',
      caption: 'caption',
      tags:
         [ 
           'tag',
           'tagged',
           'tagger'
         ]
    });
  });

  it('gets all PostGrams via GET', async() => {
    const agent = request.agent(app);
    const user = await agent
      .post('/api/v1/auth/signup')
      .send({
        email: 'test@test.com',
        password: 'password',
        profilePhotoURL: 'profile.jpg'
      });
    const gram = await agent
      .post('/api/v1/post_grams')
      .send({ 
        userId: user.id, 
        photoURL: 'photo.jpg',
        caption: 'caption',
        tags:
         [ 
           'tag',
           'tagged',
           'tagger'
         ],
      });

    const res = await agent
      .get('/api/v1/post_grams');
      
    expect(res.body).toEqual([{
      id: expect.any(String),
      userId: user.body.id, 
      photoURL: 'photo.jpg',
      caption: 'caption',
      tags:
         [ 
           'tag',
           'tagged',
           'tagger'
         ]
    }]);
  });

  it('gets all PostGrams by id and associated comments via GET', async() => {
    const agent = request.agent(app);
    const user = await agent
      .post('/api/v1/auth/signup')
      .send({
        email: 'test@test.com',
        password: 'password',
        profilePhotoURL: 'profile.jpg'
      });

    const gram = await agent
      .post('/api/v1/post_grams')
      .send({ 
        userId: user.id, 
        photoURL: 'photo.jpg',
        caption: 'caption',
        tags:
         [ 
           'tag',
           'tagged',
           'tagger'
         ]
      });

    const res = await agent
      .get(`/api/v1/post_grams/${gram.body.id}`);
      
    expect(res.body).toEqual({
      id: expect.any(String),
      comments: expect.anything(),
      userId: user.body.id, 
      photoURL: 'photo.jpg',
      caption: 'caption', 
      tags:
         [ 
           'tag',
           'tagged',
           'tagger'
         ]
    });
  });

  it('updates a posts caption, only allowing you to do so if you have authorization', async() => {
    const agent = request.agent(app);
    const user = await UserService.create({
      email: 'test@test.com',
      password: 'password',
      profilePhotoURL: 'profile.jpg'
    });

    await PostGram.insert({ 
      userId: user.id, 
      photoURL: 'photo.jpg',
      caption: 'caption',
      tags:
       [ 
         'tag',
         'tagged',
         'tagger'
       ]
    });

    const res = await agent
      .patch(`/api/v1/post_grams/${gram.body.id}`)
      .send({
        caption: 'this is my new caption'
      });
      
    expect(res.body).toEqual({
      id: expect.any(String),
      comments: expect.anything(),
      userId: user.body.id, 
      photoURL: 'photo.jpg',
      caption: 'this is my new caption', 
      tags:
         [
           'tag',
           'tagged',
           'tagger'
         ]
    });
  });

  it('deletes a post, only allowing you to do so if you have authorization', async() => {
    const agent = request.agent(app);
    const user = await agent
      .post('/api/v1/auth/signup')
      .send({
        email: 'test@test.com',
        password: 'password',
        profilePhotoURL: 'profile.jpg'
      });

    const gram = await agent
      .post('/api/v1/post_grams')
      .send({ 
        userId: user.id, 
        photoURL: 'photo.jpg',
        caption: 'caption',
        tags:
         [ 
           'tag',
           'tagged',
           'tagger'
         ]
      });

    const res = await agent
      .delete(`/api/v1/post_grams/${gram.body.id}`);
      
    expect(res.body).toEqual({
      id: expect.any(String),
      userId: user.body.id, 
      photoURL: 'photo.jpg',
      caption: 'caption', 
      tags:
         [
           'tag',
           'tagged',
           'tagger'
         ]
    });
  });

  it('gets top 10 commented on PostGrams via GET', async() => {
    const agent = request.agent(app);
    const user = await agent
      .post('/api/v1/auth/signup')
      .send({
        email: 'test@test.com',
        password: 'password',
        profilePhotoURL: 'profile.jpg'
      });
    const grams = await agent
      .post('/api/v1/post_grams')
      .send(
        { 
          userId: user.id, 
          photoURL: 'photo1.jpg',
          caption: 'caption',
          tags:
          [ 
            'tag',
            'tagged',
            'tagger'
          ],
        });

    const comments = await agent
      .post('/api/v1/comments')
      .send(
        {
          comment: 'hello world',
          commentBy: user.id,
          post: grams.body.id
        });

    const res = await agent
      .get('/api/v1/post_grams');
      
    expect(res.body).toEqual([{
      id: expect.any(String),
      userId: user.body.id, 
      photoURL: 'photo1.jpg',
      caption: 'caption',
      tags:
         [ 
           'tag',
           'tagged',
           'tagger'
         ]
    }]);
  });
});
