import React from 'react';
// import { FaBullhorn, FaVideo, FaChartLine, FaUsers, FaHandsHelping, FaAd, FaCamera } from 'react-icons/fa';
import { motion } from 'framer-motion';
import socialMediaImage from './icons/social_media.png';
import videoShootingImage from './icons/video_shooting.png';
import brandPromotionImage from './icons/brand_promotion.png';
import digitalMarketingImage from './icons/digital_marketing.png';
import onlineEngagementImage from './icons/online_engagement.png';
import communityManagementImage from './icons/community_anagement.png';
import contentCreationImage from './icons/content_creation.png';
import advertisingCampaignsImage from './icons/advertising_campaigns.png';

const ServiceCard = ({ image, title, description }) => (
  <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center transition duration-300 transform hover:scale-105 h-full">
    <div className="relative z-10 text-5xl text-purple-600 dark:text-yellow-500 mb-4">
      <img
        src={image}
        alt="Service Icon"
        className="w-16 h-16 object-contain"
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      image: socialMediaImage,
      title: "Social Media Marketing",
      description: "Strategic campaigns to enhance your online presence and engagement across social media platforms."
    },
    {
      image: videoShootingImage,
      title: "Video Shooting",
      description: "High-quality video production to capture your brand’s story and connect with your audience."
    },
    {
      image: brandPromotionImage,
      title: "Brand Promotion",
      description: "Tailored promotional strategies to increase your brand's visibility and market impact."
    },
    {
      image: digitalMarketingImage,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to drive traffic, leads, and sales for your business."
    },
    {
      image: onlineEngagementImage,
      title: "Online Engagement",
      description: "Engaging content and strategies to build and maintain a strong online community."
    },
    {
      image: communityManagementImage,
      title: "Community Management",
      description: "Dedicated management services to foster and grow your online community effectively."
    },
    {
      image: contentCreationImage,
      title: "Content Creation",
      description: "Creative content development including photography and graphic design to enhance your brand’s narrative."
    },
    {
      image: advertisingCampaignsImage,
      title: "Advertising Campaigns",
      description: "Expertly crafted ad campaigns to reach your target audience and boost conversion rates."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20">
        {/* Hero Text */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-4">
            Accelerate Your
            <span className="relative hidden md:inline-block dark:text-yellow-500 text-purple-600 bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/70 dark:fill-purple-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative block ml-3">Workflow</span>
            </span>
            <span className="dark:text-yellow-500 md:hidden text-purple-500"> Workflow</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our diverse digital solutions designed to elevate your business and create impactful online experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Ready to elevate your digital presence?
          </h2>
          <a
            href="#contactUs"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full transition duration-300 hover:shadow-lg hover:scale-105"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
