import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const tools = [
  { 
    name: 'GitHub', 
    icon: <FaGithub />, 
    desc: 'Version Control & Collaboration',
    color: 'hover:text-white',
    glow: 'group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
  },
  { 
    name: 'VS Code', 
    icon: <VscVscode />, 
    desc: 'Primary Code Editor',
    color: 'hover:text-blue-400',
    glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
  },
  { 
    name: 'Antigravity', 
    icon: <FaCode />, // Using a generic code icon for 'Antigravity' to be safe
    desc: 'AI Coding Companion',
    color: 'hover:text-brand-accent',
    glow: 'group-hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]'
  },
];

const Tools = () => {
  return (
    <section id="tools" className="py-24 w-full relative overflow-hidden">
      <div className="px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter"
          >
            Dev Tools
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="h-2 bg-gradient-to-r from-brand-accent to-brand-cyan rounded-full shadow-[0_0_20px_rgba(14,165,233,0.5)]"
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative bg-slate-900/40 backdrop-blur-md border border-white/5 p-10 rounded-[3rem] transition-all duration-500 overflow-hidden ${tool.glow}`}
            >
              {/* Animated background shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full group-hover:bg-brand-accent/10 transition-colors duration-700"></div>
              
              <div className={`text-6xl mb-8 ${tool.color} transition-colors duration-500 relative z-10`}>
                {tool.icon}
              </div>
              
              <h3 className="text-3xl font-black text-white mb-4 tracking-tighter relative z-10">{tool.name}</h3>
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest relative z-10">{tool.desc}</p>
              
              {/* Interactive bottom bar */}
              <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r from-brand-accent to-brand-cyan absolute bottom-0 left-0 transition-all duration-500`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
