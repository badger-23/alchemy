const { Router } = require('express');
const Espionage = require('../models/Espionage');

module.exports = Router()
  .get('/', (req, res, next) => {
    res.render('home');
  })
  
  .get('/list', async(req, res, next) => {
    const espionages = await Espionage.find();

    res.render('list', {
      espionages
    });
  })

  .get('/details/:id', async(req, res, next) => {
    const espionage = await Espionage.findById(req.params.id);

    res.render('details', {
      espionage
    });
  });
