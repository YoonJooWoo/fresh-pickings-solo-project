import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('./signin');
  };

  return (
    <button id='login_button' onClick={handleClick}>Log In</button>
  );
};


export default LoginButton;