# Queue with LinkedList

Make a queue class that internal uses a linked list to manage items.

A queue is a data structure where each item is ordered with First In First Out (FIFO).

* private property list
* instance method enqueue - adds an item to the end of the list
* instance method dequeue - remove and return an item from the beginning of the list

```js
const queue = new Queue();

queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(queue.dequeue()) // prints 4
console.log(queue.dequeue()) // prints 5
console.log(queue.dequeue()) // prints 6
```
