import React, { useState } from 'react';
import LoginButton from './components/LoginButton.jsx';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogOut = () => {

  }

  return (
    <header>
      <h1>Fresh Pickings</h1>
      <nav>
        <LoginButton />
      </nav>
    </header>
  );
};



export default Header;