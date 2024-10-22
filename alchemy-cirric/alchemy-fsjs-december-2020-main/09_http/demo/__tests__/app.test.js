const server = require('../lib/app');
const request = require('supertest');

describe('app routes', () => {
  it('responds with spot', async() => {
    const response = await request(server)
      .get('/');

    expect(response.body).toEqual({
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    });
  });
});
