const { Router } = require('express');
const AccountService = require('../services/AccountService');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const result = await AccountService.createAccount(req.body);

    res.send(result);
  } catch(error) {
    next(error);
  }
});
