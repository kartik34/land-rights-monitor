// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProjectDashboard from './components/ProjectDashboard';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage'; // Import the AboutPage component

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/project/:id" element={<ProjectDashboard />} />
          <Route path="/about" element={<AboutPage />} /> {/* Route for the About page */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
