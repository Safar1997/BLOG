import React from 'react';
import SignUpForm from '../components/SignUp';

const SignUp = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  };
  return (
    <div style={styles}>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
