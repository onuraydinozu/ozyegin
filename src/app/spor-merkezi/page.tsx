"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Trophy, Dumbbell, Waves, Users, Target, Map, 
  Calendar, CheckCircle2, ArrowRight, Play, Activity 
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { sportsCenterData } from "@/data/sportsCenterData";

const CountUp = ({ to, suffix = "" }: { to: number | string, suffix?: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {to}{suffix}
    </motion.span>
  );
};

export default function SportsCenterPage() {
  const [bookingStatus, setBookingStatus] = useState<"idle" | "success">("idle");
  const [selectedFacility, setSelectedFacility] = useState<string>("Fitness & Kondisyon Merkezi");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus("success");
    setTimeout(() => setBookingStatus("idle"), 3000);
  };

  const IconMap: Record<string, React.ElementType> = {
    "Arena": Trophy,
    "Waves": Waves,
    "Dumbbell": Dumbbell,
    "Users": Users,
    "Target": Target,
    "Map": Map,
  };

  return (
    <main className="bg-slate-950 text-slate-100 font-sans min-h-screen relative overflow-x-hidden selection:bg-red-600 selection:text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-red-600/20 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[60vw] h-[60vw] bg-red-900/20 rounded-full blur-[150px] mix-blend-screen"></div>
          {/* Dynamic grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-red-600/10 border border-red-500/30 rounded-full text-red-500 font-black text-sm tracking-[0.2em] uppercase mb-8"
          >
            <Activity className="w-5 h-5 animate-pulse" />
            {sportsCenterData.hero.subtitle}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400 tracking-tighter"
          >
            {sportsCenterData.hero.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-bold text-red-400 max-w-4xl mx-auto mb-6"
          >
            {sportsCenterData.hero.tagline}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-16"
          >
            {sportsCenterData.hero.description}
          </motion.p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {sportsCenterData.hero.stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-md relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-red-600/0 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-3xl md:text-5xl font-black text-white mb-2 font-mono">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-bold text-slate-400 tracking-wider uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">Tesisler & Altyapı</h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsCenterData.facilities.map((facility, idx) => {
              const Icon = IconMap[facility.icon] || Dumbbell;
              return (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/80 transition-colors group cursor-default"
                >
                  <div className="w-14 h-14 bg-red-600/10 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{facility.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{facility.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ÖzÜ Wolves Teams Section */}
      <section className="py-24 bg-red-600 relative overflow-hidden text-white">
        {/* Dynamic Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-[800px] h-[800px] bg-black rounded-full blur-[100px] -top-96 -right-96"></div>
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonal-stripes" width="40" height="40" patternTransform="rotate(45)">
                <rect width="20" height="40" fill="currentColor"></rect>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-stripes)"></rect>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-none">
              {sportsCenterData.teams.title}
            </h2>
            <p className="text-lg md:text-xl font-medium text-red-100 mb-10 leading-relaxed">
              {sportsCenterData.teams.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {sportsCenterData.teams.branches.map((branch, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-black/20 backdrop-blur-md rounded-full text-sm font-bold border border-white/10 hover:bg-black/40 transition-colors"
                >
                  {branch}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden bg-black/50 border border-white/20 group"
          >
            {/* Mock Video Thumbnail Area */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-60 mix-blend-luminosity group-hover:opacity-80 group-hover:mix-blend-normal transition-all duration-700"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 ml-1 fill-current" />
              </button>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <p className="text-sm font-bold text-white mb-1">ÖzÜ Wolves 2025 Tanıtım Filmi</p>
                <p className="text-xs text-slate-300">Sınırlarını zorla, takımın bir parçası ol.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking / CTA Section */}
      <section className="py-32 bg-slate-900 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-950 border border-slate-800 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-orange-500 to-red-600"></div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{sportsCenterData.cta.title}</h2>
              <p className="text-slate-400">{sportsCenterData.cta.description}</p>
            </div>

            <form onSubmit={handleBooking} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">İsim Soyisim</label>
                  <input required type="text" placeholder="Adınız Soyadınız" className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Öğrenci / Sicil No</label>
                  <input required type="text" placeholder="Örn: 20261104" className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Tesis / Hizmet Seçimi</label>
                <div className="relative">
                  <select 
                    value={selectedFacility}
                    onChange={(e) => setSelectedFacility(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 text-white appearance-none focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
                  >
                    {sportsCenterData.facilities.map(f => (
                      <option key={f.id} value={f.title}>{f.title} Randevusu</option>
                    ))}
                    <option value="inbody">InBody Vücut Analizi</option>
                    <option value="tryout">Takım Seçmeleri Kaydı</option>
                  </select>
                  <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  disabled={bookingStatus === "success"}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-lg py-5 rounded-2xl transition-all flex items-center justify-center gap-2 group disabled:bg-emerald-600 disabled:opacity-100"
                >
                  {bookingStatus === "idle" ? (
                    <>
                      {sportsCenterData.cta.buttonText}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-6 h-6 animate-pulse" />
                      Randevunuz Alındı!
                    </>
                  )}
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
