import { setAnswer, SET_ANSWER } from './answerActions';

describe('answer actions', () => {
  it('creates an action to SET_ANSWER', () => {
    const action = setAnswer(0, 'yes');

    expect(action).toEqual({
      type: SET_ANSWER,
      payload: { index: 0, answer: 'yes' }
    });
  });
});
