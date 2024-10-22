import React from 'react';
import { useCount } from '../../hooks/CounterProvider';
import Silly from './Silly';

export default function App() {
  const count = useCount();

  return (
    <main>
      <h1>{count}</h1>
      <Silly />
    </main>
  );
}
