import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginButton from './components/LoginButton.jsx';
import SignupButton from './components/SignupButton.jsx';
import favicon from './assets/favicon.png';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const redirectToSeasonal = async () => {
    navigate('/seasonal');
  };

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
      <div onClick={redirectToSeasonal} style={{ cursor: 'pointer' }}>
        <img src={favicon} alt='Favicon' />
        <h1>Fresh Pickings</h1>
      </div>
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