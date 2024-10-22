import React from 'react';
import RickAndMortyContainer from '../../containers/RickAndMortyContainer';

export default function App() {
  return <RickAndMortyContainer />;
  // return (
  //   <Router>
  //     <Switch>
  //       <Route exact path="/" component={RickAndMortyContainer} />
  //       <Route path="/:id" component={RickAndMortyDetailContainer} />
  //     </Switch>
  //   </Router>
  // );
}
