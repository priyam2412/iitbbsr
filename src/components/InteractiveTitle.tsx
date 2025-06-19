import React, { useState, useRef } from 'react';
import DashboardPreview from './DashboardPreview';

const InteractiveTitle: React.FC = () => {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const titleRef = useRef<HTMLDivElement>(null);

  const handleWordHover = (word: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: rect.left + rect.width / 2,
      y: rect.top
    });
    setHoveredWord(word);
  };

  const handleWordLeave = () => {
    setHoveredWord(null);
  };

  const getWordType = (word: string): 'expenses' | 'reports' | 'forecasts' | 'dashboards' | 'consolidations' | null => {
    const wordMap: { [key: string]: 'expenses' | 'reports' | 'forecasts' | 'dashboards' | 'consolidations' } = {
      'reports': 'reports',
      'forecasts': 'forecasts',
      'dashboards': 'dashboards',
      'consolidations': 'consolidations'
    };
    return wordMap[word] || null;
  };

  return (
    <div className="relative" ref={titleRef}>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 text-center">
        Create{' '}
        <span 
          className="hover:bg-white/10 hover:text-blue-200 transition-all duration-300 cursor-pointer rounded-lg px-2 py-1"
          onMouseEnter={(e) => handleWordHover('reports', e)}
          onMouseLeave={handleWordLeave}
        >
          reports
        </span>
        ,{' '}
        <span 
          className="hover:bg-white/10 hover:text-blue-200 transition-all duration-300 cursor-pointer rounded-lg px-2 py-1"
          onMouseEnter={(e) => handleWordHover('forecasts', e)}
          onMouseLeave={handleWordLeave}
        >
          forecasts
        </span>
        ,<br />
        <span 
          className="hover:bg-white/10 hover:text-blue-200 transition-all duration-300 cursor-pointer rounded-lg px-2 py-1"
          onMouseEnter={(e) => handleWordHover('dashboards', e)}
          onMouseLeave={handleWordLeave}
        >
          dashboards
        </span>{' '}
        &{' '}
        <span 
          className="hover:bg-white/10 hover:text-blue-200 transition-all duration-300 cursor-pointer rounded-lg px-2 py-1"
          onMouseEnter={(e) => handleWordHover('consolidations', e)}
          onMouseLeave={handleWordLeave}
        >
          consolidations
        </span>
      </h1>

      {hoveredWord && getWordType(hoveredWord) && (
        <DashboardPreview
          type={getWordType(hoveredWord)!}
          isVisible={!!hoveredWord}
          position={mousePosition}
        />
      )}
    </div>
  );
};

export default InteractiveTitle;