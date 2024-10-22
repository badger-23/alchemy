const fs = require('fs');
const request = require('supertest');
const app = require('../lib/app');
const Toy = require('../lib/models/Toy');
const pool = require('../lib/utils/pool');

describe('app tests', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./data/setup.sql', 'utf-8'));
  });

  afterAll(() => {
    return pool.end();
  });

  it('creates a toy via POST', async() => {
    const response = await request(app)
      .post('/api/v1/toys')
      .send({
        color: 'red',
        type: 'truck'
      });

    expect(response.body).toEqual({
      id: '1',
      color: 'red',
      type: 'truck'
    });
  });

  it('finds a toy by id via GET', async() => {
    const toy = await Toy.insert({ color: 'red', type: 'ball' });

    const response = await request(app)
      .get(`/api/v1/toys/${toy.id}`);

    expect(response.body).toEqual(toy);
  });

  it('updates a toy by id via PUT', async() => {
    const toy = await Toy.insert({ color: 'blue', type: 'car' });

    const response = await request(app)
      .put(`/api/v1/toys/${toy.id}`)
      .send({
        color: 'red',
        type: 'car'
      });

    expect(response.body).toEqual({
      ...toy,
      color: 'red',
      type: 'car'
    });
  });
});
