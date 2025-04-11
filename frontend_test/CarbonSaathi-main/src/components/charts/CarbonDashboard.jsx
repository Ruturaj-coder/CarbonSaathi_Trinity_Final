import { motion } from 'framer-motion';
import EmissionsBarChart from './EmissionsBarChart';
import EmissionsSourcesChart from './EmissionsSourcesChart';
import ProgressGaugeChart from './ProgressGaugeChart';

const CarbonDashboard = () => {
  // Sample emissions data for the bar chart
  const emissionsData = [38, 42, 35, 30, 25, 28, 32, 29, 27, 24];
  const emissionsLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  
  // Sample sources data for the doughnut chart
  const sourcesData = [45, 25, 15, 15];
  const sourcesLabels = ['Electricity', 'Transport', 'Waste', 'Other'];
  
  // Sample progress data
  const offsetProgress = 72;

  return (
    <div className="relative max-w-xl mx-auto rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-primary text-white p-3 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <p className="text-sm font-medium">CarbonSaathi Dashboard</p>
        <div></div>
      </div>
      
      {/* Dashboard content */}
      <div className="bg-white p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-bold">Carbon Overview</h3>
            <p className="text-sm text-text-light">Last 10 months</p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs bg-gray-100 rounded-md">Month</button>
            <button className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-md">Quarter</button>
            <button className="px-3 py-1 text-xs bg-gray-100 rounded-md">Year</button>
          </div>
        </div>
        
        {/* Charts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <motion.div 
            className="bg-gray-50 p-4 rounded-lg h-64"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">CO₂ Emissions</span>
              <svg className="text-primary w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div className="h-56">
              <EmissionsBarChart data={emissionsData} labels={emissionsLabels} />
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-4 rounded-lg h-64"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Emissions Sources</span>
              <svg className="text-secondary w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
              </svg>
            </div>
            <div className="h-44 flex items-center justify-center">
              <EmissionsSourcesChart data={sourcesData} labels={sourcesLabels} />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs mt-2">
              {sourcesLabels.map((label, index) => (
                <div key={index} className="flex items-center gap-1">
                  <div className="w-2 h-2" style={{
                    backgroundColor: index === 0 ? 'rgba(47, 128, 237, 0.8)' :
                                     index === 1 ? 'rgba(0, 188, 212, 0.8)' :
                                     index === 2 ? 'rgba(46, 125, 50, 0.8)' :
                                                   'rgba(245, 158, 11, 0.8)'
                  }}></div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Bottom metrics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-500">Total Emissions</p>
                <p className="text-xl font-bold">145.2 <span className="text-xs font-normal">tCO₂e</span></p>
              </div>
              <svg className="text-primary w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="flex items-center mt-2 text-xs text-green-700">
              <svg className="mr-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
              <span>-12% vs last month</span>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-500">Carbon Intensity</p>
                <p className="text-xl font-bold">28.4 <span className="text-xs font-normal">kg/unit</span></p>
              </div>
              <svg className="text-secondary w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="flex items-center mt-2 text-xs text-blue-700">
              <svg className="mr-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
              <span>-8% vs target</span>
            </div>
          </div>
          <div className="bg-cyan-50 p-3 rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-500">Offset Progress</p>
                <p className="text-xl font-bold">{offsetProgress}% <span className="text-xs font-normal">complete</span></p>
              </div>
              <svg className="text-accent w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="mt-1">
              <ProgressGaugeChart progress={offsetProgress} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CarbonDashboard; 