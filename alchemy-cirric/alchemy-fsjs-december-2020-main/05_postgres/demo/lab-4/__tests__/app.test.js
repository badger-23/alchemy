const request = require('supertest');
const app = require('../lib/app');

describe('app endpoints', () => {
  it('responds with success true if we have good code', async() => {
    const res = await request(app)
      .post('/lint')
      .send({ code: 'const add = (a, b) => { return a + b; }' });

    expect(res.body).toEqual({ success: true });
    // return request(app).get('/')
    //   .then(res => {
    //     expect(res.body).toEqual({ hello: 'world' });
    //   });
  });

  it('responds with an error if we have bad code', async() => {
    const res = await request(app)
      .post('/lint')
      .send({ code: 'const add = (a, b => { return a + b; }' });

    expect(res.body).toEqual({ error: 'missing )' });
  });
});
