import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header.jsx';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));

const RootComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Header setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
      <App setIsAuthenticated={setIsAuthenticated} />
    </Router>
  );
};

root.render(<RootComponent />);