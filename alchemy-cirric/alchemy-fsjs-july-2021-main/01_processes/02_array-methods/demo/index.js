export const add = (...numbers) => {
  return numbers.reduce((sum, number) => sum + number, 0);
};

const evenFinder = (number) => number % 2 === 0;

export const evenNumbers = (numbers) => {
  return numbers.filter(evenFinder);
};

export const firstEven = (numbers) => {
  return numbers.find(evenFinder);
};

export const allEvens = (numbers) => {
  return numbers.every(evenFinder);
};

export const sumEvens = (numbers) => {
  // numbers = [1, 2, 3, 4]
  // add(evenNumbers(numbers)) -> add([1, 2, 3, 4])
  // add(...evenNumbers(numbers)) -> add(1, 2, 3, 4)
  return add(...evenNumbers(numbers));
};

// ---- Higher Order Functions ----
// 1. functions that take functions as params
// 2. functions that return functions

export const numberManipulator = (modifier, number) => {
  return modifier(number);
};

export const repeater = (numOfTimes, callback) => {
  for (let i = 0; i < numOfTimes; i++) {
    callback();
  }
};

/* ### 4. `reduce(arr, callback [, initialValue])`

Takes an `Array` and callback of signature
`(accumulator, item) => {}` and an (optional) second
`initialValue` parameter that is the initial value of the
accumulator. After each function call, the return value is
passed as the accumulator argument of the next function call.

If the second `initialValue` parameter is not supplied, the
first function call should be the first item as the
`accumulator`, and the second array item as the `item`.

Any holes in the `Array` should be skipped (don't call the callback function).

Returns the final accumulator value.
*/

// [1, 2, 3, 4]

const callback = (acc, item) => {
  const newAcc = acc + item;
  return newAcc;
};
export const reduce = (arr, callback, initialValue) => {
  let accumulator = initialValue === undefined ? 0 : initialValue;

  // if (initialValue === undefined) {
  //   accumulator = 0;
  // } else {
  //     accumulator = initialValue;
  // }

  console.log('accumulator = ', accumulator);

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log('----- for loop iteration start -----');
    console.log(`arr[${index}] =`, arr[index]);
    console.log('element = ', element);

    if (element) {
      accumulator = callback(accumulator, element);
      console.log('accumulator =', accumulator);
    }

    console.log('----- for loop iteration end -----');
  }

  console.log('final accumulator = ', accumulator);

  return accumulator;
};
