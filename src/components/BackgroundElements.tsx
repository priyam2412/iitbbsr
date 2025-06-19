import React from 'react';

const BackgroundElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-10 w-56 h-56 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
      
      {/* Dashboard mockup elements */}
      <div className="absolute top-32 left-1/4 w-64 h-40 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transform rotate-12 animate-float"></div>
      <div className="absolute top-96 right-1/4 w-48 h-32 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transform -rotate-6 animate-float-delayed"></div>
      <div className="absolute bottom-32 left-1/3 w-56 h-36 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transform rotate-6 animate-float-slow"></div>
      
      {/* Floating dots */}
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-2000"></div>
    </div>
  );
};

export default BackgroundElements;