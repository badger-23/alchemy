import database from '../lib/utils/database.js';
import request from 'supertest';
import app from '../lib/app.js';
import User from '../lib/models/User.js';
import Tweet from '../lib/models/Tweet.js';

describe('demo routes', () => {
  beforeEach(() => {
    return database.sync({ force: true });
  });

  describe('user routes', () => {
    it('creates a user via POST', async () => {
      const res = await request(app)
        .post('/api/v1/users')
        .send({ name: 'ruby', bio: 'the goodest girl' });

      expect(res.body).toEqual({
        id: 1,
        name: 'ruby',
        bio: 'the goodest girl',
      });
    });

    it('gets a user by id via GET', async () => {
      const user = await User.create({ name: 'ruby', bio: 'the goodest girl' });

      const res = await request(app).get('/api/v1/users/1');

      expect(res.body).toEqual(user.toJSON());
    });

    it('gets a list of users via GET', async () => {
      const ruby = {
        name: 'ruby',
        bio: 'the goodest girl',
      };
      const spot = {
        name: 'spot',
        bio: 'the baddest boy.... to the bone',
      };

      await User.bulkCreate([ruby, spot]);

      const res = await request(app).get('/api/v1/users');

      expect(res.body).toEqual([
        {
          id: 1,
          ...ruby,
        },
        {
          id: 2,
          ...spot,
        },
      ]);
    });

    it('gets a list of tweets from a user by id via GET', async () => {
      const user = await User.create({
        name: 'ruby',
        bio: 'not currently on rails',
      });

      await Tweet.bulkCreate([
        { text: 'waddup', UserId: user.id },
        { text: 'woof woof', UserId: user.id },
      ]);

      const res = await request(app).get(`/api/v1/users/${user.id}/tweets`);

      expect(res.body).toEqual({
        name: user.name,
        Tweets: [{ text: 'waddup' }, { text: 'woof woof' }],
      });
    });

    // PUT takes the entire object and updates it
    // PATCH takes a part of the object and only updates that part
    it('updates a user via PATH', async () => {
      const user = await User.create({
        name: 'ruby',
        bio: 'the goodest girl',
      });

      const res = await request(app)
        .patch(`/api/v1/users/${user.id}`)
        .send({ bio: 'the greatest girl' });

      // expect(res.body).toEqual({
      //   ...user.toJSON(),
      //   bio: 'the greatest girl'
      // });

      expect(res.body).toEqual({
        id: 1,
        name: 'ruby',
        bio: 'the greatest girl',
      });
    });

    it('deletes a user via DELETE', async () => {
      const user = await User.create({ name: 'spot', bio: 'the baddest boy' });

      const res = await request(app).delete(`/api/v1/users/${user.id}`);

      expect(res.body).toEqual({ success: true });
    });
  });

  describe('tweet routes', () => {
    it('creates a tweet from a user via POST', async () => {
      const user = await User.create({ name: 'ruby', bio: 'she good' });

      const res = await request(app).post('/api/v1/tweets').send({
        text: 'Woof woof, world!',
        UserId: user.id,
      });

      expect(res.body).toEqual({
        id: 1,
        UserId: user.id,
        text: 'Woof woof, world!',
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      });
    });

    it('get a tweet and its user by id via GET', async () => {
      const user = await User.create({ name: 'ruby' });
      const tweet = await Tweet.create({
        UserId: user.id,
        text: 'Bork bork, world!',
      });

      console.log(tweet.toJSON());

      const res = await request(app).get(`/api/v1/tweets/${tweet.id}`);

      expect(res.body).toEqual({
        id: tweet.id,
        text: tweet.text,
        User: { name: user.name },
      });
    });
  });
});
