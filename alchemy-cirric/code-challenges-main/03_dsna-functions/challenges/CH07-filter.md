Implement `filter`
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

Write a function `filter` that takes an array and a predicate callback function:
- it returns a _new_ array
- it calls the callback function with each element of the passed array and conditionally adds the item to the new array if the predicate function returns a truthy value

```js
function filter(arr, predicate) {
```

> **You can assume valid inputs**

## Test Cases

Input | Output
---|---
`filter([2, 6, 5], n => n % 2 === 0` | `[2, 6]`