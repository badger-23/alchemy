Implement `some`
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

Write a function `some` that takes an array and a predicate callback function, calling it for each item in the array:
1. If the callback function returns `true`, the `some` call can short-circuit and return `true`
1. If every callback function returns `false`, the `some` function returns `false`

```js
function some(arr, predicate) {
```

> **You can assume valid inputs**

## Test Cases

Input | Output
---|---
`some([1, 6, 5], n => n % 2 === 0)` | `true`
`some([1, 7, 3], n => n % 2 === 0)` | `false`