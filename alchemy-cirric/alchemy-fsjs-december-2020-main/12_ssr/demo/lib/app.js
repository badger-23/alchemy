const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', `${__dirname}/../views`);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./controllers/pages'));
app.use('/api/v1/espionages', require('./controllers/espionages'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
