import { setQuestions } from '../actions/questionActions';
import reducer from './questionReducer';

describe('question reducer', () => {
  it('handles the SET_QUESTION action', () => {
    const state = {
      list: []
    };

    const action = setQuestions([
      {
        text: 'Hello?',
        correctAnswer: 'yes',
        incorrectAnswers: [
          'no',
          'ok'
        ]
      }
    ]);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      list: [
        {
          text: 'Hello?',
          correctAnswer: 'yes',
          incorrectAnswers: [
            'no',
            'ok'
          ]
        }
      ]
    });
  });
});
