import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      className="relative flex items-center justify-center p-2 rounded-full bg-gray-800 text-white focus:outline-none"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {theme === 'light' ? (
        <motion.span
          className="text-2xl"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.2 }}
        >
          🌙
        </motion.span>
      ) : (
        <motion.span
          className="text-2xl"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
        >
          ☀️
        </motion.span>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
