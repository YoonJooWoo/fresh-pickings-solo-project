import React from 'react';
import { useNavigate } from 'react-router-dom';

const signupButton = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('./signup');
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <button id='signup_button' onClick={handleClick}>Signup</button>
  );
};


export default signupButton;