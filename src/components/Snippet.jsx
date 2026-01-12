import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Check, Copy, MousePointer2 } from 'lucide-react';

const Snippet = ({ label, cmd, info, index }) => {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    const textArea = document.createElement("textarea");
    textArea.value = cmd;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative group/snip"
      style={{ zIndex: showTooltip ? 100 : 1 }}
    >
      <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all">
        <div className="flex flex-col gap-0.5 overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold">{label}</span>
            <div
              className="p-1 -m-1 cursor-help"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <Info size={11} className="text-zinc-600 hover:text-white transition-colors" />
            </div>
          </div>
          <code className="text-[11px] text-zinc-300 font-mono truncate pr-6">{cmd}</code>
        </div>
        <button
          onClick={handleCopy}
          className="shrink-0 p-2 rounded-lg hover:bg-white hover:text-black transition-all active:scale-90"
        >
          {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
        </button>
      </div>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute left-0 bottom-full mb-3 w-64 p-4 rounded-2xl bg-zinc-900 text-zinc-200 text-[11px] leading-relaxed shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/10 z-[110] pointer-events-none"
          >
            <div className="font-bold text-[9px] uppercase tracking-widest text-zinc-500 mb-2 border-b border-white/5 pb-1 flex items-center gap-1">
              <MousePointer2 size={10} /> Usage Logic
            </div>
            {info}
            <div className="absolute top-full left-4 border-8 border-transparent border-t-zinc-900"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Snippet;
