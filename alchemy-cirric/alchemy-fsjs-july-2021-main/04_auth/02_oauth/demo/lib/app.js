const express = require('express');
// const cookieParser = require('cookie-parser');
const app = express();

app.use(express.static(`${__dirname}/../public`));

app.use(express.json());
app.use(require('cookie-parser')());
// app.use(cookieParser())

app.use('/api/v1/auth', require('./controllers/auth'));
app.use('/api/v1/tweets', require('./controllers/tweets'));
app.use('/api/v1/users', require('./controllers/users'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
