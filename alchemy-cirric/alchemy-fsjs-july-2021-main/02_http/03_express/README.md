# Express

Express.js gives us a way to quickly build a backend for our web apps. It simplifies some of the behaviors around routing, handling requests, responses, errors, serving files, and more. It does this by using middleware, which are functions that are executed during the request-response cycle. These functions have access to both the request (`req`) and the response (`res`) objects.

Each request will be routed through the middleware functions you write for your app from top to bottom. If a middleware sends a response, the request-response cycle is completed and any middleware that you defined after the one that sent the response will not be invoked.

## Understanding Middleware

When thinking about middleware, it's helpful to look at an example of a request-response cycle.

Let's say we have an Express app hosted at `example.com`. In the `app.js` file, we have the following lines:

```javascript
// app.js
const path = require('path');
const express = require('express');
const app = express();

app.use(require('./middleware/logger'));

app.use('/api/v1/orders', require('./controllers/orders.js'));

app.get('/', async (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
```

In another file, we have a logging middleware:

```javascript
// ./middleware/logger.js
module.exports = (req, res, next) => {
  console.log(req.method, req.originalUrl);
  next();
};
```

When a user accesses our app, they are initiating the request-response cycle.

1. User enters `example.com` into their browser address bar and hits Enter
2. The request is routed to our app (via DNS)
3. Our app receives the request, then starts by calling the first app-level middleware we've defined:
   ```javascript
   app.use(require('./middleware/logger'));
   ```
   Looking at `./middleware/logger.js`, we see a function that logs the request method and `originalUrl` (a property Express adds to our request object to give us the original request URL) to our server console, then calls `next()`
4. Once our logging middleware calls `next()`, Express sends the request to the next middleware we defined:
   ```javascript
   app.use('/api/v1/orders', require('./controllers/orders.js'));
   ```
   Because we specified a path as the first parameter to `app.use`, Express will check the request path ('/' in the case of `example.com`) before invoking the middleware we imported (via `require`). Because `/` does not match `/api/v1/orders`, Express skips this middleware and continues on.
5. The request then goes to the next middleware:

   ```javascript
   app.get('/', async (req, res, next) => {
     res.sendFile(path.join(__dirname, '../public', 'index.html'));
   });
   ```

   For the request to `example.com`, the path is `/` (aka the root). Since this path matches the path we specified as the first parameter to `app.get`, and because the request being made is a `GET` request, we get a match! Express then invokes the function we passed as the second parameter to `app.get`.

   In this function, we tell Express to send the file located at `../public/index.html` (using Node's `path.join` function to get the file path) to the user. Notice how `sendFile` exists on the response (`res`) object — in this case, it means we're _sending_ a response, which ends the request-response cycle.

6. Because we had a matching route that sent a response and ended our request-response cycle, the following middleware functions were **not** called:
   ```javascript
   app.use(require('./middleware/not-found'));
   app.use(require('./middleware/error'));
   ```
