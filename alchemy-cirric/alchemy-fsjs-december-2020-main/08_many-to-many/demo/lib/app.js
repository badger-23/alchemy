const express = require('express');
const { findById } = require('./models/Tweet');
const Tweet = require('./models/Tweet');
const app = express();

app.use(express.json());

// endpoints
app.post('/api/v1/tweets', (req, res, next) => {
  Tweet
    .insert(req.body)
    .then(tweet => res.send(tweet))
    .catch(next);
});

app.get('/api/v1/tweets/:id', (req, res, next) => {
  Tweet
    .findById(req.params.id)
    .then(tweet => res.send(tweet))
    .catch(next);
});

app.get('/api/v1/tweets', (req, res, next) => {
  Tweet
    .find()
    .then(tweets => res.send(tweets))
    .catch(next);
});

app.put('/api/v1/tweets/:id', (req, res, next) => {
  Tweet
    .update(req.params.id, req.body)
    .then(tweet => res.send(tweet))
    .catch(next);
});

app.delete('/api/v1/tweets/:id', (req, res, next) => {
  Tweet
    .delete(req.params.id)
    .then(tweet => res.send(tweet))
    .catch(next);
});

module.exports = app;
