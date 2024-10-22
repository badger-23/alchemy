const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const Tweet = require('../lib/models/Tweet');
const Tag = require('../lib/models/Tag');

describe('tweets routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  afterAll(() => {
    return pool.end();
  });

  it('creates a new tweet via POST', async() => {
    const response = await request(app)
      .post('/api/v1/tweets')
      .send({
        text: 'My First Tweet'
      });

    expect(response.body).toEqual({
      id: '1',
      text: 'My First Tweet'
    });
  });

  it.only('finds a tweet by id via GET', async() => {
    await Promise.all([
      { title: 'PDX' },
      { title: 'sunny' },
      { title: 'food' }
    ].map(tag => Tag.insert(tag)));

    const tweet = await Tweet.insert({
      text: 'My First Tweet',
      tags: ['PDX', 'sunny']
    });

    const response = await request(app)
      .get(`/api/v1/tweets/${tweet.id}`);
    
    expect(response.body).toEqual({
      ...tweet,
      tags: ['PDX', 'sunny']
    });
  });

  it('finds all tweets via GET', async() => {
    const tweets = await Promise.all([
      { text: 'First' },
      { text: 'Second' },
      { text: 'Third' }
    ].map(tweet => Tweet.insert(tweet)));

    const response = await request(app)
      .get('/api/v1/tweets');

    expect(response.body).toEqual(expect.arrayContaining(tweets));
    expect(response.body).toHaveLength(tweets.length);
  });

  it('updates a tweet via PUT', async() => {
    const tweet = await Tweet.insert({
      text: 'My First Tweet'
    });

    const response = await request(app)
      .put(`/api/v1/tweets/${tweet.id}`)
      .send({
        text: 'Oops. this is my second tweet'
      });

    expect(response.body).toEqual({
      id: tweet.id,
      text: 'Oops. this is my second tweet'
    });
  });

  it('deletes a tweet by id', async() => {
    const tweet = await Tweet.insert({
      text: 'My First Tweet'
    });

    const response = await request(app)
      .delete(`/api/v1/tweets/${tweet.id}`);

    expect(response.body).toEqual(tweet);
  });
});
