# Promises & Async Exercises

## Exercise 1

Create a function that copies a file

## Exercise 2

Create a function that copies a folder

## Exercise 3

Create a `SecretKeeper` class that stores secrets into files in a specified directory.

**Write a test first**.

- use `beforeEach` to clean up files & folders (the ones that were copied).
- write a test.
  - use `copy` to copy your file/folder
  - in your callback check `err`
  - in your callback read the copied file
  - expect the copied file to equal something

**HINT** these are all async tasks. Use `done` to tell jest when you are done with
your tests
