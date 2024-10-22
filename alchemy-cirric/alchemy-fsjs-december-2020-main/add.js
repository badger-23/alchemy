const add = (a, b) => a + b;

console.log(Number.MAX_SAFE_INTEGER + 6);

const toy = await Promise.all([
  {
    name: 'red circle',
    color: 'red',
    shape: 'circle'
  },
  {
    name: 'blue circle',
    color: 'blue',
    shape: 'circle'
  },
  {
    name: 'red square',
    color: 'red',
    shape: 'square'
  }
].map(toy => Toy.insert(toy)));

const rc = await Toy.insert({
  name: 'red circle',
  color: 'red',
  shape: 'circle'
});

const bc = await Toy.insert({
  name: 'blue circle',
  color: 'blue',
  shape: 'circle'
});

const rs = await Toy.insert({
  name: 'red square',
  color: 'red',
  shape: 'square'
});
