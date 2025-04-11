import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from '../ui/Button';
import CarbonDashboard from '../charts/CarbonDashboard';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect values
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  // Animation variants
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Nature background image with parallax effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full -z-20 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1504567961542-e24d9439a724?q=80&w=3540&auto=format&fit=crop')`,
          y: backgroundY 
        }}
      />
      
      {/* Semi-transparent green overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-700/50 -z-10"></div>
      
      {/* Additional light overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 top-1/4 right-1/4 w-96 h-96 bg-green-300/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 left-1/4 w-96 h-96 bg-green-200/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 top-1/2 left-1/2 w-64 h-64 bg-green-100/10 rounded-full blur-3xl"></div>
      
      {/* Subtle particle effect for depth */}
      <div className="absolute inset-0 -z-5 opacity-30">
        <div className="absolute top-20 left-[10%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-40 left-[20%] w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-60 left-[30%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-80 left-[60%] w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-96 left-[80%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-[30vh] left-[40%] w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-[50vh] left-[70%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-[70vh] left-[90%] w-2 h-2 bg-white rounded-full"></div>
      </div>
      
      <motion.div 
        className="container relative mx-auto px-4 md:px-8 z-10"
        style={{ y: contentY }}
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2 md:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight text-white drop-shadow-md">
                Track. <span className="text-green-300">Analyze</span>. <span className="text-green-200">Neutralize</span>.
              </h1>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl text-green-50 mb-8 max-w-2xl leading-relaxed drop-shadow">
                Track, reduce, and offset your carbon footprint with our
                comprehensive sustainability platform. Join the movement for a
                greener future today.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="primary"
                  size="lg" 
                  className="bg-green-400 hover:bg-green-500 text-green-900 font-semibold shadow-lg shadow-green-900/30 transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
                </Button>
              </motion.div>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white/10 hover:border-green-300 transition-all"
              >
                Request Demo
              </Button>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 text-sm text-green-100">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Easy setup</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Real-time analysis</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>AI-powered suggestions</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 bg-white/10 p-6 rounded-xl backdrop-blur-sm shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <CarbonDashboard />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-900/70 to-transparent"></div>
    </section>
  );
};

export default HeroSection; 