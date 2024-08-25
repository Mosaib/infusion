import React from 'react';
import heroImage from './logo_light.png';
import { motion } from 'framer-motion';
import Marketing from './marketing.png';

const AboutUs = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 font-sans">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <img src={heroImage} alt="Background Logo" className="w-full h-full object-cover mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-4">
            Unlock Your Potential with
            <span className="relative hidden md:inline-block dark:text-yellow-500 text-purple-600 bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/70 dark:fill-purple-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative block ml-3">Our Expertise</span>
          </span>
          <span className="dark:text-yellow-500 md:hidden text-purple-500"> Our Expertise</span>

          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Embrace innovation and elevate your digital presence with cutting-edge solutions tailored to your needs.
          </p>
        </motion.div>

        {/* About Us Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              At <span className="dark:text-yellow-500 text-purple-500"> INFUSION ADS</span> we are dedicated professionals crafting digital experiences that captivate and convert. Our team combines creativity with technology to deliver results that not only meet but exceed expectations.
            </p>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              From innovative marketing strategies to cutting-edge web development, we offer comprehensive services designed to enhance your brand’s online presence. Let us help you stand out in the digital world and achieve your business goals.
            </p>
            <a
              href="#contactUs"
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Connect with Us
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl opacity-40"></div>
              <img
                src={Marketing}
                alt="Digital Marketing Services in Asansol by Infusion Ads"
                className="w-full h-auto max-w-lg mx-auto relative my-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
