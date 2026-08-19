"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function DormAccessGate({ onUnlock }: { onUnlock: () => void }) {
  const [isScanning, setIsScanning] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleScan = () => {
    if (isScanning || isUnlocked) return;
    
    setIsScanning(true);
    
    // Simulate scan delay and beep
    setTimeout(() => {
      setIsUnlocked(true);
      
      // Wait for success animation before hiding the gate completely
      setTimeout(() => {
        onUnlock();
      }, 1500);
    }, 1200);
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-slate-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Dynamic Architectural Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://www.ozyegin.edu.tr/sites/default/files/3-futbol_sahasi_0.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity blur-sm scale-105"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-slate-100/90"></div>
          
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="text-center mb-16 relative z-10">
            <AnimatePresence mode="wait">
              {isUnlocked ? (
                <motion.div
                  key="unlocked"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center"
                >
                  <CheckCircle2 className="w-20 h-20 text-emerald-500 mb-4 drop-shadow-md" />
                  <h1 className="text-emerald-600 text-4xl md:text-5xl font-black tracking-tight">
                    Giriş Onaylandı
                  </h1>
                </motion.div>
              ) : (
                <motion.div
                  key="locked"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center"
                >
                  <h1 className="text-slate-900 text-4xl md:text-5xl font-black mb-4 tracking-tight">
                    Özyeğin Yurtları <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Yaşam Alanına</span>
                  </h1>
                  <h2 className="text-slate-800 text-3xl md:text-4xl font-bold mb-6">
                    Hoş Geldiniz
                  </h2>
                  <p className="text-slate-500 text-lg md:text-xl font-medium tracking-wide bg-white/50 py-2 px-6 rounded-full shadow-sm backdrop-blur-sm border border-white">
                    Giriş yapmak için lütfen öğrenci kartınızı okutun
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative w-full max-w-lg h-[500px] flex flex-col items-center justify-end pb-12">
            
            {/* The Realistic Rotating Turnstile */}
            <div className="absolute bottom-0 w-[500px] h-[360px] flex flex-col items-center justify-end z-10 perspective-1000">
              
              {/* Turnstile Arms (Z-index behind body) */}
              <div className="absolute bottom-[180px] left-1/2 -translate-x-1/2 z-0">
                <motion.div
                  animate={{ rotateZ: isUnlocked ? -120 : 0 }}
                  transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
                  className="relative w-12 h-12 flex items-center justify-center origin-center"
                >
                  {/* Center Hub */}
                  <div className="absolute w-20 h-20 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.4)] border-4 border-gray-400 flex items-center justify-center z-10">
                    <div className="w-10 h-10 bg-gray-600 rounded-full shadow-inner"></div>
                  </div>
                  
                  {/* Arm 1 (Blocking path, horizontal to right) */}
                  <div className="absolute w-[220px] h-8 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 shadow-md rounded-r-full left-[24px] top-1/2 -translate-y-1/2 border-y border-gray-400 origin-left"></div>
                  
                  {/* Arm 2 (Bottom right, angled) */}
                  <div className="absolute w-[220px] h-8 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 shadow-md rounded-r-full left-[24px] top-1/2 -translate-y-1/2 border-y border-gray-500 origin-left rotate-[120deg]"></div>
                  
                  {/* Arm 3 (Top right/left, angled) */}
                  <div className="absolute w-[220px] h-8 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 shadow-md rounded-r-full left-[24px] top-1/2 -translate-y-1/2 border-y border-gray-400 origin-left -rotate-[120deg]"></div>
                </motion.div>
              </div>

              {/* Turnstile Body */}
              <div className="w-[180px] h-[240px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded-t-[40px] border-t-[3px] border-x-[3px] border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_10px_20px_rgba(255,255,255,0.8)] relative z-10 flex flex-col items-center pt-8">
                
                {/* Scanner Screen Surface (Angled effect) */}
                <div className="w-[130px] h-[100px] bg-slate-900 rounded-2xl shadow-[inset_0_5px_15px_rgba(0,0,0,0.8),0_2px_4px_rgba(255,255,255,0.5)] border-[3px] border-slate-700 relative overflow-hidden flex flex-col items-center justify-center transform perspective-500 rotateX-[10deg]">
                   
                   {/* Glow effect when unlocked */}
                   <div className={`absolute inset-0 transition-opacity duration-500 ${isUnlocked ? 'opacity-100' : 'opacity-0'} bg-emerald-500/30`}></div>
                   
                   {/* RFID Icon inside screen */}
                   <svg className={`w-14 h-14 transition-colors duration-500 relative z-10 ${isUnlocked ? 'text-emerald-400' : 'text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                   </svg>
                   
                   {/* Scanning animation bar */}
                   {isScanning && !isUnlocked && (
                      <motion.div 
                        className="absolute top-0 left-0 w-full h-[3px] bg-blue-400 shadow-[0_0_12px_#60a5fa] z-20"
                        animate={{ y: [0, 100, 0] }}
                        transition={{ duration: 1.2, ease: "linear" }}
                      />
                   )}
                </div>
                
                {/* Status LED Indicator Strip */}
                <div className="w-[80px] h-2.5 rounded-full mt-6 shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] bg-slate-800 relative overflow-hidden">
                  <div className={`absolute inset-0 transition-colors duration-500 ${isUnlocked ? 'bg-emerald-400 shadow-[0_0_12px_#34d399]' : 'bg-blue-500/50'}`}></div>
                </div>

                {/* Vertical detail lines on the metal stand */}
                <div className="w-full flex justify-center gap-6 mt-8 opacity-30">
                  <div className="w-1.5 h-24 bg-gradient-to-b from-gray-500 to-transparent"></div>
                  <div className="w-1.5 h-24 bg-gradient-to-b from-gray-500 to-transparent"></div>
                  <div className="w-1.5 h-24 bg-gradient-to-b from-gray-500 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* The Ozyegin ID Card (Draggable/Clickable) */}
            <motion.div
              drag={!isScanning && !isUnlocked}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 200 }}
              dragElastic={0.1}
              onDragEnd={(e, info) => {
                if (info.offset.y > 50) {
                  handleScan();
                }
              }}
              onClick={handleScan}
              animate={
                isScanning 
                  ? { y: 150, scale: 0.85, rotateX: 20, zIndex: 20 } 
                  : { y: 0, scale: 1, rotateX: 0, zIndex: 20 }
              }
              className={`absolute top-10 w-[320px] h-[200px] rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden cursor-grab active:cursor-grabbing border border-slate-300 flex flex-col z-20 ${isUnlocked ? 'opacity-0 transition-opacity duration-1000' : ''}`}
              style={{ backgroundColor: 'white' }}
            >
              {/* Top White Section */}
              <div className="h-[65%] w-full flex p-4 justify-between relative">
                 {/* Left: Logo and Text */}
                 <div className="flex flex-col mt-1 w-full max-w-[160px]">
                    <div className="flex flex-col mb-4 w-full">
                       <div className="w-full h-[1.5px] bg-[#1e3a8a] mb-1"></div>
                       <div className="flex items-center w-full gap-1 mb-1">
                          <div className="flex-1 h-[1.5px] bg-[#9f1239]"></div>
                          <span className="text-[#9f1239] font-black text-base tracking-tighter uppercase leading-none">ÖZYEĞİN</span>
                          <div className="flex-1 h-[1.5px] bg-[#9f1239]"></div>
                       </div>
                       <div className="flex items-center w-full gap-1 mb-1">
                          <div className="flex-1 h-[1.5px] bg-[#1e3a8a]"></div>
                          <span className="text-[#1e3a8a] font-black text-[13px] tracking-tighter uppercase leading-none">ÜNİVERSİTESİ</span>
                          <div className="flex-[0.5] h-[1.5px] bg-[#1e3a8a]"></div>
                       </div>
                       <div className="w-full h-[1.5px] bg-[#9f1239]"></div>
                    </div>
                    
                    <span className="text-[#1e3a8a] font-black text-[11px] tracking-tight">KİMLİK KARTI / ID CARD</span>
                 </div>

                 {/* Right: Photo Area */}
                 <div className="w-[85px] h-[100px] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-slate-400 border border-slate-400 shadow-inner flex items-center justify-center opacity-80 mix-blend-multiply">
                   <div className="w-full h-full bg-slate-300 opacity-50 mix-blend-overlay"></div>
                 </div>
              </div>
              
              {/* Bottom Blue Section */}
              <div className="h-[35%] bg-[#244177] w-full px-5 py-3 flex flex-col justify-end text-white">
                 <h3 className="font-medium text-[18px] leading-tight mb-0.5">Bilal FINDIK</h3>
                 <p className="text-[11px] text-white/90 font-light tracking-wide">S000000 / Bilgisayar Mühendisliği L.</p>
              </div>
            </motion.div>
            
            {/* Guide Text */}
            <motion.div 
              className="absolute -bottom-16 text-slate-400 text-sm font-medium tracking-wide pointer-events-none"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {!isScanning && !isUnlocked && "Kartı aşağı kaydırın veya tıklayın"}
            </motion.div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
