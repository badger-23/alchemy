import { Router } from 'express';
import Tweet from '../models/Tweet.js';
import ensureAuth from '../middleware/ensure-auth.js';

export default Router().post('/', ensureAuth, async (req, res, next) => {
  try {
    // eslint-disable-next-line no-console
    console.log('req.user', req.user);
    const tweet = await Tweet.insert({ ...req.body, userId: req.user.id });
    res.send(tweet);
  } catch (error) {
    next(error);
  }
});
