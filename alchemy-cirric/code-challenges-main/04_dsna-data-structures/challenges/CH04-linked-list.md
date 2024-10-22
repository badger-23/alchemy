Linked List
---

A LinkedList is a linear data structure, however elements are not stored in contiguous locations like arrays, they are linked with each other using pointers. Each element of the LinkedList has the reference(address/pointer) to the next element of the LinkedList.

## Challenge

Implement `LinkedListNode` as a data structure (a `class`) that has:
- `value` property represented by this node. It should be initialized via the constructor
- `next` property (`null` if empty) that points to the next node
- `add()` method that takes a `node`. If that LinkedListNode already has `next`, it should use recursion to delegate to that node's `add()` method.
- `getList()` method that returns a string with values in order. Should use recursion to delegate.
- STRETCH: `remove()` method takes an integer index and removes that node from the list. Should use recursion to delegate. HINT: Because nodes do not have references to their parent, you will need use the return of the `remove` method to pass the new "next" back up the chain. Remember to count down to avoid adding another parameter

## Test Cases

```js
const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'
root.remove(1);
console.log(root.getList()); // 'A C D E'
```