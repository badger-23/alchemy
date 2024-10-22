# Array Method Exercises

## Exercise 1

Fix the code [here](https://repl.it/@opes/fix-map).

It should `console.log` an array of lowercase names.

## Exercise 2

Fix the code [here](https://repl.it/@opes/fix-filter).

It should `console.log` an array of names that **START WITH** `c`.
See [startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith).

## Exercise 3

Fix the code [here](https://repl.it/@opes/fix-reduce).

It should take the length of each name and count the number of times
that length is found.

```js
{ '4': 2, '5': 5, '6': 7, '7': 3, '8': 1, '9': 2 }
```

## Exercise 4

Write a function that takes numbers (use rest parameters) and return the
sum of the numbers.

## Exercise 5

Write a function that takes an array of numbers and returns an array of only
the even numbers.

## Exercise 6

Write a function that takes an array of numbers and returns the first even number.

## Exercise 7

Write a function that takes an array of numbers and returns true if all numbers
are even, otherwise false.

## Exercise 8

Write a function that takes an array of numbers and returns the sum of all even
numbers.

## Exercise 9

Write a function `numberManipulator` that takes a number `n` and a function `callback`.
Manipulate the `n` by passing it to `callback`. Return the result.

```js
numberManipulator(5, n => n * 2);
// 10
```

OR

```js
const double = n => n * 2;
numberManipulator(5, double);
```

## Exercise 10

Write a function `repeater` that takes a number `repeat` and a function `callback`.
Invoke the callback `repeat` times.

For example, to print "hi" five times we could:

```js
repeater(5, () => console.log('hi'))
```
