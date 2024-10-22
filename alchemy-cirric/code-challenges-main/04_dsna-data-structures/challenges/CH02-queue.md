Queue
---

Queues are first-in, first-out data structures. Think of them like a line of people waiting for the bank teller.

Each new person joins the end of the line, and the bank teller helps the first person in line. Optionally, you can also check "has next" to know if someone else is waiting in line.

## Challenge

Implement `Queue` as an abstract data type (`class` that has an array property) that exposes:
- `enqueue()` take an item
- `dequeue()` return an item
- `hasNext()` return true or false

## Stretch Challenge After Solving

Most likely, the time complexity of your enqueue is `O(1)` but dequeue is `O(n)`. Can you make it so both operations are `O(1)`? _Hint: the people in line can't shift (take a step forward), can you move the front of the line?_

What is the trade-off of this approach?

## Test Cases

```js
const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null
```