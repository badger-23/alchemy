const express = require('express');
const app = express();
const accountsController = require('./controllers/accounts');

app.use(express.json());

app.use('/api/v1/accounts', accountsController);

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
