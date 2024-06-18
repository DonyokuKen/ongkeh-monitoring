import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Screens from './components/Screens';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/screen" element={<Screens />} />
        {/* Add more routes for upcoming pages */}
      </Routes>
    </Router>
  );
};

export default App;
