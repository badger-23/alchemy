Implement `map`
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

Write a function `map` that takes an array and a callback function:
- it returns a _new_ array
- it calls the callback function with each element of the passed array and puts the return value in the new array at the same index

```js
function map(arr, callback) {
```

> **You can assume valid inputs**

## Test Cases

Input | Output
---|---
`map([1, 6, 5], n => n**2)` | `[1, 36, 25]`