import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 85, color: '#e34c26', glowColor: 'rgba(227,76,38,0.3)' },
  { name: 'CSS', level: 80, color: '#264de4', glowColor: 'rgba(38,77,228,0.3)' },
  { name: 'C', level: 75, color: '#a8b9cc', glowColor: 'rgba(168,185,204,0.3)' },
  { name: 'Python', level: 60, color: '#3776ab', glowColor: 'rgba(55,118,171,0.3)' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: -15, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotateX: 0,
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 12 } 
  }
};

const SkillCard = ({ name, level, color, glowColor }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -15, scale: 1.02, rotateY: 5, rotateX: 5 }}
      style={{ transformPerspective: 1000 }}
      className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] transition-all duration-300 cursor-pointer relative overflow-hidden group"
    >
      {/* Background radial gradient on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${glowColor} 0%, transparent 60%)`
        }}
      ></div>
      
      {/* Glossy top highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="flex justify-between items-end mb-8 relative z-10 w-full group-hover:translate-x-2 transition-transform duration-500">
        <div>
          <span className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-2 block group-hover:text-slate-400 transition-colors duration-300">Language / Tool</span>
          <span className="text-white font-black text-4xl uppercase tracking-tighter drop-shadow-md">{name}</span>
        </div>
        <div className="text-right">
          <span 
            className="font-black text-5xl tracking-tighter transition-all duration-500"
            style={{ color: color, textShadow: `0 0 20px ${glowColor}` }}
          >
            {level}<span className="text-2xl text-slate-500">%</span>
          </span>
        </div>
      </div>
      
      <div className="relative h-6 w-full bg-slate-950/50 rounded-full overflow-hidden p-1 shadow-inner relative z-10 border border-white/5">
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{ backgroundColor: color, boxShadow: `0 0 15px ${glowColor}` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, type: "spring", bounce: 0.3 }}
        >
          {/* Intense animated shine effect on the progress bar */}
          <motion.div 
            animate={{ x: ['-200%', '200%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg]"
          />
        </motion.div>
      </div>

      <div className="mt-8 flex items-center relative z-10 group-hover:translate-x-2 transition-transform duration-500 delay-75">
        <div className="flex items-center text-slate-400 text-sm font-medium tracking-widest uppercase">
          <motion.span 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 rounded-full mr-3"
            style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
          ></motion.span>
          Active Focus
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 w-full relative overflow-hidden">
      <div className="px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-4 tracking-tighter"
            >
              Technical Arsenal
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '120px' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-2 bg-gradient-to-r from-brand-accent to-brand-cyan rounded-full shadow-[0_0_20px_rgba(14,165,233,0.5)] mx-auto md:mx-0"
            ></motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 mt-8 md:mt-0 max-w-sm text-lg font-medium leading-relaxed"
          >
            A constantly evolving stack built around creating robust algorithms and interactive experiences.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full"
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
