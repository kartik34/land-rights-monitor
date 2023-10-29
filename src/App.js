// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import CustomProjectDashboard from './components/CustomProjectDashboard'; // Import the new component

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/project/:id" element={<CustomProjectDashboard />} /> {/* Use CustomProjectDashboard for project pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
