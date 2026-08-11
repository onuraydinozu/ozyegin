"use client";

import { motion, useInView, animate, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Plane, Compass, Globe, Wind, ChevronRight, CheckCircle2, Rocket, PlaneTakeoff, Briefcase, QrCode, Download, Calendar, Building2, Truck, Landmark, Network, BadgePercent, ClipboardCheck, ShieldCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AviationPage() {
  const [activeCareer, setActiveCareer] = useState("pilotaj");
  const [bpName, setBpName] = useState("");
  const [bpDate, setBpDate] = useState("");
  const [bpGenerated, setBpGenerated] = useState(false);
  const [activeMatrixCategory, setActiveMatrixCategory] = useState("ops");

  return (
    <main className="bg-slate-50 text-slate-800 font-sans">
      <Header />
      
      {/* Hero Section (Contains Background, Airplane, and Titles) */}
      <div className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Dynamic Sky Background (Özyeğin Colors) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sky-200 via-blue-50 to-white opacity-90"></div>
          {/* Glowing Sun/Moon */}
          <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-sky-400/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-[20%] left-[-20%] w-[60vw] h-[60vw] bg-blue-300/30 rounded-full blur-[150px]"></div>
        </div>

        {/* Airplane Takeoff Animation (Zero Lag, Hardware Accelerated) */}
        <motion.div 
          className="absolute bottom-0 left-0 z-10"
          initial={{ x: "-20vw", y: "100vh", scale: 4, rotate: -15 }}
          animate={{ 
            x: ["-20vw", "40vw", "120vw"],
            y: ["100vh", "30vh", "-50vh"],
            scale: [3, 1.5, 0.4],
            rotate: [-15, -35, -45]
          }}
          transition={{ 
            duration: 3, 
            ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for realistic takeoff acceleration
            times: [0, 0.6, 1],
            delay: 0.2
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="450" 
            height="160" 
            viewBox="0 0 600 200" 
            className="drop-shadow-2xl"
          >
            {/* Tail Fin */}
            <path d="M 120 120 L 80 30 L 40 30 L 20 120 Z" fill="#0ea5e9" />
            
            {/* OZU logo on tail */}
            <text x="50" y="80" fill="white" fontSize="24" fontWeight="bold" transform="rotate(-15 60 80)">ÖzÜ</text>

            {/* Main Fuselage */}
            <path d="M 560 120 
                     C 595 120, 595 135, 595 135 
                     C 595 150, 560 150, 560 150 
                     L 40 150 
                     C 10 150, 0 135, 20 120 
                     Z" fill="#ffffff" />
                     
            {/* Cockpit Window */}
            <path d="M 580 135 L 560 135 L 565 126 L 585 126 Z" fill="#0284c7" />
            
            {/* Passenger Windows */}
            <g fill="#0284c7">
              {Array.from({length: 22}).map((_, i) => (
                <circle key={i} cx={160 + i * 16} cy="135" r="4" />
              ))}
            </g>

            {/* OZU AIRLINES text on fuselage */}
            <text x="180" y="115" fill="#0284c7" fontSize="32" fontWeight="900" fontStyle="italic" letterSpacing="2">
              ÖZÜ HAVA YOLLARI
            </text>
            
            {/* Front Door */}
            <rect x="525" y="125" width="8" height="20" rx="2" fill="#0ea5e9" />

            {/* Wing (Right side, facing us) */}
            <path d="M 380 145 L 440 200 L 370 200 L 290 145 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
            
            {/* Engine */}
            <rect x="360" y="155" width="60" height="24" rx="12" fill="#94a3b8" />
            {/* Engine front */}
            <ellipse cx="415" cy="167" rx="5" ry="10" fill="#1e293b" />
          </svg>
        </motion.div>

        {/* Cloud Layers (Parallax Effect) */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-white/60 to-transparent pointer-events-none blur-3xl z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        ></motion.div>

        {/* ── COCKPIT HUD OVERLAY ── */}
        <motion.div
          className="absolute inset-0 z-15 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          {/* Top-left: Corner bracket */}
          <div className="absolute top-24 left-6 md:left-12 w-16 h-16 border-l-2 border-t-2 border-sky-500/40"></div>
          {/* Top-right: Corner bracket */}
          <div className="absolute top-24 right-6 md:right-12 w-16 h-16 border-r-2 border-t-2 border-sky-500/40"></div>
          {/* Bottom-left: Corner bracket */}
          <div className="absolute bottom-10 left-6 md:left-12 w-16 h-16 border-l-2 border-b-2 border-sky-500/40"></div>
          {/* Bottom-right: Corner bracket */}
          <div className="absolute bottom-10 right-6 md:right-12 w-16 h-16 border-r-2 border-b-2 border-sky-500/40"></div>

          {/* Left panel: Altitude indicator */}
          <motion.div
            className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-start gap-1"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <span className="text-sky-500/60 text-[10px] font-mono tracking-[0.3em] uppercase">ALT</span>
            <motion.span
              className="text-sky-600/80 text-2xl font-mono font-bold tabular-nums"
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >FL350</motion.span>
            <span className="text-sky-500/40 text-[10px] font-mono">35,000 ft</span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-sky-500/40 to-transparent mt-2"></div>
          </motion.div>

          {/* Right panel: Speed indicator */}
          <motion.div
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-end gap-1"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <span className="text-sky-500/60 text-[10px] font-mono tracking-[0.3em] uppercase">SPD</span>
            <motion.span
              className="text-sky-600/80 text-2xl font-mono font-bold tabular-nums"
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >M 0.85</motion.span>
            <span className="text-sky-500/40 text-[10px] font-mono">490 kts</span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-sky-500/40 to-transparent mt-2"></div>
          </motion.div>

          {/* Top center: Heading tape */}
          <motion.div
            className="absolute top-24 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <div className="flex items-center gap-4 font-mono text-[11px] text-sky-500/50">
              <span>270</span><span>300</span><span>330</span>
              <span className="text-sky-600 font-bold text-sm border border-sky-500/40 px-2 py-0.5">360</span>
              <span>030</span><span>060</span><span>090</span>
            </div>
            <div className="w-[1px] h-4 bg-sky-500/40"></div>
            <span className="text-sky-500/50 text-[9px] font-mono tracking-widest">HDG</span>
          </motion.div>

          {/* Bottom center: Status bar */}
          <motion.div
            className="absolute bottom-14 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6 font-mono"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sky-600/60 text-[10px] tracking-widest">SYS NORMAL</span>
            </div>
            <div className="w-px h-3 bg-sky-500/30"></div>
            <span className="text-sky-600/60 text-[10px] tracking-widest">ÖZYEĞIN HAVA YOLLARI</span>
            <div className="w-px h-3 bg-sky-500/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sky-600/60 text-[10px] tracking-widest">AUTO PILOT</span>
            </div>
          </motion.div>

          {/* Crosshair center target */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block pointer-events-none">
            <div className="relative w-8 h-8">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-sky-500/20"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-sky-500/20"></div>
              <div className="absolute inset-2 border border-sky-500/20 rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-sky-100 border border-sky-200 rounded-full text-sky-800 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <Plane className="w-4 h-4 text-sky-600" />
            Geleceğin Kaptanları ve Yöneticileri
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight drop-shadow-xl text-sky-950"
          >
            Havacılık ve<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Uzay Bilimleri
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Sınırları gökyüzünde değil, uzayın derinliklerinde arayanlar için tasarlandı. Türkiye&apos;nin en donanımlı havacılık fakültesinde geleceğe uçmaya hazır olun.
          </motion.p>

          {/* Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <Compass className="w-10 h-10 text-sky-500 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Pilotaj Eğitimleri</h3>
              <p className="text-slate-600 text-sm">Uluslararası standartlarda, en güncel simülatörler ve uçuş filosu ile tam donanımlı pilotaj eğitimi.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <Globe className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Havacılık Yönetimi</h3>
              <p className="text-slate-600 text-sm">Global havacılık endüstrisine yön verecek vizyoner yöneticiler yetiştiren uluslararası akredite program.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── COCKPIT INSTRUMENTS BANNER ── */}
      <div className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2347 40%, #0c1e3e 70%, #06111f 100%)' }}>
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/60 to-transparent"></div>
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        {/* Radial glow center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,165,233,0.08),transparent_70%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex flex-wrap items-center justify-center md:justify-between gap-6">
          
          {/* Instrument 1: Compass/Heading */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(14,165,233,0.2)" strokeWidth="1"/>
                <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(14,165,233,0.1)" strokeWidth="1" strokeDasharray="4 4"/>
                {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
                  <line
                    key={i}
                    x1="32" y1="4"
                    x2="32" y2={i % 3 === 0 ? "10" : "8"}
                    stroke="rgba(14,165,233,0.6)"
                    strokeWidth={i % 3 === 0 ? "2" : "1"}
                    transform={`rotate(${deg} 32 32)`}
                  />
                ))}
                {/* N marker */}
                <text x="32" y="20" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold" fontFamily="monospace">N</text>
                {/* Needle */}
                <motion.g
                  animate={{ rotate: [0, 5, -3, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ originX: "32px", originY: "32px" }}
                >
                  <line x1="32" y1="14" x2="32" y2="32" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="32" y1="32" x2="32" y2="48" stroke="rgba(14,165,233,0.6)" strokeWidth="2" strokeLinecap="round"/>
                </motion.g>
                <circle cx="32" cy="32" r="3" fill="#0ea5e9"/>
              </svg>
            </div>
            <div>
              <div className="text-sky-500/50 text-[9px] font-mono tracking-[0.3em] uppercase mb-1">Heading</div>
              <div className="text-sky-300 text-xl font-mono font-bold">360°</div>
              <div className="text-sky-500/40 text-[9px] font-mono">True North</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-sky-400/20"></div>

          {/* Instrument 2: Altitude */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(14,165,233,0.2)" strokeWidth="1"/>
                {/* Tick marks */}
                {Array.from({length: 20}).map((_, i) => (
                  <line key={i} x1="32" y1="4" x2="32" y2={i % 5 === 0 ? "11" : "7"}
                    stroke="rgba(14,165,233,0.5)" strokeWidth={i % 5 === 0 ? "2" : "1"}
                    transform={`rotate(${i * 18} 32 32)`}
                  />
                ))}
                {/* Needle animated */}
                <motion.line
                  x1="32" y1="12" x2="32" y2="32"
                  stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"
                  animate={{ rotate: [180, 192, 185, 180] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  style={{ originX: "32px", originY: "32px" }}
                />
                <circle cx="32" cy="32" r="3" fill="#0ea5e9"/>
              </svg>
            </div>
            <div>
              <div className="text-sky-500/50 text-[9px] font-mono tracking-[0.3em] uppercase mb-1">Altitude</div>
              <div className="text-sky-300 text-xl font-mono font-bold">FL350</div>
              <div className="text-sky-500/40 text-[9px] font-mono">35,000 ft</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-sky-400/20"></div>

          {/* Instrument 3: Airspeed */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(14,165,233,0.2)" strokeWidth="1"/>
                {/* Green arc */}
                <path d="M 10 44 A 28 28 0 0 1 32 4" fill="none" stroke="rgba(34,197,94,0.3)" strokeWidth="4"/>
                {/* Yellow arc */}
                <path d="M 32 4 A 28 28 0 0 1 54 44" fill="none" stroke="rgba(234,179,8,0.2)" strokeWidth="4"/>
                {Array.from({length: 16}).map((_, i) => (
                  <line key={i} x1="32" y1="5" x2="32" y2={i % 4 === 0 ? "12" : "9"}
                    stroke="rgba(14,165,233,0.5)" strokeWidth={i % 4 === 0 ? "2" : "1"}
                    transform={`rotate(${(i * 20) + 10} 32 32)`}
                  />
                ))}
                <motion.line
                  x1="32" y1="13" x2="32" y2="32"
                  stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"
                  animate={{ rotate: [155, 165, 158, 155] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ originX: "32px", originY: "32px" }}
                />
                <circle cx="32" cy="32" r="3" fill="#f59e0b"/>
              </svg>
            </div>
            <div>
              <div className="text-sky-500/50 text-[9px] font-mono tracking-[0.3em] uppercase mb-1">Airspeed</div>
              <div className="text-sky-300 text-xl font-mono font-bold">M 0.85</div>
              <div className="text-sky-500/40 text-[9px] font-mono">490 kts</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-sky-400/20"></div>

          {/* Instrument 4: VSI (Vertical Speed) */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(14,165,233,0.2)" strokeWidth="1"/>
                {/* Up sector */}
                <path d="M 32 32 L 32 4 A 28 28 0 0 1 60 32 Z" fill="rgba(34,197,94,0.08)"/>
                {/* Down sector */}
                <path d="M 32 32 L 60 32 A 28 28 0 0 1 32 60 Z" fill="rgba(239,68,68,0.06)"/>
                <line x1="32" y1="4" x2="32" y2="60" stroke="rgba(14,165,233,0.2)" strokeWidth="1"/>
                <line x1="4" y1="32" x2="60" y2="32" stroke="rgba(14,165,233,0.2)" strokeWidth="1"/>
                {/* Center needle: level */}
                <motion.line
                  x1="32" y1="14" x2="32" y2="32"
                  stroke="#22c55e" strokeWidth="2" strokeLinecap="round"
                  animate={{ rotate: [-5, 0, 5, 0, -5] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ originX: "32px", originY: "32px" }}
                />
                <text x="32" y="53" textAnchor="middle" fill="rgba(14,165,233,0.4)" fontSize="6" fontFamily="monospace">0</text>
                <circle cx="32" cy="32" r="3" fill="#22c55e"/>
              </svg>
            </div>
            <div>
              <div className="text-sky-500/50 text-[9px] font-mono tracking-[0.3em] uppercase mb-1">V/Speed</div>
              <div className="text-emerald-400 text-xl font-mono font-bold">+000</div>
              <div className="text-sky-500/40 text-[9px] font-mono">ft/min</div>
            </div>
          </div>

          <div className="hidden lg:block w-px h-12 bg-sky-400/20"></div>

          {/* Status: AABI Akredite */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <motion.div
                className="w-3 h-3 rounded-full bg-emerald-500"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500/30 animate-ping"></div>
            </div>
            <div>
              <div className="text-emerald-400 text-[10px] font-mono font-bold tracking-widest">AABI AKREDİTE</div>
              <div className="text-sky-500/40 text-[9px] font-mono">Avrupa'da İlk · 2021</div>
            </div>
          </div>

        </div>
      </div>

      {/* 1. Hedefimiz ve Hızlı Erişimler */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Hedefimiz</h2>
            <div className="w-20 h-1 bg-sky-500 mb-8 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Hızla büyüyen havacılık sektöründe başarıyla görev alan, havacılık sektörünü şekillendiren dinamikleri takip eden, bilgi teknolojilerini en ileri düzeyde kullanabilen, iletişim, liderlik, yaratıcılık ve grup çalışması gibi becerilere sahip tam donanımlı bireyler yetiştirmektedir.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.ozyegin.edu.tr/tr/havacilik-yonetimi" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                Havacılık Yönetimi
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/pilotaj" target="_blank" rel="noreferrer" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)]">
                Pilotaj
              </a>
              <a href="https://catalog.ozyegin.edu.tr/3d-flip-book/havacilik-ve-uzay-bilimleri-fakultesi-2026-2027-tr/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-semibold rounded-xl transition-all">
                Fakülte Broşürü
              </a>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-sky-100 group shadow-xl">
            <Image
              src="/ozu_havacilik_hedef.jpg"
              alt="Özyeğin Üniversitesi Havacılık Öğrencisi"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ── Hangi Havacılık Kariyeri Sana Uygun? ── */}
      <section className="relative z-10 w-full py-24 bg-white overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-sm font-bold tracking-widest uppercase mb-4">KARİYER REHBERİ</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Hangi Havacılık Kariyeri <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500">Sana Uygun?</span></h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Gelecekte nerede olmak istediğini hayal et. Sana en uygun bölümü keşfet.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Options */}
            <div className="flex flex-col gap-4 lg:w-1/3 z-10">
              <button 
                onClick={() => setActiveCareer("pilotaj")}
                className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${activeCareer === 'pilotaj' ? 'border-sky-500 bg-sky-50 shadow-lg shadow-sky-500/10' : 'border-slate-100 bg-white hover:border-sky-200'}`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className={`p-3 rounded-xl ${activeCareer === 'pilotaj' ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <PlaneTakeoff className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold ${activeCareer === 'pilotaj' ? 'text-sky-900' : 'text-slate-700'}`}>Pilotaj</h3>
                </div>
                <p className="text-slate-500 text-sm pl-16">Gökyüzünde olmak istiyorsan</p>
              </button>

              <button 
                onClick={() => setActiveCareer("yonetim")}
                className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${activeCareer === 'yonetim' ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/10' : 'border-slate-100 bg-white hover:border-blue-200'}`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className={`p-3 rounded-xl ${activeCareer === 'yonetim' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold ${activeCareer === 'yonetim' ? 'text-blue-900' : 'text-slate-700'}`}>Havacılık Yönetimi</h3>
                </div>
                <p className="text-slate-500 text-sm pl-16">Havalimanı devlerini yönetmek istiyorsan</p>
              </button>
            </div>

            {/* Right Content - Details */}
            <div className="lg:w-2/3 bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden relative min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeCareer === "pilotaj" && (
                  <motion.div 
                    key="pilotaj"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 md:p-12 h-full flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-sky-950 mb-4">Geleceğin Kaptanı</h3>
                      <p className="text-slate-600 text-lg mb-8 leading-relaxed">Senin için sınır gökyüzü değil. Dünyayı bir ofis olarak görüyor, yüksek sorumluluk ve kriz anlarında soğukkanlılık gerektiren liderlik rollerini seviyorsun. ÖzÜ Filosundaki modern uçaklarla gökyüzüne ilk adımı atmaya hazırsın.</p>
                      
                      <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Mezuniyet Sonrası Roller:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                         <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" /><span className="text-slate-700">Havayolu İkinci Pilotu (First Officer)</span></div>
                         <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" /><span className="text-slate-700">Özel Jet Pilotu (Business Aviation)</span></div>
                         <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" /><span className="text-slate-700">Kargo Uçağı Pilotu</span></div>
                         <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" /><span className="text-slate-700">Uçuş Eğitmeni (FI)</span></div>
                      </div>
                    </div>
                    <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                       <p className="text-sky-900 font-medium">✨ Öne Çıkan Ayrıcalık: <span className="font-normal text-sky-800">Türkiye&apos;nin en modern eğitim filosuna ve simülatör merkezine erişim.</span></p>
                    </div>
                  </motion.div>
                )}

                {activeCareer === "yonetim" && (
                  <motion.div 
                    key="yonetim"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 md:p-12 h-full flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-blue-950 mb-4">Havacılık Yöneticisi</h3>
                      <p className="text-slate-600 text-lg mb-8 leading-relaxed">Milyar dolarlık filoları, devasa havalimanlarını ve binlerce kişilik ekipleri yönetmek tam sana göre. Finans, lojistik ve strateji senin tutkun. Havacılığın ticari zekasını sen temsil edeceksin.</p>
                      
                      <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Mezuniyet Sonrası Roller:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                         <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" /><span className="text-slate-700">Havayolu Filo Planlama Uzmanı</span></div>
                         <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" /><span className="text-slate-700">Havalimanı Operasyon Yöneticisi</span></div>
                         <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" /><span className="text-slate-700">Gelir Yönetimi (Revenue Management) Analisti</span></div>
                         <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" /><span className="text-slate-700">Hava Kargo Yöneticisi</span></div>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                       <p className="text-blue-900 font-medium">✨ Öne Çıkan Ayrıcalık: <span className="font-normal text-blue-800">AABI akreditasyonuna sahip Avrupa&apos;nın ilk havacılık yönetimi programı.</span></p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── "Dispatch'ten CEO'luğa" Kariyer ve Unvan Matrisi (Havacılık Yönetimi) ── */}
      <section className="relative z-10 w-full py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 border border-blue-200 rounded-full text-blue-800 text-sm font-bold tracking-widest uppercase mb-4">HAVACILIK YÖNETİMİ HUB</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">"Dispatch'ten CEO'luğa"<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Kariyer & Unvan Matrisi</span></h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Mezun olunca tam olarak ne iş yapacağını merak edenler için sektörün kalbine inen 4 ana kariyer rotası.</p>
          </div>

          <div className="flex flex-col gap-12">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setActiveMatrixCategory("ops")}
                className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all ${activeMatrixCategory === 'ops' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30' : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:bg-sky-50'}`}
              >
                <Network className="w-5 h-5" />
                Havayolu Ops. & Dispatch
              </button>
              <button 
                onClick={() => setActiveMatrixCategory("airport")}
                className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all ${activeMatrixCategory === 'airport' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:bg-blue-50'}`}
              >
                <Building2 className="w-5 h-5" />
                Havalimanı & Terminal
              </button>
              <button 
                onClick={() => setActiveMatrixCategory("ground")}
                className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all ${activeMatrixCategory === 'ground' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50'}`}
              >
                <Truck className="w-5 h-5" />
                Yer Hizmetleri & Lojistik
              </button>
              <button 
                onClick={() => setActiveMatrixCategory("finance")}
                className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all ${activeMatrixCategory === 'finance' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-300 hover:bg-amber-50'}`}
              >
                <Landmark className="w-5 h-5" />
                Finans & Kiralama
              </button>
            </div>

            {/* Matrix Grid Area */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeMatrixCategory === "ops" && (
                  <motion.div 
                    key="ops"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {/* Role Card 1 */}
                    <div className="bg-white rounded-3xl p-8 border border-sky-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -z-10 group-hover:bg-sky-100 transition-colors"></div>
                      <ClipboardCheck className="w-10 h-10 text-sky-500 mb-6" />
                      <h4 className="text-xl font-black text-slate-900 mb-2">Uçuş Harekat Uzmanı (Dispatcher)</h4>
                      <p className="text-slate-600 text-sm mb-6">Uçuşun rotasını, yakıt miktarını, hava durumunu planlayan ve uçuş boyunca pilotla koordinasyonu sağlayan "Yerdeki Kaptan".</p>
                      <div className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 inline-block rounded-lg">Kritik Operasyon</div>
                    </div>
                    {/* Role Card 2 */}
                    <div className="bg-white rounded-3xl p-8 border border-sky-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -z-10 group-hover:bg-sky-100 transition-colors"></div>
                      <Globe className="w-10 h-10 text-sky-500 mb-6" />
                      <h4 className="text-xl font-black text-slate-900 mb-2">Ağ ve Filo Planlama Uzmanı</h4>
                      <p className="text-slate-600 text-sm mb-6">Havayolunun hangi uçak tipleriyle hangi şehirlere, hangi frekansta uçacağını belirleyen stratejik planlama birimi.</p>
                      <div className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 inline-block rounded-lg">Stratejik Planlama</div>
                    </div>
                    {/* Role Card 3 */}
                    <div className="bg-white rounded-3xl p-8 border border-sky-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -z-10 group-hover:bg-sky-100 transition-colors"></div>
                      <BadgePercent className="w-10 h-10 text-sky-500 mb-6" />
                      <h4 className="text-xl font-black text-slate-900 mb-2">Gelir Yönetimi (Revenue) Analisti</h4>
                      <p className="text-slate-600 text-sm mb-6">Talebi tahmin ederek doğru koltuğu, doğru yolcuya, doğru zamanda ve doğru fiyata satarak havayolu karlılığını maksimize eder.</p>
                      <div className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 inline-block rounded-lg">Veri & Analiz</div>
                    </div>
                  </motion.div>
                )}

                {activeMatrixCategory === "airport" && (
                  <motion.div 
                    key="airport"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {/* Role Card 1 */}
                    <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors"></div>
                      <Network className="w-10 h-10 text-blue-600 mb-6" />
                      <h4 className="text-xl font-black text-slate-900 mb-2">AOCC Yöneticisi</h4>
                      <p className="text-slate-600 text-sm mb-6">Havalimanı Operasyon Kontrol Merkezi'nde (AOCC) tüm paydaşların (havayolları, güvenlik, yer hizmetleri) anlık yönetimini üstlenir.</p>
                      <div className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 inline-block rounded-lg">Kriz Yönetimi</div>
                    </div>
                    {/* Role Card 2 */}
                    <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors"></div>
                      <Building2 className="w-10 h-10 text-blue-600 mb-6" />
                      <h4 className="text-xl font-black text-slate-900 mb-2">Terminal Operasyon Lideri</h4>
                      <p className="text-slate-600 text-sm mb-6">Yolcu akışının terminal içi güvenli ve pürüzsüz ilerlemesini sağlar. (Örn: İGA veya TAV Terminal Yöneticisi).</p>
                      <div className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 inline-block rounded-lg">Saha Operasyonu</div>
                    </div>
                    {/* Role Card 3 */}
                    <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors"></div>
                      <Plane className="w-10 h-10 text-blue-600 mb-6" />
                      <h4 className="text-xl font-black text-slate-900 mb-2">Slot ve Apron Yöneticisi</h4>
                      <p className="text-slate-600 text-sm mb-6">İniş-kalkış saatlerinin (Slot) planlanması, park pozisyonlarının atanması ve apron trafiğinin güvenle sürdürülmesini koordine eder.</p>
                      <div className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 inline-block rounded-lg">Trafik Planlama</div>
                    </div>
                  </motion.div>
                )}

                {activeMatrixCategory === "ground" && (
                  <motion.div 
                    key="ground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {/* Role Card 1 */}
                    <div className="bg-white rounded-3xl p-8 border border-indigo-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10 group-hover:bg-indigo-100 transition-colors"></div>
                      <Truck className="w-10 h-10 text-indigo-500 mb-6" />
                      <h4 className="text-xl font-black text-slate-900 mb-2">Ramp Operasyon Yöneticisi</h4>
                      <p className="text-slate-600 text-sm mb-6">Uçağın park pozisyonuna yanaşmasından geri itilmesine (push-back) kadar apron üzerinde dönen tüm yer destek faaliyetlerini yönetir.</p>
                      <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 inline-block rounded-lg">Ramp Sahası</div>
                    </div>
                    {/* Role Card 2 */}
                    <div className="bg-white rounded-3xl p-8 border border-indigo-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10 group-hover:bg-indigo-100 transition-colors"></div>
                      <Globe className="w-10 h-10 text-indigo-500 mb-6" />
                      <h4 className="text-xl font-black text-slate-900 mb-2">Hava Kargo & Lojistik Şefi</h4>
                      <p className="text-slate-600 text-sm mb-6">Turkish Cargo gibi küresel kargo ağlarının yük kabulünden, uçağa yüklenmesine ve gümrük süreçlerine kadar olan lojistiğini planlar.</p>
                      <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 inline-block rounded-lg">Global Lojistik</div>
                    </div>
                  </motion.div>
                )}

                {activeMatrixCategory === "finance" && (
                  <motion.div 
                    key="finance"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {/* Role Card 1 */}
                    <div className="bg-white rounded-3xl p-8 border border-amber-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 group-hover:bg-amber-100 transition-colors"></div>
                      <Plane className="w-10 h-10 text-amber-500 mb-6" />
                      <h4 className="text-xl font-black text-slate-900 mb-2">Uçak Kiralama (Leasing) Uzmanı</h4>
                      <p className="text-slate-600 text-sm mb-6">Milyon dolarlık uçakların wet-lease veya dry-lease sözleşmelerini yöneten, havayolunun devasa varlık (asset) portföyünü optimize eden finans uzmanı.</p>
                      <div className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 inline-block rounded-lg">Milyarlık Fonlar</div>
                    </div>
                    {/* Role Card 2 */}
                    <div className="bg-white rounded-3xl p-8 border border-amber-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 group-hover:bg-amber-100 transition-colors"></div>
                      <ShieldCheck className="w-10 h-10 text-amber-500 mb-6" />
                      <h4 className="text-xl font-black text-slate-900 mb-2">Havacılık Sigorta Yöneticisi</h4>
                      <p className="text-slate-600 text-sm mb-6">Filodaki uçakların ve operasyon risklerinin analizi ile milyar dolarlık poliçe anlaşmalarını koordine eder.</p>
                      <div className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 inline-block rounded-lg">Risk Yönetimi</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AABI Accreditation Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-amber-500/20 via-amber-600/20 to-yellow-500/10 border border-amber-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-amber-500/20 border-2 border-amber-400/50 flex items-center justify-center">
              <Globe className="w-12 h-12 text-amber-500" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-700 mb-4">
                AABI (Aviation Accreditation Board International)
              </h3>
              <p className="text-amber-900/80 text-lg leading-relaxed mb-6">
                Özyeğin Üniversitesi Havacılık ve Uzay Bilimleri Fakültesi Havacılık Yönetimi ve Pilotaj Programları, AABI (Aviation Accreditation Board International) Tarafından Avrupa’da ve Türkiye’de Akredite Edilen İlk Programlar oldu.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/havacilik-ve-uzay-bilimleri-fakultesi/aabi-aviation-accreditation-board-international" target="_blank" rel="noreferrer" className="inline-block px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors shadow-lg">
                Daha Fazla Bilgi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dean's Message */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="w-48 h-48 rounded-full border-4 border-slate-200 mx-auto lg:mx-0 overflow-hidden mb-6 shadow-lg">
                <Image src="/ozu_burcin_unlu.png" alt="Prof. Dr. Mehmet Burçin Ünlü" width={192} height={192} className="object-cover w-full h-full object-top" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 text-center lg:text-left">Prof. Dr. Mehmet Burçin Ünlü</h3>
              <p className="text-sky-600 font-medium text-center lg:text-left mb-6">Havacılık ve Uzay Bilimleri Fakültesi Dekanı</p>
              <div className="hidden lg:block w-12 h-1 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Havacılık sektöründeki sürekli gelişim ve büyüme hızı, beraberinde nitelikli insan kaynağı ihtiyacını da getirmektedir. Her geçen yıl artan rekabet, havacılık alanına yapılan yatırımlar, ve teknolojik gelişmeler gibi etkenler, sektörün ihtiyaçlarını doğru analiz edebilecek ve gereklilikleri karşılayabilecek insan kaynağına olan ihtiyaca işaret etmektedir.
            </p>
            <p>
              Bu noktada, Özyeğin Üniversitesi Havacılık ve Uzay Bilimleri Fakültesi, havacılık sektörü için gerekli bilgi ve becerilere sahip insan kaynağını yetiştirmek üzere 2011 yılından itibaren havacılık eğitim faaliyetlerini sürdürmektedir. Fakültemiz, eğitim programı ve yaklaşımı, yenilikçi dersler, akademik kadro ve mezunları ile kısa sürede adından söz ettirmeyi başarmıştır. Yoğun teorik bilginin yanı sıra uygulamaya dönük eğitimler, staj imkanları, sektörün önde gelen kurumları ile işbirlikleri gibi avantajları sayesinde fakülte mezunlarımız kariyerlerini kolaylıkla şekillendirmektedirler.
            </p>
            <p>
              Havacılık ve Uzay Bilimleri Fakültesi olarak, 2021 yılında AABI (Aviation Accreditation Board International) tarafından hem Avrupa’da hem de Türkiye’de akredite edilen ilk fakülte olduk. Bu önemli başarı, verdiğimiz eğitimin uluslararası standartlarda olduğunun resmi bir göstergesi niteliğindedir. Aldığımız akreditasyon sayesinde, AABI tarafından akredite edilen, havacılık alanında eğitim veren üniversiteler arasında yerimizi aldık. Bu durum, öğrencilerimizin aldıkları eğitimlerinin ve üniversitemizdeki akademik ve idari süreçlerimizin sürekli geliştiği ve gereklilikleri sürekli karşıladığı anlamını taşımaktadır. Kendisini ispat eden eğitim ve faaliyetlerimiz ile hedefimiz, ülkemizde olduğu kadar küresel ölçekte de tercih edilen bir eğitim kurumu haline gelmektir. Bu doğrultuda, uluslararası havacılık mevzuat ve standartlarına uygun, kaliteli eğitim vererek, hem akademi hem sektör için nitelikli insan kaynağı yetiştirmeyi sürdüreceğiz.
            </p>
            <p>
              Böylece hem Türk havacılık sektörünün ihtiyaçlarını karşılamak hem de gençlerimizin küresel ölçekte kariyer yapmalarını sağlamak için çalışmaya devam edeceğiz. Elde ettiğimiz bu prestijli akreditasyon, verdiğimiz eğitim kalitesinin ve uluslararası düzeydeki iddiamızın somut bir göstergesidir. Havacılık alanındaki öncü rolümüzü sürdürerek, sektöre ve ülkemize katkı sunmaya devam edeceğiz.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Mezunlarımız & Bir Bölüm Üç Açı */}
      <section className="relative z-10 w-full bg-sky-50/50 border-y border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Mezunlarımız</h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Özyeğin Üniversitesinde öğrencilerimiz, hem teorik bilgiyi hem de pratik deneyimi bir arada sunan dengeli bir eğitim modeliyle yetişir. Vaka analizleri, proje çalışmaları ve uygulamalı derslerle zenginleştirilmiş bu model, yalnızca öğretici değil, aynı zamanda dönüştürücü bir öğrenme süreci sunar.
              </p>
              <p>
                Sektörle iç içe yürütülen bu eğitim anlayışı sayesinde öğrenciler, mezun olmadan önce iş dünyasını tanıma fırsatı bulur. Böylece, mezun olduklarında neyle karşılaşacaklarını bilen, bilinçli, kendine güvenen ve fark yaratan profesyoneller olarak kariyerlerine güçlü bir başlangıç yaparlar.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[50px] group-hover:bg-red-500/20 transition-all"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Bir Bölüm Üç Açı</h3>
              <p className="text-slate-500 mb-8">
                Lisans bölümlerimizi akademisyenlerimizin, mezunlarımızın ve öğrencilerimizin deneyimlerinden ve bakış açılarından yola çıkarak tanıtan YouTube video serimize buradan erişebilirsiniz.
              </p>
              <a href="https://youtube.com/playlist?list=PLKzTz6QQRYz17A3Heyl2p_2Va8h-mjKZP" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-[#FF0000] hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-500/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                Seriyi İzle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. İstatistikler ve Çalışılan Kurumlar */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">ÖzÜ Mezunları Güçlü Başlıyor</h2>
          <p className="text-xl text-sky-700">Öğrencilerimiz mezun olmadan iş hayatına adım atıyor</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "%44", label: "Mezuniyet anında veya öncesinde işe başlama", color: "text-sky-500" },
            { value: "5 Ay", label: "Mezuniyet sonrası ortalama işe başlama süresi", color: "text-blue-500" },
            { value: "%12", label: "Yurt dışında çalışan mezun oranı", color: "text-indigo-500" },
            { value: "%37", label: "Lisansüstü eğitimde yurt dışını tercih edenler", color: "text-purple-500" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:bg-slate-50 transition-colors shadow-sm"
            >
              <div className={`text-5xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
              <p className="text-slate-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <p className="text-xs text-slate-500 text-center mb-16 italic">
          * Bu oranlar Haziran 2026 itibariyle ulaşılabilmiş son 3 yıl mezunlarımızın verilerine göre hesaplanmıştır.<br/>
          ** Bu oranlar Haziran 2026 itibariyle ulaşılabilmiş tüm mezunlarımızın verilerine göre hesaplanmıştır.
        </p>

        {/* ── CANLI UÇUŞ RADARI: MEZUN HARİTASI ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full bg-[#0a1628] rounded-3xl overflow-hidden mb-24 relative shadow-2xl border border-sky-900/50"
        >
          {/* Header Bar */}
          <div className="bg-[#0f213a] px-6 py-4 flex items-center justify-between border-b border-sky-900/50">
             <div className="flex items-center gap-3">
               <div className="relative flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
               </div>
               <span className="text-sky-300 font-mono text-sm tracking-widest font-bold">LIVE: ÖZÜ ALUMNI RADAR</span>
             </div>
             <div className="flex gap-4">
               <span className="text-sky-500/60 font-mono text-xs">UTC: 12:45Z</span>
               <span className="text-sky-500/60 font-mono text-xs hidden md:block">TRK: 320°</span>
             </div>
          </div>

          {/* Map Container */}
          <div className="relative w-full h-[500px] bg-[#0a1628] overflow-hidden">
             {/* Radar Sweep Effect */}
             <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 border border-sky-500/10 rounded-full"></div>
             <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 border border-sky-500/10 rounded-full"></div>
             <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 border border-sky-500/20 rounded-full"></div>
             <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-sky-500/10 -translate-y-1/2"></div>
             <div className="absolute top-0 left-1/2 w-[1px] h-full bg-sky-500/10 -translate-x-1/2"></div>
             
             {/* Sweeper */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 origin-center pointer-events-none"
             >
               <div className="w-[200px] h-[200px] border-r-2 border-sky-400 bg-gradient-to-r from-transparent to-sky-500/20 origin-bottom-right" style={{ transform: 'translate(200px, 0)' }}></div>
             </motion.div>

             {/* Simple SVG Map (Europe/Turkey area) */}
             <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                <path d="M400,200 Q450,180 500,250 T600,200 T700,300 T750,400 T650,450 T550,400 T450,450 T350,400 Z" fill="none" stroke="#38bdf8" strokeWidth="2" />
                <path d="M550,280 Q600,260 650,300 T700,290" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5 5" />
             </svg>

             {/* THY Plane (Interactive Point) */}
             <div className="absolute top-[40%] left-[55%] group z-20">
                {/* Plane Icon */}
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative cursor-pointer"
                >
                  <Plane className="w-8 h-8 text-red-500 rotate-45 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                  <div className="absolute -bottom-2 -right-4 bg-[#0a1628]/80 backdrop-blur border border-red-500/30 text-white text-[10px] font-mono px-1.5 py-0.5 rounded">TK1933</div>
                </motion.div>
                
                {/* Tooltip Card (Glassmorphism) */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-bottom z-30">
                  <div className="bg-[#0f213a]/90 backdrop-blur-xl border border-sky-500/30 rounded-2xl p-4 shadow-2xl shadow-sky-900/50">
                     <div className="flex items-center gap-3 mb-3 border-b border-sky-500/20 pb-3">
                        <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]">THY</div>
                        <div>
                          <p className="text-white font-bold text-sm">Türk Hava Yolları</p>
                          <p className="text-emerald-400 font-mono text-xs">85 ÖzÜ Mezunu Aktif Uçuşta</p>
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <div className="w-12 h-12 rounded-lg bg-slate-800 overflow-hidden border border-slate-700 relative">
                           <Image src="/ozu_burcin_unlu.png" alt="Pilot" fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sky-300 text-xs font-bold">Kpt. Ahmet Yılmaz</p>
                          <p className="text-slate-400 text-[10px]">2017 Mezunu • Boeing 777</p>
                        </div>
                     </div>
                  </div>
                  {/* Tooltip Arrow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0f213a]/90 border-b border-r border-sky-500/30 rotate-45 backdrop-blur-xl"></div>
                </div>
             </div>

             {/* Pegasus Plane (Interactive Point) */}
             <div className="absolute top-[60%] left-[40%] group z-20">
                {/* Plane Icon */}
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="relative cursor-pointer"
                >
                  <Plane className="w-8 h-8 text-yellow-500 -rotate-12 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
                  <div className="absolute -bottom-2 -right-4 bg-[#0a1628]/80 backdrop-blur border border-yellow-500/30 text-white text-[10px] font-mono px-1.5 py-0.5 rounded">PC219</div>
                </motion.div>
                
                {/* Tooltip Card (Glassmorphism) */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-bottom z-30">
                  <div className="bg-[#0f213a]/90 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-4 shadow-2xl shadow-yellow-900/50">
                     <div className="flex items-center gap-3 mb-3 border-b border-sky-500/20 pb-3">
                        <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-slate-900 shadow-[0_0_15px_rgba(234,179,8,0.5)]">PGS</div>
                        <div>
                          <p className="text-white font-bold text-sm">Pegasus Hava Yolları</p>
                          <p className="text-emerald-400 font-mono text-xs">66 ÖzÜ Mezunu Aktif Uçuşta</p>
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <div className="w-12 h-12 rounded-lg bg-slate-800 overflow-hidden border border-slate-700 relative">
                           <Image src="/ozu_burcin_unlu.png" alt="Pilot" fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sky-300 text-xs font-bold">F/O Ayşe Demir</p>
                          <p className="text-slate-400 text-[10px]">2019 Mezunu • Airbus A320</p>
                        </div>
                     </div>
                  </div>
                  {/* Tooltip Arrow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0f213a]/90 border-b border-r border-yellow-500/30 rotate-45 backdrop-blur-xl"></div>
                </div>
             </div>

             {/* SunExpress Plane (Interactive Point) */}
             <div className="absolute top-[30%] left-[70%] group z-20">
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="relative cursor-pointer"
                >
                  <Plane className="w-8 h-8 text-orange-500 rotate-[120deg] drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                  <div className="absolute -top-6 -right-4 bg-[#0a1628]/80 backdrop-blur border border-orange-500/30 text-white text-[10px] font-mono px-1.5 py-0.5 rounded">XQ122</div>
                </motion.div>
             </div>

             {/* Ground Station / Campus Point */}
             <div className="absolute top-[50%] left-[50%] z-10 -translate-x-1/2 -translate-y-1/2">
               <div className="relative">
                 <div className="w-4 h-4 bg-sky-500 rounded-full"></div>
                 <div className="absolute inset-0 w-4 h-4 bg-sky-500 rounded-full animate-ping"></div>
                 <span className="absolute top-6 left-1/2 -translate-x-1/2 text-sky-400 font-mono text-[10px] whitespace-nowrap">ÖZÜ KAMPÜS (LTBA)</span>
               </div>
             </div>
          </div>
          
          {/* Bottom Data Bar */}
          <div className="bg-[#060c17] px-6 py-3 flex items-center justify-between border-t border-sky-900/50">
             <span className="text-sky-500/50 font-mono text-[10px]">TOTAL AIRBORNE ALUMNI: 214+</span>
             <span className="text-sky-500/50 font-mono text-[10px]">DATA: OZU CAREER CENTER</span>
          </div>
        </motion.div>


        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Mezunlarımızın Çalıştığı Kurumlar</h3>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {[
              { name: "Türk Hava Yolları", count: 85 },
              { name: "Pegasus", count: 66 },
              { name: "Sun Express", count: 22 },
              { name: "Hitit", count: 16 },
              { name: "Corendon Airlines", count: 7 },
              { name: "Air France KLM", count: 6 },
              { name: "Ayjet", count: 5 },
              { name: "Aviation Parts", count: 4 },
              { name: "Fenix Havacılık", count: 4 },
              { name: "Çelebi Aviation", count: 3 },
              { name: "KEYVAN", count: 3 },
              { name: "Onur Air", count: 2 },
              { name: "MNG Airlines", count: 2 },
              { name: "SAS", count: 2 },
              { name: "TAV Airports", count: 2 },
              { name: "DHL", count: 2 },
              { name: "Qatar Airways", count: 2 },
              { name: "İGA İstanbul", count: 2 }
            ].map((company, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 150 } }
                }}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-sky-50 transition-colors shadow-sm"
              >
                <span className="text-slate-700 font-semibold text-sm mb-2">{company.name}</span>
                <span className="text-sky-600 font-black text-xl">{company.count}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 6. Fakülte Öne Çıkanlar (Simülatör, Ödül, Akademik Kadro) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full bg-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Card 1: Simulator Center */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-[#266295] font-bold text-sm tracking-wide block mb-2">Havacılık ve Uzay Bilimleri Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-none">ÖZÜ<br/>Simülatör<br/>Merkezi</h2>
            </div>
            <div className="w-full aspect-square md:aspect-[4/3] relative mb-6 overflow-hidden">
              <Image src="/ozu_simulator_merkezi.jpg" alt="ÖZÜ Simülatör Merkezi" fill className="object-cover" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Öğrencilerinin uçuş tecrübelerini artırmak ve onları mesleğe hazırlamak amacıyla “Simülatör Merkezi” kuran ilk üniversite olan Özyeğin Üniversitesi bu uygulama ile Pilotaj Lisans Programı’nı tamamlayan mezunlarının, iş başvurularının standart bir parçası olan simülatör deneyimini kazanmasını ve bulundukları ortamda fark yaratmasını sağlıyor.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/havacilik-ve-uzay-bilimleri-fakultesi/ozu-simulator-merkezi" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#266295] hover:bg-[#1a4569] text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Award */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-[#266295] font-bold text-sm tracking-wide block mb-2">Havacılık ve Uzay Bilimleri Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">Özyeğin<br/>Üniversitesi&apos;ne<br/>&quot;Yılın<br/>Havacılık ve<br/>Uzay Bilimleri<br/>Fakültesi<br/>Ödülü&quot;</h2>
            </div>
            <div className="w-full aspect-square md:aspect-[4/3] relative mb-6 overflow-hidden">
              <Image src="/ozu_havacilik_odulu.jpg" alt="Yılın Fakültesi Ödülü" fill className="object-cover" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Özyeğin Üniversitesi Havacılık ve Uzay Bilimleri Fakültesi, BLUESKY Havacılık Başarı Ödülleri kapsamında, “Yılın Havacılık ve Uzay Bilimleri Fakültesi” ödülüne layık görüldü. Ulusal ve uluslararası çapta havacılık sektörünü ileri taşıyan kurum ve kuruluşların değerlendirildiği ödül programında, Özyeğin Üniversitesi bu alana sunduğu akademik katkı ve sektörlerle iç içe eğitim anlayışı dolayısıyla ödülün sahibi oldu.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/duyurular/23534" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#266295] hover:bg-[#1a4569] text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: Academic Staff */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-[#266295] font-bold text-sm tracking-wide block mb-2">Havacılık ve Uzay Bilimleri Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">Akademik<br/>Kadro</h2>
            </div>
            <div className="w-full aspect-square md:aspect-[4/3] relative mb-6 mt-16 overflow-hidden">
              <Image src="/ozu_akademik_kadro.jpg" alt="Akademik Kadro" fill className="object-cover" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Özyeğin Üniversitesi’nin deneyimli akademisyenleri, hem akademik birikimleri hem de sektörel deneyimleriyle öğrencilere ilham veren rehberlerdir. Öğrenmeyi teoriyle sınırlamayıp, gerçek dünya uygulamalarıyla zenginleştiren bu öğretim üyeleri; öğrencilerin analitik düşünme, problem çözme ve yenilikçi yaklaşımlar geliştirme becerilerini destekler. Açık iletişime önem veren ve her öğrencinin potansiyeline ulaşması için birebir ilgi gösteren akademisyenler, üniversite yaşamınızı sadece bir eğitim süreci değil, aynı zamanda kişisel gelişim yolculuğu haline getirir.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/havacilik-ve-uzay-bilimleri-fakultesi/akademik-kadro" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#266295] hover:bg-[#1a4569] text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </motion.section>

      {/* Video Showcase Section */}
      <section className="relative z-10 w-full py-24 bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-sky-500/20 border border-sky-400/30 rounded-full text-sky-300 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
              <svg className="w-4 h-4 fill-current text-red-400" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              Tanıtım Filmi
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Gökyüzü Sınır Değil,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                Başlangıç Noktası
              </span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Özyeğin Üniversitesi Havacılık ve Uzay Bilimleri Fakültesi&apos;nin eğitim anlayışını, kampüsünü ve geleceğin pilotlarını yakından tanıyın.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/30 via-blue-500/20 to-indigo-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 z-10"></div>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/YzzPPphDWVc?rel=0&modestbranding=1&color=white"
                  title="Özyeğin Üniversitesi Havacılık ve Uzay Bilimleri Fakültesi Tanıtım Filmi"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 px-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Havacılık ve Uzay Bilimleri Fakültesi</p>
                  <p className="text-slate-400 text-sm">Özyeğin Üniversitesi — Resmi Tanıtım Filmi</p>
                </div>
              </div>
              <a
                href="https://www.ozyegin.edu.tr/tr/havacilik-ve-uzay-bilimleri-fakultesi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-500/30 hover:-translate-y-0.5"
              >
                Fakülteyi Keşfet
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Department Heads Testimonials */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
          <div className="text-center mb-16">
            <p className="text-sky-600 font-medium mb-2">Havacılık ve Uzay Bilimleri Fakültesi Dekanlığı</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Bölüm Başkanlarımız</h2>
          </div>

          <div className="space-y-12">
            {/* Testimonial 1: Leyla Adiloğlu Yalçınkaya */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 text-center max-w-5xl mx-auto shadow-xl relative">
              <div className="flex justify-center gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-slate-600 md:text-lg leading-relaxed italic mb-10 max-w-4xl mx-auto">
                “Havacılık Yönetimi bölümümüz, hava taşımacılığı alanına ilgi duyan ve bu alanda kendini geliştirmek ve farklılaşmak isteyen adaylara yönelik hazırlanmış bir programdır. Bizler, fakültemizin kuruluşundan bu yana, teori ve pratiği harmanlayarak; derslerimizi ve faaliyetlerimizi sürekli geliştirerek öğrencilerimizi hem sektöre hem de akademik dünyaya hazırlamaya çalışıyoruz. Farklı sesleri dinleyen, kapsayıcı ve eşitlikçi bir yaklaşımla; ders yükleri ve beklentilerimiz ile öğrencilerimizi çoğunlukla zorlayarak ama aynı zamanda çeşitli faaliyetleri birlikte düzenleyerek, onları yarışmalara, konferanslara veya diğer sosyal aktivitelere katılmaya teşvik ederek hep birlikte daha iyiye ulaşmaya gayret ediyoruz. Bu yolculukta, hem üniversitemizin hem de dış paydaşlarımızın güçlü desteğini arkamızda hissettik ve bu desteği kalıcı bir değere dönüştürmek için özveriyle çalıştık. En büyük gururumuz öğrencilerimiz; gelişime açık yaklaşımımız ve hem literatüre hem de sektöre sunduğumuz katkılardır. Bu yolda, bizlerle yürümek isteyen tüm adayları, Özyeğin Üniversitesi Havacılık Yönetimi programına katılmaya davet ediyoruz.”
              </p>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full mb-4 border-2 border-slate-200 flex items-center justify-center overflow-hidden">
                   <span className="text-slate-400 text-xs">Fotoğraf</span>
                </div>
                <h4 className="text-slate-900 font-bold text-lg">Dr. Öğr. Üyesi Leyla Adiloğlu Yalçınkaya</h4>
                <span className="text-slate-500 text-sm">Havacılık Yönetimi Bölüm Başkanı</span>
              </div>
            </div>

            {/* Testimonial 2: Semih Soran */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 text-center max-w-5xl mx-auto shadow-xl relative">
              <div className="flex justify-center gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-slate-600 md:text-lg leading-relaxed italic mb-10 max-w-4xl mx-auto">
                “Özyeğin Üniversitesi Pilotaj Lisans Programı, pilot eğitimindeki mevcut tecrübesi ile uzun yıllardır sektöre başarılı mezunlar vermiş ve bu süreçte devamlı olarak süreçlerini geliştirerek üniversiteler arasında öncü olmuştur. İlk pilotaj programı, ilk simulatör merkezi, ilk dil sınav merkezi, ilk akredite olan pilotaj bölümü... Mezunlarımız, üst düzeyde bilgi, beceri, yabancı dil ve özgüvene sahip bir şekilde yurt içi ve yurt dışında havacılık sektöründe hizmet veren işletmelerde pilot olarak çalışma imkan ve ayrıcalığına sahip olmuş ve ilk mezunlarımız Hava Yolu Kaptanı olmuşlardır. Bizi gururlandıran ve aynı zamanda heyecanlandıran bu unsurlar gelecek dönemde bizlere güç sağlayacak kilometre taşlarıdır. Bundan sonraki süreçte daha çok çalışarak ülkemizde ve dünyada tüm pilotlarla işe giriş aşamalarında rekabet edebilecek güçte, beceride, bilgili ve özgüvenli pilotlar yetiştirmeye devam edeceğiz. Mezunlarımızın tüm süreçlerde arkasında destek olarak hayallerini gerçeğe dönüştürme noktasında yanlarındayız. Gelecekte öğrencimiz olacak, uçmayı ve pilot olmayı, hayallerinin ötesine taşıyarak, gerçeğe ve yaşam biçimine dönüştürmek isteyen aday öğrencilerimizi bekliyoruz. Gelecek havacılık tutkunu gençler için her daim açık ve aydınlık olsun...”
              </p>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full mb-4 border-2 border-slate-200 flex items-center justify-center overflow-hidden">
                   <span className="text-slate-400 text-xs">Fotoğraf</span>
                </div>
                <h4 className="text-slate-900 font-bold text-lg">Doç. Dr. Semih Soran</h4>
                <span className="text-slate-500 text-sm">Pilotaj Lisans Programı Eğitim Müdürü & Bölüm Başkanı</span>
              </div>
            </div>
          </div>
        </section>
      {/* ── DIGITAL BOARDING PASS (KAMPÜS ZİYARETİ) ── */}
      <section className="relative z-10 w-full py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">ÖzÜ <span className="text-sky-400">Kampüs Ziyareti</span></h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Hayallerindeki kampüsü yerinde görmek için ziyaretini planla. Kampüs Ziyaret Kartını oluştur ve bize katıl.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
            
            {/* Form Area */}
            <div className="w-full lg:w-1/3 bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Ziyaretçi Bilgileri</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sky-400 text-sm font-bold mb-2 uppercase tracking-wide">Ziyaretçi Adı Soyadı</label>
                  <input 
                    type="text" 
                    placeholder="Örn. Can Yılmaz"
                    value={bpName}
                    onChange={(e) => setBpName(e.target.value.toUpperCase())}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors uppercase font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sky-400 text-sm font-bold mb-2 uppercase tracking-wide">Ziyaret Tarihi</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      value={bpDate}
                      onChange={(e) => setBpDate(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors font-mono appearance-none"
                      style={{ colorScheme: 'dark' }}
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <button 
                  onClick={() => setBpGenerated(true)}
                  disabled={!bpName || !bpDate}
                  className="w-full mt-6 bg-sky-500 hover:bg-sky-400 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
                >
                  <PlaneTakeoff className="w-5 h-5" />
                  BİLETİ OLUŞTUR
                </button>
              </div>
            </div>

            {/* Ticket Area */}
            <div className="w-full lg:w-2/3 flex justify-center perspective-1000">
              <AnimatePresence>
                {bpGenerated ? (
                  <motion.div
                    initial={{ rotateX: 90, opacity: 0, y: 50 }}
                    animate={{ rotateX: 0, opacity: 1, y: 0 }}
                    transition={{ type: "spring", damping: 15, stiffness: 100 }}
                    className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative print-ticket"
                  >
                    {/* Left main stub */}
                    <div className="flex-1 p-6 md:p-8 bg-white relative border-r-2 border-dashed border-slate-300">
                      <div className="absolute top-0 right-0 w-6 h-6 bg-slate-900 rounded-bl-full translate-x-1/2 -translate-y-1/2 md:hidden"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 bg-slate-900 rounded-tl-full translate-x-1/2 translate-y-1/2 md:hidden"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 bg-slate-900 rounded-bl-full translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 bg-slate-900 rounded-tl-full translate-x-1/2 translate-y-1/2 hidden md:block"></div>
                      
                      <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-slate-100">
                        <div>
                           <h4 className="text-3xl font-black text-slate-900 tracking-tighter">ÖZÜ<span className="text-sky-500">AIR</span></h4>
                           <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mt-1">Kampüs Ziyaret Kartı</p>
                        </div>
                        <Plane className="w-8 h-8 text-sky-200 rotate-45" />
                      </div>

                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <p className="text-4xl font-black text-slate-800">HOME</p>
                          <p className="text-slate-400 text-sm font-medium">Başlangıç</p>
                        </div>
                        <div className="flex-1 flex items-center justify-center px-4 relative">
                          <div className="w-full h-0.5 bg-slate-200"></div>
                          <Plane className="absolute text-sky-500 w-6 h-6" />
                        </div>
                        <div className="text-right">
                          <p className="text-4xl font-black text-sky-600">OZU</p>
                          <p className="text-slate-400 text-sm font-medium">Kampüs</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-2">
                        <div>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">Ziyaretçi / Visitor</p>
                          <p className="text-lg font-bold text-slate-800 truncate">{bpName}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">Tarih / Date</p>
                          <p className="text-lg font-bold text-slate-800">{new Date(bpDate).toLocaleDateString('tr-TR')}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">Etkinlik / Event</p>
                          <p className="text-lg font-bold text-slate-800 font-mono">OZU2026</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">Kapı / Gate</p>
                          <p className="text-lg font-bold text-sky-600 font-mono">X Binası</p>
                        </div>
                      </div>
                    </div>

                    {/* Right stub */}
                    <div className="w-full md:w-48 bg-slate-50 p-6 flex flex-col justify-between items-center md:items-start relative">
                      <div className="w-full flex justify-between items-center mb-4 md:mb-0">
                         <div className="md:hidden"><h4 className="text-xl font-black text-slate-900">ÖZÜ<span className="text-sky-500">AIR</span></h4></div>
                         <div className="text-right md:text-left">
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">Koltuk / Seat</p>
                            <p className="text-3xl font-black text-slate-800">1A</p>
                         </div>
                      </div>
                      
                      <div className="my-6 md:my-0 flex-1 flex items-center justify-center w-full">
                         {/* Fake QR Code using styling */}
                         <div className="w-32 h-32 md:w-28 md:h-28 bg-white p-2 border-2 border-slate-200 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer hover:border-sky-400 transition-colors" onClick={() => window.print()}>
                            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 p-2 opacity-60 group-hover:opacity-100 transition-opacity">
                               <div className="bg-slate-800 rounded-sm col-span-2 row-span-2"></div>
                               <div className="bg-slate-800 rounded-sm"></div>
                               <div className="bg-slate-800 rounded-sm row-span-2"></div>
                               <div className="bg-slate-800 rounded-sm"></div>
                               <div className="bg-slate-800 rounded-sm col-span-2"></div>
                               <div className="bg-sky-500 rounded-sm col-span-2 row-span-2"></div>
                               <div className="bg-slate-800 rounded-sm"></div>
                               <div className="bg-slate-800 rounded-sm"></div>
                            </div>
                            <div className="absolute inset-0 bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                               <Download className="w-8 h-8 text-sky-600" />
                            </div>
                         </div>
                      </div>

                      <div className="w-full mt-auto">
                        <button onClick={() => window.print()} className="w-full py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex justify-center items-center gap-1">
                          <Download className="w-3 h-3" /> Bileti İndir
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="w-full max-w-2xl aspect-[21/9] border-2 border-dashed border-slate-700 rounded-3xl flex flex-col items-center justify-center text-slate-500 p-8">
                    <QrCode className="w-16 h-16 mb-4 text-slate-600 opacity-50" />
                    <p className="text-xl font-bold">Biletiniz Burada Oluşturulacak</p>
                    <p className="text-sm mt-2 text-slate-600">Lütfen yandaki formu doldurun</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Simple print style directly injected for ticket printing */}
        <style dangerouslySetInnerHTML={{__html: `
          @media print {
            @page { margin: 0; size: auto; }
            body { background: white; margin: 0; padding: 20px; }
            body * { visibility: hidden; }
            .print-ticket, .print-ticket * { visibility: visible; }
            .print-ticket { 
              position: absolute; 
              left: 50%; top: 50%; 
              transform: translate(-50%, -50%); 
              margin: 0; 
              width: 800px !important; 
              height: auto; 
              box-shadow: none !important; 
              border: 2px solid #e2e8f0 !important; 
              border-radius: 1.5rem !important; 
            }
            * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          }
        `}} />
      </section>

      <Footer />
    </main>
  );
}
