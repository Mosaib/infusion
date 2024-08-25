import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section className="relative overflow-hidden text-white min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="https://videos.pexels.com/video-files/7414128/7414128-hd_1920_1080_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 opacity-75" />
      </div>

      {/* Content */}
      <div className="relative mx-auto px-8 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="container mx-auto px-0 sm:px-6 md:px-8 lg:px-10 xl:px-20 flex flex-col items-center justify-center text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Elevate Your Brand Online With
              <span className="relative hidden md:inline-block text-yellow-500 bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-purple-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative block ml-3">Infusion ADS</span>
              </span>
              <span className="text-yellow-500 md:hidden"> Infusion ADS</span>
            </motion.div>
          </h1>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              We create targeted ad campaigns for shop stores and brands to boost their online presence and drive sales. By leveraging social media platforms, we effectively promote their business and connect with a broader audience.
              </p>
            </motion.div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-400">
            <a
              href="#services"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Boost Your Brand
            </a>
            <a
              href="#contactUs"
              className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg hover:bg-gray-100"
            >
              Free Consultation
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="mt-12 animate-fade-in-up animation-delay-600">
            <p className="text-sm font-semibold text-gray-300 mb-4">
              Connect with us on social media
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.facebook.com/people/Infusion-Ads/61556763091563/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-pink-400 transition-colors">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-pink-400 transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/infusion_ads/profilecard/?igsh=MXN6eTV5NnEzMnZ4MQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-pink-400 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-pink-400 transition-colors">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
