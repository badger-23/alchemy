import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { DogProvider } from './state/DogProvider';

render(
  <DogProvider>
    <App />
  </DogProvider>,
  document.getElementById('root')
);
