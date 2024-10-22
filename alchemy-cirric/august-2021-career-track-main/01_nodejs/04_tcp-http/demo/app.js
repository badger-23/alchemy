const net = require('net');

// button.onClick((event) => ...)
// server.createServer((client) => ...)
const app = net.createServer((connectedClient) => {
  console.log('Client connected');

  connectedClient.on('data', (data) => {
    const rawRequest = data.toString();
    const parsedRequest = rawRequest.split('\r\n');
    const [method, path] = parsedRequest[0].split(' ');

    // app.get('/greet', (req, res, next) => {})
    if (method === 'GET' && path === '/greet') {
      // Send a response
      connectedClient.write(`HTTP/1.1 200 OK\r
Content-Type: text/plain\r
Content-Length: 2\r
\r
hi
`);
    } else if (method === 'GET' && path === '/dog') {
      connectedClient.write(`HTTP/1.1 200 OK\r
Content-Type: text/html\r
\r
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dog!</title>
</head>
<body>
  <img src="https://danminkevitch.com/ruby.jpg" alt="Ruby!" />
</body>
</html>
`);
    } else if (method === 'GET' && path === '/dog.json') {
      connectedClient.write(`HTTP/1.1 200 OK\r
Content-Type: application/json\r
\r
{ "name": "ruby", "age": 11, "weight": "11 lbs" }`);
    } else {
      connectedClient.write(`HTTP/1.1 404 NOT FOUND\r
Content-Type: text/plain\r
\r
Not found :(`);
    }

    connectedClient.end();
  });
});

module.exports = app;
