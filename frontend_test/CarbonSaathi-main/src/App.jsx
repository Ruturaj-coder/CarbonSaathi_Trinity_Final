import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/utils/ScrollToTop'

// Home/Landing Page components
import HomePage from './pages/HomePage'

// Solution pages
import CarbonQuantificationPage from './pages/solutions/CarbonQuantificationPage'
import CarbonSinksPage from './pages/solutions/CarbonSinksPage'
import PathwaySimulationPage from './pages/solutions/PathwaySimulationPage'
import MarketplacesPage from './pages/solutions/MarketplacesPage'
import RewardsRankingsPage from './pages/solutions/RewardsRankingsPage'
import DataAnalyticsPage from './pages/solutions/DataAnalyticsPage'

// Resource pages
import BlogPage from './pages/resources/BlogPage'
import GuidesPage from './pages/resources/GuidesPage'
import VideosPage from './pages/resources/VideosPage'
import CalculationToolsPage from './pages/resources/CalculationToolsPage'
import BenchmarksPage from './pages/resources/BenchmarksPage'
import FAQPage from './pages/resources/FAQPage'

// Other pages
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import NotFoundPage from './pages/NotFoundPage'

import './App.css'

function App() {
  // Set a CSS variable for header height to use in the mobile menu
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerHeight = document.querySelector('header')?.offsetHeight || 80;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />
            
            {/* Solution Pages */}
            <Route path="/solutions/carbon-quantification" element={<CarbonQuantificationPage />} />
            <Route path="/solutions/carbon-sinks-offsets" element={<CarbonSinksPage />} />
            <Route path="/solutions/pathway-simulation" element={<PathwaySimulationPage />} />
            <Route path="/solutions/marketplaces" element={<MarketplacesPage />} />
            <Route path="/solutions/rewards-rankings" element={<RewardsRankingsPage />} />
            <Route path="/solutions/data-analytics" element={<DataAnalyticsPage />} />
            
            {/* Resource Pages */}
            <Route path="/resources/blog" element={<BlogPage />} />
            <Route path="/resources/guides" element={<GuidesPage />} />
            <Route path="/resources/videos" element={<VideosPage />} />
            <Route path="/resources/calculation-tools" element={<CalculationToolsPage />} />
            <Route path="/resources/benchmarks" element={<BenchmarksPage />} />
            <Route path="/resources/faq" element={<FAQPage />} />
            
            {/* Other Pages */}
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
