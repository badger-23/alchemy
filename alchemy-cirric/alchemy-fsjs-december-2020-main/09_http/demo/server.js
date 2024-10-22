const server = require('./lib/app');

server.listen(7890, () => {
  console.log('Server listening on 7890');
});
