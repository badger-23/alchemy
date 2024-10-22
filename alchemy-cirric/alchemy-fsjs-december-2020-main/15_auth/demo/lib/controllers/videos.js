const { Router } = require('express');
const ensureAuth = require('../middleware/ensure-auth');
const Video = require('../models/Video');

module.exports = Router()
  .post('/', ensureAuth, (req, res, next) => {
    Video
      .insert({ ...req.body, userId: req.user.id })
      .then(video => res.send(video))
      .catch(next);
  })

  .put('/:id', ensureAuth, (req, res, next) => {
    Video
      .update(req.params.id, { ...req.body, userId: req.user.id });
  })

  .delete('/:id', ensureAuth, (req, res, next) => {
    Video
      .delete(req.params.id, req.user.id);
  });
