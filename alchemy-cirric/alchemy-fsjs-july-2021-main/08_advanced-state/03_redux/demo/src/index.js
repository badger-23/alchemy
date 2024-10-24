import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/App';
import { store } from './components/app/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
