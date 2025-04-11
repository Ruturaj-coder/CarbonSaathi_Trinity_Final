import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../layout/Section';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What is CarbonSaathi?',
      answer: 'CarbonSaathi is a comprehensive AI-powered platform that helps organizations quantify, track, and reduce their carbon footprint through advanced analytics, personalized insights, and access to a verified carbon marketplace.'
    },
    {
      question: 'How accurate is the carbon footprint calculation?',
      answer: 'Our AI algorithms provide industry-leading accuracy by using activity-level data combined with region-specific emission factors. The system continuously improves through machine learning to provide increasingly precise calculations over time.'
    },
    {
      question: 'Is CarbonSaathi suitable for small businesses?',
      answer: 'Absolutely! CarbonSaathi is designed to scale with your business. We offer plans specifically tailored for small businesses that provide essential features at an accessible price point.'
    },
    {
      question: 'How can I offset my remaining carbon emissions?',
      answer: 'CarbonSaathi provides access to a curated marketplace of verified carbon offset projects. You can easily purchase carbon credits from projects that align with your organization\'s values and sustainability goals.'
    },
    {
      question: 'What reporting capabilities does CarbonSaathi offer?',
      answer: 'Our platform generates detailed, customizable reports that are compliant with major sustainability frameworks and standards. These reports can be used for internal decision-making, stakeholder communication, and regulatory compliance.'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-green-100/40 blur-3xl z-0"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl z-0"></div>
      <div className="absolute top-1/4 right-1/3 w-56 h-56 rounded-full bg-purple-100/30 blur-2xl z-0"></div>
      <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-cyan-100/30 blur-2xl z-0"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-0">
        <svg className="w-full h-full" width="100%" height="100%">
          <pattern id="faq-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="faq-circle" cx="20" cy="20" r="1" fill="#111827"></circle>
          </pattern>
          <rect width="100%" height="100%" fill="url(#faq-pattern)"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-600">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about CarbonSaathi's platform and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
                variants={itemVariants}
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <span className="flex-shrink-0 ml-2 text-gray-500">
                      <svg
                        className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Contact Our Support Team
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 