import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHome, FiBarChart2, FiTrendingUp, FiDatabase, 
  FiShoppingCart, FiAward, FiPieChart, FiSettings, 
  FiLogOut, FiMenu, FiX, FiUser, FiBell, FiSearch,
  FiChevronDown, FiHelpCircle
} from 'react-icons/fi';

const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', icon: FiHome, path: '/dashboard', current: location.pathname === '/dashboard' },
    { name: 'Carbon Quantification', icon: FiBarChart2, path: '/dashboard/quantification', current: location.pathname === '/dashboard/quantification' },
    { name: 'Carbon Sinks & Offsets', icon: FiTrendingUp, path: '/dashboard/sinks', current: location.pathname === '/dashboard/sinks' },
    { name: 'Pathway Simulation', icon: FiDatabase, path: '/dashboard/simulation', current: location.pathname === '/dashboard/simulation' },
    { name: 'Marketplaces', icon: FiShoppingCart, path: '/dashboard/marketplaces', current: location.pathname === '/dashboard/marketplaces' },
    { name: 'Rewards & Rankings', icon: FiAward, path: '/dashboard/rewards', current: location.pathname === '/dashboard/rewards' },
    { name: 'Analytics & Reporting', icon: FiPieChart, path: '/dashboard/analytics', current: location.pathname === '/dashboard/analytics' },
  ];

  const handleLogout = () => {
    // In the future, this would handle logout API call
    navigate('/');
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <motion.aside 
        className={`fixed inset-y-0 left-0 flex flex-col z-50 w-64 bg-green-800 text-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } md:relative md:z-0`}
        initial={false}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between h-16 px-4 bg-green-900">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <img 
              src="https://via.placeholder.com/40?text=CS" 
              alt="CarbonSaathi Logo" 
              className="w-8 h-8"
            />
            <span className="text-lg font-bold">CarbonSaathi</span>
          </Link>
          <button 
            className="md:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* User profile */}
        <div className="flex flex-col items-center p-4 border-b border-green-700">
          <div className="relative">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="User profile" 
              className="w-16 h-16 rounded-full border-2 border-white"
            />
            <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-400 rounded-full ring-2 ring-white"></span>
          </div>
          <h3 className="mt-2 text-sm font-medium">Demo User</h3>
          <p className="text-xs text-green-200">Sustainability Manager</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`group flex items-center px-2 py-2 text-sm rounded-md ${
                item.current 
                  ? 'bg-green-700 text-white' 
                  : 'text-white hover:bg-green-700'
              }`}
            >
              <item.icon className={`mr-3 h-5 w-5 ${
                item.current ? 'text-white' : 'text-green-300 group-hover:text-white'
              }`} />
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-green-700">
          <button 
            onClick={() => navigate('/dashboard/settings')}
            className="flex items-center px-2 py-2 text-sm text-white hover:bg-green-700 rounded-md w-full"
          >
            <FiSettings className="mr-3 h-5 w-5 text-green-300" />
            Settings
          </button>
          <button 
            onClick={handleLogout}
            className="flex items-center px-2 py-2 text-sm text-white hover:bg-green-700 rounded-md w-full"
          >
            <FiLogOut className="mr-3 h-5 w-5 text-green-300" />
            Sign out
          </button>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Left section: hamburger & search */}
              <div className="flex items-center">
                <button
                  className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={() => setSidebarOpen(true)}
                >
                  <FiMenu className="h-6 w-6" />
                </button>
                <div className="hidden md:block ml-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiSearch className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      placeholder="Search dashboard..."
                    />
                  </div>
                </div>
              </div>

              {/* Right section: notification & profile dropdown */}
              <div className="flex items-center space-x-4">
                {/* Notifications dropdown */}
                <div className="relative">
                  <button
                    className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={() => {
                      setNotificationsOpen(!notificationsOpen);
                      setUserMenuOpen(false);
                    }}
                  >
                    <span className="relative">
                      <FiBell className="h-6 w-6" />
                      <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                    </span>
                  </button>
                  
                  {notificationsOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1 divide-y divide-gray-100">
                        <div className="px-4 py-3">
                          <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
                        </div>
                        <div className="max-h-64 overflow-y-auto">
                          {[1, 2, 3].map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="block px-4 py-3 hover:bg-gray-50"
                            >
                              <div className="flex items-start">
                                <div className="flex-shrink-0 pt-0.5">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={`https://randomuser.me/api/portraits/men/${20 + item}.jpg`}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-3 w-0 flex-1">
                                  <p className="text-sm font-medium text-gray-900">Weekly report ready</p>
                                  <p className="text-sm text-gray-500">Your emissions report for last week is available.</p>
                                  <p className="mt-1 text-xs text-gray-400">3 hours ago</p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-4 py-2 text-center">
                          <a href="#" className="text-sm font-medium text-green-600 hover:text-green-500">
                            View all notifications
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Profile dropdown */}
                <div className="relative">
                  <button
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                    onClick={() => {
                      setUserMenuOpen(!userMenuOpen);
                      setNotificationsOpen(false);
                    }}
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt=""
                    />
                    <span className="hidden md:block text-sm">Demo User</span>
                    <FiChevronDown className="h-4 w-4" />
                  </button>
                  
                  {userMenuOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                          Your Profile
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                          Settings
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                          Support
                        </a>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Help button */}
                <button className="text-gray-500 hover:text-gray-700">
                  <FiHelpCircle className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 