import { Router } from 'express';
import Tweet from '../models/Tweet.js';
import User from '../models/User.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const tweet = await Tweet.create(req.body);

      res.send(tweet);
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const tweet = await Tweet.findByPk(req.params.id, {
        attributes: ['id', 'text'],
        include: [{ model: User, attributes: ['name'] }],
      });

      // {
      //   id: 1,
      //   text: 'Bork bork, world!',
      //   User: {
      //     name: 'ruby'
      //   }
      // }

      res.send(tweet);
    } catch (error) {
      next(error);
    }
  });
