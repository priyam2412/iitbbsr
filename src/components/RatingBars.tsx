import React from 'react';
import { Star } from 'lucide-react';

const RatingBars: React.FC = () => {
  const ratings = [
    { platform: 'Capterra', rating: '4.8', logo: '🎯' },
    { platform: 'G2', rating: '4.8', logo: '🟢' },
    { platform: 'Xero', rating: '350+', type: 'reviews', logo: '💼' },
    { platform: 'QuickBooks', rating: '550+', type: 'reviews', logo: '📊' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 opacity-90">
      {ratings.map((item, index) => (
        <div key={index} className="flex items-center gap-2 text-white/80 text-sm">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span>{item.rating} {item.type || 'rating'} on</span>
          <span className="font-semibold">{item.platform}</span>
        </div>
      ))}
    </div>
  );
};

export default RatingBars;