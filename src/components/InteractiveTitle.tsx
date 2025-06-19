import React, { useState, useRef, useEffect } from 'react';
import DashboardPreview from './DashboardPreview';

const InteractiveTitle: React.FC = () => {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const words = ['reports', 'forecasts', 'dashboards', 'consolidations'];

  return (
    <div className="relative" ref={titleRef}>
      <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 text-center transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <span className="inline-block transform hover:scale-105 transition-transform duration-300">
          Create
        </span>{' '}
        {words.map((word, index) => (
          <React.Fragment key={word}>
            <span 
              className={`inline-block hover:bg-ui-light/10 hover:text-accent-light transition-all duration-300 cursor-pointer rounded-lg px-2 py-1 transform hover:scale-105 ${
                hoveredWord === word ? 'bg-ui-light/10 text-accent-light' : ''
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
              onMouseEnter={(e) => handleWordHover(word, e)}
              onMouseLeave={handleWordLeave}
            >
              {word}
            </span>
            {index < words.length - 2 && <span className="mx-1">,</span>}
            {index === words.length - 2 && (
              <>
                <br className="md:hidden" />
                <span className="mx-1">and</span>
              </>
            )}
          </React.Fragment>
        ))}
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