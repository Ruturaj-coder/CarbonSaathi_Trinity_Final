import React from 'react';
import { FiActivity, FiBarChart2, FiPieChart, FiTrendingUp, FiDollarSign, FiGlobe, FiZap, FiDroplet } from 'react-icons/fi';
import ResourcesTemplate from '../../components/templates/ResourcesTemplate';

const CalculationToolsPage = () => {
  const calculationToolsData = {
    title: "Carbon Calculation Tools",
    description: "Specialized tools to accurately measure, calculate, and track your carbon emissions across various activities and operations.",
    
    categories: [
      'Scope 1 Emissions', 
      'Scope 2 Emissions', 
      'Scope 3 Emissions', 
      'Product Footprint', 
      'Business Travel', 
      'Energy Efficiency'
    ],
    
    tags: [
      'Free', 
      'Premium', 
      'Industry-Specific', 
      'ISO Compliant', 
      'GHG Protocol', 
      'Real-time', 
      'Scenario Modeling'
    ],
    
    items: [
      {
        id: 1,
        title: "Scope 1 Direct Emissions Calculator",
        description: "Calculate emissions from company-owned or controlled sources like fuel combustion, company vehicles, and facility operations.",
        image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Scope 1 Emissions",
        tags: ["GHG Protocol", "ISO Compliant"],
        lastUpdated: "June 5, 2023",
        accuracy: "±2%",
        methodologyReference: "GHG Protocol Corporate Standard",
        supportedUnits: "Metric tons CO2e, kg CO2e",
        link: "/tools/calculations/scope-1-calculator",
        icon: <FiZap size={24} />,
        features: ["GHG Protocol Compliant", "Real-time Monitoring", "Custom Emission Factors"]
      },
      {
        id: 2,
        title: "Energy Consumption Carbon Calculator",
        description: "Convert your electricity, heating, and cooling consumption into precise carbon emissions based on your region's energy mix.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Scope 2 Emissions",
        tags: ["Free", "Real-time", "GHG Protocol"],
        lastUpdated: "May 22, 2023",
        accuracy: "±3%",
        methodologyReference: "Location-based and Market-based methods",
        supportedUnits: "kWh, MWh, BTU, CO2e",
        link: "/tools/calculations/energy-consumption-calculator",
        icon: <FiActivity size={24} />,
        features: ["Region-specific Grid Factors", "Energy Mix Analysis", "Renewable Attribution"]
      },
      {
        id: 3,
        title: "Supply Chain Emissions Calculator",
        description: "Comprehensive tool to estimate and track Scope 3 emissions throughout your entire supply chain with supplier-specific data.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Scope 3 Emissions",
        tags: ["Premium", "Industry-Specific", "Scenario Modeling"],
        lastUpdated: "April 10, 2023",
        accuracy: "±5-10%",
        methodologyReference: "GHG Protocol Scope 3 Standard",
        supportedUnits: "Metric tons CO2e, Percentage of total footprint",
        link: "/tools/calculations/supply-chain-calculator",
        icon: <FiBarChart2 size={24} />,
        features: ["Supplier-specific Data", "Category Breakdown", "Hotspot Analysis"]
      },
      {
        id: 4,
        title: "Business Travel Carbon Tracker",
        description: "Calculate emissions from air travel, car rentals, hotel stays, and public transportation for accurate business travel footprinting.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Business Travel",
        tags: ["Free", "Real-time", "GHG Protocol"],
        lastUpdated: "June 15, 2023",
        accuracy: "±4%",
        methodologyReference: "DEFRA Transport Emission Factors",
        supportedUnits: "kg CO2e per km/mile, total CO2e",
        link: "/tools/calculations/business-travel-calculator",
        icon: <FiGlobe size={24} />,
        features: ["Multi-modal Transport", "Automatic Tracking", "Expense Integration"]
      },
      {
        id: 5,
        title: "Product Carbon Footprint Calculator",
        description: "Model the complete lifecycle carbon footprint of your products from raw materials to end-of-life, supporting eco-design decisions.",
        image: "https://images.unsplash.com/photo-1530989109-7aa8e4318cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Product Footprint",
        tags: ["Premium", "Industry-Specific", "ISO Compliant"],
        lastUpdated: "March 30, 2023",
        accuracy: "±7%",
        methodologyReference: "ISO 14067, PAS 2050",
        supportedUnits: "kg CO2e per unit, CO2e breakdown by lifecycle stage",
        link: "/tools/calculations/product-footprint-calculator",
        icon: <FiPieChart size={24} />,
        features: ["Lifecycle Assessment", "Material Impacts", "Design Alternatives"]
      },
      {
        id: 6,
        title: "Carbon ROI Calculator",
        description: "Calculate the financial return on investment for various carbon reduction initiatives, helping prioritize sustainability projects.",
        image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Energy Efficiency",
        tags: ["Premium", "Scenario Modeling"],
        lastUpdated: "May 5, 2023",
        accuracy: "Financial forecast",
        methodologyReference: "Internal Carbon Pricing",
        supportedUnits: "ROI %, Payback period, NPV, Carbon price",
        link: "/tools/calculations/carbon-roi-calculator",
        icon: <FiDollarSign size={24} />,
        features: ["Financial Metrics", "Project Comparison", "Budget Planning"]
      },
      {
        id: 7,
        title: "Water Footprint Calculator",
        description: "Measure the water footprint of your operations, including direct and indirect water usage across your value chain.",
        image: "https://images.unsplash.com/photo-1527100673774-cce25eafaf7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Scope 3 Emissions",
        tags: ["Free", "Industry-Specific"],
        lastUpdated: "April 25, 2023",
        accuracy: "±8%",
        methodologyReference: "Water Footprint Network Methodology",
        supportedUnits: "Cubic meters, Water stress impact",
        link: "/tools/calculations/water-footprint-calculator",
        icon: <FiDroplet size={24} />,
        features: ["Water Risk Assessment", "Scarcity Factors", "Reduction Opportunities"]
      },
      {
        id: 8,
        title: "Emissions Reduction Scenario Modeler",
        description: "Model different emission reduction scenarios to develop science-based targets and strategies for achieving net-zero goals.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Scope 1 Emissions",
        tags: ["Premium", "Scenario Modeling", "GHG Protocol"],
        lastUpdated: "June 1, 2023",
        accuracy: "Scenario-based",
        methodologyReference: "Science Based Targets initiative (SBTi)",
        supportedUnits: "Reduction pathways, Target years, CO2e reduction",
        link: "/tools/calculations/emissions-reduction-modeler",
        icon: <FiTrendingUp size={24} />,
        features: ["Science-based Pathways", "Target Setting", "Progress Tracking"]
      }
    ],
    
    resourceType: 'tool',
    showSearch: true,
    showFilters: true,
    ctaText: "Request a Custom Calculator",
    ctaLink: "/contact"
  };

  return <ResourcesTemplate {...calculationToolsData} />;
};

export default CalculationToolsPage; 