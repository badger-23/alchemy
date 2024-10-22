# Red, Green, Refactor Lab

## getName function

create a function that returns the name property of an object.

```js
const spot = { name: 'spot', age: 5, weight: '20 lbs' }
getName(spot) // returns spot

const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
getName(character) // returns Aang
```

1. **Write a test and commit**
1. create your function, use bracket notation to get the objects name property
1. pass tests and commit
1. refactor, use dot notation to get the objects name
1. tests stay green, commit
1. refactor, destructure to get the objects name
1. tests stay green, commit
1. refactor, destructure function parameters and return name
1. tests stay green, commit

## copyAndPush function

create a function that returns a new array with all the items in the original array
and a new item pushed to the end.

```js
const numbers = [1, 2, 3];
copyAndPush(numbers, 4) // return [1, 2, 3, 4];
```

1. **Write a test and commit**
1. create your function, use `push` to add item to array and return array
1. green, commit
1. oops we were supposed to return a copy
1. add another test that makes sure that the original array is unchanged
1. update code, use spread to copy and append
1. green, commit

## capitalizeAndFilter

create a function that takes an array of strings capitalize all strings and filter
out any string that starts with the letter F/f.

1. **Write a test and commit**
1. create a function, use a for loop to get test to pass
1. green, commit
1. refactor, use array methods to instead of a for loop

## fetchQuotes

Use the Futurama Quote API [http://futuramaapi.herokuapp.com](http://futuramaapi.herokuapp.com)
to return a single quote with the format:

```js
{
  name: '...',
  text: '...',
  image: '...'
}
```

How do you handle the randomness? Check out:

* [expect any](https://jestjs.io/docs/en/expect#expectanyconstructor)

## BONUS: Mocks

* use `jest.mock` to mock `cross-fetch` see [Mocking Modules](https://jestjs.io/docs/en/mock-functions#mocking-modules)

## Rubric

* 2 points for `getName` function
* 2 point for `copyAndPush`
* 2 points for `capitalizeAndFilter` function
* 3 points for `fetchQuotes` function
* 1 point for commit history
