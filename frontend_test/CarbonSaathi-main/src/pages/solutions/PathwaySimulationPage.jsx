import React from 'react';
import { FiActivity, FiTrendingUp, FiTarget, FiCpu, FiLayers, FiSliders } from 'react-icons/fi';
import SolutionTemplate from '../../components/templates/SolutionTemplate';

const PathwaySimulationPage = () => {
  const pageData = {
    title: 'Pathway Simulation',
    subtitle: 'Plan Your Net-Zero Journey',
    description: 'Build, simulate, and optimize your carbon reduction pathways. Model different scenarios to find the most cost-effective and feasible route to your sustainability goals.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    
    features: [
      {
        icon: <FiActivity />,
        title: 'Scenario Modeling',
        description: 'Create multiple reduction scenarios with different technology adoption curves, investment levels, and timeframes.'
      },
      {
        icon: <FiTrendingUp />,
        title: 'Reduction Pathway Optimization',
        description: 'Automatically optimize your carbon reduction pathway based on cost, timeline, and feasibility constraints.'
      },
      {
        icon: <FiTarget />,
        title: 'Target Setting & Tracking',
        description: 'Set science-based targets and track progress against customizable milestones and KPIs.'
      },
      {
        icon: <FiCpu />,
        title: 'Technology Impact Modeling',
        description: 'Model the carbon and financial impact of adopting different technologies and operational changes.'
      },
      {
        icon: <FiLayers />,
        title: 'Multi-variable Analysis',
        description: 'Analyze the trade-offs between investment costs, implementation timelines, and carbon reduction potential.'
      },
      {
        icon: <FiSliders />,
        title: 'Climate Risk Integration',
        description: 'Incorporate climate risk factors into your pathway modeling to ensure resilient strategic planning.'
      }
    ],
    
    benefits: [
      {
        title: 'Strategic Decision Making',
        description: 'Make informed investment decisions with clear visualization of the carbon and financial implications of different reduction strategies.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Cost Optimization',
        description: 'Identify the most cost-effective emission reduction opportunities to achieve your sustainability goals with minimal financial impact.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Stakeholder Alignment',
        description: 'Create compelling visual narratives of your carbon reduction journey to align investors, executives, and other stakeholders.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Resilient Planning',
        description: 'Develop robust plans that can adapt to changing regulations, technology landscapes, and market conditions.',
        image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      }
    ],
    
    workflowSteps: [
      {
        title: 'Establish Baseline & Goals',
        description: 'Start by importing your carbon footprint data and setting science-based reduction targets for your organization.',
        image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Import data from our carbon quantification module or other sources',
          'Set science-based targets aligned with global climate goals',
          'Define timeline and key milestones for your net-zero journey'
        ]
      },
      {
        title: 'Create Reduction Scenarios',
        description: 'Build multiple reduction scenarios with different combinations of technologies, operational changes, and investment levels.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Model adoption of renewable energy, electrification, and efficiency measures',
          'Set implementation timelines and investment budgets',
          'Include operational changes and supply chain interventions'
        ]
      },
      {
        title: 'Run Simulations & Analyze',
        description: 'Simulate the carbon and financial impact of different scenarios over time and compare their effectiveness.',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Visualize emission reduction trajectories for each scenario',
          'Analyze financial implications, including ROI and payback periods',
          'Identify critical intervention points and dependencies'
        ]
      },
      {
        title: 'Optimize & Plan',
        description: 'Fine-tune your pathway to balance carbon reduction, financial constraints, and implementation feasibility.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Use our AI optimization engine to refine your pathway',
          'Create detailed implementation roadmaps and action plans',
          'Develop contingency plans for different future scenarios'
        ]
      }
    ],
    
    visualization: {
      title: 'Interactive Pathway Simulation',
      description: 'Our interactive dashboard allows you to adjust parameters in real-time and immediately see the impact on your carbon reduction pathway.',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      caption: 'Play with different variables to see how they affect your carbon reduction journey.'
    },
    
    ctaText: 'Try Pathway Simulation',
    ctaLink: '/signup',
    
    decorationPosition: 'left'
  };

  return <SolutionTemplate {...pageData} />;
};

export default PathwaySimulationPage; 