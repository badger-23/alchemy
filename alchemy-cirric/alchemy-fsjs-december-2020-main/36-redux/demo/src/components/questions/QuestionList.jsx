import React from 'react';
import { useSelector } from 'react-redux';
import { getDisplayQuestions } from '../../selectors/questionSelectors';
import Question from './Question';

const QuestionList = () => {
  const questions = useSelector(getDisplayQuestions);

  const questionElements = questions.map((question, i) => (
    <li key={i}>
      <Question {...question} index={i} />
    </li>
  ));

  return (
    <ul>
      {questionElements}
    </ul>
  );
};

export default QuestionList;
