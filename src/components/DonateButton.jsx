import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const DonateButton = () => (
  <motion.a
    href="https://github.com/sponsors/OmarIzquierdo"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group relative cursor-pointer"
  >
    <div className="absolute -inset-0.5 bg-red-500/20 blur opacity-0 group-hover:opacity-100 transition duration-500 rounded-full" />

    <div className="relative flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-transparent border border-red-500/60 hover:border-red-500 hover:bg-red-500/5 transition-all duration-300">
      <Heart
        size={14}
        fill="currentColor"
        className="text-red-500 animate-[pulse_2s_infinite]"
      />
      <span className="text-[10px] uppercase tracking-[0.2em] font-black text-red-500">
        Donate
      </span>
    </div>
  </motion.a>
);

export default DonateButton;
