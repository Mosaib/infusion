import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush, FaRocket } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 transform hover:scale-105">
    <div className="text-5xl text-purple-600 dark:text-purple-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom websites tailored to your needs, built with the latest technologies for optimal performance."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that provide seamless user experiences across devices."
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Intuitive and visually appealing designs that enhance user engagement and satisfaction."
    },
    {
      icon: <FaRocket />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to boost your online presence and drive growth for your business."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-4">
            Accelerate Your Workflow
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business thrive in the online world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Ready to elevate your digital presence?
          </h2>
          <a
            href="#contactUs"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full transition duration-300 hover:shadow-lg hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default services;
