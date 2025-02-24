import React from 'react';

const Section = ({ id, children, className }) => {
  return (
    <div id={id} className={`section ${className}`}>
      {children}
    </div>
  );
};

export default Section;
