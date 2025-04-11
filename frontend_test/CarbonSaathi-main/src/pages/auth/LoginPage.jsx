import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiGithub, FiLinkedin, FiAlertCircle } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [forgotPasswordForm, setForgotPasswordForm] = useState({
    email: '',
    submitted: false,
    error: null
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleForgotPasswordChange = (e) => {
    setForgotPasswordForm({
      ...forgotPasswordForm,
      email: e.target.value,
      error: null
    });
  };
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError(null);
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Demo: Always succeed with these credentials, otherwise fail
      if (loginForm.email === 'demo@carbonsaathi.com' && loginForm.password === 'password123') {
        // Successful login - redirect to dashboard
        navigate('/dashboard');
      } else {
        // Failed login
        setLoginError('Invalid email or password. Please try again.');
      }
    }, 1200);
  };
  
  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    
    if (!forgotPasswordForm.email.trim()) {
      setForgotPasswordForm({
        ...forgotPasswordForm,
        error: 'Please enter your email address.'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setForgotPasswordForm({
        ...forgotPasswordForm,
        submitted: true,
        error: null
      });
    }, 1200);
  };
  
  const handleSocialLogin = (provider) => {
    // In a real app, this would redirect to OAuth flow
    console.log(`Logging in with ${provider}`);
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/dashboard');
    }, 1000);
  };
  
  const resetForgotPassword = () => {
    setForgotPasswordForm({
      email: '',
      submitted: false,
      error: null
    });
    setShowForgotPassword(false);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" 
         style={{ 
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                             url('https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')` 
         }}>
      <div className="w-full max-w-md pt-28 pb-20">
        <motion.div 
          className="bg-white shadow-xl rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6 text-white text-center">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="text-green-100 mt-1">Log in to your CarbonSaathi account</p>
          </div>
          
          {/* Login Form */}
          {!showForgotPassword ? (
            <div className="p-8">
              {loginError && (
                <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded flex items-start">
                  <FiAlertCircle className="mt-0.5 mr-2 flex-shrink-0" />
                  <p>{loginError}</p>
                </div>
              )}
              
              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={loginForm.email}
                      onChange={handleLoginChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiLock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={loginForm.password}
                      onChange={handleLoginChange}
                      className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="••••••••"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="rememberMe"
                      type="checkbox"
                      checked={loginForm.rememberMe}
                      onChange={handleLoginChange}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="text-sm font-medium text-green-600 hover:text-green-500"
                      onClick={() => setShowForgotPassword(true)}
                    >
                      Forgot password?
                    </button>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing in...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                </div>
              </form>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button
                    onClick={() => handleSocialLogin('google')}
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <FcGoogle className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleSocialLogin('linkedin')}
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <FiLinkedin className="h-5 w-5 text-blue-600" />
                  </button>
                  <button
                    onClick={() => handleSocialLogin('github')}
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <FiGithub className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="font-medium text-green-600 hover:text-green-500">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            // Forgot Password
            <div className="p-8">
              {!forgotPasswordForm.submitted ? (
                <>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Reset Your Password</h2>
                    <p className="text-gray-600">
                      Enter your email address and we'll send you a link to reset your password.
                    </p>
                  </div>
                  
                  {forgotPasswordForm.error && (
                    <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded flex items-start">
                      <FiAlertCircle className="mt-0.5 mr-2 flex-shrink-0" />
                      <p>{forgotPasswordForm.error}</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleForgotPasswordSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiMail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="forgot-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={forgotPasswordForm.email}
                          onChange={handleForgotPasswordChange}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between space-x-3">
                      <button
                        type="button"
                        onClick={resetForgotPassword}
                        className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Back to Login
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`flex-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          'Send Reset Link'
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                // Success message
                <div className="text-center py-8">
                  <svg className="mx-auto h-12 w-12 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h2 className="mt-4 text-xl font-semibold text-gray-900">Check Your Email</h2>
                  <p className="mt-2 text-gray-600">
                    We've sent a password reset link to:
                  </p>
                  <p className="mt-1 text-green-600 font-medium">{forgotPasswordForm.email}</p>
                  <p className="mt-4 text-sm text-gray-500">
                    If you don't see it, please check your spam folder.
                  </p>
                  <button
                    onClick={resetForgotPassword}
                    className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Back to Login
                  </button>
                </div>
              )}
            </div>
          )}
          
          {/* Demo Info */}
          <div className="bg-yellow-50 border-t border-yellow-100 p-4 text-sm text-yellow-800">
            <p className="font-medium mb-1">Demo Credentials:</p>
            <p>Email: demo@carbonsaathi.com</p>
            <p>Password: password123</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage; 