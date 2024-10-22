const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.json());

// app.use((req, res, next) => {
//   let body = '';
//   req.on('data', chunk => {
//     body += chunk.toString();
//   });

//   req.on('end', () => {
//     req.body = JSON.parse(body);
//     next();
//   });
// });

// POST -> Create
app.post('/api/v1/dogs', (req, res) => {
  console.log(req.body);
  res.send('hi');
});

app.get('/api/:version/dogs/:id', (req, res, next) => {
  const err = new Error('Oops');
  err.status = 503;
  next(err)
});

app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: 404,
    error: 'Not Found'
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status);
  res.send({
    status: err.status,
    error: err.message
  })
});


app.listen(7890);
