import React from 'react';
import { useLogin } from '../../state/AuthContext';
import AuthForm from './AuthForm';

const Login = () => {
  const login = useLogin();
  return <AuthForm title="Login" authFn={login} />;
};

export default Login;
