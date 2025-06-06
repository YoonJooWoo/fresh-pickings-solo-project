import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <button id='login_button' onClick={handleClick}>Log In</button>
  );
};


export default LoginButton;