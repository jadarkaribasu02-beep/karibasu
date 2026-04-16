import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  // Simple animations that trigger immediately to ensure visibility
  return (
    <section id="about" className="py-24 w-full relative z-10">
      <div className="px-6 md:px-12 max-w-4xl mx-auto w-full">

        {/* Header Section */}
        <div className="text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-brand-accent to-brand-cyan rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)]"
          ></motion.div>
        </div>

        <div className="space-y-8 text-slate-300 leading-relaxed text-xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hi, I’m <strong className="text-white font-bold text-2xl">Karibasu Jadar</strong>, an engineering student at JIT Davanagere with a strong interest in coding, web development, and problem solving. I am currently building my skills in programming with a focus on improving my logic and understanding of data structures and algorithms.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I enjoy learning by doing—solving coding problems, working on small projects, and continuously pushing myself to improve. Even though I’m still early in my journey, I believe consistency and discipline matter more than perfection.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I am comfortable with C and Python, and I am actively exploring web technologies to expand my development skills. My goal is to become a skilled developer who can build meaningful and efficient solutions.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I value growth, curiosity, and resilience. Every day, I try to learn something new and move one step closer to my goals.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
