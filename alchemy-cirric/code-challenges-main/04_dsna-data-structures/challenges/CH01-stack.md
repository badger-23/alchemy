Stack
---

Stacks are first-in, last-out data structures. Think of them like a stack of rocks, you can only add a rock on top, or take off the top rock. Optionally, you can also "peek" at what the top rock is.

## Challenge

Implement `Stack` as an abstract data type (`class` that has an array property) that exposes:
- `push(item)`
- `pop()` returns item
- `peek()` returns item

Think back to BigO for arrays when you decide where to put the items in the backing data store array

## Test Cases

```js
const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push('llama');
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null
```