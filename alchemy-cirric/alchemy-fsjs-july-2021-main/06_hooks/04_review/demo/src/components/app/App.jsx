import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RickAndMortyDetail from '../../containers/RickAndMortyDetail';
import RickAndMortyList from '../../containers/RickAndMortyList';
import './App.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/:id">
        <RickAndMortyDetail />
      </Route>
      <Route exact path="/">
        <RickAndMortyList />
      </Route>
    </Switch>
  );
}
