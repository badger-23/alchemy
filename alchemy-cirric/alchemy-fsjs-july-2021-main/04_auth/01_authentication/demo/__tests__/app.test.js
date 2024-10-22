import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

const agent = request.agent(app);

describe('demo routes', () => {
  beforeAll(() => {
    return setup(pool);
  });

  it('signs up a user via POST', async () => {
    const res = await request(app)
      .post('/api/v1/auth/signup')
      .send({ email: 'ruby@dogs.woof', password: 'my-password!' });

    expect(res.body).toEqual({ id: '1', email: 'ruby@dogs.woof' });
  });

  it('login a user via POST', async () => {
    const res = await agent
      .post('/api/v1/auth/login')
      .send({ email: 'ruby@dogs.woof', password: 'my-password!' });

    expect(res.body).toEqual({
      id: '1',
      email: 'ruby@dogs.woof',
    });
  });

  it('creates a tweet via POST', async () => {
    const res = await agent
      .post('/api/v1/tweets')
      .send({ text: 'Hello, world!' });

    expect(res.body).toEqual({ id: '1', userId: '1', text: 'Hello, world!' });
  });
});
