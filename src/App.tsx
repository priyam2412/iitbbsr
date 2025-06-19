import React, { useState } from 'react';
import { ArrowRight, Calendar, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import RatingBars from './components/RatingBars';
import InteractiveTitle from './components/InteractiveTitle';
import SparkleIcon from './components/SparkleIcon';
import BackgroundElements from './components/BackgroundElements';
import Loader from './components/Loader';
import RippleCursor from './components/RippleCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Add a small delay before showing content for smooth transition
    setTimeout(() => setContentVisible(true), 100);
  };

  const toggleFeatures = () => {
    setFeaturesOpen((open) => !open);
  };

  return (
    <>
      <RippleCursor />
      {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`min-h-screen relative overflow-hidden transition-all duration-700 ${
        contentVisible 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-50'
      }`}>
        {/* Background gradient with specified top and bottom colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a5786] via-[#0a5786] to-[#091629]"></div>
        
        <BackgroundElements />
        
        {/* Hero Section */}
        <div className={`relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center transition-all duration-1000 ${
          contentVisible 
            ? 'translate-y-0' 
            : 'translate-y-20'
        }`}>
          <div className="max-w-6xl mx-auto">
            {/* Rating bars with enhanced animation */}
            <div className={`transform transition-all duration-700 delay-100 ${
              contentVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}>
              <RatingBars />
            </div>
            
            {/* Main content */}
            <div className="text-center mb-12">
              <div className={`transition-all duration-700 delay-200 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-90'
              }`}>
                <InteractiveTitle />
              </div>
              
              {/* Enhanced subtitle with AI insights */}
              <div className={`flex items-center justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}>
                <div className="relative">
                  <SparkleIcon className="w-8 h-8 animate-pulse" />
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-spin-slow" />
                  </div>
                </div>
                <span className="text-xl md:text-2xl text-white/90 font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Now with AI-powered insights
                </span>
              </div>
              
              {/* Enhanced call to action buttons */}
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}>
                <button className="bg-gradient-to-r from-accent-dark to-primary-light hover:from-accent-DEFAULT hover:to-primary-DEFAULT text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 group">
                  Start 14-day free trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="text-white/80 hover:text-white font-medium px-6 py-4 rounded-xl transition-all duration-300 hover:bg-white/10 flex items-center gap-2 group backdrop-blur-sm">
                  <Calendar className="w-4 h-4" />
                  Schedule a demo
                </button>
              </div>

              {/* Scroll indicator */}
              <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white/90 transition-all duration-700 delay-500 cursor-pointer animate-bounce ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`} onClick={toggleFeatures}>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm">Explore Features</span>
                  {featuresOpen ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        {(featuresOpen && contentVisible) && (
          <div id="features" className="relative z-10 container mx-auto px-4 transition-all duration-700 delay-300 overflow-hidden max-h-[2000px] opacity-100 translate-y-0 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                Powerful Features for Your Business
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Smart Analytics',
                    description: 'Get deep insights into your business performance with AI-powered analytics',
                    icon: '📊'
                  },
                  {
                    title: 'Real-time Updates',
                    description: 'Stay on top of your metrics with instant updates and notifications',
                    icon: '⚡'
                  },
                  {
                    title: 'Custom Reports',
                    description: 'Create beautiful, customized reports that tell your story',
                    icon: '📈'
                  },
                  {
                    title: 'Team Collaboration',
                    description: 'Work together seamlessly with built-in collaboration tools',
                    icon: '👥'
                  },
                  {
                    title: 'Data Security',
                    description: 'Enterprise-grade security to protect your sensitive information',
                    icon: '🔒'
                  },
                  {
                    title: 'Integration Ready',
                    description: 'Connect with your favorite tools and services effortlessly',
                    icon: '🔌'
                  }
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-700 hover:scale-105 hover:shadow-2xl border border-white/10 opacity-100 translate-y-0"
                    style={{ transitionDelay: `${(index + 5) * 100}ms` }}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Testimonials Section */}
        <section className="w-full bg-[#0a5786] bg-gradient-to-b from-[#0a5786] to-[#091629] py-16 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Testimonials</h2>
          <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <video
              src="/Assets/testimonials.mp4"
              className="w-full h-auto object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              style={{ background: '#091629' }}
            />
          </div>
        </section>
        
        {/* --- Testimonials Replica Section --- */}
        <section id="testimonials-section" className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0a5786] to-[#091629] py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">Happy Seller</h2>
          <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#091629]/80">
            <video
              src="/Assets/testimonials.mp4"
              className="w-full h-auto object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              style={{ background: '#091629' }}
            />
          </div>
        </section>
        
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
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
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
          .animate-spin-slow {
            animation: spin-slow 4s linear infinite;
          }
        `}</style>
      </div>
    </>
  );
}

export default App;