import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

function RotatingStars() {
  const ref = useRef();
  useFrame((state, delta) => {
    // Slow, cinematic rotation
    ref.current.rotation.x -= delta / 25;
    ref.current.rotation.y -= delta / 35;
  });
  return (
    <group ref={ref}>
      <Stars radius={100} depth={60} count={6000} factor={4} saturation={0} fade speed={0.5} />
    </group>
  );
}

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#03060d]">
      {/* Animated Gradient Orbs for depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-cyan/5 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingStars />
      </Canvas>
      
      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03060d]/20 via-[#03060d]/50 to-[#03060d] z-1"></div>
    </div>
  );
};

export default Background;
