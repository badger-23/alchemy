const net = require('net');

const server = net.createServer(socket => {
  // whenever a client connects
  console.log('New client connected!');

  socket.on('data', data => {
    console.log(data.toString());

    socket.end(`
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 25 Jun 2019 15:57:17 GMT
Accept-Ranges: bytes
Content-Length: ${'{"name":"spot","age":5,"weight":"20 lbs"}'.length}
Content-Type: application/json

{"name":"spot","age":5,"weight":"20 lbs"}
    `.trim())
  });
});

module.exports = server;
