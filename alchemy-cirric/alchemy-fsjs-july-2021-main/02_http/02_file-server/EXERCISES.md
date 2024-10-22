# File System Exercises

## Exercise 1

[Example](https://github.com/alchemycodelab/fsjs-be-demos/tree/master/02_node/01_files/exercise-1)

Read from a file and console.log its output.

## Exercise 2

[Example](https://github.com/alchemycodelab/fsjs-be-demos/tree/master/02_node/01_files/exercise-2)

Write to a file and check its output.

# Exercise 3

[Example](https://github.com/alchemycodelab/fsjs-be-demos/tree/master/02_node/01_files/exercise-3)

Copy a file using `fs.readFile` and `fs.writeFile`. **Don't** use `fs.copyFile`.

# Exercise 4

[Example](https://github.com/alchemycodelab/fsjs-be-demos/tree/master/02_node/01_files/exercise-4)

Create a `copy` function that takes `src`, `dest`, and `callback`. Copy the file at
`src` to `dest` and invoke the `callback` with any errors.

**Write a test first**.

* use `beforeEach` to write a new file (this is the file we will copy).
* use `afterEach` to clean up the written file (`fs.unlink`).
* use `afterEach` to clean up the copied file (`fs.unlink`).
* write a test.
  * use `copy` to copy your file
  * in your callback check `err`
  * in your callback read the copied file
  * expect the copied file to equal something

**HINT** these are all async tasks. Use `done` to tell jest when you are done with
your tests
