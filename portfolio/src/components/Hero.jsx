import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const socialLinks = [
    { icon: <FaInstagram />, href: 'https://www.instagram.com/karibasu02/', color: 'hover:text-rose-400' },
    { icon: <FaGithub />, href: 'https://github.com/jadarkaribasu02-beep', color: 'hover:text-white' },
    { icon: <FaEnvelope />, href: 'mailto:jadarkaribasu02@gmail.com', color: 'hover:text-brand-accent' },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col lg:flex-row items-center pt-24 lg:pt-0 overflow-hidden">
      
      {/* Left Column: Text Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col justify-center px-8 sm:px-16 lg:px-24 flex-1"
      >
        <motion.div
          variants={titleVariants}
          className="relative inline-block w-max group"
        >
          {/* Subtle glowing background for title */}
          <div className="absolute -inset-4 blur-3xl opacity-30 bg-gradient-to-r from-brand-accent to-brand-cyan rounded-full group-hover:opacity-50 transition-opacity duration-700"></div>
          
          <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-6 drop-shadow-2xl leading-[0.9] select-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-slate-100 via-slate-200 to-slate-500">Karibasu</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-brand-cyan mt-2">Jadar</span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-md text-slate-400 text-lg md:text-xl leading-relaxed mt-6 font-medium"
        >
          Building digital experiences that combine innovative design with robust technology.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex items-center space-x-6"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#skills" 
            className="px-10 py-5 bg-gradient-to-r from-brand-accent to-brand-cyan hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-all text-white font-bold rounded-2xl shadow-xl flex items-center group"
          >
            <span>Explore My Skills</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </motion.a>

          {/* Inline Social Icons for Hero */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl text-slate-500 ${link.color} transition-all duration-300`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column: Premium Hero Image */}
      <div className="z-10 relative flex-1 w-full h-full flex items-center justify-center p-8 lg:p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative max-w-sm lg:max-w-md xl:max-w-lg"
        >
          {/* Decorative glowing shapes */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-accent/20 blur-[100px] rounded-full animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-cyan/20 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-20 group w-full aspect-square flex items-center justify-center max-w-[280px] sm:max-w-[350px] lg:max-w-[450px] mx-auto mt-12 lg:mt-0"
          >
            {/* Lottie Animation Player for 'Coding Boy' */}
            <div className="w-full h-full relative flex items-center justify-center z-10 pointer-events-none drop-shadow-[0_0_40px_rgba(14,165,233,0.3)]">
               <Player
                 autoplay
                 loop
                 src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
                 style={{ height: '100%', width: '100%', transform: 'scale(1.2)' }}
               />
            </div>
            
            {/* Subtle glow underneath the Lottie animation */}
             <div className="absolute inset-16 bg-gradient-to-tr from-brand-accent/30 to-brand-cyan/20 blur-[50px] z-0 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
