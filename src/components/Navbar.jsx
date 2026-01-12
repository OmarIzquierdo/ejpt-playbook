import React from 'react';
import { Fingerprint } from 'lucide-react';
import DonateButton from './DonateButton';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[60] bg-black/50 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 shadow-inner">
            <Fingerprint className="text-red-500 w-4 h-4" />
          </div>
          <span className="font-medium tracking-tighter text-xl uppercase tracking-[-0.05em]">The eJPT Playbook</span>
        </div>
        <DonateButton />
      </div>
    </nav>
  );
};

export default Navbar;
