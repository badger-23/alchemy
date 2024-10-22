# Red, Green, Refactor HTTP method

[Get Started](https://github.com/alchemycodelab/red-green-refactor-method-build)

Write a function `getMethod` that takes an HTTP request and returns the method from
the request. For example:

```js
const method = getMethod(`
GET / HTTP/1.1
Host: example.com
Accept-Language: us-en`);

console.log(method); // prints GET
```

```js
const method = getMethod(`
DELETE / HTTP/1.1
Host: example.com
Accept-Language: us-en`);

console.log(method); // prints DELETE
```
