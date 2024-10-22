Implement `shift`
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

Write a function `shift` that takes an array, and:
1. Removes the first item from the array 
1. Adjusts ("shifts") the items in the array so there is a new "first" item
1. Truncates the array! (length is one less)
1. Returns the removed item

```js
function shift(arr) {
```

> **You can assume valid inputs**

## Test Cases

Input | Output | Mutations
---|---:|---
`['a', 'b', 'c']` | `'a'` | `['b', 'c']` (length is 2!)