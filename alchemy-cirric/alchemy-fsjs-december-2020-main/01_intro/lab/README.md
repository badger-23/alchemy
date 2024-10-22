# Destructuring Lab

[Get Started](https://classroom.github.com/a/WH07vTu-)

In this lab you will work through a series of exercises to highlight some
destructuring features.

## Exercises

Each exercise has a few comments which ask you to create some `const`s.

```js
const color = {
  name: 'red',
  hex: '#FF0000'
}
/* 
set const to retrieve color's name:
  nameWithDotNotation: use dot notation
  nameWithBracketNotation: use bracket notation
  name: use destructuring 
*/

module.exports = {
  nameWithDotNotation,
  nameWithBracketNotation,
  name
};
```

In the previous example you will create three `const`s. One for `nameWithDotNotation`,
`nameWithBracketNotation`, and `name`. Resulting in:

```js
const color = {
  name: 'red',
  hex: '#FF0000'
}
/* 
set const to retrieve color's name:
  nameWithDotNotation: use dot notation
  nameWithBracketNotation: use bracket notation
  name: use destructuring 
*/

const nameWithDotNotation = color.name;
const nameWithBracketNotation = color['name'];
const { name } = color;

module.exports = {
  nameWithDotNotation,
  nameWithBracketNotation,
  name
};
```

## Rubric

* 2 points per exercise
