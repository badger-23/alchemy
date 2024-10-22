Implement `findIndex`
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

Write a function `findIndex` that takes an array and an item and:
1. Returns the index of the item
1. Return -1 if the item does not exist

**HINT:** You can exit the function once you locate the index!

```js
function findIndex(arr, item) {
```

> **You can assume valid inputs**

## Test Cases

Input | Output
---|---:
`[9, 8, 3], 3` | `2`
`[1, 2, 3], 4` | `-1`