const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/utils/sendEmail.js', () => {
  return jest.fn().mockResolvedValue('https://example.com/email-mock');
});

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates an account with name and email', async () => {
    const bilbo = {
      firstName: 'Bilbo',
      lastName: 'Baggins',
      email: 'b.baggins@hobbiton.me',
    };

    const res = await request(app).post('/api/v1/accounts').send(bilbo);

    expect(res.body).toEqual({
      id: '1',
      ...bilbo,
      mailPreview: expect.any(String),
    });
  });
});
