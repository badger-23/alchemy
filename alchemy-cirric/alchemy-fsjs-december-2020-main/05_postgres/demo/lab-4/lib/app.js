const express = require('express');
const { lint } = require('./utils');
const app = express();

app.use(express.json());

app.post('/lint', (req, res) => {
  const { code } = req.body;
  res.send(lint(code));
});

module.exports = app;
