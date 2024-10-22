import { setAnswer } from '../actions/answerActions';
import reducer from './answerReducer';

describe('answer reducer', () => {
  it('handles the SET_ANSWER action', () => {
    const state = {
      list: Array(10).fill(null)
    };

    const action = setAnswer(5, 'yes');

    const newState = reducer(state, action);

    expect(newState)
      .toEqual({
        list: [null, null, null, null, null, 'yes', null, null, null, null]
      });
  });
});
