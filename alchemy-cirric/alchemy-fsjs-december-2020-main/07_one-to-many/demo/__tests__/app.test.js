const fs = require('fs');
const request = require('supertest');
const app = require('../lib/app');
const Car = require('../lib/models/Car');
const Ride = require('../lib/models/Ride');
const pool = require('../lib/utils/pool');

describe('app endpoint', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync(`${__dirname}/../sql/setup.sql`, 'utf-8'));
  });

  afterAll(() => {
    return pool.end();
  });

  it('creates a new car via POST', async() => {
    const res = await request(app)
      .post('/api/v1/cars')
      .send({
        color: 'red',
        make: 'opel',
        model: 'corsa'
      });

    expect(res.body).toEqual({
      id: '1',
      color: 'red',
      make: 'opel',
      model: 'corsa'
    });
  });

  it('finds a car by id and associated rides via GET', async() => {
    const car = await Car.insert({
      color: 'red',
      make: 'opel',
      model: 'corsa'
    });

    const rides = await Promise.all([
      { duration: 5, carId: car.id },
      { duration: 10, carId: car.id },
      { duration: 3, carId: car.id }
    ].map(ride => Ride.insert(ride)));

    const res = await request(app)
      .get(`/api/v1/cars/${car.id}`);

    expect(res.body).toEqual({
      ...car,
      rides: expect.arrayContaining(rides)
    });
  });

  it('finds all cars via GET', async() => {
    const cars = await Promise.all([
      {
        color: 'red',
        make: 'opel',
        model: 'corsa'
      },
      {
        color: 'blue',
        make: 'opel',
        model: 'corsa'
      },
      {
        color: 'green',
        make: 'opel',
        model: 'corsa'
      }
    ].map(car => Car.insert(car)));

    const res = await request(app)
      .get('/api/v1/cars');

    expect(res.body).toEqual(expect.arrayContaining(cars));
    expect(res.body).toHaveLength(cars.length);
  });

  it('updates a car via PUT', async() => {
    const car = await Car.insert({
      color: 'red',
      make: 'opel',
      model: 'corsa'
    });

    const res = await request(app)
      .put(`/api/v1/cars/${car.id}`)
      .send({
        color: 'blue',
        make: 'opel',
        model: 'corsa'
      });

    expect(res.body).toEqual({
      id: car.id,
      color: 'blue',
      make: 'opel',
      model: 'corsa'
    });
  });

  it('deletes a car via DELETE', async() => {
    const car = await Car.insert({
      color: 'red',
      make: 'opel',
      model: 'corsa'
    });

    const res = await request(app)
      .delete(`/api/v1/cars/${car.id}`);

    expect(res.body).toEqual(car);
  });
});
