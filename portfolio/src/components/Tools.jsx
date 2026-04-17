import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const tools = [
  { 
    name: 'GitHub', 
    icon: <FaGithub />, 
    desc: 'Version Control & Collaboration',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.8)',
    bgGlow: 'rgba(255,255,255,0.15)'
  },
  { 
    name: 'VS Code', 
    icon: <VscVscode />, 
    desc: 'Primary Code Editor',
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.8)',
    bgGlow: 'rgba(59,130,246,0.15)'
  },
  { 
    name: 'Antigravity', 
    icon: <FaCode />,
    desc: 'AI Coding Companion',
    color: '#0ea5e9',
    glow: 'rgba(14,165,233,0.8)',
    bgGlow: 'rgba(14,165,233,0.15)'
  },
];

const Tools = () => {
  return (
    <section id="tools" className="py-32 w-full relative overflow-hidden">
      <div className="px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter"
            style={{ textShadow: '0 0 40px rgba(14,165,233,0.3)' }}
          >
            Dev Tools
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '150px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="h-2 bg-gradient-to-r from-brand-accent via-purple-500 to-brand-cyan rounded-full mx-auto shadow-[0_0_20px_rgba(14,165,233,0.8)]"
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 50 }}
              animate={{ y: [0, -15, 0] }}
              style={{
                // Use a different float timing for each card to look organic
                animationDelay: `${i * 0.5}s`,
              }}
              whileHover={{ scale: 1.05, y: -20, transition: { duration: 0.2 } }}
              className="group relative bg-[#04070f]/80 backdrop-blur-3xl border border-white/5 p-10 rounded-[3rem] transition-all duration-300 overflow-hidden"
            >
              {/* Neon border that appears on hover */}
              <div 
                className="absolute inset-0 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2"
                style={{ borderColor: tool.color, boxShadow: `inset 0 0 30px ${tool.bgGlow}, 0 0 30px ${tool.bgGlow}` }}
              ></div>
              
              {/* Animated background shape */}
              <div 
                className="absolute -top-10 -right-10 w-40 h-40 blur-[60px] rounded-full transition-opacity duration-700 opacity-20 group-hover:opacity-40 animate-pulse-slow"
                style={{ backgroundColor: tool.color }}
              ></div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                <motion.div 
                  className="text-7xl mb-8 transition-colors duration-500 relative"
                  style={{ color: tool.color, filter: `drop-shadow(0 0 20px ${tool.glow})` }}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {tool.icon}
                  {/* Icon reflection context */}
                  <div className="absolute -bottom-6 left-0 right-0 h-10 bg-gradient-to-t from-[#04070f] to-transparent opacity-50 blur-sm transform scale-y-[-0.5] pointer-events-none flex justify-center">
                    {tool.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter" style={{ textShadow: `0 0 10px ${tool.bgGlow}` }}>{tool.name}</h3>
                <p className="text-slate-400 font-mono text-sm uppercase tracking-widest font-bold">
                  {tool.desc}
                </p>
              </div>
              
              {/* Interactive bottom glowing bar */}
              <div 
                className="h-2 w-0 group-hover:w-full absolute bottom-0 left-0 transition-all duration-700 ease-out"
                style={{ backgroundColor: tool.color, boxShadow: `0 0 20px ${tool.glow}` }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
