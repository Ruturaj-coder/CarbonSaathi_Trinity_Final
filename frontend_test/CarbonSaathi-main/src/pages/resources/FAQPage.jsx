import React from 'react';
import { 
  FiHelpCircle, 
  FiDollarSign, 
  FiBook, 
  FiServer, 
  FiShield, 
  FiTool, 
  FiUsers, 
  FiActivity 
} from 'react-icons/fi';
import ResourcesTemplate from '../../components/templates/ResourcesTemplate';

const FAQPage = () => {
  const faqData = {
    title: "Frequently Asked Questions",
    description: "Find answers to the most common questions about carbon accounting, sustainability reporting, our platform features, and more.",
    
    categories: [
      'Platform', 
      'Pricing', 
      'Methodology', 
      'Technical', 
      'Security', 
      'Implementation',
      'Support',
      'Compliance'
    ],
    
    tags: [
      'Getting Started', 
      'Account Management', 
      'Data Handling', 
      'Integration', 
      'Carbon Credits', 
      'Reporting', 
      'Features',
      'Best Practices'
    ],
    
    // FAQ items
    items: [
      {
        id: 1,
        title: "What is CarbonSaathi and how does it work?",
        description: "CarbonSaathi is a comprehensive carbon management platform that helps organizations measure, track, reduce, and offset their carbon emissions. Our AI-powered platform integrates with your existing systems to collect activity data, applies region-specific emission factors, and generates detailed carbon footprint analyses with actionable insights.",
        icon: <FiHelpCircle />,
        category: "Platform",
        tags: ["Getting Started"],
        lastUpdated: "2023-09-15"
      },
      {
        id: 2,
        title: "How is my carbon footprint calculated?",
        description: "We use industry-standard greenhouse gas protocols and methodologies to calculate your carbon footprint. The platform collects activity data (energy consumption, travel, etc.), applies appropriate emission factors, and calculates your emissions across Scope 1 (direct), Scope 2 (indirect from purchased energy), and Scope 3 (value chain) categories.",
        icon: <FiTool />,
        category: "Methodology",
        tags: ["Data Handling"],
        lastUpdated: "2023-10-05"
      },
      {
        id: 3,
        title: "What pricing plans do you offer?",
        description: "We offer three main pricing tiers: Starter for small businesses, Business for growing organizations, and Enterprise for large corporations. Each plan includes different features and levels of support. We also offer custom pricing for specific industry needs. Visit our Pricing page for detailed information about each plan's features and cost.",
        icon: <FiDollarSign />,
        category: "Pricing",
        tags: ["Getting Started"],
        lastUpdated: "2023-11-10"
      },
      {
        id: 4,
        title: "Can I integrate CarbonSaathi with my existing systems?",
        description: "Yes, CarbonSaathi is designed to integrate seamlessly with your existing business systems. We offer APIs and pre-built connectors for popular ERP, accounting, facility management, and travel booking systems. Our platform can also import data from spreadsheets and custom data sources.",
        icon: <FiServer />,
        category: "Technical",
        tags: ["Integration"],
        lastUpdated: "2023-10-20"
      },
      {
        id: 5,
        title: "How secure is my data on CarbonSaathi?",
        description: "We take data security very seriously. CarbonSaathi employs industry-leading encryption standards, regular security audits, and strict access controls. We are compliant with major data protection regulations including GDPR and maintain SOC 2 certification. All data is stored in secure, redundant cloud environments.",
        icon: <FiShield />,
        category: "Security",
        tags: ["Data Handling"],
        lastUpdated: "2023-11-25"
      },
      {
        id: 6,
        title: "How long does it take to implement CarbonSaathi?",
        description: "Implementation time varies based on organization size and complexity. Typically, small businesses can be fully onboarded within 1-2 weeks, mid-sized companies in 2-4 weeks, and enterprise organizations in 4-8 weeks. Our customer success team works closely with you throughout the implementation process to ensure a smooth transition.",
        icon: <FiUsers />,
        category: "Implementation",
        tags: ["Getting Started"],
        lastUpdated: "2023-10-15"
      },
      {
        id: 7,
        title: "What kind of support does CarbonSaathi offer?",
        description: "All customers receive access to our knowledge base, community forums, and email support. Business and Enterprise plans include dedicated account managers, priority support, and regular check-ins. Enterprise customers also receive custom training sessions and 24/7 support options.",
        icon: <FiUsers />,
        category: "Support",
        tags: ["Account Management"],
        lastUpdated: "2023-11-05"
      },
      {
        id: 8,
        title: "Is CarbonSaathi compliant with carbon reporting regulations?",
        description: "Yes, CarbonSaathi keeps up to date with global carbon reporting regulations and frameworks. Our platform supports reporting for GHG Protocol, CDP, TCFD, GRI, and various country-specific regulatory requirements. We regularly update our methodologies to ensure compliance with emerging standards and best practices.",
        icon: <FiBook />,
        category: "Compliance",
        tags: ["Reporting"],
        lastUpdated: "2023-11-30"
      },
      {
        id: 9,
        title: "How accurate is the carbon footprint calculation?",
        description: "Our calculations follow international standards and use the most up-to-date emission factors. The accuracy depends on the quality and completeness of input data, but our platform typically achieves 95%+ accuracy when provided with comprehensive data. We continuously update our emission factors and methodologies to ensure maximum accuracy.",
        icon: <FiActivity />,
        category: "Methodology",
        tags: ["Data Handling"],
        lastUpdated: "2023-10-25"
      }
    ],
    
    resourceType: 'faq',
    showSearch: true,
    showFilters: true,
    ctaText: "Still have questions? Contact our support team",
    ctaLink: "/contact"
  };

  return (
    <ResourcesTemplate {...faqData} />
  );
};

export default FAQPage; 