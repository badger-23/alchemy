const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const seed = require('./seed');
const User = require('../lib/models/User');

beforeEach(async() => {
  await pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  await seed();
});

const agent = request.agent(app);
beforeEach(() => {
  return agent
    .post('/api/v1/auth/login')
    .send({
      email: 'test0@test.com',
      password: 'password'
    });
});

afterAll(() => {
  return pool.end();
});

module.exports = {
  getAgent: () => agent,
  getLoggedInUser: () => User.findByEmail('test0@test.com')
};
