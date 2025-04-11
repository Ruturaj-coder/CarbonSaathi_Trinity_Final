import React from 'react';
import { FiDatabase, FiThumbsUp, FiTrendingUp, FiCheckCircle, FiGlobe, FiBarChart2 } from 'react-icons/fi';
import SolutionTemplate from '../../components/templates/SolutionTemplate';

const CarbonSinksPage = () => {
  const pageData = {
    title: 'Carbon Sinks & Offsets',
    subtitle: 'Reduce Your Net Carbon Footprint',
    description: 'Discover and invest in verified carbon offset projects and natural carbon sinks to complement your emission reduction strategy and achieve carbon neutrality.',
    heroImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    
    features: [
      {
        icon: <FiDatabase />,
        title: 'Verified Offset Registry',
        description: 'Access a comprehensive database of verified carbon offset projects with detailed information on methodologies, certifications, and impact.'
      },
      {
        icon: <FiGlobe />,
        title: 'Global Carbon Sink Mapping',
        description: 'Visualize natural and engineered carbon sinks worldwide, with data on carbon sequestration capacity, health, and risks.'
      },
      {
        icon: <FiBarChart2 />,
        title: 'Offset Portfolio Optimization',
        description: 'AI-powered recommendations to build a diversified offset portfolio aligned with your sustainability goals and budget constraints.'
      },
      {
        icon: <FiCheckCircle />,
        title: 'Rigorous Verification Standards',
        description: 'All listed projects adhere to international standards (VCS, Gold Standard, CAR) and undergo thorough due diligence and ongoing monitoring.'
      },
      {
        icon: <FiThumbsUp />,
        title: 'Social & Environmental Co-benefits',
        description: 'Filter and select projects based on additional benefits like biodiversity conservation, community development, and SDG alignment.'
      },
      {
        icon: <FiTrendingUp />,
        title: 'Long-term Sink Performance Monitoring',
        description: 'Track the performance of carbon sinks and offset projects over time with satellite imagery, IoT sensors, and field verification reports.'
      }
    ],
    
    benefits: [
      {
        title: 'Achieve Carbon Neutrality Faster',
        description: 'Complement your direct emission reduction efforts with high-quality offsets to reach carbon neutrality goals on a feasible timeline.',
        image: 'https://images.unsplash.com/photo-1623014775054-9a967e2ef8c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Minimize Offset Investment Risks',
        description: 'Avoid greenwashing and low-quality offsets with our rigorous verification process, ensuring your investments create real climate impact.',
        image: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Enhance Brand Reputation',
        description: 'Demonstrate commitment to climate action through transparent reporting on offset investments and their verified impacts.',
        image: 'https://images.unsplash.com/photo-1611095566888-f1446042c8fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Support Sustainable Development',
        description: 'Contribute to multiple SDGs through carefully selected offset projects that create positive social and environmental impacts.',
        image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      }
    ],
    
    workflowSteps: [
      {
        title: 'Assess Your Offset Needs',
        description: 'Determine the volume of carbon offsets needed after implementing direct reduction strategies, using our gap analysis tool.',
        image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Calculate your remaining carbon footprint',
          'Set offset targets aligned with your net-zero timeline',
          'Determine budget constraints and preferences'
        ]
      },
      {
        title: 'Explore Verified Projects',
        description: 'Browse our curated marketplace of high-quality carbon sink and offset projects, filtering by type, location, co-benefits, and more.',
        image: 'https://images.unsplash.com/photo-1621964275191-ccc01ef2134c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Review project documentation, verification reports, and historical performance',
          'Filter by project type (forestry, renewable energy, etc.)',
          'Select based on co-benefits and SDG contributions'
        ]
      },
      {
        title: 'Build Your Portfolio',
        description: 'Create a diversified portfolio of offset investments to maximize impact, reduce risk, and align with your sustainability story.',
        image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Use AI-powered recommendations for optimal portfolio allocation',
          'Balance short-term and long-term projects',
          'Diversify across different project types and geographies'
        ]
      },
      {
        title: 'Monitor & Report',
        description: 'Track the performance of your offset investments with real-time monitoring and generate transparent reports for stakeholders.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Access satellite imagery and ground-based monitoring data',
          'Generate stakeholder-ready reports with key metrics',
          'Demonstrate the verified impact of your investments'
        ]
      }
    ],
    
    visualization: (
      <div className="relative pt-56 w-full">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="How Carbon Sink Monitoring Works"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="mt-4 text-center p-4">
          <h3 className="text-lg font-medium">How Carbon Sink Monitoring Works</h3>
          <p className="text-gray-600 text-sm mt-2">
            Our platform combines satellite imagery, ground sensors, and local reporting to provide accurate, real-time monitoring of carbon sink projects.
          </p>
          <p className="text-sm text-gray-500 mt-2 italic">
            See how we verify carbon sequestration in real-time across different project types.
          </p>
        </div>
      </div>
    ),
    
    ctaText: 'Explore Verified Carbon Offsets',
    ctaLink: '/signup',
    
    decorationPosition: 'right'
  };

  return <SolutionTemplate {...pageData} />;
};

export default CarbonSinksPage; 