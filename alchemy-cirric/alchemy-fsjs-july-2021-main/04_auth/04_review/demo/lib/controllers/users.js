import { Router } from 'express';
import User from '../models/User';

export default Router().post('/', (req, res, next) => {
  User.insert(req.body)
    .then((user) => res.send(user))
    .catch(next);
});
