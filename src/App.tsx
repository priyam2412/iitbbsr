import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import RatingBars from './components/RatingBars';
import InteractiveTitle from './components/InteractiveTitle';
import SparkleIcon from './components/SparkleIcon';
import BackgroundElements from './components/BackgroundElements';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 relative overflow-hidden">
      <BackgroundElements />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Rating bars */}
          <RatingBars />
          
          {/* Main content */}
          <div className="text-center mb-12">
            <InteractiveTitle />
            
            {/* Subtitle with AI insights */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <SparkleIcon className="w-8 h-8" />
              <span className="text-xl md:text-2xl text-white/90 font-semibold">
                Now with AI-insights
              </span>
            </div>
            
            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button className="bg-white/90 hover:bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 group">
                Start 14-day free trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="text-white/80 hover:text-white font-medium px-6 py-4 rounded-xl transition-all duration-300 hover:bg-white/10 flex items-center gap-2 group">
                <Calendar className="w-4 h-4" />
                See what we do
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-15px) rotate(-6deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(6deg); }
          50% { transform: translateY(-10px) rotate(6deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;