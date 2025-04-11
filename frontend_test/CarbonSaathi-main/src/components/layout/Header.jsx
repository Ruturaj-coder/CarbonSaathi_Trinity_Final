import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import Container from './Container';
import Button from '../ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Get the current active path for highlighting
  const currentPath = location.pathname;

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Initial check - if not on homepage, always show solid header
    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      handleScroll();
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Navigation links structure
  const navLinks = [
    { 
      text: 'Home', 
      href: '/',
      type: 'link'
    },
    { 
      text: 'Solutions', 
      type: 'dropdown',
      children: [
        { text: 'Carbon Quantification', href: '/solutions/carbon-quantification' },
        { text: 'Carbon Sinks & Offsets', href: '/solutions/carbon-sinks-offsets' },
        { text: 'Pathway Simulation', href: '/solutions/pathway-simulation' },
        { text: 'Marketplaces', href: '/solutions/marketplaces' },
        { text: 'Rewards & Rankings', href: '/solutions/rewards-rankings' },
        { text: 'Data Analytics & Reporting', href: '/solutions/data-analytics' },
      ] 
    },
    { 
      text: 'Resources', 
      type: 'dropdown',
      children: [
        { text: 'Blog', href: '/resources/blog' },
        { text: 'Guides & Whitepapers', href: '/resources/guides' },
        { text: 'Video Tutorials', href: '/resources/videos' },
        { text: 'Carbon Calculation Tools', href: '/resources/calculation-tools' },
        { text: 'Industry Benchmarks', href: '/resources/benchmarks' },
        { text: 'FAQ', href: '/resources/faq' },
      ] 
    },
    { 
      text: 'Pricing', 
      href: '/pricing',
      type: 'link'
    },
    { 
      text: 'Contact', 
      href: '/contact',
      type: 'link'
    },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-black/30 backdrop-blur-md py-5'
      }`}
    >
      {/* Decorative bar at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-400 to-green-600"></div>
      
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className={`w-10 h-10 relative flex items-center justify-center transition-transform group-hover:scale-110 ${isScrolled || !isHomePage ? "text-green-700" : "text-white"}`}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-8 h-8"
              >
                {/* Plant/Tree icon */}
                <path d="M12 22v-7" className={`${isScrolled || !isHomePage ? "stroke-green-700" : "stroke-white"}`}></path>
                <path d="M9 9c1 1 3 1 4 0s1 1 1 1l-3 3-3-3s0-1 1-1z" className={`${isScrolled || !isHomePage ? "stroke-green-700" : "stroke-white"}`}></path>
                <path d="M15 4c-1 1-2.1 1-3 0s-2 1-2 1l3 2 3-2s-1-1-1-1z" className={`${isScrolled || !isHomePage ? "stroke-green-700" : "stroke-white"}`}></path>
                <path d="M9 1v7" className={`${isScrolled || !isHomePage ? "stroke-green-700" : "stroke-white"}`}></path>
                <path d="M15 1v7" className={`${isScrolled || !isHomePage ? "stroke-green-700" : "stroke-white"}`}></path>
                <path d="M9 16c0 0-1 0.5-1 2v4" className={`${isScrolled || !isHomePage ? "stroke-green-600" : "stroke-green-300"}`}></path>
                <path d="M15 16c0 0 1 0.5 1 2v4" className={`${isScrolled || !isHomePage ? "stroke-green-600" : "stroke-green-300"}`}></path>
                {/* Carbon cycle indication - circular path */}
                <path d="M6 9a9 9 0 0 0 9 9" className={`${isScrolled || !isHomePage ? "stroke-green-600" : "stroke-green-300"} opacity-70`}></path>
                <path d="M18 6a9 9 0 0 0-9-3" className={`${isScrolled || !isHomePage ? "stroke-green-600" : "stroke-green-300"} opacity-70`}></path>
              </svg>
            </div>
            <span className={`ml-2 text-xl font-bold transition-colors ${isScrolled || !isHomePage ? 'text-green-700' : 'text-white'} group-hover:text-green-400`}>
              CarbonSaathi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.type === 'link' ? (
                  <Link 
                    to={link.href} 
                    className={`font-medium transition-all relative py-2 group-hover:text-green-600 ${
                      isScrolled || !isHomePage
                        ? currentPath === link.href 
                          ? 'text-green-600 after:w-full' 
                          : 'text-gray-800'
                        : currentPath === link.href 
                          ? 'text-green-300 after:w-full' 
                          : 'text-white'
                    } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 group-hover:after:w-full after:bg-green-500 after:transition-all after:duration-300`}
                  >
                    {link.text}
                  </Link>
                ) : (
                  <div className="relative">
                    <button 
                      className={`font-medium transition-all flex items-center gap-1 py-2 group-hover:text-green-600 ${
                        isScrolled || !isHomePage
                          ? 'text-gray-800' 
                          : 'text-white'
                      }`}
                    >
                      {link.text}
                      <FiChevronDown className="transition-transform group-hover:rotate-180" />
                    </button>
                    
                    {/* Dropdown Menu - appears on hover now */}
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-1 z-50 border-t-2 border-green-500 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                      {link.children.map((child, childIndex) => (
                        <Link 
                          key={childIndex}
                          to={child.href}
                          className={`block px-4 py-3 hover:bg-gray-50 hover:text-green-700 transition-all ${
                            currentPath === child.href ? 'text-green-700 bg-gray-50 border-l-2 border-green-500' : 'text-gray-800'
                          }`}
                        >
                          {child.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              as={Link}
              to="/login"
              variant={isScrolled || !isHomePage ? "outline" : "light"} 
              size="sm" 
              className={isScrolled || !isHomePage 
                ? "border-green-600 text-green-700 hover:bg-green-50" 
                : "border-white text-white hover:bg-white/20 bg-transparent hover:shadow-lg transition-all duration-300"}
            >
              Login
            </Button>
            <Button 
              as={Link}
              to="/signup"
              variant="primary" 
              size="sm" 
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Sign Up Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 ${
              isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white fixed top-[72px] left-0 w-full shadow-lg max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Container className="py-4">
              <nav className="flex flex-col">
                {navLinks.map((link, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-none">
                    {link.type === 'link' ? (
                      <Link 
                        to={link.href}
                        className={`block py-3 font-medium hover:text-green-700 ${
                          currentPath === link.href ? 'text-green-700' : 'text-gray-800'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.text}
                      </Link>
                    ) : (
                      <div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            const newIndex = index === navLinks.findIndex(l => l.type === 'dropdown' && l.text === link.text) ? null : index;
                            setIsMobileMenuOpen(prev => ({...prev, activeDropdown: newIndex}));
                          }}
                          className="flex items-center justify-between w-full py-3 font-medium text-gray-800 hover:text-green-700"
                        >
                          <span>{link.text}</span>
                          <FiChevronDown className={`transition-transform ${isMobileMenuOpen.activeDropdown === index ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isMobileMenuOpen.activeDropdown === index && (
                            <motion.div 
                              className="pl-4 pb-2 border-l-2 border-green-100 ml-2"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {link.children.map((child, childIndex) => (
                                <Link 
                                  key={childIndex}
                                  to={child.href}
                                  className={`block py-2 hover:text-green-700 ${
                                    currentPath === child.href ? 'text-green-700' : 'text-gray-700'
                                  }`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {child.text}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-4 mt-6">
                  <Button as={Link} to="/login" variant="outline" size="sm" className="w-full">Login</Button>
                  <Button as={Link} to="/signup" variant="primary" size="sm" className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600">Sign Up Free</Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 