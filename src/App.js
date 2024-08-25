import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Loader from './Loader';

function App() {

  const [loading, setLoading] = useState(true);
  const handleLoaderComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    const disableContextMenu = (e) => {
      e.preventDefault();
    };

    const disableShortcuts = (e) => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
      }
    };

    const detectDevTools = () => {
      const devtools = function() {};
      devtools.toString = function() {
      };
    };

    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('keydown', disableShortcuts);
    detectDevTools();

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', disableShortcuts);
    };
  }, []);

  return (
    <Router>
       {loading && <Loader onComplete={handleLoaderComplete} />}
       {!loading && (
        <>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </>
      )}
    </Router>
  );
}

export default App;
