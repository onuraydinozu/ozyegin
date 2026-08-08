"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

        {/* 3D Tilt Card Section - Light Variant */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="mt-24 relative w-full rounded-[3rem] overflow-hidden border border-white bg-gradient-to-br from-blue-50 to-white aspect-[21/9] flex items-center justify-center p-8 md:p-16 cursor-crosshair perspective-1000 shadow-2xl shadow-blue-900/10"
        >
          {/* Abstract Generative Art Background */}
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-blue-600" strokeWidth="0.5" fill="none">
              {Array.from({ length: 20 }).map((_, i) => (
                <ellipse key={i} cx="50" cy="50" rx={10 + i * 4} ry={5 + i * 2} transform={`rotate(${i * 15} 50 50)`} />
              ))}
            </svg>
          </div>

          <div className="relative z-10 text-center max-w-3xl pointer-events-none">
            <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 drop-shadow-sm">
              ÖzÜ&apos;nde <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-emerald-500">Yapay Zeka</span> Devrimi
            </h3>
            <p className="text-xl text-gray-600 font-medium">
              Geleceği tek bir disiplin yazmayacak. Sanattan mühendisliğe tüm programlarımızda yapay zeka entegrasyonu.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
