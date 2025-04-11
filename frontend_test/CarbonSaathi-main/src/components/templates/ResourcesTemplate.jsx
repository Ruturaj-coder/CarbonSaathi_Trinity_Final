import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiSearch, FiFilter } from 'react-icons/fi';

/**
 * Resources Template - Reusable template for resources pages like blog, guides, videos, etc.
 */
const ResourcesTemplate = ({
  title,
  description,
  items,
  categories = [],
  tags = [],
  resourceType = 'article', // article, guide, video, tool, etc.
  showSearch = true,
  showFilters = true,
  ctaText = "Subscribe to Updates",
  ctaLink = "/contact"
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [isFilterMobileOpen, setIsFilterMobileOpen] = useState(false);

  // Add 'All' to the filter options
  const allCategories = ['All', ...categories];
  const allTags = ['All', ...tags];

  // Filter the items based on search and filters
  const filteredItems = items
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
    .filter(item => selectedTag === 'All' || item.tags.includes(selectedTag));
  
  // Function to render the appropriate item card based on resourceType
  const renderCard = (item, index) => {
    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.4, delay: index * 0.1 } 
      }
    };

    switch(resourceType) {
      case 'article':
        return (
          <motion.div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            variants={cardVariants}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-green-600">{item.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{item.tags.length - 2}
                    </span>
                  )}
                </div>
                <Link to={item.link} className="text-green-600 font-medium hover:text-green-700">
                  Read More →
                </Link>
              </div>
            </div>
          </motion.div>
        );
      
      case 'video':
        return (
          <motion.div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            variants={cardVariants}
          >
            <div className="aspect-video relative">
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-green-600/80 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent border-l-[14px] border-l-white ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                {item.duration}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{item.date}</span>
                <Link to={item.link} className="text-green-600 font-medium hover:text-green-700">
                  Watch Video →
                </Link>
              </div>
            </div>
          </motion.div>
        );

      case 'guide':
        return (
          <motion.div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            variants={cardVariants}
          >
            <div className="p-6">
              <div className="bg-green-50 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{item.readTime}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                  <span>{item.downloadCount} downloads</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {item.category}
                </div>
                <Link to={item.link} className="text-green-600 font-medium hover:text-green-700 flex items-center gap-1">
                  <span>Download</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        );

      case 'tool':
        return (
          <motion.div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            variants={cardVariants}
          >
            <div className="p-6">
              <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              {item.features && item.features.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.features.map((feature, idx) => (
                    <span key={idx} className="flex items-center gap-1 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
              )}
              <Link 
                to={item.link} 
                className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors"
              >
                Try This Tool
              </Link>
            </div>
          </motion.div>
        );

      default:
        return (
          <motion.div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            variants={cardVariants}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Link to={item.link} className="text-green-600 font-medium hover:text-green-700">
                View Resource →
              </Link>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 pb-12">
        <div className="container mx-auto px-4 pt-10 pb-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="text-gray-600 text-lg mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {description}
            </motion.p>

            {showSearch && (
              <motion.div 
                className="relative max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <input
                  type="text"
                  placeholder={`Search ${resourceType}s...`}
                  className="w-full px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none pl-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            {showFilters && (
              <motion.div 
                className="hidden md:block w-64 flex-shrink-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">Filters</h3>
                  
                  {/* Categories */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 text-gray-700">Categories</h4>
                    <div className="space-y-2">
                      {allCategories.map(category => (
                        <label key={category} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="category"
                            className="form-radio text-green-600 focus:ring-green-500 h-4 w-4"
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                          />
                          <span className="ml-2 text-gray-600">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div>
                    <h4 className="font-medium mb-2 text-gray-700">Tags</h4>
                    <div className="space-y-2">
                      {allTags.map(tag => (
                        <label key={tag} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="tag"
                            className="form-radio text-green-600 focus:ring-green-500 h-4 w-4"
                            checked={selectedTag === tag}
                            onChange={() => setSelectedTag(tag)}
                          />
                          <span className="ml-2 text-gray-600">{tag}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Reset Filters */}
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedTag('All');
                    }}
                    className="mt-6 text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Reset Filters
                  </button>
                </div>
              </motion.div>
            )}
            
            {/* Mobile Filters Button */}
            {showFilters && (
              <div className="md:hidden mb-4">
                <button
                  onClick={() => setIsFilterMobileOpen(!isFilterMobileOpen)}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 text-gray-700 font-medium"
                >
                  <FiFilter />
                  <span>Filters</span>
                </button>
                
                {/* Mobile Filters Panel */}
                {isFilterMobileOpen && (
                  <div className="mt-2 bg-white rounded-lg shadow-md p-4">
                    {/* Categories */}
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-gray-700">Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        {allCategories.map(category => (
                          <button
                            key={category}
                            className={`px-3 py-1 rounded-full text-sm ${
                              selectedCategory === category
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div>
                      <h4 className="font-medium mb-2 text-gray-700">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {allTags.map(tag => (
                          <button
                            key={tag}
                            className={`px-3 py-1 rounded-full text-sm ${
                              selectedTag === tag
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                            onClick={() => setSelectedTag(tag)}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Resources Grid */}
            <div className="flex-grow">
              {filteredItems.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">No results found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                      setSelectedTag('All');
                    }}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Reset all filters
                  </button>
                </div>
              ) : (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {filteredItems.map((item, index) => renderCard(item, index))}
                </motion.div>
              )}

              {/* Pagination */}
              {filteredItems.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
                      &lt;
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white">
                      1
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
                      2
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
                      3
                    </button>
                    <span className="mx-2">...</span>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
                      10
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
                      &gt;
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Stay Up to Date</h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates, articles, and resources directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors whitespace-nowrap"
                >
                  {ctaText}
                </button>
              </form>
              <p className="text-green-200 text-sm mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

ResourcesTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  categories: PropTypes.array,
  tags: PropTypes.array,
  resourceType: PropTypes.oneOf(['article', 'guide', 'video', 'tool']),
  showSearch: PropTypes.bool,
  showFilters: PropTypes.bool,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

export default ResourcesTemplate; 