import React from 'react';
import { FiAward, FiBarChart2, FiUsers, FiTrendingUp, FiThumbsUp, FiGift } from 'react-icons/fi';
import SolutionTemplate from '../../components/templates/SolutionTemplate';

const RewardsRankingsPage = () => {
  const pageData = {
    title: 'Rewards & Rankings',
    subtitle: 'Recognize, Incentivize, and Benchmark',
    description: 'Drive engagement and create a culture of sustainability through competitive rankings, benchmarking against industry peers, and rewarding carbon reduction achievements.',
    heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    
    features: [
      {
        icon: <FiAward />,
        title: 'Industry Benchmarking',
        description: 'Compare your carbon performance against industry peers with anonymized benchmarking data and percentile rankings.'
      },
      {
        icon: <FiBarChart2 />,
        title: 'ESG Rating Integration',
        description: 'Connect carbon performance to leading ESG ratings with automated data sharing and gap analysis.'
      },
      {
        icon: <FiUsers />,
        title: 'Team Competitions',
        description: 'Foster friendly competition between departments or locations with carbon reduction challenges and leaderboards.'
      },
      {
        icon: <FiTrendingUp />,
        title: 'Performance Badges',
        description: 'Earn and showcase digital badges and certificates for achieving carbon reduction milestones and targets.'
      },
      {
        icon: <FiThumbsUp />,
        title: 'Social Recognition',
        description: 'Share your verified carbon achievements on social media and sustainability reports with ready-to-use graphics.'
      },
      {
        icon: <FiGift />,
        title: 'Rewards Marketplace',
        description: 'Redeem points earned through carbon reduction initiatives for sustainable products, services, or donations to environmental causes.'
      }
    ],
    
    benefits: [
      {
        title: 'Enhanced Employee Engagement',
        description: 'Motivate employees at all levels to participate in your sustainability initiatives through gamification and recognition.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Competitive Advantage',
        description: 'Understand how your carbon performance compares to industry peers and identify areas for improvement to gain competitive edge.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Strengthened Brand Reputation',
        description: 'Showcase your carbon leadership with verified achievements and industry recognition to enhance your sustainability credentials.',
        image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      },
      {
        title: 'Accelerated Carbon Reduction',
        description: 'Drive faster and more sustainable behavior change by rewarding positive actions and creating a culture of continuous improvement.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      }
    ],
    
    workflowSteps: [
      {
        title: 'Set Your Benchmarks',
        description: 'Define the metrics that matter to your organization and set up personalized benchmarking against industry peers.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Select key performance indicators relevant to your industry',
          'Choose your benchmark groups and comparison timeframes',
          'Set targets based on industry best practices and leaders'
        ]
      },
      {
        title: 'Create Engagement Programs',
        description: 'Design carbon reduction challenges and reward programs tailored to your organization\'s culture and goals.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Structure team competitions with clear goals and timelines',
          'Define rewards and recognition for achievements',
          'Create communication plans to maintain momentum'
        ]
      },
      {
        title: 'Track Progress & Performance',
        description: 'Monitor your carbon reduction achievements, team performance, and rankings in real-time.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'View real-time leaderboards and performance dashboards',
          'Track progress against benchmarks and targets',
          'Receive alerts for significant ranking changes'
        ]
      },
      {
        title: 'Celebrate & Showcase Success',
        description: 'Recognize achievements, distribute rewards, and share your carbon leadership story with stakeholders.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        points: [
          'Award badges and certificates for milestone achievements',
          'Distribute rewards through the marketplace',
          'Generate shareable content for internal and external communications'
        ]
      }
    ],
    
    visualization: {
      title: 'Interactive Leaderboard & Benchmarking',
      description: 'Our dynamic visualization tools help you track your ranking against peers and celebrate your team\'s achievements.',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      caption: 'See how gamification drives engagement and accelerates carbon reduction across your organization.'
    },
    
    ctaText: 'Start Benchmarking Your Performance',
    ctaLink: '/signup',
    
    decorationPosition: 'left'
  };

  return <SolutionTemplate {...pageData} />;
};

export default RewardsRankingsPage; 