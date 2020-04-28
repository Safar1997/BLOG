import React from 'react';
import LoginForm from '../components/Login';

const Login = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  };
  return (
    <div style={styles}>
      <LoginForm />
    </div>
  );
};

export default Login;
