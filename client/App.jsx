import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import MainContainer from './components/MainContainer.jsx';
import SeasonalPage from './components/SeasonalPage.jsx';
import Details from './components/Details.jsx';
// import './stylesheets/styles.css';

const App = () => {
  return(
    <div>
      <Routes>
        <Route exact path='/' element={<MainContainer />} />
        <Route path='/seasonal' element={<SeasonalPage />} />
        <Route path='/seasonal/:itemName' element={<Details />} />  
      </Routes>
    </div>    
  );
};

export default App;