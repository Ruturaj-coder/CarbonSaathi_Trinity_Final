import React from 'react';
import { FiTool, FiActivity, FiTruck, FiGrid, FiBarChart, FiGlobe, FiPieChart, FiDollarSign } from 'react-icons/fi';
import ResourcesTemplate from '../../components/templates/ResourcesTemplate';

const ToolsPage = () => {
  const toolsData = {
    title: "Sustainability Tools & Calculators",
    description: "Practical tools and calculators to help you measure, analyze, and improve your organization's environmental impact and sustainability performance.",
    
    categories: [
      'Carbon Calculators', 
      'Reporting Tools', 
      'Decision Support', 
      'Benchmark Tools', 
      'Supply Chain', 
      'Financial Analysis'
    ],
    
    tags: [
      'Free', 
      'Premium', 
      'Enterprise', 
      'Scope 1 & 2', 
      'Scope 3', 
      'ROI Analysis', 
      'Interactive'
    ],
    
    items: [
      {
        id: 1,
        title: "Carbon Footprint Calculator",
        description: "Calculate your organization's carbon footprint across Scope 1, 2, and 3 emissions with our comprehensive and user-friendly calculator.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Carbon Calculators",
        tags: ["Free", "Scope 1 & 2", "Interactive"],
        complexity: "Beginner",
        lastUpdated: "April 15, 2023",
        rating: 4.8,
        reviewCount: 124,
        link: "/tools/carbon-footprint-calculator",
        icon: <FiActivity size={24} />
      },
      {
        id: 2,
        title: "Supply Chain Emissions Analyzer",
        description: "Map and measure emissions throughout your supply chain to identify hotspots and prioritize reduction strategies.",
        image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Supply Chain",
        tags: ["Premium", "Scope 3", "Interactive"],
        complexity: "Intermediate",
        lastUpdated: "March 22, 2023",
        rating: 4.7,
        reviewCount: 86,
        link: "/tools/supply-chain-emissions-analyzer",
        icon: <FiTruck size={24} />
      },
      {
        id: 3,
        title: "Renewable Energy ROI Calculator",
        description: "Evaluate the financial returns and payback periods for various renewable energy investments specific to your location and energy usage.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Financial Analysis",
        tags: ["Free", "ROI Analysis", "Interactive"],
        complexity: "Intermediate",
        lastUpdated: "May 10, 2023",
        rating: 4.5,
        reviewCount: 92,
        link: "/tools/renewable-energy-roi-calculator",
        icon: <FiDollarSign size={24} />
      },
      {
        id: 4,
        title: "Sustainability Reporting Template Generator",
        description: "Generate customized sustainability reporting templates that align with GRI, SASB, TCFD, and other global frameworks.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Reporting Tools",
        tags: ["Premium", "Scope 1 & 2", "Scope 3"],
        complexity: "Advanced",
        lastUpdated: "February 28, 2023",
        rating: 4.9,
        reviewCount: 143,
        link: "/tools/reporting-template-generator",
        icon: <FiBarChart size={24} />
      },
      {
        id: 5,
        title: "Industry Benchmarking Tool",
        description: "Compare your sustainability performance against industry peers and best practices to identify improvement opportunities.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Benchmark Tools",
        tags: ["Enterprise", "Interactive", "ROI Analysis"],
        complexity: "Intermediate",
        lastUpdated: "April 3, 2023",
        rating: 4.6,
        reviewCount: 78,
        link: "/tools/industry-benchmarking",
        icon: <FiPieChart size={24} />
      },
      {
        id: 6,
        title: "Climate Scenario Analysis Tool",
        description: "Model how different climate scenarios might impact your organization and develop appropriate risk mitigation strategies.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Decision Support",
        tags: ["Enterprise", "Interactive"],
        complexity: "Advanced",
        lastUpdated: "May 25, 2023",
        rating: 4.7,
        reviewCount: 56,
        link: "/tools/climate-scenario-analysis",
        icon: <FiGlobe size={24} />
      },
      {
        id: 7,
        title: "Energy Management Dashboard",
        description: "Monitor and optimize your energy consumption with real-time data visualization and automated anomaly detection.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Decision Support",
        tags: ["Premium", "Interactive", "Scope 1 & 2"],
        complexity: "Intermediate",
        lastUpdated: "March 18, 2023",
        rating: 4.8,
        reviewCount: 105,
        link: "/tools/energy-management-dashboard",
        icon: <FiGrid size={24} />
      },
      {
        id: 8,
        title: "Carbon Reduction Project Planner",
        description: "Plan, prioritize, and track carbon reduction initiatives with our comprehensive project management tool.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Decision Support",
        tags: ["Premium", "ROI Analysis", "Interactive"],
        complexity: "Intermediate",
        lastUpdated: "April 30, 2023",
        rating: 4.6,
        reviewCount: 89,
        link: "/tools/carbon-reduction-planner",
        icon: <FiTool size={24} />
      }
    ],
    
    resourceType: 'tool',
    showSearch: true,
    showFilters: true,
    ctaText: "Request a Custom Tool",
    ctaLink: "/contact"
  };

  return <ResourcesTemplate {...toolsData} />;
};

export default ToolsPage; 