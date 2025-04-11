import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useState, useEffect } from 'react';
import Section from '../layout/Section';

const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Progress tracking for animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const progressY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Create individual refs for each step to track when they come into view
  const stepRefs = [0, 1, 2, 3].map(() => 
    useInView({ 
      threshold: 0.5, 
      triggerOnce: false 
    })
  );

  // Set active step based on which step is in view
  useEffect(() => {
    stepRefs.forEach(({ inView }, index) => {
      if (inView) {
        setActiveStep(index);
      }
    });
  }, [stepRefs.map(ref => ref.inView)]);

  const steps = [
    {
      number: '01',
      title: 'Connect Your Data Sources',
      description: 'Integrate with your existing systems through our simple API or use our data import tools to get started quickly.',
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      ),
      bgColor: 'from-green-50 to-green-100',
      iconBgColor: 'bg-green-100',
      animation: { x: [-5, 5, -5], transition: { repeat: Infinity, duration: 3 } }
    },
    {
      number: '02',
      title: 'Automated Carbon Calculations',
      description: 'Our AI algorithms analyze your data to accurately calculate your carbon footprint across all operations and activities.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      bgColor: 'from-blue-50 to-blue-100',
      iconBgColor: 'bg-blue-100',
      animation: { rotate: [0, 5, 0, -5, 0], transition: { repeat: Infinity, duration: 5 } }
    },
    {
      number: '03',
      title: 'Discover Reduction Opportunities',
      description: 'Receive personalized recommendations and insights to help you identify the most impactful carbon reduction strategies.',
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      bgColor: 'from-purple-50 to-purple-100',
      iconBgColor: 'bg-purple-100',
      animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 2 } }
    },
    {
      number: '04',
      title: 'Implement & Track Progress',
      description: 'Track your progress over time with real-time dashboards and detailed reports to measure the impact of your initiatives.',
      icon: (
        <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      bgColor: 'from-teal-50 to-teal-100', 
      iconBgColor: 'bg-teal-100',
      animation: { y: [0, -5, 0], transition: { repeat: Infinity, duration: 3 } }
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

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

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 w-1/3 h-1/3 bg-green-100/30 rounded-full blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-blue-100/30 rounded-full blur-3xl -z-10 transform translate-x-1/4 translate-y-1/4"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <svg className="w-full h-full" width="100%" height="100%">
          <pattern id="how-it-works-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="how-it-works-circle" cx="20" cy="20" r="1" fill="currentColor"></circle>
          </pattern>
          <rect width="100%" height="100%" fill="url(#how-it-works-pattern)"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            How <span className="text-green-700 relative">
              CarbonSaathi
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-green-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span> Works
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our platform makes carbon tracking and reduction simple and effective
          </motion.p>
        </div>

        {/* Process Steps */}
        <motion.div 
          className="relative"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Timeline connector - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-1 bg-gray-200 transform -translate-x-1/2 z-0 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-green-300 to-green-500 rounded-full"
              style={{ height: progressY }}
            />
          </div>
          
          {/* Timeline connector - Mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-8 w-1 bg-gray-200 z-0 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-green-300 to-green-500 rounded-full"
              style={{ height: progressY }}
            />
          </div>

          {/* Mobile steps indicator */}
          <div className="flex md:hidden justify-center gap-2 mb-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={`indicator-${idx}`}
                className={`w-2 h-2 rounded-full ${activeStep >= idx ? 'bg-green-500' : 'bg-gray-300'}`}
                animate={activeStep >= idx ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              ref={stepRefs[index].ref}
              className={`relative z-10 flex ${windowWidth >= 768 ? 
                `flex-row items-center mb-20 last:mb-0 ${index % 2 === 1 ? 'flex-row-reverse' : ''}` : 
                'flex-row mb-16 last:mb-0 pl-16'}`}
              variants={stepVariants}
            >
              {/* Step number in circle */}
              <motion.div 
                className={`flex-shrink-0 w-16 h-16 ${step.iconBgColor} rounded-full flex items-center justify-center mb-0 z-10 
                  ${windowWidth >= 768 ? '' : 'absolute left-0 top-0'}`}
                initial={{ boxShadow: "0 0 0 0px rgba(74, 222, 128, 0)" }}
                animate={stepRefs[index].inView ? 
                  { boxShadow: "0 0 0 6px rgba(74, 222, 128, 0.2)" } : 
                  { boxShadow: "0 0 0 0px rgba(74, 222, 128, 0)" }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-green-700 font-bold text-xl">{step.number}</span>
              </motion.div>
              
              {/* Content */}
              <div className={windowWidth >= 768 ? 
                `md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}` : 
                'w-full'}>
                <motion.div 
                  className={`bg-gradient-to-br ${step.bgColor} p-6 rounded-xl shadow-lg ${index % 2 === 0 && windowWidth >= 768 ? 'md:ml-auto' : ''}`}
                  whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)" }}
                  animate={stepRefs[index].inView ? step.animation : {}}
                >
                  <div className={`flex items-center mb-4 ${index % 2 === 0 && windowWidth >= 768 ? 'md:justify-end' : ''}`}>
                    <div className={`mr-4 ${index % 2 === 0 && windowWidth >= 768 ? 'md:order-2 md:ml-4 md:mr-0' : ''}`}>
                      <motion.div 
                        className="p-3 rounded-full bg-white shadow-md"
                        animate={stepRefs[index].inView ? 
                          { boxShadow: ["0 4px 12px rgba(0, 0, 0, 0.1)", "0 4px 20px rgba(0, 0, 0, 0.2)", "0 4px 12px rgba(0, 0, 0, 0.1)"] } : 
                          {}}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        {step.icon}
                      </motion.div>
                    </div>
                    <h3 className={`text-xl font-bold ${index % 2 === 0 && windowWidth >= 768 ? 'md:order-1' : ''}`}>{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
                
                {/* Step connector for mobile */}
                {index < steps.length - 1 && windowWidth < 768 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 h-[calc(100%-4rem)] bg-gray-200 z-0">
                    <motion.div 
                      className="absolute top-0 left-0 w-full bg-green-400 rounded-full"
                      initial={{ height: "0%" }}
                      animate={stepRefs[index].inView ? { height: "100%" } : { height: "0%" }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                  </div>
                )}
              </div>
              
              {/* Empty space for opposite side on desktop */}
              {windowWidth >= 768 && (
                <div className="hidden md:block md:w-5/12">
                  {/* Connection line for desktop alternate layout */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className={`absolute w-12 h-0.5 bg-gray-200 top-8 ${index % 2 === 0 ? 'left-[calc(50%-6rem)]' : 'right-[calc(50%-6rem)]'} z-0`}
                      initial={{ width: 0 }}
                      animate={stepRefs[index].inView ? { width: "6rem" } : { width: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <motion.div 
                        className="absolute top-0 left-0 h-full bg-green-400 rounded-full"
                        initial={{ width: "0%" }}
                        animate={stepRefs[index].inView ? { width: "100%" } : { width: "0%" }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      />
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
          
          {/* Final CTA */}
          <motion.div 
            className="text-center mt-28"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a 
              href="#" 
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-md inline-block font-medium hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-700/20 relative z-20"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Carbon Journey
            </motion.a>
            <div className="mt-4 text-gray-500 text-sm">Join 1,000+ companies reducing their carbon footprint</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 