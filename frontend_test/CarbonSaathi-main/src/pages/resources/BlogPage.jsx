import React from 'react';
import { FiUsers, FiTrendingUp, FiGlobe, FiBarChart2, FiHome, FiPieChart } from 'react-icons/fi';
import ResourcesTemplate from '../../components/templates/ResourcesTemplate';

const BlogPage = () => {
  // Sample blog data
  const blogData = {
    title: 'Carbon Saathi Blog',
    description: 'Latest insights, trends, and strategies for achieving carbon neutrality and sustainable business practices.',
    
    // Categories for filtering
    categories: [
      'Industry News',
      'Case Studies',
      'Best Practices',
      'Technology',
      'Policy Updates',
      'Research'
    ],
    
    // Tags for filtering
    tags: [
      'Carbon Neutrality',
      'Sustainability',
      'Climate Action',
      'ESG',
      'Net Zero',
      'Carbon Markets',
      'Renewable Energy',
      'Carbon Offsets'
    ],
    
    // Blog posts
    items: [
      {
        id: 1,
        title: 'The Path to Net Zero: An Industry Guide for 2024',
        description: 'Explore the latest strategies, technologies, and best practices for businesses aiming to achieve net-zero emissions in today\'s evolving regulatory landscape.',
        image: 'https://images.unsplash.com/photo-1500534623283-312aebe2edc9?q=80&w=2070&auto=format&fit=crop',
        category: 'Best Practices',
        date: 'April 1, 2024',
        tags: ['Net Zero', 'Carbon Neutrality', 'Sustainability'],
        link: '/resources/blog/path-to-net-zero'
      },
      {
        id: 2,
        title: 'Carbon Markets 101: Understanding Voluntary vs. Compliance Markets',
        description: 'A comprehensive breakdown of how carbon markets work, the difference between voluntary and compliance markets, and how your organization can effectively participate.',
        image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop',
        category: 'Industry News',
        date: 'March 28, 2024',
        tags: ['Carbon Markets', 'ESG', 'Policy Updates'],
        link: '/resources/blog/carbon-markets-101'
      },
      {
        id: 3,
        title: 'How Company X Reduced Emissions by 40% in Two Years',
        description: 'A detailed case study of how a mid-sized manufacturing company implemented carbon tracking and reduction strategies to achieve remarkable emissions cuts.',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
        category: 'Case Studies',
        date: 'March 22, 2024',
        tags: ['Sustainability', 'Carbon Neutrality', 'ESG'],
        link: '/resources/blog/company-x-case-study'
      },
      {
        id: 4,
        title: 'AI and Carbon Accounting: The Future of Emissions Tracking',
        description: 'Discover how artificial intelligence and machine learning are revolutionizing the accuracy and efficiency of carbon accounting and emissions management.',
        image: 'https://images.unsplash.com/photo-1580706483913-b6ea7db483a0?q=80&w=2070&auto=format&fit=crop',
        category: 'Technology',
        date: 'March 15, 2024',
        tags: ['Technology', 'Carbon Neutrality', 'ESG'],
        link: '/resources/blog/ai-carbon-accounting'
      },
      {
        id: 5,
        title: 'The Business Case for Carbon Offsets: ROI Analysis',
        description: 'A data-driven analysis of the return on investment when implementing carbon offset programs, including financial, reputational, and regulatory benefits.',
        image: 'https://images.unsplash.com/photo-1642543348745-75a355b59808?q=80&w=2070&auto=format&fit=crop',
        category: 'Research',
        date: 'March 8, 2024',
        tags: ['Carbon Offsets', 'ESG', 'Sustainability'],
        link: '/resources/blog/carbon-offsets-roi'
      },
      {
        id: 6,
        title: 'Global Carbon Policy Updates: What Businesses Need to Know',
        description: 'A comprehensive summary of recent and upcoming carbon policy changes across major global economies and how they will impact business operations.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
        category: 'Policy Updates',
        date: 'March 1, 2024',
        tags: ['Policy Updates', 'Climate Action', 'ESG'],
        link: '/resources/blog/global-carbon-policy'
      },
      {
        id: 7,
        title: 'Carbon Reduction Strategies for Small Businesses',
        description: 'Practical, cost-effective approaches for small and medium enterprises to measure, reduce, and offset their carbon footprint without breaking the bank.',
        image: 'https://images.unsplash.com/photo-1448317846460-907988886b33?q=80&w=2070&auto=format&fit=crop',
        category: 'Best Practices',
        date: 'February 24, 2024',
        tags: ['Sustainability', 'Small Business', 'Carbon Neutrality'],
        link: '/resources/blog/small-business-carbon-reduction'
      },
      {
        id: 8,
        title: 'Renewable Energy Certificates: A Deep Dive',
        description: 'Everything you need to know about Renewable Energy Certificates (RECs), how they work, and how they can be integrated into your carbon reduction strategy.',
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop',
        category: 'Industry News',
        date: 'February 17, 2024',
        tags: ['Renewable Energy', 'Carbon Markets', 'Sustainability'],
        link: '/resources/blog/renewable-energy-certificates'
      },
      {
        id: 9,
        title: 'The Psychology of Sustainability: Engaging Employees in Your Carbon Journey',
        description: 'Strategies for effectively communicating your sustainability goals and inspiring meaningful employee participation in carbon reduction initiatives.',
        image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop',
        category: 'Best Practices',
        date: 'February 10, 2024',
        tags: ['Employee Engagement', 'Sustainability', 'Corporate Culture'],
        link: '/resources/blog/psychology-sustainability'
      }
    ],
    
    resourceType: 'article',
    showSearch: true,
    showFilters: true,
    ctaText: "Subscribe to Our Blog",
    ctaLink: "/contact"
  };

  return <ResourcesTemplate {...blogData} />;
};

export default BlogPage; 