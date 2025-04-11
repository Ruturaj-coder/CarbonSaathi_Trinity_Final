import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <div className="mt-5">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link 
              to="/"
              className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-md font-medium hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-700/20"
            >
              Return to Home
            </Link>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-green-100 rounded-full blur-3xl -z-10 opacity-30"></div>
      </div>
    </div>
  );
};

export default NotFoundPage; 