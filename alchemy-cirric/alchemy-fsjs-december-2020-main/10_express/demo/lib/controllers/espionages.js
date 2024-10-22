const { Router } = require('express');
const Espionage = require('../models/Espionage');
const EspionageService = require('../services/EspionageService');

module.exports = Router()
  .post('/', (req, res, next) => {
    EspionageService
      .start(req.body)
      .then(espionage => res.send(espionage))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Espionage
      .findById(req.params.id)
      .then(espionage => res.send(espionage))
      .catch(next);
  })

  .post('/update', (req, res, next) => {
    EspionageService
      .complete(req.body)
      .then(espionage => res.send(espionage))
      .catch(next);
  });
