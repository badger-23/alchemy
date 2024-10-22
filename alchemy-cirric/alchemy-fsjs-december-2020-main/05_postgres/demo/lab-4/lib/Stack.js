module.exports = class Stack {
  #arr;

  constructor() {
    this.#arr = [];
  }

  push(item) {
    // this.#arr[this.#arr.length] = item;
    this.#arr.push(item);
  }

  pop() {
    // const item = this.#arr[this.#arr.length - 1];
    // this.#arr.length = this.#arr.length - 1;
    // return item;
    return this.#arr.pop();
  }

  peek() {
    return this.#arr[this.#arr.length - 1];
  }
};
