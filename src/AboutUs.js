import React from 'react';
import heroImage from './logo_dark.png';

const AboutUs = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 font-sans">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <img src={heroImage} alt="Background Logo" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* AI Tools Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-4">
            Accelerate Your Workflow
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Harness the power of cutting-edge AI tools
          </p>
          <div className="inline-block">
            <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              10X faster
            </span>
            <div className="mt-2 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              with AI-powered solutions
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                My Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              I'm a passionate Web Developer crafting digital experiences that inspire and engage.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Let's Connect
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl opacity-30"></div>
              <img
                src="https://www.svgrepo.com/show/493509/person-who-invests.svg"
                alt="Portfolio"
                className="w-full h-auto max-w-lg mx-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
