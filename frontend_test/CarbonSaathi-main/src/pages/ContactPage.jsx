import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMap, FiPhone, FiMail, FiClock, FiMapPin, FiGlobe, FiMessageCircle, FiCheck } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    reason: 'general', // Default value
    updates: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (Math.random() > 0.1) { // 90% success rate for demo
        setFormSubmitted(true);
        setFormError(false);
      } else {
        setFormError(true);
        setFormSubmitted(false);
      }
      setLoading(false);
    }, 1500);
  };
  
  const resetForm = () => {
    setFormSubmitted(false);
    setFormError(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      reason: 'general',
      updates: false
    });
  };
  
  // Office locations data
  const offices = [
    {
      city: 'Mumbai',
      address: 'Level 12, Platina Building, Block G, Bandra Kurla Complex, Mumbai, 400051',
      phone: '+91 22 4123 4567',
      email: 'mumbai@carbonsaathi.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM IST'
    },
    {
      city: 'Bangalore',
      address: 'WeWork Galaxy, 43 Residency Road, Bangalore, 560025',
      phone: '+91 80 4178 4567',
      email: 'bangalore@carbonsaathi.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM IST'
    },
    {
      city: 'Singapore',
      address: '30 Cecil Street, #19-08 Prudential Tower, Singapore 049712',
      phone: '+65 6812 7890',
      email: 'singapore@carbonsaathi.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center border-b-4 border-green-600 mb-10"
           style={{
             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                              url('https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
           }}>
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            We're here to help you on your sustainability journey
          </p>
        </div>
      </div>
      
      {/* Main Contact Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Contact Form */}
              <div className="md:w-2/3 p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
                  
                  {!formSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Reason for Contact</label>
                        <select
                          id="reason"
                          name="reason"
                          value={formData.reason}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="demo">Request a Demo</option>
                          <option value="sales">Sales Question</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership Opportunity</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          required
                        ></textarea>
                      </div>
                      
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="updates"
                          name="updates"
                          checked={formData.updates}
                          onChange={handleInputChange}
                          className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor="updates" className="ml-2 block text-sm text-gray-600">
                          I'd like to receive updates about products, services, and carbon sustainability news.
                        </label>
                      </div>
                      
                      {formError && (
                        <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                          <p className="text-red-700">There was an error submitting your message. Please try again later.</p>
                        </div>
                      )}
                      
                      <div>
                        <button
                          type="submit"
                          className="inline-flex justify-center items-center w-full md:w-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-300 disabled:cursor-not-allowed transition-colors"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiCheck className="text-green-600 text-2xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600 mb-8">
                        Thank you for contacting us. We'll get back to you as soon as possible.
                      </p>
                      <button
                        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        onClick={resetForm}
                      >
                        Send Another Message
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>
              
              {/* Map and Details */}
              <div className="md:w-1/3 bg-gray-50 p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Location</h2>
                  
                  {/* Embedded Map (Placeholder) */}
                  <div className="bg-gray-200 h-64 mb-8 rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8042219182614!2d72.86508581543594!3d19.02714458712675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf2000000001%3A0xf0a61a640b5a95eb!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="CarbonSaathi Office Location"
                    ></iframe>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FiMapPin className="text-green-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-gray-900">Headquarters</h3>
                        <p className="text-gray-600">Level 12, Platina Building, Block G, Bandra Kurla Complex, Mumbai, 400051</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FiPhone className="text-green-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-gray-900">Phone</h3>
                        <p className="text-gray-600">+91 22 4123 4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FiMail className="text-green-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <p className="text-gray-600">info@carbonsaathi.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FiClock className="text-green-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-gray-900">Business Hours</h3>
                        <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                        <p className="text-gray-600">Sat-Sun: Closed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FiGlobe className="text-green-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-gray-900">Global Support</h3>
                        <p className="text-gray-600">24/7 via email and chat</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Office Locations */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Offices
            </motion.h2>
            <motion.p 
              className="text-gray-600 mx-auto max-w-3xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              CarbonSaathi has physical offices across Asia to better serve our global clients.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <FiMap className="text-green-600 text-xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                </div>
                
                <div className="space-y-3 text-gray-600">
                  <p>{office.address}</p>
                  <p>
                    <span className="font-medium text-gray-700">Phone:</span> {office.phone}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Email:</span> {office.email}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Hours:</span> {office.hours}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 py-16 rounded-2xl mx-4">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Need Immediate Assistance?</h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Our team is ready to help you navigate your carbon management journey.
              Schedule a free consultation call with one of our experts.
            </p>
            <button className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-all">
              Schedule a Call
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 