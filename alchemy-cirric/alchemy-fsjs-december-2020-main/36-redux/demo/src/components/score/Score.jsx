import React from 'react';
import { useSelector } from 'react-redux';
import { getScore } from '../../selectors/answerSelectors';

const Score = () => {
  const score = useSelector(getScore);
  
  return <p>{score}</p>;
};

export default Score;
