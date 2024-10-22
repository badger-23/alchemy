Fibonacci
---

## Challenge

The Fibonacci sequence is a classic use case for recursive functions since the value of the sequence at a given index is dependent on the last two values. More precisely, it's dependent on the sum of the previous two values.

The sequence itself is creating by summing the prior two numbers:

```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

This can be expressed in the following way:

```
F(0) = 0
F(1) = 1
...
F(n) = F(n-2) + F(n-1)
```

Write a function named fib that takes an integer `n` as its input. It should return the Fibonacci sequence's value at index `n`.

- Assume `n` will always be a non-negative integer.
- Assume the Fibonacci sequence's first two values (at indices `0` and `1`) are `0` and `1`.
- You must make fib a recursive function.

```js
function fib(n) {
```

> **You can assume valid inputs

## Test Cases

Examples

```
fib(0) ➞ 0  // 0
fib(1) ➞ 1  // 0, 1
fib(2) ➞ 1  // 0, 1, 1
fib(6) ➞ 8  // 0, 1, 1, 2, 3, 5, 8
fib(8) ➞ 21 // 0, 1, 1, 2, 3, 5, 8, 13, 21
```