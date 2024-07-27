import React from 'react';
import heroImage from './logo.png';
import { Link } from 'react-router-dom';

function home(){
  return (
    <>
    <section id="home" className="relative bg-blue-500 dark:bg-blue-800 text-white flex flex-col items-center justify-center h-screen">
        <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10 text-center p-6">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Service</h1>
          <p className="text-xl mb-8">Providing the best solutions for your needs.</p>
          <Link to="#about-us" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg">
            Learn More
          </Link>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Features</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Feature One</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Description of the first feature goes here. This is a brief explanation of what makes this feature valuable.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Feature Two</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Description of the second feature goes here. Highlight the benefits and unique aspects of this feature.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Feature Three</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Description of the third feature goes here. Explain why this feature is essential and how it helps users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default home;
