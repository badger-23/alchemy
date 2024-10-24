const express = require('express');
const app = express();

app.use(require('cors')({
  origin: true,
  credentials: true
}));

app.use(express.json());
app.use(require('cookie-parser')());

app.use('/api/v1/auth', require('./controllers/auth'));
app.use('/api/v1/videos', require('./controllers/videos'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
