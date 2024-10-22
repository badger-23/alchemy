import net from 'net';

const server = net.createServer((connectedClient) => {
  console.log('Client connected!');

  connectedClient.on('data', (data) => {
    const rawRequest = data.toString();
    const parsedRequest = rawRequest.split('\r\n');
    const [method, path] = parsedRequest[0].split(' ');

    // app.get('/greet', (req, res, next) => {})
    if (method === 'GET' && path === '/greet') {
      connectedClient.write(`HTTP/1.1 200 OK\r
Content-Type: text/plain\r
\r
hi`);
    } else if (method === 'GET' && path === '/dog') {
      connectedClient.write(`HTTP/1.1 200 OK\r
Content-Type: text/html\r
\r
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <img alt="Ruby!" src="https://danminkevitch.com/ruby.jpg" />
</body>
</html>`);
    } else if (method === 'GET' && path === '/dog.json') {
      connectedClient.write(`HTTP/1.1 200 OK\r
Content-Type: application/json\r
\r
{"name":"Ruby","age":10}`);
    } else {
      connectedClient.write(`HTTP/1.1 404 NOT FOUND\r
Content-Type: text/plain\r
\r
Not found :(
`);
    }

    connectedClient.end();
  });
});

export default server;
