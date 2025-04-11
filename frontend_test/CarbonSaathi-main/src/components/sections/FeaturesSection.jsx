import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturesSection = () => {
  const features = [
    {
      title: 'AI-Powered Carbon Quantification',
      description: 'Advanced algorithms calculate your carbon footprint from activity-wise inputs, using industry-specific emission factors for unparalleled accuracy.',
      icon: (
        <svg className="w-14 h-14 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
      hoverColor: 'group-hover:text-green-700',
      gradient: 'from-green-500/20 to-transparent'
    },
    {
      title: 'Carbon Sink Assessment',
      description: 'Analyze and optimize your existing carbon sinks with gap analysis and AI recommendations for additional natural and technological offset solutions.',
      icon: (
        <svg className="w-14 h-14 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      ),
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      hoverColor: 'group-hover:text-blue-700',
      gradient: 'from-blue-500/20 to-transparent'
    },
    {
      title: 'Interactive Pathway Simulation',
      description: 'Model various emission reduction strategies with our dynamic simulation tools to visualize different paths to carbon neutrality in real-time.',
      icon: (
        <svg className="w-14 h-14 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      color: 'from-cyan-50 to-cyan-100',
      borderColor: 'border-cyan-200',
      hoverColor: 'group-hover:text-cyan-700',
      gradient: 'from-cyan-500/20 to-transparent'
    },
    {
      title: 'Blockchain-Backed Marketplace',
      description: 'Access secure trading platforms for carbon credits with transparent verification and seamless transactions with local and global offset providers.',
      icon: (
        <svg className="w-14 h-14 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
        </svg>
      ),
      color: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
      hoverColor: 'group-hover:text-purple-700',
      gradient: 'from-purple-500/20 to-transparent'
    },
    {
      title: 'Gamified Rewards & Rankings',
      description: 'Track and compare your sustainability performance against industry benchmarks with our gamified incentive system that drives continuous improvement.',
      icon: (
        <svg className="w-14 h-14 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
        </svg>
      ),
      color: 'from-yellow-50 to-yellow-100',
      borderColor: 'border-yellow-200',
      hoverColor: 'group-hover:text-yellow-700',
      gradient: 'from-yellow-500/20 to-transparent'
    },
    {
      title: 'AI-Powered Analytics & Insights',
      description: 'Our comprehensive dashboards provide exportable reports, predictive analytics, and AI-generated plain language insights to support decision-making.',
      icon: (
        <svg className="w-14 h-14 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      color: 'from-indigo-50 to-indigo-100',
      borderColor: 'border-indigo-200',
      hoverColor: 'group-hover:text-indigo-700',
      gradient: 'from-indigo-500/20 to-transparent'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const featureVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with texture and gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0"></div>
      
      {/* These are the existing background elements, we'll keep them */}
      <div className="absolute -left-24 -top-24 w-64 h-64 bg-green-100 rounded-full opacity-30 blur-3xl z-0"></div>
      <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl z-0"></div>
      
      {/* Additional background elements */}
      <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-cyan-100 rounded-full opacity-20 blur-2xl z-0"></div>
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-yellow-100 rounded-full opacity-20 blur-2xl z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <svg className="w-full h-full" width="100%" height="100%">
          <pattern id="features-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="features-circle" cx="20" cy="20" r="1" fill="currentColor"></circle>
          </pattern>
          <rect width="100%" height="100%" fill="url(#features-pattern)"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="relative z-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">Powerful Features</span>
              {" "}for Carbon Neutrality
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              CarbonSaathi provides a comprehensive suite of tools to help your organization measure, analyze, optimize, and offset your carbon footprint on the journey to sustainability.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Staggered grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`group relative bg-gradient-to-br ${feature.color} border ${feature.borderColor} rounded-xl p-8 shadow-lg transition-all duration-300 overflow-hidden`}
                variants={featureVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 }
                }}
              >
                {/* Background decoration */}
                <div className={`absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tl ${feature.gradient} rounded-full opacity-50 -mr-10 -mb-10 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12`}></div>
                
                <div className="relative z-10">
                  <div className={`flex items-center justify-center h-20 w-20 rounded-full bg-white mb-6 mx-auto shadow-inner shadow-gray-100 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    {React.cloneElement(feature.icon, { className: `w-14 h-14 transition-colors duration-300 ${feature.hoverColor}` })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center transition-colors duration-300 group-hover:text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-center transition-colors duration-300 group-hover:text-gray-700">{feature.description}</p>
                </div>
                
                {/* Learn more link */}
                <div className="mt-6 text-center">
                  <a href="#" className={`inline-flex items-center text-sm font-medium opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 ${feature.hoverColor}`}>
                    Learn more
                    <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="#" className="bg-gradient-to-r from-green-700 to-green-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-green-700/30 transition-all duration-300 hover:-translate-y-1 inline-flex items-center group">
              <span>Explore All Features</span>
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 