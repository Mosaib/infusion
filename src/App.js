import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage'; // Ensure you are using the correct component name
import AboutUs from './AboutUs';
import ContactUsSection from './ContactUsSection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contact" element={<ContactUsSection />} />
      </Routes>
    </Router>
  );
}

export default App;
