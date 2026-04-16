import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
    <div className="bg-[#04070f] min-h-screen text-slate-200 selection:bg-brand-accent selection:text-white relative overflow-hidden">
      
      {/* Global 3D Background */}
      <Background />
      
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col w-full min-h-screen">
        <Navbar />
        
        <div>
          <Hero />
        </div>
        
        <AboutMe />
        
        <Skills />
        
        <Tools />
        
        <Contact />
      </div>
      
    </div>
  );
}

export default App;
