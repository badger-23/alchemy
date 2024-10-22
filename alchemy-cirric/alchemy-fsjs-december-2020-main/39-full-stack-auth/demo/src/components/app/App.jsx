import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import PrivateRoute from '../auth/PrivateRoute';
import { AuthProvider } from '../../state/AuthContext';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
