import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const AboutMe = () => {
  return (
    <section id="about" className="py-32 w-full relative z-10 overflow-hidden">
      {/* Animated Background Blobs specific to this section */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none"
      />
      
      <motion.div 
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="px-6 md:px-12 max-w-5xl mx-auto w-full">

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative group w-full"
        >
          {/* Expanded text-behind background animation */}
          <div className="absolute inset-x-0 -inset-y-10 bg-gradient-to-r from-brand-accent/5 via-purple-500/5 to-brand-cyan/5 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-1000"></div>

          {/* Wrapper without the visible box */}
          <div className="relative z-10 py-8">
            
            {/* Header Section */}
            <div className="text-left mb-12 relative z-20">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-4 tracking-tighter"
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-2 bg-gradient-to-r from-brand-accent to-brand-cyan rounded-full shadow-[0_0_20px_rgba(14,165,233,0.6)]"
              ></motion.div>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-8 text-slate-300 leading-relaxed text-lg md:text-2xl font-medium relative z-20 max-w-4xl"
            >
              <motion.p variants={textVariants}>
                Hi, I’m <strong className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cyan font-black text-3xl">Karibasu Jadar</strong>, an engineering student at JIT Davanagere with a strong interest in coding, web development, and problem-solving. I am currently building my skills in programming with a focus on improving my logic and understanding of data structures and algorithms.
              </motion.p>
              <motion.p variants={textVariants}>
                I enjoy learning by doing—solving coding problems, working on small projects, and continuously pushing myself to improve. Even though I’m still early in my journey, I believe <span className="text-white bg-white/5 px-3 py-1 rounded-md border border-white/10 shadow-inner">consistency and discipline</span> matter more than perfection.
              </motion.p>
              <motion.p variants={textVariants}>
                I am comfortable with <span className="text-rose-400 font-bold">C</span> and <span className="text-blue-400 font-bold">Python</span>, and I am actively exploring web technologies to expand my development skills. My goal is to become a skilled developer who can build meaningful and efficient solutions.
              </motion.p>
              <motion.p variants={textVariants}>
                I value growth, curiosity, and resilience. Every day, I try to learn something new and move one step closer to my goals.
              </motion.p>
            </motion.div>
            
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default AboutMe;
