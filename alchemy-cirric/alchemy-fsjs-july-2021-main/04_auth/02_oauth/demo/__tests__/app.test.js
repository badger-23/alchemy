const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const User = require('../lib/models/User');
const Tweet = require('../lib/models/Tweet');

jest.mock('../lib/middleware/ensure-auth.js', () => (req, res, next) => {
  req.user = {
    username: 'test_user',
    avatarUrl: 'http://example.com/image.png',
  };

  next();
});

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool).then(() =>
      User.insert({
        username: 'test_user',
        avatarUrl: 'http://example.com/image.png',
      })
    );
  });

  it('verify route displays the currently logged in user via GET', async () => {
    const res = await request(app).get('/api/v1/auth/verify');

    expect(res.body).toEqual({
      username: 'test_user',
      avatarUrl: 'http://example.com/image.png',
    });
  });

  it('creates a tweet for the currently logged in user via POST', async () => {
    // const user = await User.insert({
    //   username: 'test_user',
    //   avatarUrl: 'http://example.com/image.png',
    // });

    const res = await request(app)
      .post('/api/v1/tweets')
      .send({ text: 'My first tweet' });

    expect(res.body).toEqual({
      id: '1',
      text: 'My first tweet',
      username: 'test_user',
    });
  });

  it('gets a user and their tweets via GET', async () => {
    const user = await User.insert({
      username: 'hacktweeter1337',
      avatarUrl: 'http://example.com/image.png',
    });

    const tweet1 = await Tweet.insert({
      text: 'My first tweet!',
      username: user.username,
    });

    const tweet2 = await Tweet.insert({
      text: 'My second tweet!',
      username: user.username,
    });

    const res = await request(app).get('/api/v1/users/hacktweeter1337/tweets');

    expect(res.body).toEqual({
      username: user.username,
      tweets: [tweet1.text, tweet2.text],
    });
  });
});
