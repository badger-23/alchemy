export const fetchQuestions = () => {
  return fetch('https://opentdb.com/api.php?amount=10')
    .then(res => res.json())
    .then(({ results }) => results.map(question => ({
      text: question.question,
      correctAnswer: question.correct_answer,
      incorrectAnswers: question.incorrect_answers
    })));
};
