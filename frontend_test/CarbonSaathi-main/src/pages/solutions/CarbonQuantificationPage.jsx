import React from 'react';
import { FiBarChart2, FiPieChart, FiActivity, FiDatabase, FiTrendingUp, FiTarget } from 'react-icons/fi';
import SolutionTemplate from '../../components/templates/SolutionTemplate';

const CarbonQuantificationPage = () => {
  // Page specific data
  const pageData = {
    title: 'AI-Powered Carbon Quantification',
    subtitle: 'Precise carbon footprint measurement and tracking',
    description: 'Our advanced carbon quantification solution leverages AI and machine learning to accurately measure, track, and analyze your organization\'s carbon emissions across scopes 1, 2, and 3 with unparalleled precision and minimal manual input.',
    heroImage: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2070&auto=format&fit=crop',
    
    // Features data with icons
    features: [
      {
        icon: <FiBarChart2 size={40} />,
        title: 'Comprehensive Emissions Tracking',
        description: 'Track direct emissions, indirect emissions from purchased energy, and all indirect value chain emissions with granular detail.'
      },
      {
        icon: <FiPieChart size={40} />,
        title: 'Activity-Based Calculations',
        description: 'Convert activity data into accurate emissions calculations using industry-specific emission factors and methodologies.'
      },
      {
        icon: <FiActivity size={40} />,
        title: 'Real-Time Monitoring',
        description: 'Monitor emissions in real-time with automated data collection from your systems, IoT devices, and third-party sources.'
      },
      {
        icon: <FiDatabase size={40} />,
        title: 'Emission Factor Libraries',
        description: 'Access our extensive library of emission factors, updated regularly to reflect the latest scientific understanding.'
      },
      {
        icon: <FiTrendingUp size={40} />,
        title: 'Predictive Analytics',
        description: 'Forecast future emissions based on current trends and planned activities to proactively manage your carbon footprint.'
      },
      {
        icon: <FiTarget size={40} />,
        title: 'Scenario Modeling',
        description: 'Model different scenarios to understand the impact of business decisions on your carbon footprint before implementation.'
      }
    ],
    
    // Benefits data
    benefits: [
      {
        title: 'Enhanced Reporting Accuracy',
        description: 'Achieve up to 95% accuracy in emissions calculations, reducing the risk of over or under-reporting and ensuring compliance with regulatory requirements.'
      },
      {
        title: 'Time and Resource Savings',
        description: 'Reduce data collection and calculation time by up to 70% through automation, freeing your team to focus on reduction strategies.'
      },
      {
        title: 'Informed Decision Making',
        description: 'Make data-driven decisions about emissions reduction initiatives based on precise measurements and impact analyses.'
      },
      {
        title: 'Simplified Compliance',
        description: 'Easily generate reports that comply with major frameworks including GHG Protocol, TCFD, CDP, and emerging regulations.'
      },
      {
        title: 'Stakeholder Transparency',
        description: 'Provide transparent, verifiable emissions data to stakeholders, enhancing trust and supporting ESG reporting requirements.'
      },
      {
        title: 'Competitive Advantage',
        description: 'Differentiate your organization by demonstrating leadership in sustainability with precise carbon accounting and reduction commitments.'
      }
    ],
    
    // Workflow steps
    workflowSteps: [
      {
        title: 'Data Collection',
        description: 'Our platform integrates with your existing systems to automatically collect emissions data, with options for manual uploads when needed.',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2036&auto=format&fit=crop',
        keyPoints: [
          'Automated data collection from ERP, IoT devices, and utility systems',
          'Secure API connections with major data providers',
          'CSV/Excel upload options for offline data sources',
          'Data quality checks and validation'
        ]
      },
      {
        title: 'Emissions Calculation',
        description: 'Using our proprietary algorithms and extensive emissions factor database, we convert your activity data into accurate GHG emissions calculations.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        keyPoints: [
          'Activity-based calculation methodology',
          'Industry-specific emission factors',
          'Support for all GHG Protocol scopes',
          'Uncertainty analysis and data quality scoring'
        ]
      },
      {
        title: 'Analysis & Insights',
        description: 'Our AI-powered analytics engine identifies patterns, hotspots, and reduction opportunities in your emissions data.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        keyPoints: [
          'Emissions hotspot identification',
          'Trend analysis and forecasting',
          'Benchmarking against industry peers',
          'Anomaly detection and alerts'
        ]
      },
      {
        title: 'Reporting & Action',
        description: 'Generate comprehensive reports and actionable recommendations to reduce your carbon footprint effectively.',
        image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop',
        keyPoints: [
          'Customizable dashboard views',
          'Exportable reports in multiple formats',
          'Reduction opportunity prioritization',
          'Progress tracking against targets'
        ]
      }
    ],
    
    // Example visualization component (you would implement this with real data)
    visualization: (
      <div className="aspect-w-16 aspect-h-9">
        <iframe 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Carbon Quantification Demo"
          className="w-full h-[400px]"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    ),
    
    ctaText: "Start Measuring Your Carbon Footprint",
    ctaLink: "/contact",
    decorationPosition: "right"
  };

  return <SolutionTemplate {...pageData} />;
};

export default CarbonQuantificationPage; 