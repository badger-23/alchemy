import { getQuestions } from './questionSelectors';

export const getAnswers = state => state.answers.list;
export const getScore = state => {
  const questions = getQuestions(state);
  const answers = getAnswers(state);

  return answers
    .filter((answer, i) => questions[i]?.correctAnswer === answer)
    .length;
};
