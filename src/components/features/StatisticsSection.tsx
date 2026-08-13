"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Bot, Cpu, Network, Sparkles } from "lucide-react";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let start = from;
      const end = to;
      const totalSteps = 60 * duration;
      const increment = (end - start) / totalSteps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        start += increment;
        if (currentStep >= totalSteps) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatisticsSection() {
  return (
    <section className="bg-background py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      
      {/* Abstract Animated Mesh - Light Vibrant Version */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute w-[50vw] h-[50vw] rounded-full bg-ozu-red/10 blur-[100px] top-0 left-1/2 -translate-x-1/2 mix-blend-multiply" />
        <div className="absolute w-[60vw] h-[60vw] rounded-full bg-[#0066FF]/10 blur-[120px] bottom-0 right-0 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-24">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block border border-black/5 bg-white/70 backdrop-blur-md px-6 py-2 rounded-full mb-6 shadow-sm"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-bold tracking-widest uppercase text-sm">
              Rakamlarla ÖzÜ
            </span>
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-gray-900"
          >
            Geleceğin <span className="text-transparent bg-clip-text bg-gradient-to-r from-ozu-red to-orange-500">Algoritması</span>
          </motion.h2>
        </div>

        {/* Counters - Light Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {[
            { label: "Tam Zamanlı Akademik Kadro", end: 514, suffix: "+" },
            { label: "Fakülte ve Enstitü", end: 10, suffix: "" },
            { label: "Lisans Programı", end: 23, suffix: "" },
            { label: "İdari Çalışan", end: 415, suffix: "+" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-white/60 border border-white backdrop-blur-xl flex flex-col items-center justify-center text-center group overflow-hidden shadow-xl shadow-black/5"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-ozu-red/0 to-ozu-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Vibrant Number */}
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 mb-4 transition-all">
                <Counter from={0} to={stat.end} />{stat.suffix}
              </div>
              
              <h3 className="text-gray-600 font-semibold text-sm md:text-base uppercase tracking-widest">{stat.label}</h3>
            </motion.div>
          ))}

        </div>

        {/* AI Revolution Section - Premium Variant */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-24 md:mt-32 relative w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/60 bg-gradient-to-b from-white to-blue-50/50 min-h-[400px] md:min-h-[500px] flex items-center justify-center p-8 md:p-16 lg:p-24 shadow-[0_20px_60px_-15px_rgba(0,102,255,0.1)] group"
        >
          {/* Animated Glow Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] -translate-y-1/2 opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px] translate-y-1/2 opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

          {/* Abstract Generative Art Background - subtle */}
          <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-blue-900" strokeWidth="0.5" fill="none">
              {Array.from({ length: 24 }).map((_, i) => (
                <ellipse key={i} cx="50" cy="50" rx={15 + i * 4} ry={8 + i * 2} transform={`rotate(${i * 15} 50 50)`} />
              ))}
            </svg>
          </div>

          {/* Floating Tech Icons (Desktop only for cleaner mobile) */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-12 hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-xl shadow-blue-900/5 text-blue-500 border border-blue-50"
          >
            <Bot size={28} />
          </motion.div>
          <motion.div 
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-12 right-12 hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-xl shadow-emerald-900/5 text-emerald-500 border border-emerald-50"
          >
            <Cpu size={28} />
          </motion.div>
          <motion.div 
            animate={{ y: [-15, 15, -15], scale: [1, 1.05, 1] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-12 md:right-24 hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-xl shadow-purple-900/5 text-purple-500 border border-purple-50"
          >
            <Network size={24} />
          </motion.div>

          <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm mb-8"
            >
              <Sparkles size={16} className="text-blue-500" />
              Geleceğin Eğitimi
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 md:mb-8 tracking-tight leading-[1.1]"
            >
              ÖzÜ&apos;nde <br className="md:hidden" />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-blue-500 to-emerald-400">Yapay Zeka</span>
                <motion.span 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "circOut" }}
                  className="absolute bottom-1 md:bottom-2 left-0 h-1.5 md:h-2 lg:h-3 bg-gradient-to-r from-[#0066FF]/30 to-emerald-400/30 rounded-full -z-10" 
                />
              </span> Devrimi
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl"
            >
              Geleceği tek bir disiplin yazmayacak. Sanattan mühendisliğe tüm programlarımızda yapay zeka entegrasyonu.
            </motion.p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
