import React, { useState, createContext, useContext } from 'react';

const ErrorContext = createContext(null);

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const alertError = err => {
    setError(err);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  return (
    <ErrorContext.Provider value={{ error, alertError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const { error } = useContext(ErrorContext);
  return error;
};

export const useAlertError = () => {
  const { alertError } = useContext(ErrorContext);
  return alertError;
};
