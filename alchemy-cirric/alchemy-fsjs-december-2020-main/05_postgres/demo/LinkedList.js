class Node {
  data;
  next;

  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head;

  constructor() {
    this.head = null;
  }

  insertStart(data) {
    if(!this.head) this.head = new Node(data);
    else {
      const node = new Node(data, this.head);
      this.head = node;
    }
  }

  insertAfter(node) {

  }

  remove(node) {

  }
}
