import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllQuotes from '../../containers/AllQuotes';
import ByCharacterQuotes from '../../containers/ByCharacterQuotes';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllQuotes} />
        <Route path="/:character" component={ByCharacterQuotes} />
      </Switch>
    </Router>
  );
}
