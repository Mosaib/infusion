import React from 'react';

const ContactUsSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">We would love to hear from you. Fill out the form below or reach out to us using the details provided.</p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h3>
            <form className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Details</h3>
            <div className="text-gray-700 dark:text-gray-300 mb-4">
              <p className="mb-2"><strong>Address:</strong> 123 Main Street, City, Country</p>
              <p className="mb-2"><strong>Phone:</strong> +123 456 7890</p>
              <p className="mb-2"><strong>Email:</strong> contact@yourdomain.com</p>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Find Us</h3>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12645.871207024365!2d-122.42064512368353!3d37.77902604247654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b76a3d1ff%3A0x530a9e3e3e4baf87!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600136266213!5m2!1sen!2sus"
              className="w-full h-64 border-0 rounded-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
