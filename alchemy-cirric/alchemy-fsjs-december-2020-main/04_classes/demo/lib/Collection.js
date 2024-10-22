// cards, colors, POGs...
class Collection {
  // private
  #collection;

  constructor() {
    this.#collection = [];
  }

  add(item) {
    this.#collection.push(item);
  }

  has(item) {
    return this.#collection.includes(item);
  }

  remove(item) {
    this.#collection = this.#collection.filter(c => c !== item);
  }
}

const colors = new Collection();
colors.add('red');
console.log(colors);

console.log(colors.has('red')); // true
console.log(colors.has('blue')); // false

colors.remove('red');
console.log(colors.has('red')); // false

colors.#collection = 'hello';
console.log(colors);
colors.add('green');
