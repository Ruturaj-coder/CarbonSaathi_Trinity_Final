import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Solution Template - Reusable template for all solution pages
 */
const SolutionTemplate = ({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  workflowSteps,
  visualization,
  ctaText = "Get Started with This Solution",
  ctaLink = "/contact",
  decorationPosition = "right" // 'right' or 'left'
}) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-24 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className={`absolute ${decorationPosition === 'right' ? 'right-0' : 'left-0'} top-0 w-1/2 h-full bg-gradient-to-br from-green-50 to-green-100 -z-10 opacity-70 rounded-bl-3xl transform -skew-x-12`}></div>
        <div className="absolute inset-0 -z-10">
          <svg className="w-full h-full opacity-5" width="100%" height="100%">
            <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="20" cy="20" r="1" fill="currentColor"></circle>
            </pattern>
            <rect width="100%" height="100%" fill="url(#hero-pattern)"></rect>
          </svg>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
              <p className="text-xl text-green-700 font-medium mb-6">{subtitle}</p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{description}</p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to={ctaLink} 
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-md font-medium hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-700/20"
                >
                  {ctaText}
                </Link>
                <Link 
                  to="/contact" 
                  className="border border-green-600 text-green-700 px-8 py-3 rounded-md font-medium hover:bg-green-50 transition-all"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <img 
                  src={heroImage} 
                  alt={title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore the powerful capabilities that make this solution stand out
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-green-200 via-green-500 to-green-200 opacity-40"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              How this solution creates real value for your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex gap-5"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0 bg-green-100 text-green-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A step-by-step guide to using this solution effectively
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 z-0 hidden md:block"></div>
            
            <div className="space-y-16 relative z-10">
              {workflowSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="md:w-1/2 flex justify-center">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-md">
                      <img src={step.image} alt={step.title} className="w-full h-auto" />
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 flex flex-col justify-center relative">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 top-1/2 w-6 h-6 rounded-full bg-green-500 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"></div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="text-2xl font-bold mb-3">
                        <span className="text-green-600">Step {index + 1}: </span>{step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      {step.keyPoints && (
                        <ul className="space-y-2">
                          {step.keyPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Visualization */}
      {visualization && (
        <section className="py-16 md:py-24 bg-gray-50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Visualization showing the solution working in real-time
              </p>
            </div>
            
            <motion.div
              className="bg-white rounded-xl shadow-xl overflow-hidden mx-auto max-w-5xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {visualization && (
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{visualization.title}</h3>
                  <p className="text-gray-600 mb-6">{visualization.description}</p>
                  <div className="aspect-video w-full">
                    <iframe 
                      src={visualization.embedUrl} 
                      title={visualization.title}
                      className="w-full h-full rounded-md"
                      allowFullScreen
                    ></iframe>
                  </div>
                  {visualization.caption && (
                    <p className="text-sm text-gray-500 mt-3 italic">{visualization.caption}</p>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-700 to-green-900 text-white relative">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" width="100%" height="100%">
            <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="cta-circle" cx="20" cy="20" r="1" fill="currentColor"></circle>
            </pattern>
            <rect width="100%" height="100%" fill="url(#cta-pattern)"></rect>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Sustainability Strategy?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations using our platform to achieve their carbon neutrality goals
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to={ctaLink}
                className="bg-white text-green-800 px-8 py-3 rounded-md font-medium hover:bg-green-100 transition-all shadow-lg"
              >
                {ctaText}
              </Link>
              <Link 
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-all"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

SolutionTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  heroImage: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  workflowSteps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      keyPoints: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  visualization: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    embedUrl: PropTypes.string.isRequired,
    caption: PropTypes.string
  }),
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  decorationPosition: PropTypes.oneOf(['left', 'right'])
};

export default SolutionTemplate; 