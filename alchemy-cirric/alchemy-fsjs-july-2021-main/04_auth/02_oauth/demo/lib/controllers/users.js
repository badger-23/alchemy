const { Router } = require('express');
const User = require('../models/User');

module.exports = Router().get('/:username/tweets', async (req, res, next) => {
  try {
    const user = await User.findByUsernameWithTweets(req.params.username);

    res.send(user);
  } catch (error) {
    next(error);
  }
});
