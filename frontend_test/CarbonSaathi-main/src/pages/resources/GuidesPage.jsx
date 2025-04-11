import React from 'react';
import { FiBook, FiDownload, FiFileText, FiBookOpen, FiAward, FiTrendingUp } from 'react-icons/fi';
import ResourcesTemplate from '../../components/templates/ResourcesTemplate';

const GuidesPage = () => {
  const guidesData = {
    title: "Sustainability Guides & Tutorials",
    description: "Comprehensive resources to help you understand and implement sustainable practices across your organization. From beginner guides to advanced implementation playbooks.",
    
    categories: [
      'Getting Started', 
      'Carbon Accounting', 
      'Reporting Standards', 
      'Implementation', 
      'Certification', 
      'Advanced Topics'
    ],
    
    tags: [
      'Beginners', 
      'Intermediate', 
      'Advanced', 
      'GHG Protocol', 
      'Science-Based Targets', 
      'TCFD', 
      'ESG', 
      'Net Zero'
    ],
    
    items: [
      {
        id: 1,
        title: "Beginner's Guide to Carbon Accounting",
        description: "Learn the fundamentals of carbon accounting and how to start measuring your organization's carbon footprint with this comprehensive step-by-step guide.",
        image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Getting Started",
        tags: ["Beginners", "GHG Protocol"],
        downloadable: true,
        fileSize: "2.4 MB",
        fileType: "PDF",
        lastUpdated: "March 15, 2023",
        estimatedReadTime: "25 minutes",
        author: "CarbonSaathi Team",
        link: "/resources/guides/beginners-guide-carbon-accounting",
        icon: <FiBookOpen size={24} />
      },
      {
        id: 2,
        title: "Setting Science-Based Targets",
        description: "A complete walkthrough of how to set, validate, and implement science-based targets for your organization's climate goals.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Implementation",
        tags: ["Intermediate", "Science-Based Targets", "Net Zero"],
        downloadable: true,
        fileSize: "4.8 MB",
        fileType: "PDF",
        lastUpdated: "February 3, 2023",
        estimatedReadTime: "40 minutes",
        author: "Dr. Sarah Johnson, Sustainability Director",
        link: "/resources/guides/science-based-targets",
        icon: <FiAward size={24} />
      },
      {
        id: 3,
        title: "TCFD Reporting Framework Explained",
        description: "Understand the Task Force on Climate-related Financial Disclosures (TCFD) framework and create compliant climate risk reports.",
        image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Reporting Standards",
        tags: ["Advanced", "TCFD", "ESG"],
        downloadable: true,
        fileSize: "5.7 MB",
        fileType: "PDF",
        lastUpdated: "April 22, 2023",
        estimatedReadTime: "35 minutes",
        author: "Financial Sustainability Council",
        link: "/resources/guides/tcfd-reporting-framework",
        icon: <FiFileText size={24} />
      },
      {
        id: 4,
        title: "Scope 3 Emissions Measurement Playbook",
        description: "Advanced techniques for accurately measuring, tracking, and reducing your organization's Scope 3 emissions across the value chain.",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Advanced Topics",
        tags: ["Advanced", "GHG Protocol"],
        downloadable: true,
        fileSize: "8.2 MB",
        fileType: "PDF",
        lastUpdated: "January 11, 2023",
        estimatedReadTime: "50 minutes",
        author: "CarbonSaathi Research Team",
        link: "/resources/guides/scope3-emissions-playbook",
        icon: <FiBook size={24} />
      },
      {
        id: 5,
        title: "Sustainability Certification Guide",
        description: "Learn about the major sustainability certifications available and how to prepare your organization for successful certification.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Certification",
        tags: ["Intermediate", "ESG", "Net Zero"],
        downloadable: true,
        fileSize: "3.9 MB",
        fileType: "PDF",
        lastUpdated: "May 7, 2023",
        estimatedReadTime: "30 minutes",
        author: "Certification Specialists Team",
        link: "/resources/guides/sustainability-certification",
        icon: <FiAward size={24} />
      },
      {
        id: 6,
        title: "Carbon Reduction Strategy Toolkit",
        description: "A comprehensive toolkit with templates, calculators, and methodologies to develop your organization's carbon reduction strategy.",
        image: "https://images.unsplash.com/photo-1565108140337-c3c6eccb9bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Implementation",
        tags: ["Intermediate", "Science-Based Targets", "Net Zero"],
        downloadable: true,
        fileSize: "10.5 MB",
        fileType: "ZIP",
        lastUpdated: "June 18, 2023",
        estimatedReadTime: "N/A",
        author: "CarbonSaathi Solutions Team",
        link: "/resources/guides/carbon-reduction-toolkit",
        icon: <FiDownload size={24} />
      },
      {
        id: 7,
        title: "ESG Integration for Financial Leaders",
        description: "Learn how to integrate Environmental, Social, and Governance (ESG) factors into financial decision-making and reporting.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Advanced Topics",
        tags: ["Advanced", "ESG", "TCFD"],
        downloadable: true,
        fileSize: "6.3 MB",
        fileType: "PDF",
        lastUpdated: "April 3, 2023",
        estimatedReadTime: "45 minutes",
        author: "Financial Sustainability Council",
        link: "/resources/guides/esg-financial-integration",
        icon: <FiTrendingUp size={24} />
      },
      {
        id: 8,
        title: "Carbon Footprint Calculator Guide",
        description: "Step-by-step instructions for using carbon footprint calculators effectively and interpreting the results for your business.",
        image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Getting Started",
        tags: ["Beginners", "GHG Protocol"],
        downloadable: true,
        fileSize: "1.8 MB",
        fileType: "PDF",
        lastUpdated: "February 25, 2023",
        estimatedReadTime: "20 minutes",
        author: "CarbonSaathi Team",
        link: "/resources/guides/carbon-calculator-guide",
        icon: <FiBookOpen size={24} />
      }
    ],
    
    resourceType: 'guide',
    showSearch: true,
    showFilters: true,
    ctaText: "Request a Custom Guide",
    ctaLink: "/contact"
  };

  return <ResourcesTemplate {...guidesData} />;
};

export default GuidesPage; 