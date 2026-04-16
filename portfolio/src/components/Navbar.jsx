import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Tools', href: '#tools' }, 
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled ? 'py-4' : 'py-10'
      }`}
    >
      <div className="w-full px-6 md:px-16 flex justify-between items-center">
        
        {/* Left Side: Dynamic Logo */}
        <motion.div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer group relative"
        >
          <div className="flex items-center space-x-2">
            <span className="text-white font-black text-3xl uppercase tracking-tighter transition-transform group-hover:scale-105 duration-500">
              Karibasu
            </span>
          </div>
          {/* Subtle neon underline that glows on hover */}
          <motion.div 
            className="h-1 bg-gradient-to-r from-brand-accent to-brand-cyan rounded-full absolute -bottom-1 left-0 shadow-[0_0_15px_rgba(14,165,233,0.5)]"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Right Side: Glassmorphism Nav Links */}
        <div className="flex items-center">
          <div className={`flex items-center space-x-1 md:space-x-2 px-2 py-2 rounded-3xl transition-all duration-700 border border-white/0 ${
            scrolled ? 'bg-slate-950/60 backdrop-blur-2xl border-white/5 shadow-2xl' : 'bg-transparent'
          }`}>
            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                onHoverStart={() => setHoveredLink(link.name)}
                onHoverEnd={() => setHoveredLink(null)}
                className="relative px-5 py-3 text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors cursor-pointer group"
              >
                <span className="relative z-10">{link.name}</span>
                <AnimatePresence>
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="navHover"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="absolute inset-0 bg-white/5 rounded-2xl z-0"
                    />
                  )}
                </AnimatePresence>
              </motion.a>
            ))}
            
            <div className="w-px h-6 bg-white/10 mx-2 hidden md:block"></div>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="ml-2 px-6 py-3 bg-white text-brand-darker rounded-[18px] font-black uppercase tracking-widest text-xs hover:bg-brand-cyan hover:text-white transition-all shadow-xl shadow-white/5"
            >
              Contact
            </motion.a>
          </div>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
