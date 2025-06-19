import React from 'react';

const BackgroundElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Removed blurred, glowing spot elements for a clean look */}
      {/* Dashboard mockup elements */}
      <div className="absolute top-32 left-1/4 w-64 h-40 bg-ui-light/5 rounded-xl backdrop-blur-sm border border-ui-light/10 transform rotate-12 animate-float"></div>
      <div className="absolute top-96 right-1/4 w-48 h-32 bg-ui-light/5 rounded-xl backdrop-blur-sm border border-ui-light/10 transform -rotate-6 animate-float-delayed"></div>
      <div className="absolute bottom-32 left-1/3 w-56 h-36 bg-ui-light/5 rounded-xl backdrop-blur-sm border border-ui-light/10 transform rotate-6 animate-float-slow"></div>
      {/* Floating dots */}
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-accent-light rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-ui-teal rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-accent-dark rounded-full animate-ping delay-2000"></div>
    </div>
  );
};

export default BackgroundElements;