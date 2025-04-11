import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../layout/Section';

const StatsSection = () => {
  const stats = [
    {
      number: '15M+', 
      label: 'Tons of CO2 Tracked', 
      color: 'bg-gradient-to-br from-green-50 to-green-100',
      borderColor: 'border-green-200',
      iconColor: 'text-green-700',
      shadow: 'shadow-green-700/20',
      icon: (
        <svg className="w-12 h-12 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      gradient: 'from-green-500/20 to-transparent'
    },
    {
      number: '500+', 
      label: 'Organizations Onboarded', 
      color: 'bg-gradient-to-br from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
      shadow: 'shadow-blue-600/20',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
      gradient: 'from-blue-500/20 to-transparent'
    },
    {
      number: '30%', 
      label: 'Average Emission Reduction', 
      color: 'bg-gradient-to-br from-cyan-50 to-cyan-100',
      borderColor: 'border-cyan-200',
      iconColor: 'text-cyan-600',
      shadow: 'shadow-cyan-600/20',
      icon: (
        <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
        </svg>
      ),
      gradient: 'from-cyan-500/20 to-transparent'
    },
    {
      number: '24/7', 
      label: 'Real-time Monitoring', 
      color: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
      borderColor: 'border-yellow-200',
      iconColor: 'text-yellow-600',
      shadow: 'shadow-yellow-600/20',
      icon: (
        <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      gradient: 'from-yellow-500/20 to-transparent'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with texture and decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-100 rounded-full opacity-30 blur-3xl z-0 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100 rounded-full opacity-30 blur-3xl z-0 transform -translate-x-1/4 translate-y-1/4"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <svg className="w-full h-full" width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="20" cy="20" r="1" fill="currentColor"></circle>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      <motion.div
        className="container mx-auto px-4 md:px-8 relative z-10"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={counterVariants}
            >
              Making a <span className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">Measurable Impact</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-3xl mx-auto"
              variants={counterVariants}
            >
              Our platform has helped organizations around the world measure, track, and reduce their carbon footprint with impressive results.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`group relative ${stat.color} border ${stat.borderColor} rounded-xl p-6 text-center transition-all duration-300 overflow-hidden ${stat.shadow} hover:shadow-lg`}
              variants={counterVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
            >
              {/* Background decoration */}
              <div className={`absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tl ${stat.gradient} rounded-full opacity-50 -mr-10 -mb-10 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12`}></div>
              
              <div className="flex flex-col items-center relative z-10">
                <div className={`flex items-center justify-center h-20 w-20 rounded-full bg-white mb-4 mx-auto shadow-inner shadow-gray-100 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {React.cloneElement(stat.icon, { className: `w-12 h-12 transition-colors duration-300 ${stat.iconColor}` })}
                </div>
                <motion.div 
                  className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-600"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: inView ? 1 : 0, 
                    scale: inView ? 1 : 0.5,
                    transition: { 
                      delay: index * 0.1 + 0.5,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100
                    }
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-base md:text-lg text-gray-700 font-medium transition-colors duration-300 group-hover:text-gray-900">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional info */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="py-4 px-6 bg-green-50 border border-green-200 rounded-lg inline-block">
            <p className="text-green-800 font-medium">
              <span className="font-semibold">2023 Impact Report:</span> Our clients collectively reduced emissions equivalent to planting 2.5 million trees.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StatsSection; 