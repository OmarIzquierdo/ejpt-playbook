import React from 'react';
import { Fingerprint, Share2 } from 'lucide-react';
import KaliIcon from './KaliIcon';
import DonateButton from './DonateButton';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-zinc-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">

        <div className="flex flex-col gap-1 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 shadow-inner">
              <Fingerprint size={18} className="text-red-500" />
            </div>
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-zinc-200">The eJPT Playbook</span>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start opacity-70">
            <span className="text-[10px] text-zinc-500 font-medium tracking-wide">Developed with love by</span>
            <span className="text-zinc-100 font-bold tracking-tighter text-sm">Omar Izquierdo</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <a href="https://github.com/OmarIzquierdo/ejpt-playbook" className="hover:text-white transition-all flex items-center gap-2 group italic">
            <Share2 size={12} className="group-hover:rotate-12 transition-transform" /> Repository
          </a>

          <div className="flex items-center gap-6">
            <DonateButton />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col items-center gap-4 opacity-30">
        <KaliIcon size={16} className="text-zinc-600" />
        <span className="text-[8px] tracking-[0.5em] uppercase">Forged in the shadows of offensive security</span>
      </div>
    </footer>
  );
};

export default Footer;
