import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthLoading, useIsAuthenticated } from '../../state/AuthContext';

const PrivateRoute = props => {
  const isAuthenticated = useIsAuthenticated();
  const loading = useAuthLoading();

  if(loading) return <h1>Loading!!!</h1>;

  if(!loading && !isAuthenticated) {
    return <Redirect to="/login" />;
  }
  
  return <Route {...props} />;
};

export default PrivateRoute;
