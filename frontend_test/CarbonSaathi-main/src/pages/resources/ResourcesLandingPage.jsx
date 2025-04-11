import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiBook, 
  FiVideo, 
  FiTool, 
  FiFileText, 
  FiSearch, 
  FiMail,
  FiChevronRight
} from 'react-icons/fi';

const ResourcesLandingPage = () => {
  const categories = [
    {
      id: 1,
      title: 'Blog Articles',
      description: 'Stay updated with the latest industry news, case studies, best practices, and expert insights on sustainability and carbon management.',
      icon: <FiBook size={32} />,
      link: '/resources/blog',
      color: 'bg-emerald-50 text-emerald-600',
      count: '24+ articles'
    },
    {
      id: 2,
      title: 'Video Library',
      description: 'Watch expert presentations, tutorials, case studies, and webinars on sustainability practices and climate action strategies.',
      icon: <FiVideo size={32} />,
      link: '/resources/videos',
      color: 'bg-blue-50 text-blue-600',
      count: '30+ videos'
    },
    {
      id: 3,
      title: 'Guides & Tutorials',
      description: 'Comprehensive resources to help you understand and implement sustainable practices across your organization.',
      icon: <FiBook size={32} />,
      link: '/resources/guides',
      color: 'bg-violet-50 text-violet-600',
      count: '15+ guides'
    },
    {
      id: 4,
      title: 'Tools & Calculators',
      description: 'Interactive tools to help you measure, analyze, and improve your organization\'s environmental impact and sustainability performance.',
      icon: <FiTool size={32} />,
      link: '/resources/tools',
      color: 'bg-amber-50 text-amber-600',
      count: '12+ tools'
    },
    {
      id: 5,
      title: 'Research & Reports',
      description: 'Access cutting-edge research papers, industry reports, and whitepapers on climate action and sustainable business practices.',
      icon: <FiFileText size={32} />,
      link: '/resources/research',
      color: 'bg-rose-50 text-rose-600',
      count: '18+ papers'
    }
  ];
  
  const featuredResources = [
    {
      id: 1,
      title: 'The Complete Guide to Carbon Accounting',
      type: 'Guide',
      typeIcon: <FiBook size={16} />,
      image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/resources/guides/complete-carbon-accounting'
    },
    {
      id: 2,
      title: 'Carbon Markets in 2023: Trends and Opportunities',
      type: 'Research',
      typeIcon: <FiFileText size={16} />,
      image: 'https://images.unsplash.com/photo-1534470394-5845e082420a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/resources/research/carbon-markets-trends'
    },
    {
      id: 3,
      title: 'Setting Up Your ESG Reporting Framework',
      type: 'Video',
      typeIcon: <FiVideo size={16} />,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/resources/videos/esg-reporting-framework'
    }
  ];

  return (
    <div className="bg-white py-12 md:py-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sustainability Knowledge Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of resources to help you navigate your sustainability journey and drive meaningful climate action.
          </p>
          
          {/* Search Box */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <FiSearch className="absolute left-4 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search all resources..."
                className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150"
              />
              <button className="absolute right-2 bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-150">
                Search
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Categories */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={category.link}
                  className="block h-full p-6 border border-gray-200 rounded-xl hover:shadow-lg transition duration-300 bg-white"
                >
                  <div className={`w-14 h-14 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-between">
                    {category.title}
                    <span className="text-sm font-medium text-gray-500">
                      {category.count}
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-green-600 font-medium">
                    Browse resources <FiChevronRight className="ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Featured Resources */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            Featured Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={resource.link}
                  className="block overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-white py-1 px-3 rounded-full flex items-center text-sm font-medium text-gray-700">
                      {resource.typeIcon}
                      <span className="ml-1">{resource.type}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                      {resource.title}
                    </h3>
                    <div className="flex items-center text-green-600 font-medium">
                      Read more <FiChevronRight className="ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-green-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <FiMail size={40} className="mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Our Resource Library</h2>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to our newsletter to receive the latest sustainability resources, insights, and updates directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full py-3 px-4 rounded-full border-none focus:ring-2 focus:ring-white/50 bg-white/20 text-white placeholder-white/70"
              />
              <button className="whitespace-nowrap bg-white text-green-600 py-3 px-6 rounded-full font-medium hover:bg-green-50 transition duration-150">
                Subscribe Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourcesLandingPage; 