import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Container from './Container';

const Section = ({ 
  children, 
  className = '', 
  containerClassName = '',
  id,
  background = 'default',
  animate = true,
  ...props 
}) => {
  const backgroundClasses = {
    default: 'bg-gray-50',
    light: 'bg-white',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-green-700 text-white',
    secondary: 'bg-blue-500 text-white',
    gradient: 'bg-gradient-to-r from-green-700 to-blue-500 text-white',
  };

  const bgClass = backgroundClasses[background] || '';
  
  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const ContentWrapper = animate ? motion.section : 'section';
  const animationProps = animate ? {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" },
    variants
  } : {};

  return (
    <ContentWrapper 
      className={`section ${bgClass} ${className}`}
      id={id}
      {...animationProps}
      {...props}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </ContentWrapper>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  id: PropTypes.string,
  background: PropTypes.oneOf(['default', 'light', 'dark', 'primary', 'secondary', 'gradient']),
  animate: PropTypes.bool,
};

export default Section; 