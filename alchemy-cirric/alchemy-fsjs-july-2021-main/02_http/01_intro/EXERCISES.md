# Net Exercises

## Exercise 1

[Example](https://github.com/alchemycodelab/fsjs-be-demos/tree/master/02_node/03_net/exercise-2)

Create a `client.js` and a `server.js` echo connection

Server:
* Whenever a new client connects to your server send the client a message 'I will echo!'.
* Whenever you receive data from a client write back with the same data.

Client:
* When you connect to a server send the server a message 'Hello!'.
* Whenever you receive data from a server `console.log`
* every 1 second send the server the current time

## Exercise 2

Create an HTTP server while using only the `net` library. The HTTP server should
send back different information depending on the incoming request.

* if the incoming request is a `GET` request to `/greet` send back plain text saying `hi`
* if the incoming request is a `GET` request to `/dog` send back HTML with a dog
* if the incoming request is a `GET` request to `/dog.json` send back a JSON dog
