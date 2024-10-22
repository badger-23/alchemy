import React from 'react';
import {
  useCount,
  useDecrement,
  useIncrement,
} from '../../hooks/CounterProvider';

const Display = () => {
  const count = useCount();
  const decrement = useDecrement();
  const increment = useIncrement();

  return (
    <section>
      <button onClick={decrement}>&darr;</button>
      <button onClick={increment}>&uarr;</button>
      <h4>{count}</h4>
    </section>
  );
};

export default Display;
