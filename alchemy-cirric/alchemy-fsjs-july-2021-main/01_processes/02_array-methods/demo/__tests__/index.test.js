import { jest } from '@jest/globals';
import {
  add,
  allEvens,
  evenNumbers,
  firstEven,
  numberManipulator,
  reduce,
  repeater,
  sumEvens,
} from '../index';

describe('number functions', () => {
  describe('add', () => {
    it('sums numbers together', () => {
      const sum = add(3, 4, 1, 3);

      expect(sum).toEqual(11);
    });

    it('sums different numbers together', () => {
      const sum = add(3, 4);

      expect(sum).toEqual(7);
    });
  });

  describe('evenNumbers', () => {
    it('takes an array of numbers and returns only the evens', () => {
      const evens = evenNumbers([1, 2, 3, 4]);

      expect(evens).toEqual([2, 4]);
    });
  });

  describe('firstEven', () => {
    it('takes an array on numbers and returns the first even number', () => {
      const first = firstEven([1, 3, 4, 5, 6, 7]);

      expect(first).toEqual(4);
    });
  });

  describe('allEvens', () => {
    it('returns true if all numbers are even', () => {
      const evens = allEvens([2, 4, 6, 8]);

      expect(evens).toEqual(true);
    });

    it('returns false if not all numbers are even', () => {
      const odds = allEvens([1, 2, 4, 6, 7]);

      expect(odds).toEqual(false);
    });
  });

  describe('sumEvens', () => {
    it('returns the sum of all even numbers', () => {
      const sum = sumEvens([1, 2, 3, 4]);

      expect(sum).toEqual(6);
    });
  });

  describe('numberManipulator', () => {
    it('take a number and doubles it using the passed in callback', () => {
      const callback = (n) => n * 2;
      const ten = numberManipulator(callback, 5);

      expect(ten).toEqual(10);
    });

    it('take a number and adds to it using the passed in callback', () => {
      const callback = (n) => n + 2;
      const seven = numberManipulator(callback, 5);

      expect(seven).toEqual(7);
    });
  });

  describe('repeater', () => {
    it('takes a number and invokes the passed in callback `number` times', () => {
      const callback = jest.fn();
      repeater(5, callback);

      expect(callback).toHaveBeenCalledTimes(5);
    });
  });

  describe('reduce', () => {
    it('takes an array, callback, and initial value and returns the reduced accumulator', () => {
      const arr = [1, 2, 3, 4];
      const callback = (acc, item) => acc + item;
      const result = reduce(arr, callback, 5);

      expect(result).toEqual(10);
    });
  });
});
