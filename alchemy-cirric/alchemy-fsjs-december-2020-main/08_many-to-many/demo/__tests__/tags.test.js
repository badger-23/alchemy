const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');

describe('tags routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  afterAll(() => {
    return pool.end();
  });

  it('create a new tag via POST', async() => {
    const response = await request(app)
      .post('/api/v1/tags')
      .send({
        title: 'PDX'
      });

    expect(response.body).toEqual({
      id: '1',
      title: 'PDX'
    });
  });
});
