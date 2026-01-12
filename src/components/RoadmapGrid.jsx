import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Snippet from './Snippet';
import { ROADMAP_DATA } from '../data/roadmapData';

const RoadmapGrid = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start mb-24">
      {ROADMAP_DATA.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
          className={`relative flex flex-col p-[1px] rounded-[2.5rem] bg-gradient-to-b from-zinc-800 to-zinc-900 transition-all duration-300 group ${activeStep === step.id ? 'ring-1 ring-red-500/40 z-[50]' : 'hover:ring-1 hover:ring-white/10 z-[1]'}`}
          onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
        >
          <div className="relative h-full p-8 rounded-[2.4rem] bg-black flex flex-col cursor-pointer overflow-visible">
            <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[70px] bg-gradient-to-br ${step.accent} opacity-10 group-hover:opacity-30 transition-opacity`}></div>

            <div className="flex items-start justify-between mb-8 relative z-10">
              <div className="p-3.5 rounded-2xl bg-zinc-900 border border-white/5 text-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase font-black bg-zinc-900/50 px-2 py-1 rounded-md border border-white/5">REF_{index + 1}</span>
            </div>

            <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:translate-x-1 transition-transform">{step.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-light">
              {step.description}
            </p>

            <div className="space-y-3 min-h-[50px]">
              <AnimatePresence mode="wait">
                {activeStep === step.id ? (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: 'auto',
                      transitionEnd: { overflow: 'visible' }
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      overflow: 'hidden'
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-3 pt-2"
                  >
                    {step.snippets.map((snip, i) => (
                      <Snippet key={snip.label} label={snip.label} cmd={snip.cmd} info={snip.info} index={i} />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    {step.snippets.slice(0, 2).map((snip, i) => (
                      <Snippet key={i} label={snip.label} cmd={snip.cmd} info={snip.info} index={i} />
                    ))}
                    {step.snippets.length > 2 && (
                      <div className="pt-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-hover:text-white transition-colors">
                        <span>View Full Arsenal</span>
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RoadmapGrid;
