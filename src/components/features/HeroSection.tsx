"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Compass, Rocket } from "lucide-react";
import Image from "next/image";

const phrases = [
  "Hayatınızın Girişimini Keşfetmeye Hazır Mısınız?",
  "Güçlü Akademik Kadro",
  "Global Etkisi Yüksek",
  "Girişimci Araştırma Üniversitesi"
];

export default function HeroSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden min-h-screen bg-gradient-to-br from-white via-red-50/40 to-blue-50/40 flex items-center justify-center pt-24 pb-12">
      
      {/* Dynamic Mesh Gradient Background - Light & Vibrant Version */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 45, -15, 0],
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-ozu-red/10 rounded-full blur-[100px] mix-blend-multiply"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -30, 45, 0],
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] bg-[#0066FF]/10 rounded-full blur-[100px] mix-blend-multiply"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 50, -50, 0],
            y: [0, 100, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-[#00C968]/5 rounded-full blur-[120px] mix-blend-multiply"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 border border-black/5 backdrop-blur-xl mb-8 shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#00C968] animate-pulse"></span>
          <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Yeni Nesil Üniversite Deneyimi</span>
        </motion.div>

        {/* Huge Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-gray-900 mb-6 leading-[1.1]"
        >
          Geleceğini <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ozu-red to-orange-500">Kodla.</span>
        </motion.h1>

        {/* Rotating Text */}
        <div className="h-20 md:h-24 flex items-center justify-center mb-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentPhraseIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl text-gray-700 max-w-3xl font-bold leading-relaxed"
            >
              {phrases[currentPhraseIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Floating Action Cards (Light Glassmorphism Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto perspective-1000">
          
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(163, 31, 52, 0.15)" }}
            className="bg-white/60 backdrop-blur-2xl border border-white p-6 rounded-[2rem] flex flex-col group cursor-pointer shadow-xl shadow-black/5 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
            <Image src="https://www.ozyegin.edu.tr/sites/default/files/spor_salonu.jpg" alt="Yapay Zeka" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-20 mt-auto pt-32 text-left">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/30">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-2 drop-shadow-md">Yapay Zeka Merkezli</h3>
              <p className="text-white/90 text-sm font-medium drop-shadow-md">Tüm programlara entegre AI vizyonu.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)" }}
            className="bg-white/60 backdrop-blur-2xl border border-white p-6 rounded-[2rem] flex flex-col group cursor-pointer shadow-xl shadow-black/5 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
            <Image src="https://www.ozyegin.edu.tr/sites/default/files/05d96c93-a857-4a9a-9f71-8c3fcd3a98cc_0.jpg" alt="Sanal Kampüs" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-20 mt-auto pt-32 text-left">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/30">
                <Compass className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-2 drop-shadow-md">Sanal Kampüs</h3>
              <p className="text-white/90 text-sm font-medium drop-shadow-md">Dünyanın her yerinden kampüsü keşfet.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.15)" }}
            className="bg-white/60 backdrop-blur-2xl border border-white p-6 rounded-[2rem] flex flex-col group cursor-pointer shadow-xl shadow-black/5 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
            <Image src="https://www.ozyegin.edu.tr/sites/default/files/img_3288_0.jpg" alt="Girişimcilik" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-20 mt-auto pt-32 text-left">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/30">
                <Rocket className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-2 drop-shadow-md">Girişimcilik</h3>
              <p className="text-white/90 text-sm font-medium drop-shadow-md">Fikrinin şirketleşmesine giden dev adım.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
