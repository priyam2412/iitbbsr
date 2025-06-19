import React, { useEffect, useRef, useState } from 'react';

const RIPPLE_DURATION = 400; // ms

const RippleCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [ripple, setRipple] = useState<{ x: number; y: number; key: number }[]>([]);
  const rippleKey = useRef(0);
  const timeouts = useRef<number[]>([]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      triggerRipple(e.clientX, e.clientY);
    };
    const handleClick = (e: MouseEvent) => {
      triggerRipple(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleClick);
      // Clean up all pending timeouts
      timeouts.current.forEach(clearTimeout);
    };
    // eslint-disable-next-line
  }, []);

  const triggerRipple = (x: number, y: number) => {
    rippleKey.current += 1;
    const key = rippleKey.current;
    setRipple((prev) => [...prev, { x, y, key }]);
    const timeout = setTimeout(() => {
      setRipple((prev) => prev.filter(r => r.key !== key));
    }, RIPPLE_DURATION);
    timeouts.current.push(timeout);
  };

  return (
    <>
      {/* Water reflection colored ripple with distortion */}
      {ripple.map(({ x, y, key }) => (
        <svg
          key={key}
          style={{
            position: 'fixed',
            left: x - 60,
            top: y - 60,
            width: 120,
            height: 120,
            pointerEvents: 'none',
            zIndex: 9999,
            animation: 'water-cursor 0.4s linear',
            mixBlendMode: 'lighten',
          }}
        >
          <defs>
            <radialGradient id={`water-gradient-${key}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#71aec2" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#0a5786" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0a5786" stopOpacity="0" />
            </radialGradient>
            <filter id={`water-filter-${key}`} x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence type="turbulence" baseFrequency="0.10 0.15" numOctaves="2" seed={key} result="turb"/>
              <feDisplacementMap in2="turb" in="SourceGraphic" scale="18" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
          <circle
            cx="60"
            cy="60"
            r="40"
            fill={`url(#water-gradient-${key})`}
            filter={`url(#water-filter-${key})`}
          />
        </svg>
      ))}
      <style>{`
        @keyframes water-cursor {
          0% { opacity: 0.8; transform: scale(0.5); }
          80% { opacity: 0.4; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(1.7); }
        }
      `}</style>
    </>
  );
};

export default RippleCursor; 