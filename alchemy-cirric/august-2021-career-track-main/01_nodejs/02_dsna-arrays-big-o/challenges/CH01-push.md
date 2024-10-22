Implement `push`
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

Write a function `push` that takes an array and a new item, and:
1. Adds the item at the end of the array
1. Returns the new length of the array

```js
function push(arr, item) {
```

> **You can assume valid inputs**

## Test Cases

Input | Output | Mutations
---|---:|---
`['a', 'b', 'c'], 'd'` | `4` | `['a', 'b', 'c', 'd']`