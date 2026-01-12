import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-6xl md:text-[8rem] font-bold tracking-[-0.05em] mb-8 leading-[0.85] uppercase">
          The eJPT <br />
          <span className="text-zinc-600 font-light opacity-50 italic lowercase">Playbook.</span>
        </h1>
        <p className="text-zinc-500 max-w-2xl leading-relaxed text-lg md:text-xl font-medium tracking-tight">
          A minimalist technical index for aspiring ethical hackers.
          Built for speed, precision, and reliable field methodology.
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
