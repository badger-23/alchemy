# Promises

## Sandbox

### Read a file

* require `const fsPromises = require('fs').promises;`
* use `fsPromises.readFile` to read a file
* `then` `console.log` the file

### Write a file

* require `const fsPromises = require('fs').promises;`
* use `fsPromises.writeFile` to write a file
* `then` `console.log` "DONE!"

### Copy a file

* require `const fsPromises = require('fs').promises;`
* use `fsPromises.readFile` to read a file
* `then` use `fsPromises.writeFile` to write the read data
* `then` `console.log` "DONE!"

## Copy a file

* create and export a `copy(src, dst)` function
  * require `const fsPromises = require('fs').promises;`
  * use `fsPromises.readFile` to read a file
  * `then` use `fsPromises.writeFile` to write the read data
  * return the promise
* test
  * test your copy function
  * invoke your copy function
  * `then` expect that the new file exists
  * make sure to clean up copied files in an `afterAll` or `afterEach`

## Transformer

* create and export a `transform(src)` function
  * require `const fsPromises = require('fs').promises;`
  * use `fsPromises.readFile` to read a file
  * `then` remove all capital letters
  * `then` make all letters capital
  * `then` reverse the string
* test
  * invoke your transform function
  * `then` expect that the result is what you think it should be

## Sandbox

### node-fetch

Use the Futurama Quote API [http://futuramaapi.herokuapp.com](http://futuramaapi.herokuapp.com)

* use `fetch` to make a request to http://futuramaapi.herokuapp.com/api/quotes/1
* use `then` to wait for the request to resolve and parse json
* `then` print the output
* How would you get more than 1 quote?
* How would you get only quotes by Bender?

### node-fetch Again

* use `fetch` to make a request to https://rickandmortyapi.com/api/character/
* use `then` to wait for the request to resolve and parse json
* `then` print the output

### Promise.all

* use `fetch` to make a request to https://rickandmortyapi.com/api/character/
* use `then` to wait for the request to resolve and parse json
* `then` make another request to retrieve the origin of each character
  * HINT: use `Promise.all`

## write a service

* write a `rickAndMortyApi.js` and `rickAndMortyApi.test.js` file
* export a function `getCharacter` that takes an id and returns a promise that resolves to a character
  * return only the characters name, status, and species
* **WRITE YOUR TESTS FIRST**

## write a service async/await

* refactor your `getCharacter` function to use async/await
* your tests should still pass without any edits

## write a get many service

* export a function `getManyCharacters` that takes an array of ids and returns a promise that resolves
  with an array of characters
  * use your `getCharacter` function from before with a `Promise.all`
* **WRITE YOUR TESTS FIRST**

## write a get many service with async/await

* refactor your `getManyCharacters` function to use async/await
* your tests should still pass without any edits

## Rubric

* 2 points for `copy` function
* 2 point for `transform`
* 2 points for `getCharacter` function
* 3 points for `getManyCharacters` function
* 1 point for mocks
