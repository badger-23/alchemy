import { createDog, CREATE_DOG } from './dogActions';

describe('dog actions', () => {
  it('creates a create dog action', () => {
    const action = createDog({
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    });

    expect(action).toEqual({
      type: CREATE_DOG,
      payload: { name: 'spot', age: 5, weight: '20 lbs' }
    });
  });
});
