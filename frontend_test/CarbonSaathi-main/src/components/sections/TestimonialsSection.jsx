import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import Section from '../layout/Section';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "CarbonSaathi has transformed how we approach sustainability. The detailed analytics and actionable insights have helped us reduce our carbon footprint by 28% in just one year.",
      author: "Sarah Johnson",
      role: "Sustainability Director",
      company: "GreenTech Solutions",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      color: "green"
    },
    {
      quote: "The interface is intuitive and the reports are comprehensive. Our board was impressed with the clarity of data presentation, which made our sustainability initiatives much easier to approve.",
      author: "Michael Chen",
      role: "Chief Operating Officer",
      company: "Infinity Global",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      color: "blue"
    },
    {
      quote: "As a medium-sized business, we thought carbon tracking would be too complex and expensive. CarbonSaathi proved us wrong. It's affordable, easy to use, and has made a real difference.",
      author: "Emily Rodriguez",
      role: "CEO",
      company: "Eco Ventures",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      color: "cyan"
    },
    {
      quote: "The carbon marketplace has been a game-changer for us. We've connected with verified offset projects that align perfectly with our mission and values.",
      author: "David Kumar",
      role: "Sustainability Manager",
      company: "SustainaCorp",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      color: "purple"
    },
    {
      quote: "The AI recommendations helped us identify emission reduction opportunities we hadn't considered. We're on track to exceed our carbon neutrality goals by 2025.",
      author: "Priya Sharma",
      role: "Director of Operations",
      company: "EcoSmart Technologies",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      color: "indigo"
    }
  ];

  // State for mobile carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollTimerRef = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Handle auto-scrolling for mobile carousel
  useEffect(() => {
    if (isAutoScrolling && window.innerWidth < 768) {
      autoScrollTimerRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [isAutoScrolling, testimonials.length]);

  // Handle touch events for swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoScrolling(false);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    } else if (touchEnd - touchStart > 75) {
      // Swipe right
      setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
    setIsAutoScrolling(true);
  };

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

  // Color mapping for testimonial cards
  const colorMap = {
    green: {
      accent: "bg-green-600",
      border: "border-green-500",
      shadow: "shadow-green-600/20",
      hover: "group-hover:text-green-400",
      gradient: "from-green-800/30 to-transparent"
    },
    blue: {
      accent: "bg-blue-600",
      border: "border-blue-500",
      shadow: "shadow-blue-600/20",
      hover: "group-hover:text-blue-400",
      gradient: "from-blue-800/30 to-transparent"
    },
    cyan: {
      accent: "bg-cyan-600",
      border: "border-cyan-500",
      shadow: "shadow-cyan-600/20",
      hover: "group-hover:text-cyan-400",
      gradient: "from-cyan-800/30 to-transparent"
    },
    purple: {
      accent: "bg-purple-600",
      border: "border-purple-500",
      shadow: "shadow-purple-600/20",
      hover: "group-hover:text-purple-400",
      gradient: "from-purple-800/30 to-transparent"
    },
    indigo: {
      accent: "bg-indigo-600",
      border: "border-indigo-500",
      shadow: "shadow-indigo-600/20",
      hover: "group-hover:text-indigo-400",
      gradient: "from-indigo-800/30 to-transparent"
    }
  };

  // Actual client logos as SVG components
  const clientLogos = [
    // Tesla Logo
    <svg key="tesla" className="h-8 w-auto" viewBox="0 0 342 50" fill="currentColor">
      <path d="M33.267 0.576c3.641 0 6.656 0.08 9.042 0.224v15.04c-2.386-0.096-5.402-0.16-9.042-0.16h-9.121v9.441c6.224 0.208 12.386 0.946 18.498 2.209v13.633c-5.826-2.273-12.002-3.409-18.498-3.409h-9.121v13.442h-15.025v-50.42h33.267zM90.514 0.576c16.977 0 25.477 7.217 25.477 21.664 0 14.447-8.5 21.664-25.477 21.664h-35.091v-43.328h35.091zM68.099 31.825h18.498c6.482 0 9.719-2.193 9.719-6.578v-5.944c0-4.386-3.237-6.578-9.719-6.578h-18.498v19.1zM138.834 0.576c16.977 0 25.473 7.217 25.473 21.664 0 14.447-8.496 21.664-25.473 21.664h-36.411v-43.328h36.411zM115.1 31.825h19.822c6.482 0 9.719-2.193 9.719-6.578v-5.944c0-4.386-3.237-6.578-9.719-6.578h-19.822v19.1zM189.098 43.904h-14.918v-43.328h14.918v43.328zM236.689 37.633c-6.738 4.531-13.605 6.802-20.605 6.802-16.977 0-25.473-7.858-25.473-23.561 0-15.712 8.496-23.568 25.473-23.568 7.001 0 13.867 2.045 20.605 6.136v16.161c-6.738-5.19-13.605-7.786-20.605-7.786-6.11 0-9.174 3.041-9.174 9.121 0 6.066 3.064 9.106 9.174 9.106 7.123 0 13.991-2.61 20.605-7.842v15.431z" />
      <path d="M242.373 43.904v-43.328h15.024v43.328h-15.024zM311.453 43.904l-9.94-14.863-10.044 14.863h-16.671l18.386-22.185-17.615-21.142h16.775l9.169 13.816 9.389-13.816h16.671l-17.62 21.142 18.5 22.185h-16.999z" />
    </svg>,
    
    // Siemens Logo
    <svg key="siemens" className="h-8 w-auto" viewBox="0 0 512 90" fill="currentColor">
      <path d="M95.4 40.8h321.2v8.4H95.4v-8.4zm38.8-5.9c0 3.8-3.1 6.9-6.9 6.9s-6.9-3.1-6.9-6.9c0-3.8 3.1-6.9 6.9-6.9 3.8 0 6.9 3.1 6.9 6.9zm83.7 38c.3-1.9 2.1-3.2 4-2.9l5 .8c1.9.3 3.2 2.1 2.9 4l-.8 5c-.3 1.9-2.1 3.2-4 2.9l-5-.8c-1.9-.3-3.2-2.1-2.9-4l.8-5zm361.1-3c1.8-.6 3.8.4 4.4 2.2l1.6 4.8c.6 1.8-.4 3.8-2.2 4.4l-4.8 1.6c-1.8.6-3.8-.4-4.4-2.2l-1.6-4.8c-.6-1.8.4-3.8 2.2-4.4l4.8-1.6zm11.7 9.4c0 3.8-3.1 6.9-6.9 6.9s-6.9-3.1-6.9-6.9c0-3.8 3.1-6.9 6.9-6.9 3.8 0 6.9 3.1 6.9 6.9zm-391.2-7.7c1.8-.6 3.8.4 4.4 2.2l1.6 4.8c.6 1.8-.4 3.8-2.2 4.4l-4.8 1.6c-1.8.6-3.8-.4-4.4-2.2l-1.6-4.8c-.6-1.8.4-3.8 2.2-4.4l4.8-1.6zm36.2-16.9h321.1v8.4H101.5v-8.4zm315 49.8H101.5v8.4h315v-8.4zm-48.8-72h-218v8.4h218V7.6z" />
    </svg>,
    
    // Microsoft Logo
    <svg key="microsoft" className="h-8 w-auto" viewBox="0 0 23 23" fill="currentColor">
      <path d="M0 0h11v11H0V0zm12 0h11v11H12V0zM0 12h11v11H0V12zm12 0h11v11H12V12z" />
    </svg>,
    
    // Amazon Logo
    <svg key="amazon" className="h-8 w-auto" viewBox="0 0 126 39" fill="currentColor">
      <path d="M79.108 26.858c-5.42 3.997-13.285 6.127-20.058 6.127-9.49 0-18.029-3.505-24.495-9.33-.508-.462-.055-1.094.555-.734 6.959 4.048 15.57 6.48 24.472 6.48 6 0 12.604-1.243 18.675-3.82.918-.39 1.687.603.851 1.277z" />
      <path d="M81.548 24.045c-.692-.887-4.587-.42-6.338-.21-.531.063-.612-.4-.134-.736 3.102-2.18 8.192-1.55 8.783-.82.592.734-.154 5.848-3.073 8.293-.45.377-.877.175-.677-.32.658-1.644 2.13-5.323 1.44-6.207zM72.376 7.273V4.15c0-.38.288-.63.633-.63h11.226c.36 0 .65.254.65.626v2.672c-.4.356-.31.822-.854 1.56l-5.819 8.317c2.161-.051 4.444.271 6.43 1.374.444.25.565.62.598 1.019v3.33c0 .382-.42.826-.86.595-3.6-1.887-8.384-2.092-12.36.02-.407.215-.833-.22-.833-.603V19.95c0-.424.006-1.149.44-1.793l6.73-9.654h-5.853c-.36 0-.649-.25-.649-.63v-.001zM25.702 23.064h-3.416c-.325-.023-.583-.269-.609-.582V4.15c0-.352.295-.63.661-.63h3.18c.334.015.6.27.624.588v2.396h.062c.828-2.21 2.386-3.247 4.49-3.247 2.136 0 3.47 1.037 4.425 3.247.828-2.21 2.71-3.247 4.717-3.247 1.432 0 2.987.59 3.94 1.916 1.078 1.469.857 3.602.857 5.476l-.006 12.252c0 .352-.295.633-.66.633h-3.41c-.341-.023-.61-.3-.61-.63V12.74c0-1.015.09-3.548.44-4.505.352-1.626 1.405-2.083 2.765-2.083 1.14 0 2.33.761 2.82 1.977.49 1.216-.444 3.247-.444 4.612v9.762c0 .352-.295.633-.661.633h-3.41c-.344-.023-.61-.3-.61-.63V12.74c0-2.688.444-6.643-2.896-6.643-3.374 0-3.246 3.863-3.246 6.643v9.764c0 .352-.295.633-.66.633l-.001-.001zM91.486 3.873c5.063 0 7.799 4.347 7.799 9.875 0 5.336-3.025 9.576-7.8 9.576-4.964 0-7.666-4.347-7.666-9.774 0-5.462 2.734-9.677 7.667-9.677zm.028 3.582c-2.517 0-2.673 3.43-2.673 5.568 0 2.14-.033 6.71 2.645 6.71 2.646 0 2.776-3.684 2.776-5.93 0-1.477-.065-3.248-.51-4.653-.381-1.216-1.14-1.695-2.238-1.695zM107.565 23.064h-3.403c-.343-.023-.61-.3-.61-.63V4.098c.029-.318.31-.567.662-.567h3.17c.3.013.55.217.617.487v2.842h.063c.958-2.398 2.299-3.545 4.656-3.545 1.53 0 3.024.554 3.982 2.071.891 1.404.891 3.763.891 5.459v11.037c-.037.306-.31.55-.661.55h-3.429c-.316-.021-.573-.259-.604-.55V12.31c0-2.645.307-6.517-2.95-6.517-1.145 0-2.198.766-2.722 1.932-.66 1.488-.748 2.966-.748 4.586v10.123c-.006.352-.307.63-.662.63h-.002zM48.473 13.185c0 1.333.034 2.446-.64 3.626-.544.969-1.409 1.568-2.371 1.568-1.313 0-2.082-1.001-2.082-2.483 0-2.919 2.616-3.45 5.093-3.45v.739zm3.455 8.354c-.227.202-.554.217-.81.082-1.138-.945-1.342-1.38-1.966-2.28-1.877 1.913-3.208 2.485-5.637 2.485-2.88 0-5.124-1.777-5.124-5.332 0-2.777 1.506-4.664 3.651-5.587 1.86-.815 4.46-.964 6.446-1.186v-.446c0-.815.064-1.778-.415-2.483-.421-.63-1.228-.89-1.941-.89-1.318 0-2.498.677-2.785 2.078-.06.317-.292.63-.611.646l-3.375-.365c-.285-.063-.6-.293-.524-.728C39.401 4.153 43.703 3 47.613 3c1.979 0 4.567.527 6.127 2.025 1.977 1.848 1.788 4.31 1.788 6.992v6.335c0 1.904.788 2.742 1.53 3.77.263.37.322.812-.012 1.088-.84.707-2.336 2.006-3.158 2.735l-.004-.006-.956-.399z" />
    </svg>,

    // Tata Logo
    <svg key="tata" className="h-8 w-auto" viewBox="0 0 211 46" fill="currentColor">
      <path d="M99.78,21.58h10.66v2.54H99.78Zm-30-2.62h3.62v12.6h2.43v-12.6h3.65V16.87H69.75Zm8.26,5.33c0,2.58.45,4.5,1.34,5.81a4.43,4.43,0,0,0,4,1.95,4.45,4.45,0,0,0,4-1.94c.89-1.3,1.34-3.26,1.34-5.9s-.45-4.5-1.34-5.81a4.43,4.43,0,0,0-4-1.95,4.45,4.45,0,0,0-4,1.95C78.46,19.68,78,21.63,78,24.29Zm-2.49,0c0-3.23.68-5.65,2-7.28a7.52,7.52,0,0,1,11.33,0c1.36,1.63,2,4.09,2,7.37s-.68,5.65-2,7.28a7.52,7.52,0,0,1-11.33,0C76.2,30,75.52,27.56,75.52,24.3ZM94,16.87h2.42V31.56H94Zm18.53,0,5.45,11.61L123.56,16h2.81L119.69,32.7l-.29-.83-6.31-15Zm19.47,0h2.43V31.56H132Zm16.69,9.65-8.06-9.65h2.9l6.45,7.65,6.45-7.65h2.89l-8.06,9.65,8.18,10h-2.9l-6.56-8-6.57,8h-2.89Zm-177.88-3.7A104.5,104.5,0,0,1,0,23,104.25,104.25,0,0,1,29.22,22.8L14.63,8.16,0,23a104.5,104.5,0,0,1,29.22.18A104.25,104.25,0,0,1,0,23L14.63,37.56,29.22,23A104.5,104.5,0,0,1,0,22.82a104.25,104.25,0,0,1,29.22.18L14.63,37.56,29.22,23Zm120.54-8.14c9.62,0,16.84,2,16.84,4.92v2.57c0,2.87-7.22,4.92-16.84,4.92s-16.84-2-16.84-4.92V19.73C58.55,16.82,65.77,14.77,75.38,14.77ZM211,21.52c0,1.34-4.15,2.45-9.54,2.68-5.39.23-10.12-.65-10.62-2,.5-1.3,5.24-2.18,10.62-2S211,20.18,211,21.52Z" />
    </svg>,
    
    // Wipro Logo
    <svg key="wipro" className="h-8 w-auto" viewBox="0 0 160 30" fill="currentColor">
      <path d="M16.5,18C16.5,14.2,14.3,12,11.2,12s-5.3,2.2-5.3,6s2.2,6,5.3,6S16.5,21.8,16.5,18z M25.9,18c0,6.5-5.1,11.8-14.7,11.8 S0,24.5,0,18S1.5,6,11.2,6S25.9,11.5,25.9,18z M37.8,11.2c0-3.8-2.1-5.2-5.1-5.2h-5.3v10.4h5.3C35.7,16.4,37.8,15,37.8,11.2z M47.1,11.2c0,7.2-5.1,11.2-14.3,11.2h-5.3v6.9h-9.4V0h14.7C42,0,47.1,4,47.1,11.2z M83.8,29.3l-4.2-10.4h-8.6l-4.2,10.4h-10 L69.3,0h11.9l12.5,29.3H83.8z M77.2,12.5l-2.8-7l-2.8,7H77.2z M118.7,29.3H109V12.4L105,29.3h-9.4L91.1,12.4v16.9h-9.7V0h14.3 l4.3,12.1L104.4,0h14.3V29.3z M128.7,29.3h-9.8V0h9.8V29.3z M154.8,6v23.3h-9.8V6h-9.7V0H160v6H154.8z" />
    </svg>
  ];

  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1F2937,transparent)] z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-green-900/20 blur-3xl z-0"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-blue-900/20 blur-3xl z-0"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-purple-900/15 blur-2xl z-0"></div>
      <div className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full bg-cyan-900/15 blur-2xl z-0"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-0">
        <svg className="w-full h-full" width="100%" height="100%">
          <pattern id="testimonials-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="testimonials-circle" cx="20" cy="20" r="1" fill="currentColor"></circle>
          </pattern>
          <rect width="100%" height="100%" fill="url(#testimonials-pattern)"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Trusted by <span className="text-green-400">Industry Leaders</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Organizations across sectors are achieving their sustainability goals with CarbonSaathi
          </motion.p>
        </div>

        {/* Desktop testimonials view */}
        <motion.div
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-xl border border-gray-700 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
              variants={itemVariants}
            >
              {/* Background decoration */}
              <div className={`absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tl ${colorMap[testimonial.color].gradient} rounded-full opacity-30 -mr-10 -mb-10 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12`}></div>
              
              {/* Quote icon */}
              <div className={`absolute -top-5 -left-5 w-10 h-10 ${colorMap[testimonial.color].accent} rounded-full flex items-center justify-center`}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                </svg>
              </div>
              
              <div className="relative z-10">
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className={`w-12 h-12 rounded-full mr-4 border-2 ${colorMap[testimonial.color].border}`}
                  />
                  <div>
                    <h4 className="text-white font-medium">{testimonial.author}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile testimonial carousel */}
        <div className="md:hidden">
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 relative overflow-hidden ${colorMap[testimonial.color].shadow}`}>
                      {/* Background decoration */}
                      <div className={`absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tl ${colorMap[testimonial.color].gradient} rounded-full opacity-30 -mr-10 -mb-10`}></div>
                      
                      {/* Quote icon */}
                      <div className={`absolute -top-4 -left-4 w-8 h-8 ${colorMap[testimonial.color].accent} rounded-full flex items-center justify-center`}>
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                        </svg>
                      </div>
                      
                      <div className="relative z-10">
                        <p className="text-gray-300 mb-6 italic text-sm">"{testimonial.quote}"</p>
                        
                        <div className="flex items-center">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author} 
                            className={`w-10 h-10 rounded-full mr-3 border-2 ${colorMap[testimonial.color].border}`}
                          />
                          <div>
                            <h4 className="text-white font-medium text-sm">{testimonial.author}</h4>
                            <p className="text-gray-400 text-xs">{testimonial.role}, {testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full mx-1 transition-colors duration-300 ${currentTestimonial === index ? 'bg-green-500' : 'bg-gray-600'}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Instructions for mobile */}
            <p className="text-gray-500 text-xs text-center mt-2">Swipe to see more testimonials</p>
          </motion.div>
        </div>

        {/* Client logos */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-400 text-center mb-6 text-sm font-medium">TRUSTED BY GLOBAL LEADERS IN SUSTAINABILITY</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-inner shadow-black/20 border border-gray-700 hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-gray-300 hover:text-white transition-colors duration-300">
                  {logo}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Additional CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-green-700/30 transition-all duration-300 hover:-translate-y-1 group"
          >
            <span>Read Success Stories</span>
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;