import React from 'react';
import { motion } from 'framer-motion';

const Quote = () => {
  return (
    <section className="py-40 w-full relative overflow-hidden flex justify-center items-center">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse"></div>
      
      <div className="px-6 md:px-12 max-w-5xl mx-auto w-full relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative px-8 md:px-16 py-20 rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Large decorative quote marks */}
          <span className="absolute -top-10 -left-6 md:left-10 text-[10rem] text-brand-accent/10 font-serif leading-none h-20 select-none">“</span>
          
          <blockquote className="relative text-3xl md:text-5xl lg:text-6xl font-black leading-tight md:leading-[1.15] text-white mb-16 tracking-tight">
            No matter how broken you are, don't look back; just move forward with those <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cyan drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]">broken pieces</span>.
          </blockquote>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent w-32"></div>
            <cite className="not-italic">
              <span className="block text-2xl font-black text-white tracking-tight uppercase">Karibasu Jadar</span>
              <span className="block text-slate-500 font-mono text-sm uppercase tracking-widest mt-2">// CEO & Founder of my own problems</span>
            </cite>
          </motion.div>

          <span className="absolute -bottom-20 -right-6 md:right-10 text-[10rem] text-brand-cyan/10 font-serif leading-none h-20 rotate-180 select-none">“</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;
