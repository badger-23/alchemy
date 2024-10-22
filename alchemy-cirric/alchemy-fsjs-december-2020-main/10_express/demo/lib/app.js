const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1/espionages', require('./controllers/espionages'));
// app.post('/api/v1/espionages', (req, res, next) => {
//   Espionage
//     .insert({ ...req.body, complete: false })
//     .then(espionage => res.send(espionage))
//     .catch(next);
// });

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
