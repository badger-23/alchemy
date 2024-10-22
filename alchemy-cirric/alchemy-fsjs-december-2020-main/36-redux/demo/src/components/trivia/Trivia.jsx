import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import QuestionList from '../questions/QuestionList';
import { fetchQuestions } from '../../service/triviaApi';
import { setQuestions } from '../../actions/questionActions';
import Score from '../score/Score';

const Trivia = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchQuestions()
      .then(questions => {
        dispatch(setQuestions(questions));
      });
  }, []);

  return (
    <>
      <Score />
      <QuestionList />
    </>
  );
};

export default Trivia;
