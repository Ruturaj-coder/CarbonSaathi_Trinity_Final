import PropTypes from 'prop-types';

const Container = ({ 
  children, 
  fluid = false, 
  className = '',
  as: Component = 'div',
  ...props 
}) => {
  const containerClass = fluid ? 'container-fluid' : 'container';
  
  return (
    <Component className={`${containerClass} ${className}`} {...props}>
      {children}
    </Component>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  as: PropTypes.elementType,
};

export default Container; 