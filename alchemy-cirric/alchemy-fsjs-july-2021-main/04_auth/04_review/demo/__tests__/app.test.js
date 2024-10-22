import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import User from '../lib/models/User.js';
import Post from '../lib/models/Post.js';
import Comment from '../lib/models/Comment.js';
import seed from '../data/seed.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool).then(() => seed(pool));
  });

  afterAll(() => {
    return pool.end();
  });

  // Example of a unit test:
  // it('converts hex to rgb', () => {
  //   const actual = hexToRgb('FF0000');
  //   const expected = { r: 255, g: 0, b: 0 };
  //   expect(actual).toEqual(expected);
  // });

  describe('user routes', () => {
    it('creates a user via POST', () => {
      return request(app)
        .post('/api/v1/users')
        .send({ username: 'Ruby' })
        .then((res) => expect(res.body).toEqual({ id: '2', username: 'Ruby' }));
    });
  });

  describe('post routes', () => {
    it('creates a post via POST', async () => {
      const user = await User.insert({ username: 'Ruby' });

      return request(app)
        .post('/api/v1/posts')
        .send({
          text: 'Hello, world!',
          authorId: user.id,
          imageUrl: 'example.com/image.png',
        })
        .then((res) =>
          expect(res.body).toEqual({
            id: '2',
            text: 'Hello, world!',
            imageUrl: 'example.com/image.png',
            author: { ...user },
          })
        );
    });

    it('gets a user’s posts via GET', async () => {
      const user = await User.insert({ username: 'Ruby' });
      const post = await Post.insert({
        text: 'A post!',
        imageUrl: 'example.com/img.png',
        authorId: user.id,
      });

      return request(app)
        .get('/api/v1/posts/Ruby')
        .then((res) =>
          expect(res.body).toEqual([
            {
              id: post.id,
              text: post.text,
              imageUrl: post.imageUrl,
              author: { ...user },
            },
          ])
        );
    });
  });

  describe('comment routes', () => {
    it('creates a comment via POST', async () => {
      const user = await User.insert({ username: 'Ruby' });
      const post = await Post.insert({
        text: 'A post!',
        imageUrl: 'example.com/img.png',
        authorId: user.id,
      });

      return request(app)
        .post(`/api/v1/posts/${post.id}/comments`)
        .send({ authorId: user.id, text: 'Hey, nice post!' })
        .then((res) =>
          expect(res.body).toEqual({
            id: '1',
            postId: post.id,
            text: 'Hey, nice post!',
            author: { ...user },
          })
        );
    });

    it('gets a post with comments via GET', async () => {
      const user = await User.insert({ username: 'Ruby' });
      const commenter = await User.insert({ username: 'Spot' });
      const post = await Post.insert({
        text: 'A post!',
        imageUrl: 'example.com/img.png',
        authorId: user.id,
      });
      const comment0 = await Comment.insert({
        text: 'a comment',
        postId: post.id,
        authorId: commenter.id,
      });

      const comment1 = await Comment.insert({
        text: 'another comment',
        postId: post.id,
        authorId: commenter.id,
      });

      return request(app)
        .get(`/api/v1/posts/${post.id}/comments`)
        .then((res) =>
          expect(res.body).toEqual({
            ...post,
            author: { ...user },
            comments: [{ ...comment0 }, { ...comment1 }],
          })
        );
    });
  });
});
