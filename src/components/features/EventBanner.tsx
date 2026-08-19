"use client";

import { motion } from "framer-motion";
import { Play, Calendar, MapPin, ChevronRight, Award, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EventBanner() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Dynamic Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://www.ozyegin.edu.tr/sites/default/files/tesis3_2.jpg" 
          alt="Özyeğin Üniversitesi Kampüsü" 
          fill 
          priority
          className="object-cover opacity-10 scale-105"
        />
        {/* Complex Gradient Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-200/40 rounded-full blur-[120px] z-10 pointer-events-none mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-200/40 rounded-full blur-[100px] z-10 pointer-events-none mix-blend-multiply" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start pt-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-bold tracking-wide text-emerald-700 uppercase">
              Yenilikçi Eğitim Yaklaşımı
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight">
            Geleceğini <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-700">
              Özyeğin'de
            </span> Şekillendir
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-xl mb-10 leading-relaxed">
            Hayatınızın girişimini keşfetmeye hazır mısınız? Sizi sadece bir mesleğe değil, hayata hazırlayan, global standartlarda bir araştırma üniversitesi.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
            <a
              href="https://aday.ozyegin.edu.tr/2026-tercih-tanitim-donemi/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#DF1934] text-white rounded-full font-bold text-lg hover:bg-[#b8142a] transition-all shadow-[0_10px_30px_rgba(223,25,52,0.3)] hover:shadow-[0_15px_40px_rgba(223,25,52,0.4)] hover:-translate-y-1"
            >
              2026 Tercih Tanıtım Günleri
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://aday.ozyegin.edu.tr/ozel-etkinlikler/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm rounded-full text-slate-700 font-bold transition-all hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5 text-slate-500" />
              Etkinlik Takvimi
            </a>
          </div>

          {/* Mini Highlights */}
          <div className="flex items-center gap-8 border-t border-slate-200 pt-8 w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">#1</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Mezun İstihdamı</div>
              </div>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Award className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">%100</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">İngilizce Eğitim</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Visual Element */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative hidden lg:flex justify-end"
        >
          {/* Glassmorphism Card */}
          <div className="relative w-full max-w-sm rounded-[2.5rem] bg-white/60 backdrop-blur-3xl border border-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/50 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg mb-8 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug">
                Sürdürülebilir, Modern Kampüs
              </h3>
              
              <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8">
                İstanbul'un kalbinde, doğayla iç içe, Avrupa'nın ilk LEED Gold sertifikalı yerleşkelerinden birinde eşsiz bir üniversite deneyimi.
              </p>
              
              <button className="flex items-center gap-2 text-sky-600 font-bold hover:text-sky-700 transition-colors group/btn">
                <Play className="w-8 h-8 p-2 rounded-full border border-sky-200 bg-sky-50 group-hover/btn:bg-sky-600 group-hover/btn:border-sky-600 group-hover/btn:text-white transition-all" />
                Sanal Turla Keşfet
              </button>
            </div>
          </div>
          
          {/* Floating Image Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-48 h-48 rounded-[2rem] border-4 border-white overflow-hidden shadow-2xl z-30 hidden xl:block"
          >
            <Image src="https://www.ozyegin.edu.tr/sites/default/files/3-futbol_sahasi_0.jpg" alt="Kampüs Hayatı" fill className="object-cover" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
