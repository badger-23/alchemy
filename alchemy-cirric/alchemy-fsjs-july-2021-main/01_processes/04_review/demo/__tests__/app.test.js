import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Dog from '../lib/models/Dog.js';

// CRUD
// C - create POST    INSERT
// R - read   GET     SELECT
// U - update PUT     UPDATE
// D - delete DELETE  DELETE
describe('dog routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a dog via POST', async () => {
    const ruby = { name: 'ruby', age: 10, favoriteTreat: 'chicken' };
    const res = await request(app).post('/api/v1/dogs').send(ruby);

    expect(res.body).toEqual({
      id: '1',
      ...ruby,
    });
  });

  it('gets a dog by id via GET', async () => {
    const spot = await Dog.insert({
      name: 'spot',
      age: 5,
      favoriteTreat: 'goldfish',
    });

    // this test uses async/await
    // this is equivalent to using:
    //   return request(app).get(...).then((res) => {...})
    const res = await request(app).get(`/api/v1/dogs/${spot.id}`);

    expect(res.body).toEqual(spot);
  });

  it('gets all dogs via GET', async () => {
    const spot = await Dog.insert({
      name: 'spot',
      age: 5,
      favoriteTreat: 'goldfish',
    });

    const jeep = await Dog.insert({
      name: 'jeep',
      age: 7,
      favoriteTreat: 'koi',
    });

    const snoopy = await Dog.insert({
      name: 'snoopy',
      age: 50,
      favoriteTreat: 'peanuts',
    });

    return request(app)
      .get('/api/v1/dogs')
      .then((res) => {
        expect(res.body).toEqual([spot, jeep, snoopy]);
      });
  });

  it('updates a dog by id via PUT', async () => {
    const spot = await Dog.insert({
      name: 'spot',
      age: 5,
      favoriteTreat: 'goldfish',
    });

    const res = await request(app)
      .put(`/api/v1/dogs/${spot.id}`)
      .send({ favoriteTreat: 'chicken' });

    expect(res.body).toEqual({ ...spot, favoriteTreat: 'chicken' });
  });

  it('deletes an existing dog by id via DELETE', async () => {
    const dog = await Dog.insert({
      name: 'spot',
      age: 5,
      favoriteTreat: 'goldfish'
    });

    const res = await request(app).delete(`/api/v1/dogs/${dog.id}`);

    expect(res.body).toEqual({
      message: `dog-gone-it, dog ${dog.name} was deleted!`
    });
  });
});
