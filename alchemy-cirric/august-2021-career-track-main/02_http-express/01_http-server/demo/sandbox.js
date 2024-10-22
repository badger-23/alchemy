const dog = { name: 'ruby', age: 11, weight: '11lbs' };
const dogStringified = JSON.stringify(dog);
const dogParsed = JSON.parse(dogStringified);

console.log('----------------------------------------');

// Regular JS Object
console.log(dog);
console.log('dog type:', typeof dog);
console.log('dog.name:', dog.name);
console.log('----------------------------------------');

// JS Object converted to a string using JSON.stringify()
console.log(dogStringified);
console.log('dogStringified type:', typeof dogStringified);
console.log('dogStringified.name:', dogStringified.name);
console.log('----------------------------------------');

// String converted back into a JS object using JSON.parse()
console.log(dogParsed);
console.log('dogParsed type:', typeof dogParsed);
console.log('dogParsed.name:', dogParsed.name);

console.log('----------------------------------------');
