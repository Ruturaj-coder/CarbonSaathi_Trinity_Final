import React from 'react';
import { FiFileText, FiClipboard, FiTrendingUp, FiGlobe, FiBarChart2, FiAward, FiBookOpen, FiCpu } from 'react-icons/fi';
import ResourcesTemplate from '../../components/templates/ResourcesTemplate';

const ResearchPage = () => {
  const researchData = {
    title: "Sustainability Research & Reports",
    description: "Access our collection of cutting-edge research papers, industry reports, and whitepapers on climate action, sustainable business practices, and emerging trends.",
    
    categories: [
      'Industry Reports', 
      'Whitepapers', 
      'Research Papers', 
      'Market Analysis', 
      'Climate Science', 
      'Policy Briefs'
    ],
    
    tags: [
      'Net Zero', 
      'Carbon Markets', 
      'ESG', 
      'Climate Finance', 
      'Energy Transition', 
      'Sustainable Innovation', 
      'Policy & Regulation'
    ],
    
    items: [
      {
        id: 1,
        title: "The State of Corporate Sustainability: 2023 Global Report",
        description: "Our comprehensive analysis of sustainability trends, challenges, and best practices across industries based on data from over 2,000 global companies.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Industry Reports",
        date: "June 2023",
        pageCount: 48,
        authors: ["CarbonSaathi Research Team"],
        tags: ["ESG", "Sustainable Innovation"],
        downloadable: true,
        fileSize: "5.2 MB",
        citationCount: 187,
        link: "/resources/research/state-of-sustainability-2023",
        icon: <FiBarChart2 size={24} />
      },
      {
        id: 2,
        title: "Emerging Trends in Carbon Markets: Opportunities and Risks",
        description: "An in-depth analysis of global carbon markets, pricing mechanisms, and future projections to inform your carbon offset strategy.",
        image: "https://images.unsplash.com/photo-1534470394-5845e082420a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Market Analysis",
        date: "April 2023",
        pageCount: 36,
        authors: ["Dr. Michael Chen", "Sarah Williams"],
        tags: ["Carbon Markets", "Climate Finance"],
        downloadable: true,
        fileSize: "4.7 MB",
        citationCount: 112,
        link: "/resources/research/carbon-markets-trends",
        icon: <FiTrendingUp size={24} />
      },
      {
        id: 3,
        title: "Net Zero Pathways for Heavy Industry: Technical and Economic Analysis",
        description: "Research exploring viable decarbonization strategies for hard-to-abate industrial sectors, including cement, steel, and chemicals.",
        image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Research Papers",
        date: "March 2023",
        pageCount: 65,
        authors: ["Prof. James Rodriguez", "Industrial Sustainability Research Group"],
        tags: ["Net Zero", "Energy Transition"],
        downloadable: true,
        fileSize: "7.8 MB",
        citationCount: 94,
        link: "/resources/research/net-zero-heavy-industry",
        icon: <FiFileText size={24} />
      },
      {
        id: 4,
        title: "The ESG Reporting Landscape: Global Standards Comparison",
        description: "A comparative analysis of major ESG reporting frameworks and standards, with practical guidance for corporate implementation.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Whitepapers",
        date: "May 2023",
        pageCount: 42,
        authors: ["ESG Advisory Council", "Lisa Thompson"],
        tags: ["ESG", "Policy & Regulation"],
        downloadable: true,
        fileSize: "3.9 MB",
        citationCount: 156,
        link: "/resources/research/esg-reporting-standards",
        icon: <FiClipboard size={24} />
      },
      {
        id: 5,
        title: "AI and Machine Learning Applications in Climate Action",
        description: "Exploring cutting-edge applications of artificial intelligence in climate modeling, carbon accounting, and sustainability optimization.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Research Papers",
        date: "February 2023",
        pageCount: 53,
        authors: ["Dr. Alex Kim", "AI for Sustainability Initiative"],
        tags: ["Sustainable Innovation", "Net Zero"],
        downloadable: true,
        fileSize: "6.2 MB",
        citationCount: 78,
        link: "/resources/research/ai-climate-action",
        icon: <FiCpu size={24} />
      },
      {
        id: 6,
        title: "Climate Risk Assessment Methodologies for Businesses",
        description: "A review of leading methodologies for assessing physical and transition climate risks, with case studies across diverse sectors.",
        image: "https://images.unsplash.com/photo-1588974269124-81d59faf5481?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Whitepapers",
        date: "April 2023",
        pageCount: 38,
        authors: ["Climate Risk Consortium"],
        tags: ["Climate Finance", "ESG"],
        downloadable: true,
        fileSize: "4.5 MB",
        citationCount: 105,
        link: "/resources/research/climate-risk-assessment",
        icon: <FiGlobe size={24} />
      },
      {
        id: 7,
        title: "Global Policy Developments in Carbon Pricing",
        description: "Analysis of carbon tax and emissions trading systems worldwide, with implications for multinational corporations.",
        image: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Policy Briefs",
        date: "January 2023",
        pageCount: 29,
        authors: ["Policy Research Team", "Dr. Emma Martinez"],
        tags: ["Policy & Regulation", "Carbon Markets"],
        downloadable: true,
        fileSize: "3.4 MB",
        citationCount: 143,
        link: "/resources/research/carbon-pricing-policy",
        icon: <FiAward size={24} />
      },
      {
        id: 8,
        title: "The Business Case for Science-Based Targets: ROI Analysis",
        description: "Research quantifying the financial returns and competitive advantages of adopting science-based climate targets.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category: "Market Analysis",
        date: "May 2023",
        pageCount: 44,
        authors: ["Sustainable Business Forum"],
        tags: ["Net Zero", "ESG", "Climate Finance"],
        downloadable: true,
        fileSize: "5.8 MB",
        citationCount: 89,
        link: "/resources/research/science-based-targets-roi",
        icon: <FiBookOpen size={24} />
      }
    ],
    
    resourceType: 'article',
    showSearch: true,
    showFilters: true,
    ctaText: "Request Custom Research",
    ctaLink: "/contact"
  };

  return <ResourcesTemplate {...researchData} />;
};

export default ResearchPage; 