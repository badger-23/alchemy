// // function myFirstRecursiveFn() {
// //   console.log('hi');
// //   myFirstRecursiveFn();
// // }

// // // memory timeout
// // // infinite loop
// // // crash vscode
// // myFirstRecursiveFn();

// function fact(n) {
//   if(n === 1) return 1;

//   return n * fact(n - 1);
// }

// console.log(fact(5));

// function fizzBuzzCheck(n) {
//   if(multiple(n, 3) && multiple(n, 5)) return true
// }

// function multiple(n, of) {
//   return n % of === 0
// }

// function fizzBuzz() {
//   for(let i = 0; i < 10; i++) {
//     fizzBuzzCheck(i);
//   }
// }

const fs = require('fs').promises;

console.log(fs.readFile('./README.md'));
