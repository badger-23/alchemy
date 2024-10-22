const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const UserService = require('../lib/services/UserService');


describe('videos routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('creates a video via POST', async() => {
    const user = await UserService.create({
      email: 'test@test.com',
      password: 'password'
    });

    const res = await request(app)
      .post('/api/v1/videos')
      .send({
        title: 'All about cats',
        url: 'http://s3.com/cats',
        userId: user.id
      });

    expect(res.body).toEqual({
      id: expect.any(String),
      title: 'All about cats',
      url: 'http://s3.com/cats',
      userId: user.id
    });
  });
});
