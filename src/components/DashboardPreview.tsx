import React from 'react';
import { Settings, TrendingUp, TrendingDown, BarChart3, PieChart, DollarSign } from 'lucide-react';

interface DashboardPreviewProps {
  type: 'expenses' | 'reports' | 'forecasts' | 'dashboards' | 'consolidations';
  isVisible: boolean;
  position: { x: number; y: number };
}

const DashboardPreview: React.FC<DashboardPreviewProps> = ({ type, isVisible, position }) => {
  const renderContent = () => {
    switch (type) {
      case 'expenses':
        return (
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-white/20 w-64">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Expenses</h3>
              <Settings className="w-4 h-4 text-gray-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-4">$56.2K</div>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="8"
                          strokeDasharray="100" strokeDashoffset="25" strokeLinecap="round"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="8"
                          strokeDasharray="100" strokeDashoffset="50" strokeLinecap="round"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="8"
                          strokeDasharray="100" strokeDashoffset="75" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Wages</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-600">Rent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600">Other</span>
              </div>
            </div>
          </div>
        );
      
      case 'reports':
        return (
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-white/20 w-72">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Monthly Report</h3>
              <BarChart3 className="w-4 h-4 text-gray-600" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Revenue</div>
                <div className="text-xl font-bold text-green-600">$124.5K</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Profit</div>
                <div className="text-xl font-bold text-blue-600">$45.2K</div>
              </div>
            </div>
            <div className="h-16 flex items-end gap-1">
              {[40, 65, 45, 80, 60, 90, 75, 85, 70, 95, 80, 100].map((height, i) => (
                <div key={i} className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t flex-1" 
                     style={{ height: `${height}%` }}></div>
              ))}
            </div>
          </div>
        );
      
      case 'forecasts':
        return (
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-white/20 w-64">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Forecast</h3>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Q2 2024</div>
            <div className="text-sm text-gray-600 mb-4">Projected Growth</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Revenue</span>
                <span className="text-sm font-semibold text-green-600">+24%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Expenses</span>
                <span className="text-sm font-semibold text-red-600">+8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Net Profit</span>
                <span className="text-sm font-semibold text-blue-600">+31%</span>
              </div>
            </div>
            <div className="mt-4 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-semibold">Trending Up</span>
            </div>
          </div>
        );
      
      case 'dashboards':
        return (
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-white/20 w-80">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Total Income</h3>
              <Settings className="w-4 h-4 text-gray-600" />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold text-gray-900">$426.8K</div>
              <div className="text-sm text-red-500">↘ 36.5%</div>
            </div>
            <div className="text-xs text-gray-500 mb-4">$672.5K total last year</div>
            <div className="h-20 flex items-end gap-1 mb-4">
              {[30, 45, 35, 60, 40, 70, 50, 80, 45, 90, 65, 100, 55, 85, 70, 95].map((height, i) => (
                <div key={i} className="bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t flex-1" 
                     style={{ height: `${height}%` }}></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Feb</span>
              <span>Jan</span>
            </div>
          </div>
        );
      
      case 'consolidations':
        return (
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-white/20 w-72">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Cash Flow</h3>
              <Settings className="w-4 h-4 text-gray-600" />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold text-gray-900">$288,721</div>
              <div className="text-sm text-green-500">↗ 202.9%</div>
            </div>
            <div className="text-xs text-gray-500 mb-4">Current</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">$95,319</div>
                <div className="text-xs text-gray-500">Inflow</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">$45,892</div>
                <div className="text-xs text-gray-500">Outflow</div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div 
      className={`fixed z-50 pointer-events-none transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ 
        left: position.x, 
        top: position.y,
        transform: 'translate(-50%, -100%)'
      }}
    >
      {renderContent()}
    </div>
  );
};

export default DashboardPreview;