import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiMinus, FiHelpCircle, FiFileText, FiBarChart, FiPieChart, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('annually'); // 'annually' or 'monthly'
  const [companySize, setCompanySize] = useState(100); // Default employees
  const [estimatedEmissions, setEstimatedEmissions] = useState(500); // Default tCO2e/year
  const [selectedPlan, setSelectedPlan] = useState('business');

  // Discount percentage for annual billing
  const annualDiscount = 20;

  // Pricing plans data
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses taking their first steps toward carbon neutrality',
      monthlyPrice: 199,
      annualPrice: 159, // With discount applied
      features: [
        { name: 'Up to 3 users', included: true },
        { name: 'Basic carbon calculation', included: true },
        { name: 'Scope 1 & 2 emissions tracking', included: true },
        { name: 'Manual data entry', included: true },
        { name: 'Basic reporting', included: true },
        { name: 'Email support', included: true },
        { name: 'API access', included: false },
        { name: 'Automated data collection', included: false },
        { name: 'Scope 3 emissions tracking', included: false },
        { name: 'Custom dashboards', included: false },
        { name: 'Advanced analytics', included: false },
      ],
      cta: 'Start Free Trial',
      highlight: false,
    },
    {
      id: 'business',
      name: 'Business',
      description: 'Comprehensive solution for medium-sized businesses serious about sustainability',
      monthlyPrice: 499,
      annualPrice: 399, // With discount applied
      features: [
        { name: 'Up to 10 users', included: true },
        { name: 'Advanced carbon calculation', included: true },
        { name: 'Scope 1 & 2 emissions tracking', included: true },
        { name: 'Basic Scope 3 emissions tracking', included: true },
        { name: 'Automated data collection', included: true },
        { name: 'Custom dashboards', included: true },
        { name: 'API access', included: true },
        { name: 'Basic analytics', included: true },
        { name: 'Priority email & chat support', included: true },
        { name: 'Carbon offset marketplace', included: true },
        { name: 'Advanced analytics', included: false },
      ],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Tailored solution for large organizations with complex carbon accounting needs',
      monthlyPrice: 1299,
      annualPrice: 1039, // With discount applied
      features: [
        { name: 'Unlimited users', included: true },
        { name: 'Full carbon accounting suite', included: true },
        { name: 'Complete Scope 1, 2 & 3 tracking', included: true },
        { name: 'Advanced data automation', included: true },
        { name: 'AI-powered recommendations', included: true },
        { name: 'Advanced analytics & forecasting', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Custom API integration', included: true },
        { name: 'Enterprise SSO', included: true },
        { name: '24/7 priority support', included: true },
        { name: 'On-premise deployment option', included: true },
      ],
      cta: 'Contact Sales',
      highlight: false,
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'How does the pricing work?',
      answer: 'Our pricing is based on a subscription model with three tiers: Starter, Business, and Enterprise. You can choose to pay monthly or annually, with annual billing providing a 20% discount. Each tier includes different features and capabilities to suit businesses of various sizes and carbon management needs.'
    },
    {
      question: 'What happens after my free trial ends?',
      answer: 'At the end of your 14-day free trial, your account will automatically transition to your selected plan. We\'ll send you reminder emails before the trial ends, and you can downgrade, upgrade, or cancel your subscription at any time from your account settings.'
    },
    {
      question: 'Can I switch between plans?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be immediately available, and we\'ll prorate the difference. When downgrading, the change will take effect at the start of your next billing cycle.'
    },
    {
      question: 'Do you offer discounts for non-profits?',
      answer: 'Yes, we offer a 40% discount for registered non-profit organizations and educational institutions. Please contact our sales team with proof of your status to apply for this discount.'
    },
    {
      question: 'How accurate is the ROI calculator?',
      answer: 'The ROI calculator provides an estimate based on industry averages and the information you provide. Actual results may vary depending on your specific circumstances, industry, and how effectively you implement carbon reduction strategies.'
    },
    {
      question: 'Is there a long-term contract?',
      answer: 'No, there are no long-term contracts required. Our plans are subscription-based and can be canceled at any time. Annual billing provides a discount but is not a contract lock-in; you can still cancel and receive a prorated refund for unused months.'
    }
  ];

  // Calculate estimated ROI
  const calculateROI = () => {
    // Simple ROI model - in a real app this would be more sophisticated
    const selectedPlanObj = plans.find(plan => plan.id === selectedPlan);
    const annualCost = selectedPlanObj.annualPrice * 12;
    
    // Estimated savings factors
    const carbonPrice = 50; // Assumed carbon price per tCO2e
    const emissionReductionRate = 0.15; // Assumed 15% reduction with our platform
    const reducedEmissions = estimatedEmissions * emissionReductionRate;
    const carbonSavings = reducedEmissions * carbonPrice;
    
    // Operational efficiency savings (estimated as $X per employee)
    const efficiencyPerEmployee = 80; // $80 savings per employee per year
    const operationalSavings = companySize * efficiencyPerEmployee;
    
    // Calculate total savings and ROI
    const totalSavings = carbonSavings + operationalSavings;
    const netSavings = totalSavings - annualCost;
    const roi = (netSavings / annualCost) * 100;
    
    return {
      reducedEmissions: Math.round(reducedEmissions),
      carbonSavings: Math.round(carbonSavings),
      operationalSavings: Math.round(operationalSavings),
      totalSavings: Math.round(totalSavings),
      netSavings: Math.round(netSavings),
      roi: Math.round(roi)
    };
  };

  const roiData = calculateROI();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center border-b-4 border-green-600 mb-20"
           style={{
             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                              url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
           }}>
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            Choose the perfect plan to help your business achieve its sustainability goals
          </p>
        </div>
      </div>
      
      {/* Pricing Plans Section */}
      <section className="mb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`rounded-xl overflow-hidden shadow-lg ${
                  plan.highlight ? 'ring-2 ring-green-500 relative bg-white' : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 left-0 bg-green-500 text-white text-center text-sm py-1 font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${plan.highlight ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6 min-h-[50px]">{plan.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-gray-500 text-sm mb-1">Starting from</p>
                    <div className="flex items-end">
                      <span className="text-4xl font-bold text-gray-900">${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}</span>
                      <span className="text-gray-600 ml-2 mb-1">/month</span>
                    </div>
                    {billingCycle === 'annually' && (
                      <p className="text-green-600 text-sm mt-1">Billed annually (${plan.annualPrice * 12}/year)</p>
                    )}
                  </div>
                  
                  <Link 
                    to={plan.id === 'enterprise' ? '/contact' : '/signup'}
                    className={`block text-center py-3 px-6 rounded-lg font-medium transition-all w-full mb-8 ${
                      plan.highlight
                        ? 'bg-green-600 hover:bg-green-700 text-white shadow-md'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-semibold mb-4 text-gray-900">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          {feature.included ? (
                            <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                          ) : (
                            <FiMinus className="text-gray-400 mt-1 flex-shrink-0" />
                          )}
                          <span className={`ml-3 ${feature.included ? 'text-gray-800' : 'text-gray-400'}`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ROI Calculator */}
      <section className="mb-20 bg-white py-16 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold mb-4 text-gray-900"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Calculate Your ROI
              </motion.h2>
              <motion.p 
                className="text-gray-600 mx-auto max-w-3xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Estimate your potential return on investment with CarbonSaathi based on your organization's size and emissions profile.
              </motion.p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Calculator Inputs */}
              <motion.div 
                className="lg:w-1/2 bg-gray-50 rounded-xl p-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900">Your Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Select Plan</label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                    >
                      {plans.map(plan => (
                        <option key={plan.id} value={plan.id}>{plan.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Company Size (Employees)</label>
                    <input 
                      type="range" 
                      min="10" 
                      max="2000" 
                      step="10" 
                      value={companySize}
                      onChange={(e) => setCompanySize(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">10</span>
                      <span className="text-sm font-medium text-gray-800">{companySize}</span>
                      <span className="text-sm text-gray-500">2000+</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Estimated Annual Carbon Emissions (tCO2e)</label>
                    <input 
                      type="range" 
                      min="50" 
                      max="10000" 
                      step="50" 
                      value={estimatedEmissions}
                      onChange={(e) => setEstimatedEmissions(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">50</span>
                      <span className="text-sm font-medium text-gray-800">{estimatedEmissions}</span>
                      <span className="text-sm text-gray-500">10,000+</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-sm text-gray-500 flex items-center">
                      <FiHelpCircle className="mr-1" /> 
                      This is an estimate based on industry averages. Your actual results may vary.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Results */}
              <motion.div 
                className="lg:w-1/2 bg-white rounded-xl shadow-md p-8 border border-gray-100"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900">Your Estimated ROI</h3>
                
                <div className="space-y-6">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <h4 className="text-gray-700 mb-2">Annual Return on Investment</h4>
                    <div className="text-4xl font-bold text-green-600">{roiData.roi}%</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg flex flex-col items-center">
                      <div className="bg-blue-100 p-2 rounded-full mb-2">
                        <FiFileText className="text-blue-600" />
                      </div>
                      <h4 className="text-sm text-gray-700 mb-1">Emissions Reduced</h4>
                      <div className="font-bold text-lg">{roiData.reducedEmissions} tCO2e</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg flex flex-col items-center">
                      <div className="bg-green-100 p-2 rounded-full mb-2">
                        <FiBarChart className="text-green-600" />
                      </div>
                      <h4 className="text-sm text-gray-700 mb-1">Carbon Savings</h4>
                      <div className="font-bold text-lg">${roiData.carbonSavings}</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg flex flex-col items-center">
                      <div className="bg-purple-100 p-2 rounded-full mb-2">
                        <FiPieChart className="text-purple-600" />
                      </div>
                      <h4 className="text-sm text-gray-700 mb-1">Operational Savings</h4>
                      <div className="font-bold text-lg">${roiData.operationalSavings}</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg flex flex-col items-center">
                      <div className="bg-orange-100 p-2 rounded-full mb-2">
                        <FiClock className="text-orange-600" />
                      </div>
                      <h4 className="text-sm text-gray-700 mb-1">Net Annual Savings</h4>
                      <div className="font-bold text-lg">${roiData.netSavings}</div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link 
                      to="/contact" 
                      className="block text-center py-3 px-6 rounded-lg font-medium transition-all w-full bg-green-600 hover:bg-green-700 text-white shadow-md"
                    >
                      Get a Detailed ROI Analysis
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold mb-4 text-gray-900"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Frequently Asked Questions
              </motion.h2>
            </div>
            
            <motion.div 
              className="space-y-6"
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
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions about pricing or need a custom solution?</p>
              <Link 
                to="/contact" 
                className="inline-block bg-white border border-green-600 text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-all"
              >
                Contact Our Sales Team
              </Link>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Start Your Carbon Journey?</h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations using CarbonSaathi to measure, track, and reduce their carbon footprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup" 
                className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-all"
              >
                Start Your Free Trial
              </Link>
              <Link 
                to="/contact" 
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all"
              >
                Request a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage; 