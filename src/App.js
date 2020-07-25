import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/LandingComponent';

function App() {
  return (
    <Router>
      <div className="App">
          <Landing />
      </div>
    </Router>
  );
}

export default App;
