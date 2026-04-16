import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Award, Zap, TrendingUp } from 'lucide-react';

const LeetCode = () => {
  const [username, setUsername] = useState('karibasu_jadar');
  const [stats, setStats] = useState({ total: 150, easy: 80, medium: 50, hard: 20 });
  const [isEditing, setIsEditing] = useState(false);

  const StatItem = ({ icon: Icon, label, value, colorClass }) => (
    <div className="flex items-center p-4 bg-brand-dark rounded-xl border border-slate-800">
      <div className={`p-3 rounded-lg mr-4 ${colorClass} bg-opacity-10`}>
        <Icon className={`w-6 h-6 ${colorClass}`} />
      </div>
      <div>
        <p className="text-slate-400 text-sm font-medium">{label}</p>
        <p className="text-2xl font-bold text-slate-100">{value}</p>
      </div>
    </div>
  );

  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto w-full bg-brand-dark">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-slate-100 mb-4"
        >
          Coding Analytics
        </motion.h2>
        <div className="w-16 h-1 bg-brand-accent mx-auto rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-brand-darker rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-32 bg-brand-accent opacity-5 blur-[100px] rounded-full"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-slate-800 gap-4">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-orange-400 to-amber-600 p-3 rounded-xl shadow-lg">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">LeetCode Profile</h3>
              {isEditing ? (
                <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  className="bg-brand-dark text-slate-300 px-3 py-1 mt-1 rounded text-sm w-full outline-none focus:ring-1 focus:ring-brand-accent transition-all border border-slate-700" 
                  placeholder="Enter Username"
                />
              ) : (
                <p className="text-brand-cyan text-sm tracking-wide">@{username}</p>
              )}
            </div>
          </div>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-lg transition-colors border border-slate-700 text-sm"
          >
            {isEditing ? 'Save Entry' : 'Manual Entry'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          <StatItem icon={Award} label="Total Solved" value={stats.total} colorClass="text-brand-cyan" />
          <StatItem icon={Zap} label="Easy" value={stats.easy} colorClass="text-emerald-400" />
          <StatItem icon={TrendingUp} label="Medium" value={stats.medium} colorClass="text-amber-400" />
          <StatItem icon={Code2} label="Hard" value={stats.hard} colorClass="text-rose-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default LeetCode;
