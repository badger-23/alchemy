import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../about/About';
import Contact from '../contact/Contact';
import Home from '../home/Home';

export default function App() {
  // if (window.location.pathname === '/home') {
  //   return <Home />;
  // } else if (window.location.pathname === '/about') {
  //   return <About />;
  // } else {
  //   return <h1>Not Found</h1>;
  // }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact/:name" component={Contact} />
      </Switch>
    </Router>
  );
}
