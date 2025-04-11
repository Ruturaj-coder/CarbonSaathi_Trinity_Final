import React from 'react';
import { FiBarChart2, FiPieChart, FiTrendingUp, FiGlobe, FiAlertCircle, FiCpu } from 'react-icons/fi';
import SolutionTemplate from '../../components/templates/SolutionTemplate';

const DataAnalyticsPage = () => {
  const pageData = {
    title: 'Carbon Data Analytics',
    subtitle: 'Insights for Informed Decision Making',
    description: 'Transform your carbon data into actionable insights with advanced analytics, AI-powered recommendations, and customizable dashboards that help you make data-driven sustainability decisions.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    
    features: [
      {
        icon: <FiBarChart2 />,
        title: 'Interactive Dashboards',
        description: 'Create customizable dashboards with drag-and-drop widgets to visualize your carbon data in the most meaningful way for different stakeholders.'
      },
      {
        icon: <FiPieChart />,
        title: 'Emission Hotspot Analysis',
        description: 'Identify the largest sources of emissions across your operations, supply chain, and product lifecycle with detailed breakdown analytics.'
      },
      {
        icon: <FiTrendingUp />,
        title: 'Trend Analysis & Forecasting',
        description: 'Track emission trends over time and use AI-powered forecasting to predict future emissions under different scenarios.'
      },
      {
        icon: <FiGlobe />,
        title: 'Geospatial Visualization',
        description: 'Map your carbon footprint across locations and supply chains with interactive geographical visualizations and regional insights.'
      },
      {
        icon: <FiAlertCircle />,
        title: 'Anomaly Detection',
        description: 'Automatically detect unusual patterns in your carbon data that may indicate errors, opportunities, or areas needing immediate attention.'
      },
      {
        icon: <FiCpu />,
        title: 'AI-Powered Recommendations',
        description: 'Receive intelligent suggestions for carbon reduction initiatives based on your specific data patterns and industry benchmarks.'
      }
    ],
    
    benefits: [
      {
        title: 'Data-Driven Decision Making',
        description: 'Make strategic sustainability decisions backed by robust data analysis rather than assumptions or generic best practices.',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Maximum ROI on Sustainability',
        description: 'Identify and prioritize the carbon reduction initiatives that will deliver the greatest impact for your investment.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Simplified Reporting',
        description: 'Generate comprehensive reports and visualizations for internal leadership, investors, customers, and regulatory compliance.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Proactive Carbon Management',
        description: 'Anticipate issues and opportunities before they arise with predictive analytics and early warning indicators.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      }
    ],
    
    workflowSteps: [
      {
        title: 'Connect Your Data Sources',
        description: 'Integrate data from your carbon quantification module, ERP systems, IoT devices, and other sources into a unified analytics platform.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Connect to 100+ pre-built data integrations',
          'Set up automated data refreshes',
          'Ensure data quality with validation checks'
        ]
      },
      {
        title: 'Create Custom Dashboards',
        description: 'Build personalized analytics dashboards for different stakeholders and use cases with our intuitive designer.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Choose from 50+ carbon-specific visualization widgets',
          'Set up role-based dashboard access',
          'Configure alerts and notifications'
        ]
      },
      {
        title: 'Analyze & Discover Insights',
        description: 'Use our advanced analytics tools to uncover patterns, trends, and opportunities in your carbon data.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Conduct what-if scenario analysis',
          'Identify emission hotspots and anomalies',
          'Compare performance against benchmarks'
        ]
      },
      {
        title: 'Act on Recommendations',
        description: 'Implement AI-powered recommendations and track their impact on your carbon footprint over time.',
        image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Review personalized carbon reduction recommendations',
          'Prioritize actions based on impact and feasibility',
          'Track implementation progress and results'
        ]
      }
    ],
    
    visualization: {
      title: 'Interactive Analytics in Action',
      description: 'Our powerful analytics platform helps you discover insights that would otherwise remain hidden in your carbon data.',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      caption: 'See how interactive dashboards and AI-powered analytics transform your carbon management approach.'
    },
    
    ctaText: 'Start Turning Data into Insights',
    ctaLink: '/signup',
    
    decorationPosition: 'right'
  };

  return <SolutionTemplate {...pageData} />;
};

export default DataAnalyticsPage; 