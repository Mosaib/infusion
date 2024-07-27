import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.png';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      const aboutSection = document.getElementById('about-us');
      const homeSection = document.getElementById('home');

      if (homeSection && aboutSection) {
        const homeRect = homeSection.getBoundingClientRect();
        const aboutRect = aboutSection.getBoundingClientRect();
        const offset = 100;

        if (window.scrollY >= homeRect.top - offset && window.scrollY < aboutRect.top - offset) {
          setActiveSection('home');
        } else if (window.scrollY >= aboutRect.top - offset) {
          setActiveSection('about');
        }
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  const isActive = (path) => {
    return location.pathname === path || (path === '#about-us' && activeSection === 'about');
  };

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0" onClick={() => scrollToSection('home')}>
              <img className="h-12 w-auto" src={logo} alt="Logo" />
            </Link>

            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavLink to="#home" text="Home" onClick={(e) => scrollToSection('home', e)} isActive={activeSection === 'home'} />
                <NavLink to="#about-us" text="About" onClick={(e) => scrollToSection('about-us', e)} isActive={activeSection === 'about'} />
                <NavLink to="/services" text="Services" isActive={location.pathname === '/services'} />
                <NavLink to="/contact" text="Contact" isActive={location.pathname === '/contact'} />
              </div>
            </div>

          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <ThemeToggle />
            </div>
          </div>
          <div className="mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" text="Home" onClick={() => scrollToSection('home')} isActive={activeSection === 'home'} />
            <MobileNavLink to="#about-us" text="About" onClick={(e) => scrollToSection('about-us', e)} isActive={activeSection === 'about'} />
            <MobileNavLink to="/services" text="Services" onClick={() => closeMenu()} isActive={location.pathname === '/services'} />
            <MobileNavLink to="/contact" text="Contact" onClick={() => closeMenu()} isActive={location.pathname === '/contact'} />
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, text, onClick, isActive }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? 'text-white bg-blue-600'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      } transition duration-150 ease-in-out`}
    >
      {text}
    </Link>
  );
};

const MobileNavLink = ({ to, text, onClick, isActive }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive
          ? 'text-white bg-blue-600'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      } transition duration-150 ease-in-out`}
    >
      {text}
    </Link>
  );
};

export default Navbar;
