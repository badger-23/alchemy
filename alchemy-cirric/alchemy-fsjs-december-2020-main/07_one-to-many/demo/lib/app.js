const express = require('express');
const Car = require('./models/Car');
const app = express();

app.use(express.json());

// endpoint
app.post('/api/v1/cars', (req, res, next) => {
  Car
    .insert(req.body)
    .then(car => res.send(car))
    .catch(next);
});

app.get('/api/v1/cars/:id', (req, res, next) => {
  Car
    .findById(req.params.id)
    .then(car => res.send(car))
    .catch(next);
});

app.get('/api/v1/cars', (req, res, next) => {
  Car
    .find()
    .then(cars => res.send(cars))
    .catch(next);
});

app.put('/api/v1/cars/:id', (req, res, next) => {
  Car
    .update(req.params.id, req.body)
    .then(car => res.send(car))
    .catch(next);
});

app.delete('/api/v1/cars/:id', (req, res, next) => {
  Car
    .delete(req.params.id)
    .then(car => res.send(car))
    .catch(next);
});

module.exports = app;
