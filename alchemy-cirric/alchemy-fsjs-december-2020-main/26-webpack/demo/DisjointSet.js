class DisjointSet {
  constructor() {
    this.set = {};
  }

  find(key) {
    if(!this.set[key]) {
      return key;
    }
    else return this.find(this.set[key]);
  }

  add(key) {
    if(!this.set[key]) this.set[key] = null;
  }

  union(key1, key2) {
    const root1 = this.find(key1);
    const root2 = this.find(key2);

    this.set[root2] = root1;
  }
}

const ds = new DisjointSet();

ds.add('0-3');
ds.union('0-3', '0-4');

ds.add('0-4');
ds.union('0-4', '1-4');

ds.add('1-4');

ds.add('2-0');
ds.union('2-0', '2-1');

ds.add('2-1');

ds.add('3-4');


console.log(ds);
