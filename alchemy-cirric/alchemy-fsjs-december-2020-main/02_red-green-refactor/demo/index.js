// constant time O(1)
const dictionary = require('./dictionary.json');
function printFirst(arr) {
  console.log(arr[0]);
}

// log time

// constant time O(n)
function search(arr, term) {
  const length = arr.length;

  for(let i = 0; i < length; i++) {
    console.log('running!', i)
    if(arr[i] === term) return term;
  }

  return -1;
}

// quadratic O(n*n)
// [{ name, age, phone }, ...]
function match(people) {
  for(let a = 0; a < people.length; a++) {
    const personA = people[a];
    for(let b = 0; b < people.length; b++) {
      const personB = people[b];

      console.log(personA, personB);
    }
  }
}

// exponential O(2^n)
