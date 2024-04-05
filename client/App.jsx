import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainContainer from './components/MainContainer.jsx';
import SeasonalPage from './components/SeasonalPage.jsx';
import Details from './components/Details.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
// import './stylesheets/styles.css';

const App = ({ setIsAuthenticated }) => {
  return(
    <div>
      <Routes>
        <Route exact path='/' element={<MainContainer />} />
        <Route path='/seasonal' element={<SeasonalPage />} />
        <Route path='/seasonal/:itemName' element={<Details />} />  
        <Route path='/signup' element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </div>    
  );
};

export default App;