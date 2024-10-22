const express = require('express');
const Toy = require('./models/Toy');
const app = express();

app.use(express.json());

// CRUD route
app.post('/api/v1/toys', (req, res, next) => {
  Toy
    .insert(req.body)
    .then(toy => res.send(toy))
    .catch(next);
});

app.get('/api/v1/toys/:id', (req, res, next) => {
  Toy
    .findById(req.params.id)
    .then(toy => res.send(toy))
    .catch(next);
});

app.put('/api/v1/toys/:id', (req, res, next) => {
  Toy
    .update(req.params.id, req.body)
    .then(toy => res.send(toy))
    .catch(next);
});

module.exports = app;
