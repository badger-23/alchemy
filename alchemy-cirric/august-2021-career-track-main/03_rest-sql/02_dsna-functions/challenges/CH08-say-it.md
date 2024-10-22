Implement `sayIt`
---

## Challenge

Write a chainable function that accepts on word per function call, but when called without arguments, 
will report back all the previously passed words in order.

```js
const result = sayIt('hello')('my')('name')('is')('JavaScript')();

console.log(result);
// "hello my name is JavaScript"
```

Each call returns a function that can be called, same as:

```js
const result1 = sayIt('hello')
const result2 = result1('my');
const result3 = result2('name');
const result4 = result3('is')
const result5 = result4('JavaScript')
const result = result5();

console.log(result);
// "hello my name is JavaScript"
```