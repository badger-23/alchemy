import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getVerify, postLogin, postSignup } from '../services/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // session ? true : false
  // session !== null
  const isAuthenticated = !!session;

  useEffect(() => {
    // check if the user is logged in
    getVerify()
      .then(user => setSession(user))
      .catch(() => console.log('user not logged in'))
      .finally(() => setLoading(false));
    // if they are store the in session
  }, []);

  const signup = (email, password) => {
    // make a fetch request to signup a user
    return postSignup(email, password)
    // store the signed up user in session
      .then(user => setSession(user))
      .then(() => history.push('/'))
      .catch(err => setError(err));
  };
    
  const login = (email, password) => {
    // make a fetch request to login a user
    return postLogin(email, password)
      // store the logged in user in session
      .then(user => setSession(user))
      .then(() => history.push('/'))
      .catch(err => setError(err));
  };

  return (
    <AuthContext.Provider value={{
      session,
      loading,
      error,
      isAuthenticated,
      signup,
      login
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useSession = () => {
  const { session } = useContext(AuthContext);
  return session;
};

export const useAuthLoading = () => {
  const { loading } = useContext(AuthContext);
  return loading;
};

export const useAuthError = () => {
  const { error } = useContext(AuthContext);
  return error;
};

export const useIsAuthenticated = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated;
};

export const useSignup = () => {
  const { signup } = useContext(AuthContext);
  return signup;
};

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
};
