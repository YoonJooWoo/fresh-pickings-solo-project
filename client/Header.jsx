import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginButton from './components/LoginButton.jsx';
import SignupButton from './components/SignupButton.jsx';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('/logout', {
        method: 'POST',
        credentials: 'include'
      });
      if (response.ok) {
        setIsAuthenticated(false);
        navigate('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  return (
    <header>
      <h1>Fresh Pickings</h1>
      <nav>
        {isAuthenticated ? (
          <>
            <button id='logout_button' onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <SignupButton />
            <LoginButton />
          </>
        )}
        
      </nav>
    </header>
  );
};



export default Header;