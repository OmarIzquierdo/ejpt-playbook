import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Quote } from 'lucide-react';
import { ADVICE_QUOTES } from '../data/adviceQuotes';

const MethodologyFlow = () => {
  return (
    <section className="mb-20 px-2 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-20"
      >
        <div className="h-px flex-grow bg-zinc-800/50"></div>
        <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-2">
          <Lightbulb size={14} className="text-yellow-500" /> Strategic Methodology
        </h2>
        <div className="h-px flex-grow bg-zinc-800/50"></div>
      </motion.div>

      <div className="absolute left-[34px] md:left-1/2 top-32 bottom-20 w-px bg-gradient-to-b from-red-500/50 via-zinc-800 to-transparent hidden sm:block"></div>

      <div className="space-y-12 relative">
        {ADVICE_QUOTES.map((quote, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col sm:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}
          >
            <div className="absolute left-[34px] md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-red-500 z-10 -translate-x-1/2 hidden sm:block shadow-[0_0_10px_rgba(239,68,68,0.3)]"></div>

            <div className={`w-full sm:w-[45%] p-8 rounded-[2.5rem] bg-zinc-950/50 border border-white/5 relative overflow-hidden group hover:border-red-500/20 transition-colors`}>
              <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <Quote size={120} />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-widest border border-red-500/20">
                  {quote.tag}
                </span>
                <span className="text-[10px] text-zinc-600 font-mono">0{idx + 1}</span>
              </div>

              <p className="text-zinc-300 text-lg italic leading-relaxed relative z-10 font-light tracking-tight">
                "{quote.text}"
              </p>
            </div>

            <div className="hidden sm:block sm:w-[45%]"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MethodologyFlow;
