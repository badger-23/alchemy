import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import fs from 'fs';

const fsPromises = fs.promises;

const app = express();

app.use(express.json());

app.get('/index.html', async (req, res, next) => {
  const contents = await fsPromises.readFile(`${__dirname}/../public/index.html`, 'utf-8')
  res.send(contents);
})

export default app;

// express.json() does something like this:
// app.use((req, res, next) => {
//   req.on('data', (data) => {
//     req.body = JSON.parse(data.toString());
//     console.log('Hit first middleware');
//     next();
//   });
// });

// 

// DSL - Domain Specific Language
// method === 'GET' && path === '/'
// app.post('/:myParam/:anotherParam', (req, res) => {
//   console.log('req.params', req.params);
//   console.log('req.body', req.body);
//   console.log('req.query', req.query);
//   // req & res come from node (http module)

//   // res.send will figure out the Content-Type for us
//   res.send('hi');

//   // Content-Type: application/json
//   // res.json({ name: 'Ruby' });

//   // // Send a file to the client
//   // res.sendFile('./public/index.html');

//   // res.contentType('html');
//   // res.setHeader('Date', '2021-07-28');
//   // res.status(500);
// });

app.use((req, res, next) => {
//   console.log('Hit middleware 1');
//   req.isLoggedIn = false;
//   next(); // err
// });

// app.use((req, res, next) => {
//   console.log('Hit middleware 2');
//   console.log('req.isLoggedIn: ', req.isLoggedIn);
//   next();
// });

// app.get('/', async (req, res, next) => {
//   try {
//     // const character = await Character.find('something')
//     console.log(`req.isLoggedIn from app.get('/'): ${req.isLoggedIn}`);
//     res.send('Hello!');
//   } catch (err) {
//     next(err);
//   }
// });

// // app.use(notFoundMiddleware);
// // app.use(errorMiddleware);

// // app.use((err, req, res, next) => {
// //   console.log('first error handler middleware');
// //   next(err);
// // });

// app.use((err, req, res, next) => {
//   console.log('second error:', err);
//   res.status(500).send(`An error occurred: ${err}`);
// });
