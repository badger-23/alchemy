import { countDogs, getDogs } from './dogSelectors';

describe('dog selectors', () => {
  it('select the list of dogs from state', () => {
    const state = {
      dogs: [{ name: 'spot', age: 5, weight: '20 lbs' }]
    };

    const dogs = getDogs(state);

    expect(dogs).toEqual([{ name: 'spot', age: 5, weight: '20 lbs' }]);
  });

  it('select the number of dogs', () => {
    const state = {
      dogs: [{ name: 'spot', age: 5, weight: '20 lbs' }]
    };

    expect(countDogs(state)).toEqual(1);
  });
});
