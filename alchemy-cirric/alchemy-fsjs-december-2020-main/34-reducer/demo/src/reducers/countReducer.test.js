import reducer from './countReducer';

describe('count reducer', () => {
  it('handles the DECREMENT action type', () => {
    const state = {
      count: 40
    };

    const action = {
      type: 'DECREMENT'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      count: 39
    });
  });

  it('handles the INCREMENT action type', () => {
    const state = {
      count: 100
    };

    const action = {
      type: 'INCREMENT'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      count: 101
    });
  });
});
