import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Smartphone, 
  Bell, 
  Activity, 
  ChevronRight, 
  Instagram, 
  Youtube, 
  Compass, 
  MessageCircle, 
  Mail,
  Zap,
  Home,
  BarChart2,
  Settings,
  Plus
} from 'lucide-react';
import { WeeklyChart } from './components/charts/WeeklyChart';
import { CategoryChart } from './components/charts/CategoryChart';
import { StatCard } from './components/StatCard';
import { weeklyData, appUsageData, topApps } from './lib/data';

function App() {
  const [sessionTime, setSessionTime] = useState(0);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#fef7ff] text-[#1d1b20] font-sans pb-24 selection:bg-[#d0bcff] selection:text-[#381e72]">
      {/* Material 3 Top App Bar */}
      <header className="bg-[#fef7ff] sticky top-0 z-10 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#eaddff] flex items-center justify-center text-[#21005d] font-bold text-lg">
            S
          </div>
          <h1 className="text-2xl font-normal text-[#1d1b20]">Screen Time</h1>
        </div>
        <div className="flex items-center space-x-2 bg-[#eaddff] text-[#21005d] px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
          <Activity size={16} />
          <span>{formatTime(sessionTime)}</span>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        
        {/* Hero Stat - Material 3 Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#6750a4] text-white rounded-[28px] p-6 shadow-md relative overflow-hidden"
        >
          <div className="relative z-10">
            <p className="text-sm font-medium text-[#eaddff] tracking-wide mb-1">Daily Average</p>
            <h2 className="text-6xl font-normal tracking-tight mb-2">4h 32m</h2>
            <div className="inline-flex items-center gap-1.5 bg-[#4f378b] px-3 py-1 rounded-full text-sm font-medium text-[#eaddff]">
              <Zap size={14} />
              <span>12% down from last week</span>
            </div>
          </div>
          {/* Decorative circle */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#7c62bc] rounded-full opacity-50 blur-2xl"></div>
        </motion.div>

        {/* Weekly Chart - Material 3 Surface Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#f3edf7] rounded-[24px] p-5"
        >
          <div className="flex justify-between items-center mb-4 px-1">
            <h3 className="text-lg font-medium text-[#1d1b20]">Weekly Activity</h3>
            <span className="text-xs text-[#49454f] font-medium bg-[#eaddff] px-2 py-1 rounded-md">Last 7 Days</span>
          </div>
          <WeeklyChart data={weeklyData} />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <StatCard 
              title="Pickups" 
              value="48" 
              icon={<Smartphone size={24} />}
              trend="+12%"
              trendUp={false}
              className="bg-[#fffbfe] border-none shadow-sm h-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <StatCard 
              title="Notifications" 
              value="124" 
              icon={<Bell size={24} />}
              trend="-5%"
              trendUp={true}
              className="bg-[#fffbfe] border-none shadow-sm h-full"
            />
          </motion.div>
        </div>

        {/* Categories - Material 3 List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#f3edf7] rounded-[24px] p-5"
        >
          <h3 className="text-lg font-medium text-[#1d1b20] mb-4 px-1">Most Used Apps</h3>
          <div className="flex flex-col gap-6">
            <div className="w-full h-48 flex justify-center">
              <CategoryChart data={appUsageData} />
            </div>
            <div className="space-y-1">
              {topApps.map((app, i) => (
                <div key={app.name} className="flex items-center justify-between p-3 hover:bg-[#eaddff]/30 rounded-xl transition-colors active:bg-[#eaddff]/50">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      app.category === 'Social' ? 'bg-[#d0bcff] text-[#381e72]' :
                      app.category === 'Entertainment' ? 'bg-[#f2b8b5] text-[#601410]' :
                      app.category === 'Productivity' ? 'bg-[#bcece0] text-[#003733]' :
                      'bg-[#e6e1e5] text-[#1d1b20]'
                    }`}>
                      {app.icon === 'Instagram' && <Instagram size={20} />}
                      {app.icon === 'Youtube' && <Youtube size={20} />}
                      {app.icon === 'Compass' && <Compass size={20} />}
                      {app.icon === 'MessageCircle' && <MessageCircle size={20} />}
                      {app.icon === 'Mail' && <Mail size={20} />}
                    </div>
                    <div>
                      <p className="font-medium text-[#1d1b20] text-base">{app.name}</p>
                      <p className="text-xs text-[#49454f]">{app.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[#1d1b20]">{app.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <p className="text-center text-xs text-[#49454f] mt-8 pb-4">
          Data shown is for demonstration purposes.
        </p>
      </main>

      {/* Floating Action Button (FAB) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-4 w-14 h-14 bg-[#6750a4] text-white rounded-2xl shadow-lg flex items-center justify-center z-20"
      >
        <Plus size={24} />
      </motion.button>

      {/* Material 3 Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#f3edf7] h-20 flex justify-around items-center px-2 z-20 border-t border-[#cac4d0]/20">
        <button 
          onClick={() => setActiveTab('home')}
          className="flex flex-col items-center justify-center w-16 h-16 gap-1"
        >
          <div className={`w-16 h-8 rounded-full flex items-center justify-center transition-colors ${activeTab === 'home' ? 'bg-[#e8def8]' : 'bg-transparent'}`}>
            <Home size={24} className={activeTab === 'home' ? 'text-[#1d1b20]' : 'text-[#49454f]'} />
          </div>
          <span className={`text-xs font-medium ${activeTab === 'home' ? 'text-[#1d1b20]' : 'text-[#49454f]'}`}>Home</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('stats')}
          className="flex flex-col items-center justify-center w-16 h-16 gap-1"
        >
          <div className={`w-16 h-8 rounded-full flex items-center justify-center transition-colors ${activeTab === 'stats' ? 'bg-[#e8def8]' : 'bg-transparent'}`}>
            <BarChart2 size={24} className={activeTab === 'stats' ? 'text-[#1d1b20]' : 'text-[#49454f]'} />
          </div>
          <span className={`text-xs font-medium ${activeTab === 'stats' ? 'text-[#1d1b20]' : 'text-[#49454f]'}`}>Stats</span>
        </button>

        <button 
          onClick={() => setActiveTab('settings')}
          className="flex flex-col items-center justify-center w-16 h-16 gap-1"
        >
          <div className={`w-16 h-8 rounded-full flex items-center justify-center transition-colors ${activeTab === 'settings' ? 'bg-[#e8def8]' : 'bg-transparent'}`}>
            <Settings size={24} className={activeTab === 'settings' ? 'text-[#1d1b20]' : 'text-[#49454f]'} />
          </div>
          <span className={`text-xs font-medium ${activeTab === 'settings' ? 'text-[#1d1b20]' : 'text-[#49454f]'}`}>Settings</span>
        </button>
      </nav>
    </div>
  );
}

export default App;

