import React from 'react';
import AboutUs from './AboutUs';
import Home from './home';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section id="home">
        <Home />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      {/* Footer Section */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
