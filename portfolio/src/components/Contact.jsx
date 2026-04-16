import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

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
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Footer background gradient/glow */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-brand-accent/5 to-transparent pointer-events-none"></div>
      
      <div className="px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: CTA & Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
            >
              Let's <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cyan">Connect</span>
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
            
            {/* Social Media Links - More premium style */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <FaInstagram />, color: 'hover:text-rose-400', label: 'Instagram', href: 'https://www.instagram.com/karibasu02/' },
                { icon: <FaEnvelope />, color: 'hover:text-brand-accent', label: 'Email', href: 'mailto:jadarkaribasu02@gmail.com' },
                { icon: <FaGithub />, color: 'hover:text-white', label: 'GitHub', href: 'https://github.com/jadarkaribasu02-beep' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all shadow-xl"
                >
                  <span className={`text-2xl text-slate-400 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] ${social.color} transition-colors`}>
                    {social.icon}
                  </span>
                  <span className="text-slate-200 font-bold uppercase tracking-widest text-xs hidden sm:block">{social.label}</span>
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
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-accent/20 to-brand-cyan/20 blur-3xl opacity-30 rounded-[3rem]"></div>
            
            <div className="bg-slate-900/60 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative z-10">
              <AnimatePresence mode='wait'>
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={onSubmit}
                    className="space-y-6"
                  >
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-accent/50 p-5 rounded-2xl text-white outline-none transition-all placeholder:text-slate-700"
                        placeholder="Karibasu Jadar"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-accent/50 p-5 rounded-2xl text-white outline-none transition-all placeholder:text-slate-700"
                        placeholder="hello@example.com"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] ml-1">Message</label>
                      <textarea 
                        name="message"
                        rows="4"
                        required
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-accent/50 p-5 rounded-2xl text-white outline-none transition-all placeholder:text-slate-700 resize-none"
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
                      className="w-full relative group p-1 rounded-2xl overflow-hidden bg-gradient-to-r from-brand-accent to-brand-cyan shadow-xl shadow-brand-accent/20 disabled:opacity-50"
                    >
                      <div className="bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors p-5 rounded-[14px] flex items-center justify-center space-x-3">
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
                        className="text-red-400 text-center text-sm font-bold"
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
                    className="text-center py-20 space-y-6"
                  >
                    <div className="w-20 h-20 bg-brand-accent/10 border border-brand-accent/30 rounded-full flex items-center justify-center mx-auto mb-8">
                      <FaPaperPlane className="text-brand-cyan text-3xl animate-bounce" />
                    </div>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Sent Successfully!</h3>
                    <p className="text-slate-400 text-lg">Thanks for reaching out. I'll get back to you soon.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-brand-cyan text-sm font-bold uppercase tracking-widest hover:underline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Brand/Legal Footer */}
        <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-black text-2xl tracking-tighter uppercase mb-1">Karibasu</span>
            <span className="text-slate-600 font-mono text-[10px] uppercase tracking-widest">&copy; {new Date().getFullYear()} // ALL RIGHTS RESERVED</span>
          </div>
          
          <div className="flex space-x-8 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
