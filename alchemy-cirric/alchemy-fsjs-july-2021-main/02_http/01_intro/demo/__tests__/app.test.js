import request from 'supertest';
import app from '../lib/app.js';

describe('app routes', () => {
  it('gets a dog from /dog.json', async () => {
    const res = await request(app).get('/dog.json');

    expect(res.body).toEqual({ name: 'Ruby', age: 10 });
  });
});
