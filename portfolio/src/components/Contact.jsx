import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const marqueeKeywords = [
  "BUILD", "•", "DESIGN", "•", "OPTIMIZE", "•", "DEPLOY", "•", "INNOVATE", "•", 
  "CREATE", "•", "LEARN", "•", "ADAPT", "•", "DEBUG", "•", "SOLVE", "•"
];

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "4f12a900-8da8-4725-90ab-bd569b18bfcc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        event.target.reset();
      } else {
        console.log("Error", data);
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden flex flex-col justify-end min-h-screen">
      {/* Dynamic Background gradient/glow */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-accent/10 via-purple-500/5 to-transparent pointer-events-none"
      ></motion.div>
      
      <div className="px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10 flex-grow">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          
          {/* Left Column: CTA & Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
              style={{ textShadow: '0 0 40px rgba(255,255,255,0.1)' }}
            >
              Let's <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-purple-400 to-brand-cyan">Connect</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-xl max-w-md leading-relaxed mb-12"
            >
              Have a question, a project idea, or just want to chat about tech? My inbox is always open.
            </motion.p>
            
            {/* Social Media Links - Magnetic Hover */}
            <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
              {[
                { icon: <FaInstagram />, color: '#f43f5e', glow: 'rgba(244,63,94,0.6)', href: 'https://www.instagram.com/karibasu02/' },
                { icon: <FaEnvelope />, color: '#0ea5e9', glow: 'rgba(14,165,233,0.6)', href: 'mailto:jadarkaribasu02@gmail.com' },
                { icon: <FaGithub />, color: '#ffffff', glow: 'rgba(255,255,255,0.6)', href: 'https://github.com/jadarkaribasu02-beep' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.15, y: -8, rotate: i % 2 === 0 ? 8 : -8 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative flex items-center justify-center bg-[#0a0f1c]/80 backdrop-blur-md border border-white/10 w-16 h-16 rounded-2xl hover:bg-white/5 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden"
                >
                  {/* Glowing background burst on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: social.color }}></div>
                  <motion.span 
                    className="text-3xl text-slate-400 transition-colors duration-300 relative z-10"
                    style={{ color: 'inherit' }}
                    whileHover={{ color: social.color, filter: `drop-shadow(0 0 10px ${social.glow})` }}
                  >
                    {social.icon}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative card glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-accent/30 via-purple-500/20 to-brand-cyan/30 blur-[80px] opacity-40 rounded-[3rem] animate-pulse-slow pointer-events-none"></div>
            
            <div className="bg-[#04070f]/80 backdrop-blur-3xl p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative z-10 overflow-hidden">
               {/* Inner subtle noise/grid effect */}
               <div className="absolute inset-0 bg-white/[0.02] pointer-events-none rounded-[3rem]"></div>
              
              <AnimatePresence mode='wait'>
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={onSubmit}
                    className="space-y-6 relative z-20"
                  >
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full bg-[#0a0f1c] border border-white/10 focus:border-brand-accent/50 focus:bg-white/5 focus:shadow-[0_0_15px_rgba(14,165,233,0.3)] p-5 rounded-2xl text-white outline-none transition-all placeholder:text-slate-600"
                        placeholder="Karibasu Jadar"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full bg-[#0a0f1c] border border-white/10 focus:border-brand-accent/50 focus:bg-white/5 focus:shadow-[0_0_15px_rgba(14,165,233,0.3)] p-5 rounded-2xl text-white outline-none transition-all placeholder:text-slate-600"
                        placeholder="hello@example.com"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] ml-1">Message</label>
                      <textarea 
                        name="message"
                        rows="4"
                        required
                        className="w-full bg-[#0a0f1c] border border-white/10 focus:border-brand-accent/50 focus:bg-white/5 focus:shadow-[0_0_15px_rgba(14,165,233,0.3)] p-5 rounded-2xl text-white outline-none transition-all placeholder:text-slate-600 resize-none"
                        placeholder="Your thoughts..."
                      ></textarea>
                    </motion.div>

                    <motion.button
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      onHoverStart={() => setIsHovered(true)}
                      onHoverEnd={() => setIsHovered(false)}
                      className="w-full relative group p-1 rounded-2xl overflow-hidden bg-gradient-to-r from-brand-accent via-purple-500 to-brand-cyan shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-all disabled:opacity-50"
                    >
                      <div className="absolute inset-0 bg-white/20 blur group-hover:opacity-100 opacity-0 transition-opacity"></div>
                      <div className="bg-[#04070f] group-hover:bg-transparent transition-colors p-5 rounded-[14px] flex items-center justify-center space-x-3 relative z-10">
                        <span className="text-white font-black uppercase tracking-widest text-sm">
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </span>
                        {!isSubmitting && <FaPaperPlane className={`w-4 h-4 text-white transition-transform ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />}
                      </div>
                    </motion.button>
                    
                    {errorMessage && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-400 text-center text-sm font-bold shadow-black drop-shadow-md"
                      >
                        {errorMessage}
                      </motion.p>
                    )}
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-20 space-y-6 relative z-20"
                  >
                    <div className="w-24 h-24 bg-brand-cyan/20 border border-brand-cyan/50 shadow-[0_0_30px_rgba(14,165,233,0.5)] rounded-full flex items-center justify-center mx-auto mb-8 relative">
                       <motion.div 
                         animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                         transition={{ repeat: Infinity, duration: 2 }}
                         className="absolute inset-0 rounded-full border border-brand-cyan"
                       ></motion.div>
                      <FaPaperPlane className="text-white text-4xl animate-bounce" />
                    </div>
                    <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white uppercase tracking-tighter">Sent Successfully!</h3>
                    <p className="text-slate-300 text-lg">Thanks for reaching out. I'll get back to you soon.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-brand-cyan mt-4 inline-block text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquee Strip */}
      <div className="w-full relative z-10 border-y border-white/5 bg-[#0a0f1c]/50 backdrop-blur-sm py-4 overflow-hidden mt-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#04070f] via-transparent to-[#04070f] z-20 pointer-events-none"></div>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex whitespace-nowrap w-max"
        >
          {/* We duplicate the array to make the loop seamless */}
          {[...marqueeKeywords, ...marqueeKeywords].map((word, index) => (
            <span key={index} className={`mx-4 font-black uppercase text-2xl tracking-tighter ${word === '•' ? 'text-brand-accent/50' : 'text-slate-700/80'}`}>
              {word}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Brand/Legal Footer */}
      <div className="w-full relative z-10 px-6 md:px-12 max-w-6xl mx-auto pt-8 pb-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start group cursor-default">
          <span className="text-white font-black text-2xl tracking-tighter uppercase mb-1 flex items-center">
            Karibasu
            <motion.span 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2 h-2 bg-brand-cyan rounded-full ml-2"
            ></motion.span>
          </span>
          <span className="text-slate-600 font-mono text-[10px] uppercase tracking-widest group-hover:text-brand-accent/80 transition-colors">&copy; {new Date().getFullYear()} // ALL RIGHTS RESERVED</span>
        </div>
        
        <div className="flex space-x-8 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <a href="#about" className="hover:text-white hover:text-shadow-[0_0_10px_white] transition-all">About</a>
          <a href="#skills" className="hover:text-white hover:text-shadow-[0_0_10px_white] transition-all">Skills</a>
          <a href="#" className="hover:text-white hover:text-shadow-[0_0_10px_white] transition-all">Privacy</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
