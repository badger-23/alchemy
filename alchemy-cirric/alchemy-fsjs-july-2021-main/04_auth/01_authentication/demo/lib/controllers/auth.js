import { Router } from 'express';
import UserService from '../services/UserService.js';

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

export default Router()
  .post('/signup', async (req, res, next) => {
    try {
      const user = await UserService.create(req.body);

      // attach a JWT cookie to the response
      res.cookie('session', user.authToken(), {
        httpOnly: true,
        maxAge: ONE_DAY_IN_MS,
      });

      res.send(user);
    } catch (error) {
      next(error);
    }
  })
  .post('/login', async (req, res, next) => {
    try {
      const user = await UserService.authorize(req.body);

      res.cookie('session', user.authToken(), {
        httpOnly: true,
        maxAge: ONE_DAY_IN_MS,
      });

      res.send(user);
    } catch (error) {
      next(error);
    }
  });
