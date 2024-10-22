Reverse array with Stack
---

## Challenge

Write a function that takes a string of code and uses a `Stack` for determining if parenthesis and curly braces are properly matched. Return `true` if correctly formatted, otherwise `false`

## Test Cases

Input | Output
---|---
`if(true) { return; }` | `true` 
`if(true( { return; }` | `false` 
`if(true) { return;` | `false` 
`(if(true) { return; }` | `false` 
`( true && { name: 'foo' } )` | `true` 
`( true && { name: 'foo' ) )` | `false` 
`( true && ( name: 'foo' } )` | `false` 
`((2 + 3) * (4 + 11 * (2 - 1)))` | `true`
`((2 + 3) * (4 + 11 * 2 - 1)))` | `false`
`((2 + 3) * (4 + 11 * (2 - 1))` | `false`