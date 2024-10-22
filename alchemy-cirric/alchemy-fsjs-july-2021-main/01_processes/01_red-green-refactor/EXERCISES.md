# Red, Green, Refactor Exercises

## Exercise 1 - Convert hex colors to RGB

Create a function `hexToRGB` that converts a hex color to its RGB equivalent following
the red, green, refactor development process.

1. **Think** about what you want to happen?
2. **Red** create a test for that behavior
3. **Green** write code to make the test pass
4. **Refactor** improve the code

```js
const red = hexToRGB('FF0000');
console.log(red); // prints { red: 255, green: 0, blue: 0 }
```

## Exercise 2 - Converts RGB to hex

Create a function `rgbToHex` that converts a hex color to its RGB equivalent following
the red, green, refactor development process.

1. **Think** about what you want to happen?
2. **Red** create a test for that behavior
3. **Green** write code to make the test pass
4. **Refactor** improve the code

```js
const red = rgbToHex({ r: 255, g: 0, b: 0 });
console.log(red); // prints #FF0000
```

## Exercise 3 - fetch a list of characters

Fetch a list of characters from a web API using the `node-fetch` package.

What happens if the API is down? Will our test fail? Should our test fail?
