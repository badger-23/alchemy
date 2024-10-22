const { Router } = require('express');
const ensureAuth = require('../middleware/ensure-auth');
const Tweet = require('../models/Tweet');

module.exports = Router().post('/', ensureAuth, async (req, res, next) => {
  try {
    console.log(`req.user`, req.user);
    const tweet = await Tweet.insert({
      ...req.body,
      username: req.user.username,
    });

    res.send(tweet);
  } catch (error) {
    next(error);
  }
});
