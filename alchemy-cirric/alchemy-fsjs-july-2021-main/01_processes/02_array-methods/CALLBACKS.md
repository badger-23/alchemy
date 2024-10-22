# Callbacks

Callbacks are functions that get passed into other functions:

```javascript
const myFunc = () => console.log("hello")
const otherFunc = (func) => {
  func() // "func" is our callback, and the parenthesis means we're calling/invoking/running it.
};

otherFunc(myFunc) // logs "hello" to the console
```

You can even pass arguments into your callback function:

```javascript
const sayHello = (name) => console.log(`Hello, ${name}!`)
const greet = (person, greeting) => {
  // "greeting" here is a booger; it represents our callback function.
  // "person" is another booger; it represents what we want to pass into our callback.
  greeting(person);
};

greet("world", sayHello); // calls `sayHello("world")`, which prints "Hello, world!" to the console
```
