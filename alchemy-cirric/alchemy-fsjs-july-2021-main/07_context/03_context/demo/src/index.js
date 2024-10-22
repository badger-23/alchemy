import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import CounterProvider from './hooks/CounterProvider';

render(
  <CounterProvider initialCount={100}>
    <App />
  </CounterProvider>,
  document.getElementById('root')
);
