import React from 'react';

const SparkleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg 
      className={`${className} text-yellow-400 animate-pulse`}
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 0l2.4 7.2L22 9l-7.6 1.8L12 18l-2.4-7.2L2 9l7.6-1.8L12 0z"/>
      <path d="M7 3l1.2 3.6L12 8l-3.8.9L7 12l-1.2-3.6L2 8l3.8-.9L7 3z"/>
      <path d="M19 14l1.2 3.6L24 19l-3.8.9L19 23l-1.2-3.6L14 19l3.8-.9L19 14z"/>
    </svg>
  );
};

export default SparkleIcon;