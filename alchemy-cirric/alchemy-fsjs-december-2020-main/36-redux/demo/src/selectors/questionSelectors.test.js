import { getQuestions } from "./questionSelectors";

describe('question selectors', () => {
  it('selects a list of questions from state', () => {
    const state = {
      questions: {
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
      },
      answers: {
        list: []
      }
    };

    const questions = getQuestions(state);

    expect(questions).toEqual([
      {
        text: 'Hello?',
        correctAnswer: 'yes',
        incorrectAnswers: [
          'no',
          'ok'
        ]
      }
    ]);
  });
});
