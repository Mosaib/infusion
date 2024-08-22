import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg"
      whileHover={{ scale: 1.2, rotate: 20 }}
      whileTap={{ scale: 0.9, rotate: -10 }}
      transition={{ type: ' ', stiffness: 400, damping: 10 }}
    >
      <AnimatePresence mode="wait">
        {theme === 'light' ? (
          <motion.span
            key="moon"
            className="text-2xl"
            initial={{ opacity: 0, x: -20, rotate: -90 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: 20, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            🌙
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            className="text-2xl"
            initial={{ opacity: 0, x: 20, rotate: 90 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -20, rotate: -90 }}
            transition={{ duration: 0.3 }}
          >
            ☀️
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
