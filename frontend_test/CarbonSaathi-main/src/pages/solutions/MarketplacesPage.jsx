import React from 'react';
import { FiShoppingBag, FiRefreshCw, FiSearch, FiShield, FiTrendingUp, FiFileText } from 'react-icons/fi';
import SolutionTemplate from '../../components/templates/SolutionTemplate';

const MarketplacesPage = () => {
  const pageData = {
    title: 'Carbon Marketplaces',
    subtitle: 'Trade, Offset, and Monetize Carbon Assets',
    description: 'Access regulated and voluntary carbon markets to trade carbon credits, offset emissions, and monetize your carbon reduction initiatives through our secure and transparent marketplace ecosystem.',
    heroImage: 'https://images.unsplash.com/photo-1642543492481-44e81e3914b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    
    features: [
      {
        icon: <FiShoppingBag />,
        title: 'Integrated Carbon Marketplace',
        description: 'Buy and sell carbon credits across multiple regulated and voluntary carbon markets from a single interface.'
      },
      {
        icon: <FiRefreshCw />,
        title: 'Offset Matching Engine',
        description: 'Our AI-powered matching engine recommends the most suitable carbon offset projects based on your industry, goals, and budget.'
      },
      {
        icon: <FiSearch />,
        title: 'Project Discovery & Due Diligence',
        description: 'Explore and evaluate carbon projects with comprehensive data, verification documents, and ongoing monitoring reports.'
      },
      {
        icon: <FiShield />,
        title: 'Blockchain-Verified Transactions',
        description: 'All carbon credit transactions are secured and tracked on a blockchain ledger, ensuring transparency and preventing double-counting.'
      },
      {
        icon: <FiTrendingUp />,
        title: 'Market Insights & Analytics',
        description: 'Access real-time market data, price trends, and trading volumes to make informed carbon trading decisions.'
      },
      {
        icon: <FiFileText />,
        title: 'Compliance Management',
        description: 'Track your carbon credit portfolio against compliance obligations and voluntary commitments with automated reporting.'
      }
    ],
    
    benefits: [
      {
        title: 'Simplified Carbon Trading',
        description: 'Navigate complex carbon markets with ease through our user-friendly interface and automated compliance checks.',
        image: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Enhanced Carbon Asset Value',
        description: 'Maximize the value of your carbon reduction initiatives by connecting with the right buyers and markets.',
        image: 'https://images.unsplash.com/photo-1607377122281-67a05490d143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Risk Mitigation',
        description: 'Reduce market, regulatory, and reputational risks with verified projects and transparent transaction records.',
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Streamlined Offsetting',
        description: 'Easily meet your carbon neutrality goals by finding and purchasing high-quality offsets that align with your sustainability story.',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      }
    ],
    
    workflowSteps: [
      {
        title: 'Define Your Trading Strategy',
        description: 'Establish your carbon market goals, whether for compliance, voluntary offsetting, or monetization of reduction initiatives.',
        image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Set carbon trading objectives aligned with your sustainability strategy',
          'Determine budget and risk parameters',
          'Define project type and location preferences'
        ]
      },
      {
        title: 'Explore Market Opportunities',
        description: 'Browse available carbon credits and projects across multiple standards and registries on our unified marketplace.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Filter by project type, location, verification standard, and price',
          'Review project documentation and verification reports',
          'Analyze historical performance and community impact'
        ]
      },
      {
        title: 'Execute Transactions',
        description: 'Purchase, sell, or trade carbon credits securely through our blockchain-enabled trading platform.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Complete KYC verification for regulatory compliance',
          'Execute trades with instant settlement and verification',
          'Receive blockchain certificates for all transactions'
        ]
      },
      {
        title: 'Manage & Report',
        description: 'Track your carbon credit portfolio, generate reports, and showcase your climate action with verified data.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Monitor your carbon credit holdings in real-time',
          'Generate compliance and voluntary reporting documentation',
          'Share verified climate action with stakeholders'
        ]
      }
    ],
    
    visualization: {
      title: 'Carbon Market Dashboard',
      description: 'Our interactive market dashboard provides real-time insights into carbon prices, trading volumes, and project availability across various markets and standards.',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      caption: 'Visualize carbon market trends and make data-driven trading decisions.'
    },
    
    ctaText: 'Explore the Carbon Marketplace',
    ctaLink: '/signup',
    
    decorationPosition: 'right'
  };

  return <SolutionTemplate {...pageData} />;
};

export default MarketplacesPage; 