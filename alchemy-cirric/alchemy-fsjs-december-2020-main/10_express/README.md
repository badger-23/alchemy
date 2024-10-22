# Express Routing

## Agenda

* REST
* express http methods
* express pathing
* express pathing with params
* express router
* express response methods
* express body parser
* express middleware

## Test Pyramid

Server Testing crosses boundaries:

* Units: Server Internal Functions
  * Mock any integrations (like data fetching)
* Integration: How it connects to other services
  * Really connect to other services (hard dependencies)
* Acceptance
  * The server might be a dependency of some other test

## REST

Representational State Transfer (REST) is a software architecture
that puts constraints on our web applications. It gives us a style
to follow while constructing our APIs.

1. separate client and server
1. stateless
1. cacheable
1. uniform interface
1. layered system

* `POST /<resource>`
  * create a new resource
* `GET /<resource>`
  * get a list of resource
* `GET /<resource>/:id`
  * get a resource by id
* `PUT /<resource>/:id`
  * update a resource by id
* `PATCH /<resource>/:id`
 * partially update a resource by id
* `DELETE /<resource>/:id`
  * delete a resource by id

## Express Methods

Different HTTP methods can be handled by express.

```js
app.post('/my/path', (req, res) => {});
app.get('/my/path', (req, res) => {});
app.put('/my/path', (req, res) => {});
app.patch('/my/path', (req, res) => {});
app.delete('/my/path', (req, res) => {});
```

## Express Pathing

```js
app.get('/my/path', (req, res) => {});
app.put('/my/other/path', (req, res) => {});
```

## Express Pathing with Params

```js
app.get('/my/:path', (req, res) => {
  res.end(req.params.path)
});

app.put('/my/:other/path', (req, res) => {
  res.end(req.params.other)
});
```

## Express Router

```js
const { Router } = require('express');

module.exports = Router()
  .post('/my/path', (req, res) => {})
  .get('/my/path', (req, res) => {});
```

## Express Response Methods

res.send({ name: 'ryan' })

method        | description
------------- | -----------
`res.end`     | end the response with text
`res.json`    | end the response and send json
`res.send`    | end the response and automatically figure out the type

## Express Body Parser

```js
const express = require('express');
const app = express();

// parse incoming request data as JSON
app.use(express.json());
```

## What is middleware?

Middleware is a function that is invoked between an incoming
request and an outgoing response.

## Writing middleware

Middleware always has the same signature:

```js
const myMiddleware = (req, res, next) => {};
```

Above `req` is the request object, `res` is the response object,
and `next` is a function that you invoke when your middleware is
done. `next` will then pass execution onto the next middleware.

## Using Middleware

Middleware is added with `.use`.

```js
app.use(myMiddleware);
```

You can also add middleware to specific paths:

```js
app.use('/my/path', myMiddleware);
```

Specific routes:

```js
app.use('/api/v1/resource', myMiddleware, resourceRoutes);
```

Specific methods:;

```js
module.exports = Router()
  .post('/', myMiddleware, (req, res) => {});
```

## Error Middleware

Error middleware is always the last middleware that
your express application adds.

Error middleware has the following signature:

```js
module.exports = (err, req, res, next) => {

};
```

The error middleware will be hit whenever one of your
routes throws an error. Additionally, the error middleware
is hit if you pass the `next` function any arguments.
