import React from 'react';
import { FiBarChart2, FiTrendingUp, FiTarget, FiGlobe, FiGrid, FiActivity, FiAward, FiDatabase } from 'react-icons/fi';
import ResourcesTemplate from '../../components/templates/ResourcesTemplate';

const BenchmarksPage = () => {
  const benchmarksData = {
    title: "Sustainability Benchmarks & Standards",
    description: "Access industry-specific benchmarks, standards, and performance indicators to assess your sustainability progress and set meaningful targets.",
    
    categories: [
      'Industry Standards', 
      'Carbon Intensity', 
      'Peer Comparison', 
      'Global Frameworks', 
      'Sector Insights', 
      'Performance Metrics'
    ],
    
    tags: [
      'Manufacturing', 
      'Technology', 
      'Financial Services', 
      'Healthcare', 
      'Retail', 
      'Energy', 
      'Transportation'
    ],
    
    items: [
      {
        id: 1,
        title: "Carbon Intensity Benchmarks by Industry",
        description: "Comprehensive data on average carbon intensity metrics across 20+ industries, updated quarterly with global and regional breakdowns.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Carbon Intensity",
        tags: ["Manufacturing", "Energy", "Transportation"],
        lastUpdated: "Q2 2023",
        dataPoints: 2500,
        geographicCoverage: "Global, with regional breakdowns",
        updateFrequency: "Quarterly",
        link: "/resources/benchmarks/carbon-intensity",
        icon: <FiBarChart2 size={24} />
      },
      {
        id: 2,
        title: "Science-Based Targets Industry Pathways",
        description: "Sector-specific carbon reduction pathways aligned with science-based targets for 1.5°C and 2°C scenarios.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Industry Standards",
        tags: ["Energy", "Manufacturing", "Technology"],
        lastUpdated: "May 2023",
        dataPoints: 15,
        geographicCoverage: "Global",
        updateFrequency: "Annual",
        link: "/resources/benchmarks/science-based-pathways",
        icon: <FiTarget size={24} />
      },
      {
        id: 3,
        title: "Tech Sector Sustainability Performance Index",
        description: "Detailed benchmarking of sustainability performance across the technology sector, from hardware manufacturing to software services.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Peer Comparison",
        tags: ["Technology"],
        lastUpdated: "April 2023",
        dataPoints: 150,
        geographicCoverage: "Global",
        updateFrequency: "Semi-annual",
        link: "/resources/benchmarks/tech-sector-index",
        icon: <FiGrid size={24} />
      },
      {
        id: 4,
        title: "Financial Services ESG Benchmark Report",
        description: "ESG performance metrics and benchmarks for banks, asset managers, insurance companies, and other financial institutions.",
        image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Sector Insights",
        tags: ["Financial Services"],
        lastUpdated: "June 2023",
        dataPoints: 300,
        geographicCoverage: "North America, Europe, Asia Pacific",
        updateFrequency: "Annual",
        link: "/resources/benchmarks/financial-services-esg",
        icon: <FiTrendingUp size={24} />
      },
      {
        id: 5,
        title: "Global Reporting Standards Comparison",
        description: "Side-by-side comparison of major global sustainability reporting frameworks including GRI, SASB, TCFD, and integrated reporting.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Global Frameworks",
        tags: ["Manufacturing", "Financial Services", "Energy"],
        lastUpdated: "March 2023",
        dataPoints: "Framework comparison",
        geographicCoverage: "Global",
        updateFrequency: "Updated with framework changes",
        link: "/resources/benchmarks/reporting-standards-comparison",
        icon: <FiGlobe size={24} />
      },
      {
        id: 6,
        title: "Healthcare Sustainability Metrics",
        description: "Specialized sustainability metrics for healthcare providers, pharmaceutical companies, and medical device manufacturers.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Performance Metrics",
        tags: ["Healthcare"],
        lastUpdated: "May 2023",
        dataPoints: 180,
        geographicCoverage: "North America, Europe",
        updateFrequency: "Annual",
        link: "/resources/benchmarks/healthcare-metrics",
        icon: <FiActivity size={24} />
      },
      {
        id: 7,
        title: "Retail & Consumer Goods Sustainability Index",
        description: "Comprehensive benchmarking of environmental performance across retail and consumer goods companies, with supply chain metrics.",
        image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Peer Comparison",
        tags: ["Retail"],
        lastUpdated: "June 2023",
        dataPoints: 200,
        geographicCoverage: "Global",
        updateFrequency: "Annual",
        link: "/resources/benchmarks/retail-sustainability-index",
        icon: <FiAward size={24} />
      },
      {
        id: 8,
        title: "Energy Transition Benchmark Database",
        description: "Extensive database tracking energy companies' progress on renewable energy transition, fossil fuel phase-out, and climate targets.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Sector Insights",
        tags: ["Energy"],
        lastUpdated: "April 2023",
        dataPoints: 250,
        geographicCoverage: "Global",
        updateFrequency: "Quarterly",
        link: "/resources/benchmarks/energy-transition-database",
        icon: <FiDatabase size={24} />
      }
    ],
    
    resourceType: 'article',
    showSearch: true,
    showFilters: true,
    ctaText: "Request Custom Benchmark Analysis",
    ctaLink: "/contact"
  };

  return <ResourcesTemplate {...benchmarksData} />;
};

export default BenchmarksPage; 