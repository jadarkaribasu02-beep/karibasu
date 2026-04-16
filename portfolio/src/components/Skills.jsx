import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 40, color: '#e34c26' },
  { name: 'CSS', level: 40, color: '#264de4' },
  { name: 'C', level: 10, color: '#a8b9cc' },
  { name: 'Python', level: 45, color: '#3776ab' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const SkillCard = ({ name, level, color }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.03 }}
      className="bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 rounded-[2.5rem] shadow-2xl hover:shadow-cyan-900/10 hover:border-brand-accent/30 transition-all cursor-pointer relative overflow-hidden group"
    >
      {/* Dynamic background glow based on skill color */}
      <div 
        className="absolute -top-12 -right-12 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      
      <div className="flex justify-between items-end mb-6 relative z-10">
        <div>
          <span className="text-slate-500 font-mono text-xs uppercase tracking-[0.2em] mb-1 block">Language / Tool</span>
          <span className="text-white font-black text-3xl uppercase tracking-tighter">{name}</span>
        </div>
        <div className="text-right">
          <span className="text-brand-cyan font-black text-2xl tracking-tighter">{level}%</span>
        </div>
      </div>
      
      <div className="relative h-4 w-full bg-slate-800/50 rounded-full overflow-hidden p-1 shadow-inner backdrop-blur-sm relative z-10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-accent to-brand-cyan relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated "liquid" effect on the progress bar */}
          <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2"
          />
        </motion.div>
      </div>

      <div className="mt-6 flex items-center text-slate-500 text-sm font-medium tracking-wide">
        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mr-2 shadow-[0_0_8px_cyan]"></span>
        Currently improving
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 w-full relative overflow-hidden">
      <div className="px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter"
          >
            Technical Arsenal
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="h-2 bg-gradient-to-r from-brand-accent to-brand-cyan rounded-full shadow-[0_0_20px_rgba(14,165,233,0.5)]"
          ></motion.div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
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
