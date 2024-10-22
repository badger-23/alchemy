import React from 'react';
import EventList from '../events/EventList';
import { Switch, Route } from 'react-router-dom';
import styles from './App.css';

const About = ({ match, location, history }) => {
  // console.log('match :>> ', match);
  // console.log('location :>> ', location);
  // console.log('history :>> ', history);
  return <p className={styles.about}>About Page</p>;
};

export default function App() {
  return (
    <Switch>
      <Route path="/:month/:day">
        <EventList />
      </Route>
      <Route exact path="/about" component={About} />
    </Switch>
  );
}
