function bigoh(n) {
  const fruit = ['apple', 'banana', 'orange'];
  return fruit[n];
}

function double(arr) {
  const doubled = [];
  for(let i = 0; i < arr.length; i++) {
    doubled.push(arr[i] * 2);
  }
  return arr.map(n => n * 2);
}

function finder(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 5) return arr[i];
  }

  return null;
}

function constantTime(arr) {
  return arr[0];
}

function linearTime(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

function quadraticTime(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      console.log(i, j);
    }
  }
}

function a(arr) {
  for(let i = 0; i < arr.length; i++) {
    b(arr);
  }
}

function b(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(i);
  }
}
