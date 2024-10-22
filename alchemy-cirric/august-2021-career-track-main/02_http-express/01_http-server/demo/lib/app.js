const dogsRouter = require('./dogs');

const routes = {
  dogs: dogsRouter,
};

const app = async (req, res) => {
  // req.url = '/dogs'
  // req.url.split('/') = ['', 'dogs']
  // const [, resource] = ['', 'dogs']
  // resource === 'dogs'
  // routes[resource] === routes['dogs'] === routes.dogs
  const [, resource] = req.url.split('/');
  const route = routes[resource];

  if (route) {
    // req.method === 'POST'
    // route[req.method.toLowerCase()] === route['post'] === route.post
    try {
      const routeHandlerFn = route[req.method.toLowerCase()];
      await routeHandlerFn(req, res);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
};

module.exports = app;
