import { Router } from 'express';
import ProfileService from '../services/ProfileService.js';

export default Router()
  .get('/:username', async (req, res, next) => {
    // req.params = {username: 'Ruby'}
    const profile = await ProfileService.create(req.params);

    res.send(profile);
  })
  .post('/', async (req, res, next) => {});
