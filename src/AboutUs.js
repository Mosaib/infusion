import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Us</h1>
      <p className="text-lg text-gray-800 dark:text-gray-300">
        Welcome to the About Us page. Here you will find information about our company, mission, and values.
      </p>
      <p className="text-lg mt-4 text-gray-800 dark:text-gray-300">
        Our company was founded with the goal of providing exceptional service and high-quality products. We pride ourselves on our commitment to excellence and customer satisfaction.
      </p>
      <p className="text-lg mt-4 text-gray-800 dark:text-gray-300">
        We believe in transparency, integrity, and innovation. Our team works tirelessly to bring you the best solutions and support, ensuring that your needs are met with professionalism and care.
      </p>
    </div>
  );
};

export default AboutUs;
