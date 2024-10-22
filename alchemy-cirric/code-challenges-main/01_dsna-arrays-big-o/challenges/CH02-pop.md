Implement `pop`
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

Write a function `pop` that takes an array, and:
1. Removes the last item from the array 
1. (and truncates the array!)
1. Returns the removed item

```js
function pop(arr) {
```

> **You can assume valid inputs**

## Test Cases

Input | Output | Mutations
---|---:|---
`['a', 'b', 'c']` | `'c'` | `['a', 'b']` (length is 2!)