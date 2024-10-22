Digits Root Sum
---

## Challenge

Create a function that takes a number and returns one digit that is the result of summing all the digits of the input number. When the sum of the digits consists of more than one digit, repeat summing until you get one digit.

**Make your function recursive**.

```js
function rootDigit(n) {
```

> **You can assume valid inputs

## Test Cases

Input | Output
---|---
`123` | `6`  _(// 1 + 2 + 3 = 6)_
`4322` | `2`  // 4 + 3 + 2 + 2 = 11  // 1 + 1 = 2
`999888777` | `9` 
