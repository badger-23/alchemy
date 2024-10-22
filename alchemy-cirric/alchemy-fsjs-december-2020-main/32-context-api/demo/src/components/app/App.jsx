import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ErrorProvider } from '../../state/error';
import CharacterById from '../../pages/CharacterById';
import CharactersPage from '../../pages/CharactersPages';
import Toast from '../toast/Toast';

export default function App() {
  return (
    <Router>
      <ErrorProvider>
        <Toast />
        <Switch>
          <Route exact path="/" component={CharactersPage} />
          <Route
            path="/characters/:id" component={CharacterById} />
        </Switch>
      </ErrorProvider>
    </Router>
  );
}
