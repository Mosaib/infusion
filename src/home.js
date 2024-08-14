import React from 'react';
import heroImage from './logo.png';
import { Link } from 'react-router-dom';

function home(){
  return (
    <>
      <section className="relative overflow-hidden text-white">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Transform Your Brand with Impactful Media
          </h1>
          {/* Subheading */}
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            From innovative digital marketing strategies to high-quality video production, we help you stand out and make a lasting impression.
          </p>
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Explore Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
          {/* Additional Call-to-Action */}
          <div className="mt-12">
            <p className="text-sm font-semibold text-gray-400 mb-4">
              See our work in action
            </p>
            <Link
              to="/portfolio"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
      </>
  );
};

export default home;
