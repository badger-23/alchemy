import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setAnswer } from '../../actions/answerActions';

const Question = ({ text, answers, index }) => {
  const dispatch = useDispatch();
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(setAnswer(index, selectedAnswer));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{text}</p>
      {answers.map(answer => (
        <>
          <input
            checked={selectedAnswer === answer}
            id={answer}
            name="answers"
            type="radio"
            value={answer}
            onChange={({ target }) => setSelectedAnswer(target.value)}
          />
          <label htmlFor={answer}>{answer}</label>
        </>
      ))}

      <button>Choose Answer</button>
    </form>
  );
};

Question.propTypes = {
  text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  index: PropTypes.number.isRequired
};

export default Question;
