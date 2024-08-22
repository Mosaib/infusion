import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from './logo.png';
import logoDark from './logo_dark.png';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      const sections = ['home', 'about-us', 'services', 'contactUs'];
      let currentSection = 'home';

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    closeMenu();
  };

  return (
    <motion.nav
      className={`fixed w-full z-20 transition-all duration-500 ${scrolled ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-xl' : 'bg-transparent'}`}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={(e) => scrollToSection('home', e)}>
              <motion.img
                className="h-12 w-auto transition-transform duration-300 ease-in-out"
                src={scrolled ? logo : logoDark}
                alt="Logo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95, rotate: -5 }}
              />
            </Link>
          </div>

          {/* Menu (centered) */}
          <div className="flex-1 flex items-center justify-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <NavLink to="#home" text="Home" onClick={(e) => scrollToSection('home', e)} isActive={activeSection === 'home'} />
              <NavLink to="#about-us" text="About" onClick={(e) => scrollToSection('about-us', e)} isActive={activeSection === 'about-us'} />
              <NavLink to="#services" text="Services" onClick={(e) => scrollToSection('services', e)} isActive={activeSection === 'services'} />
              <NavLink to="#contactUs" text="Contact" onClick={(e) => scrollToSection('contactUs', e)} isActive={activeSection === 'contactUs'} />
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="hidden md:flex ml-4">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex md:hidden">
            <motion.button
              onClick={toggleMenu}
              className={`relative flex items-center justify-center p-2 rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'bg-yellow-400 text-white' : 'bg-yellow-500 text-white'}`}
              initial={{ scale: 1 }}
              animate={{ scale: isOpen ? 1.1 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="w-6 h-6 transform rotate-45 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
          <div className="md:hidden ml-4">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-800 bg-opacity-90 transition-transform transform translate-y-0 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="#home" text="Home" onClick={(e) => scrollToSection('home', e)} isActive={activeSection === 'home'} />
            <MobileNavLink to="#about-us" text="About" onClick={(e) => scrollToSection('about-us', e)} isActive={activeSection === 'about-us'} />
            <MobileNavLink to="#services" text="Services" onClick={(e) => scrollToSection('services', e)} isActive={activeSection === 'services'} />
            <MobileNavLink to="#contactUs" text="Contact" onClick={(e) => scrollToSection('contactUs', e)} isActive={activeSection === 'contactUs'} />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLink = ({ to, text, onClick, isActive }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={to}
        onClick={onClick}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-transform duration-300 ease-in-out ${
          isActive
            ? 'text-white bg-yellow-500 shadow-lg scale-110'
            : 'text-gray-300 hover:bg-white hover:text-black hover:scale-105'
        }`}
      >
        {text}
      </Link>
    </motion.div>
  );
};

const MobileNavLink = ({ to, text, onClick, isActive }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={to}
        onClick={onClick}
        className={`block px-3 py-2 rounded-md text-base font-medium transition-transform duration-300 ease-in-out ${
          isActive
            ? 'text-white bg-yellow-500 shadow-lg scale-110'
            : 'text-gray-300 hover:bg-white hover:text-black hover:scale-105'
        }`}
      >
        {text}
      </Link>
    </motion.div>
  );
};

export default Navbar;
