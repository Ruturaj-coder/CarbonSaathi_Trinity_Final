import React from 'react';
import { FiVideo, FiPlayCircle, FiMonitor, FiUsers, FiBarChart2, FiCpu } from 'react-icons/fi';
import ResourcesTemplate from '../../components/templates/ResourcesTemplate';

const VideosPage = () => {
  const videosData = {
    title: "Sustainability Videos & Webinars",
    description: "Watch expert presentations, tutorials, and webinars on sustainability practices, carbon accounting, and climate action strategies.",
    
    categories: [
      'Webinars', 
      'Tutorials', 
      'Case Studies', 
      'Expert Interviews', 
      'Product Demos', 
      'Event Recordings'
    ],
    
    tags: [
      'Carbon Accounting', 
      'Net Zero Strategy', 
      'ESG Reporting', 
      'Climate Tech', 
      'Sustainability Leadership', 
      'Industry Insights'
    ],
    
    items: [
      {
        id: 1,
        title: "Carbon Accounting Fundamentals Webinar",
        description: "Join our panel of experts as they explain the core principles of carbon accounting and demonstrate practical implementation steps for your organization.",
        image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Webinars",
        date: "March 10, 2023",
        duration: "45 minutes",
        presenter: "Dr. Emma Chen, Head of Sustainability Solutions",
        views: 1240,
        tags: ["Carbon Accounting", "ESG Reporting"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        link: "/resources/videos/carbon-accounting-fundamentals",
        icon: <FiPlayCircle size={24} />
      },
      {
        id: 2,
        title: "CarbonSaathi Platform Demo",
        description: "A comprehensive walkthrough of the CarbonSaathi platform, showing how to set up your account, connect data sources, and generate your first sustainability report.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Product Demos",
        date: "April 5, 2023",
        duration: "30 minutes",
        presenter: "Alex Rodriguez, Product Manager",
        views: 890,
        tags: ["Climate Tech", "Carbon Accounting"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        link: "/resources/videos/carbonsaathi-platform-demo",
        icon: <FiMonitor size={24} />
      },
      {
        id: 3,
        title: "Net Zero Strategy Implementation: A Case Study",
        description: "Learn how Global Manufacturing Co. implemented their successful net zero strategy using data analytics and strategic planning.",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Case Studies",
        date: "February 22, 2023",
        duration: "38 minutes",
        presenter: "Michael Chang, Sustainability Director at Global Manufacturing Co.",
        views: 1560,
        tags: ["Net Zero Strategy", "Industry Insights"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        link: "/resources/videos/net-zero-case-study",
        icon: <FiBarChart2 size={24} />
      },
      {
        id: 4,
        title: "Setting Up Your ESG Reporting Framework",
        description: "A step-by-step tutorial for establishing an efficient and compliant ESG reporting framework using the CarbonSaathi platform.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Tutorials",
        date: "May 17, 2023",
        duration: "25 minutes",
        presenter: "Sophia Martinez, ESG Reporting Specialist",
        views: 720,
        tags: ["ESG Reporting", "Carbon Accounting"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        link: "/resources/videos/esg-reporting-framework",
        icon: <FiVideo size={24} />
      },
      {
        id: 5,
        title: "Interview: The Future of Corporate Sustainability",
        description: "An in-depth conversation with leading sustainability experts on emerging trends, technologies, and strategies shaping the future of corporate sustainability.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Expert Interviews",
        date: "June 8, 2023",
        duration: "55 minutes",
        presenter: "Panel of Industry Leaders",
        views: 2150,
        tags: ["Sustainability Leadership", "Industry Insights"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        link: "/resources/videos/future-corporate-sustainability",
        icon: <FiUsers size={24} />
      },
      {
        id: 6,
        title: "AI for Climate Action Summit: Highlights",
        description: "Key moments from our annual AI for Climate Action Summit, featuring technological breakthroughs and innovative applications of AI in sustainable practices.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Event Recordings",
        date: "April 22, 2023",
        duration: "1 hour 15 minutes",
        presenter: "Various Speakers",
        views: 1780,
        tags: ["Climate Tech", "Net Zero Strategy"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        link: "/resources/videos/ai-climate-action-summit",
        icon: <FiCpu size={24} />
      },
      {
        id: 7,
        title: "Supply Chain Emissions Tracking Tutorial",
        description: "Learn how to effectively track, measure, and report emissions throughout your supply chain using the CarbonSaathi platform.",
        image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Tutorials",
        date: "March 29, 2023",
        duration: "40 minutes",
        presenter: "Daniel Kim, Supply Chain Sustainability Expert",
        views: 950,
        tags: ["Carbon Accounting", "Industry Insights"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        link: "/resources/videos/supply-chain-emissions-tracking",
        icon: <FiVideo size={24} />
      },
      {
        id: 8,
        title: "Sustainability Reporting for Financial Institutions",
        description: "A specialized webinar addressing the unique challenges and requirements for sustainability reporting in the financial sector.",
        image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Webinars",
        date: "May 5, 2023",
        duration: "50 minutes",
        presenter: "Amanda Johnson, Financial Sustainability Consultant",
        views: 1320,
        tags: ["ESG Reporting", "Sustainability Leadership"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        link: "/resources/videos/financial-institutions-reporting",
        icon: <FiPlayCircle size={24} />
      }
    ],
    
    resourceType: 'video',
    showSearch: true,
    showFilters: true,
    ctaText: "Request a Custom Webinar",
    ctaLink: "/contact"
  };

  return <ResourcesTemplate {...videosData} />;
};

export default VideosPage; 