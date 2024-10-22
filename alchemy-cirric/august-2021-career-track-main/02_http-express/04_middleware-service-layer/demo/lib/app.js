const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   req.on('data', (data) => {
//     req.body = JSON.parse(data.toString());
//     next();
//   });
// });
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hit our first middleware!');
  req.user = { name: 'Dan', role: 'ADMIN' };
  req.iLikeTurtles = 'yes i do';
  next();
});

app.use((req, res, next) => {
  console.log('Hit our second middleware!');
  next();
});

app.use((req, res, next) => {
  console.log('Third time’s a charm');
  console.log('req.iLikeTurtles', req.iLikeTurtles);
  next();
});

app.get('/hello', (req, res, next) => {
  try {
    // throw new Error('Oh no!');
    res.send('Get /hello!');
  } catch (error) {
    next(error);
  }
});

app.get('/:myParam', (req, res) => {
  console.log('req.query', req.query);
  console.log('req.body', req.body);
  console.log('req.params', req.params);
  res.send('Get /:myParam!');
});


app.use(require('./middleware/not-found.js'));
app.use(require('./middleware/error.js'));

module.exports = app;
