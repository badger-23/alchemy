Implement a better `hasDuplicates`
---

## Rules

No use of `Set` or `Map` built-in classes.

Ensure that it performs in `O(n * logn)` time

## Challenge

Write a function `hasDuplicates` that takes an array, and:
1. Returns `true` if the array contains any duplicates
1. Returns `false` if there are no duplicates in the array

```js
function hasDuplicates(arr) {
```

> **You can assume valid inputs**

## Test Cases

Input | Output
---|---:
`['j', 'o', 'w', 'w']` | `true`
`['m', 'b', 'p', 'x']` | `false`