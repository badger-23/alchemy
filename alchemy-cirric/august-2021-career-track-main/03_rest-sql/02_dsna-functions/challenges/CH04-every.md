Implement `every`
---

## Rules

You can only use the following operations on the array:

Property | Example
---|---
Read element by index | `const number = arr[i]`
Set element by index | `arr[i] = arr[i + 1]`
Read array length | `for(let i = 0; i < arr.length; i++) {`
Set array length | `arr.length = arr.length - 1`

## Challenge

Write a function `every` that takes an array and a predicate callback function, calling it for each item in the array:
1. If the callback function returns `false`, the `every` call can short-circuit and return `false`
1. If every callback function returns `true`, the `every` function returns `true`

```js
function every(arr, predicate) {
```

> **You can assume valid inputs**

## Test Cases

Input | Output
---|---
`every([2, 4, 6], n => n % 2 === 0)` | `true`
`every([1, 2, 3], n => n % 2 === 0)` | `false`