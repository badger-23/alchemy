import { setQuestions, SET_QUESTIONS } from './questionActions';

describe('question actions', () => {
  it('creates the SET_QUESTIONS action', () => {
    const action = setQuestions([
      {
        text: 'hello?',
        correctAnswer: 'yes',
        incorrectAnswers: [
          'no',
          'ok'
        ]
      }
    ]);

    expect(action).toEqual({
      type: SET_QUESTIONS,
      payload: [
        {
          text: 'hello?',
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
