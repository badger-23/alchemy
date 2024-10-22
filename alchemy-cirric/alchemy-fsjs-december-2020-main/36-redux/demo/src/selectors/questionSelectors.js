const shuffle = arr => arr.sort(() => Math.random() - 0.5);

export const getQuestions = state => state.questions.list;
export const getDisplayQuestions = state => getQuestions(state)
  .map(question => ({
    text: question.text,
    answers: shuffle([...question.incorrectAnswers, question.correctAnswer])
  }));
