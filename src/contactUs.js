import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Get in Touch</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">We'd love to hear from you. Send us a message!</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/2 bg-gradient-to-br from-purple-500 to-indigo-600 p-8 md:p-12 text-white">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <FaEnvelope className="mr-3 text-indigo-200" />
                  <a href="mailto:info@example.com" className="hover:text-indigo-200 transition duration-300">info@example.com</a>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-3 text-indigo-200" />
                  <a href="tel:+1234567890" className="hover:text-indigo-200 transition duration-300">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-3 text-indigo-200" />
                  <span>123 Main St, City, Country</span>
                </li>
              </ul>
              <div>
                <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-indigo-200 transition duration-300">
                    <FaFacebookF className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white hover:text-indigo-200 transition duration-300">
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white hover:text-indigo-200 transition duration-300">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white hover:text-indigo-200 transition duration-300">
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="mt-5 w-full">
                  <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12645.871207024365!2d-122.42064512368353!3d37.77902604247654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b76a3d1ff%3A0x530a9e3e3e4baf87!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600136266213!5m2!1sen!2sus"
                    className="w-full h-64 border-0 rounded-lg"
                    allowFullScreen=""
                    loading="lazy">

                  </iframe>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;