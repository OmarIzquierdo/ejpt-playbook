import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Header from './components/Header';
import RoadmapGrid from './components/RoadmapGrid';
import MethodologyFlow from './components/MethodologyFlow';
import Footer from './components/Footer';

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black antialiased overflow-x-hidden font-sans"
      style={{
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        zoom: '1.25'
      }}
    >

      <div className="fixed top-0 right-0 w-[2px] h-full bg-zinc-900 z-[70]">
        <motion.div
          className="w-full bg-red-500 origin-top shadow-[0_0_15px_rgba(239,68,68,0.5)]"
          style={{ scaleY, height: '100%' }}
        />
      </div>

      <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 pb-5">
        <Header />
        <RoadmapGrid />
        <MethodologyFlow />
      </main>

      <Footer />
    </div>
  );
};

export default App;
