import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CounterContext = createContext();

const CounterProvider = ({ children, initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <CounterContext.Provider value={{ count, decrement, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useDecrement = () => {
  const { decrement } = useContext(CounterContext);
  return decrement;
};

export const useIncrement = () => {
  const { increment } = useContext(CounterContext);
  return increment;
};

export const useCount = () => {
  const { count } = useContext(CounterContext);
  return count;
};

CounterProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialCount: PropTypes.number,
};

export default CounterProvider;
