# Red, Green, Refactor HTTP method

[Get Started](https://classroom.github.com/a/jHqjZX6E)

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
