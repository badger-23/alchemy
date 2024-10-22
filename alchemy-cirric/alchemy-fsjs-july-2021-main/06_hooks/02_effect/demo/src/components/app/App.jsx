import React from 'react';
// import EffectDemo from '../../containers/EffectDemo'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RickAndMortyDetail from '../../containers/RickAndMortyDetail';
import RickAndMortyList from '../../containers/RickAndMortyList';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id">
          <RickAndMortyDetail />
        </Route>
        <Route exact path="/">
          <RickAndMortyList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
