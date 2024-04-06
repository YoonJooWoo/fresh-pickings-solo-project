/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useNavigate } from 'react-router-dom';


const MainContainer = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    // window.location.href = './seasonal';
    navigate('./seasonal');
  };

  return (
    <div className="container">
      <div className="outerBox">
        <h3 id="header">What fruits and vegetables are <br/>in-season now?</h3>
        {/* <a href="./seasonal.html"> */}
        <button id='go_button' onClick={handleButtonClick}>Let's Find Out!</button>
        {/* </a> */}
      </div>
    </div>
  );
};

export default MainContainer;