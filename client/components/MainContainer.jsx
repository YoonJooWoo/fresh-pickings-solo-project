/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainContainer = () => {
  const handleButtonClick = () => {
    window.location.href = './seasonal';
  };

  return (
    <div className="container">
      <div className="outerBox">
        <h3 id="header">What is in-season now?</h3>
        {/* <a href="./seasonal.html"> */}
        <button onClick={handleButtonClick}>Let's Find Out!</button>
        {/* </a> */}
      </div>
    </div>
  );
};

export default MainContainer;