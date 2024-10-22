import React from 'react';
import { useError } from '../../state/error';

const Toast = () => {
  const error = useError();
  
  if(!error) return null;
  
  return (
    <h1>{error.message}</h1>
  );
};

export default Toast;
