import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './loader.css';
import logo from './loading.png';

const Loader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    loading && (
      <motion.div
        className="loader"
        initial={{ opacity: 2 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className="logo-container">
          <motion.img
            src={logo}
            alt="Logo"
            className="logo"
            initial={{ scale: 1 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>
      </motion.div>
    )
  );
};

export default Loader;
