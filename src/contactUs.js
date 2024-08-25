import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',

  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  setTimeout(() => {
    setSuccessMessage('');
  }, 5000);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formURL = 'https://api.web3forms.com/submit';
    const accessKey = 'b72d24bc-71b3-4792-8e54-b831e932a8b6';

    const formPayload = {
      access_key: accessKey,
      ...formData,
    };

    try {
      const response = await fetch(formURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      if (response.ok) {
        setSuccessMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' , phone: '' });
        setErrorMessage('');
      } else {
        setErrorMessage('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('Oops! Something went wrong. Please try again later.');
    }
  };

  return formData ? (
    <section className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">Get in Touch</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We value your feedback and are here to assist you. Reach out to us, and we'll get back to you as soon as possible!
              </p>
              {successMessage && <p className="text-yellow-600 dark:text-yellow-400 mb-4">{successMessage}</p>}
              {errorMessage && <p className="text-red-600 dark:text-red-400 mb-4">{errorMessage}</p>}
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
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone Number"
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
                    className="w-full px-4 py-3 border  rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
                  <FaEnvelope className="mr-3 text-yellow-200" />
                  <a href="mailto:alamashfy@gmail.com" className="hover:text-yellow-400 transition duration-300">alamashfy@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-3 text-yellow-200" />
                  <a href="tel:+919832110818" className="hover:text-yellow-400 transition duration-300">+91 983-211-0818</a>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-3 text-yellow-200" />
                  <span>Dr. Bc Roy Road Asansol-WB (INDIA)</span>
                </li>
              </ul>
              <div>
                <h4 className="text-xl text-center font-semibold mb-4">Follow Us</h4>
                <div className="justify-center flex space-x-6">
                  <a href="https://www.facebook.com/people/Infusion-Ads/61556763091563/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300 transform hover:scale-110">
                    <FaFacebookF className="w-8 h-6" />
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300 transform hover:scale-110">
                    <FaTwitter className="w-8 h-6" />
                  </a>
                  <a href="https://www.instagram.com/infusion_ads/profilecard/?igsh=MXN6eTV5NnEzMnZ4MQ==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300 transform hover:scale-110">
                    <FaInstagram className="w-8 h-6" />
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300 transform hover:scale-110">
                    <FaLinkedinIn className="w-8 h-6" />
                  </a>
                </div>
              </div>
              <div className="mt-5 w-full">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3653.2407009432172!2d86.96966107533447!3d23.703096978702693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQyJzExLjIiTiA4NsKwNTgnMjAuMSJF!5e0!3m2!1sen!2sin!4v1724525394068!5m2!1sen!2sin"
                  className="w-full h-64 border-0 rounded-lg"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default ContactUs;
