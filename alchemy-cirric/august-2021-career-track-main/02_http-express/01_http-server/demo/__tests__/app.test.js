const request = require('supertest');
const { rm, mkdir } = require('fs/promises');
const app = require('../lib/app');
const SimpleDb = require('../lib/simple-db');

const rootDir = `${__dirname}/store`;

describe('dog CRUD API', () => {
  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() =>
      mkdir(rootDir, { recursive: true })
    );
  });

  afterAll(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() =>
      mkdir(rootDir, { recursive: true })
    );
  });

  it('creates a new dog and returns it via POST', async () => {
    const dog = { name: 'ruby', age: 11, weight: '11lbs' };
    const res = await request(app).post('/dogs').send(dog);

    expect(res.body).toEqual({ ...dog, id: expect.any(String) });
  });

  it('gets a dog by its id', async () => {
    const dog = { name: 'ruby', age: 11, weight: '11lbs' };
    const db = new SimpleDb(rootDir);
    await db.save(dog);

    const res = await request(app).get(`/dogs/${dog.id}`);

    expect(res.body).toEqual(dog);
  });

  it('gets all dogs when no id specified', async () => {
    const ruby = { name: 'ruby', age: 11, weight: '11lbs' };
    const spot = { name: 'spot', age: 7, weight: '25lbs' };
    const jeep = { name: 'jeep', age: 3, weight: '7lbs' };

    const db = new SimpleDb(rootDir);
    Promise.all([db.save(ruby), db.save(spot), db.save(jeep)]);

    const res = await request(app).get('/dogs');

    expect(res.body).toEqual(expect.arrayContaining([ruby, spot, jeep]));
  });
});
