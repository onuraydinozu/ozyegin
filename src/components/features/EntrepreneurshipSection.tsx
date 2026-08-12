"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, TrendingUp, Lightbulb, ArrowRight, Target, Users } from "lucide-react";

const startups = [
  {
    name: "Scoutium",
    category: "Sports Tech",
    investment: "$2M+",
    desc: "Futbol yetenek keşfini dijitalleştiren ve dünya çapında kulüplere veri sağlayan platform.",
    icon: <Target className="w-6 h-6 text-[#FF5722]" />
  },
  {
    name: "Thread In Motion",
    category: "Endüstri 4.0",
    investment: "$1.5M+",
    desc: "Giyilebilir teknoloji ürünleri ile endüstriyel operasyonlarda verimliliği artıran akıllı eldivenler.",
    icon: <TrendingUp className="w-6 h-6 text-[#FF5722]" />
  },
  {
    name: "WalkOVR",
    category: "VR/Gaming",
    investment: "$500K+",
    desc: "Sanal gerçeklik oyunları için geliştirilmiş giyilebilir hareket takip ve lokomosyon sistemi.",
    icon: <Users className="w-6 h-6 text-[#FF5722]" />
  }
];

export default function EntrepreneurshipSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-slate-50 to-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#0B1B3D] flex items-center justify-center text-white shadow-lg shadow-[#0B1B3D]/20">
              <Rocket className="w-6 h-6" />
            </div>
            <h2 className="text-[#FF5722] font-black uppercase tracking-widest text-sm">Girişimcilik & Startup Vitrini (ÖzÜ'nün İmzası)</h2>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1B3D] tracking-tight mb-6"
          >
            Kampüsten Yükselen <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1B3D] to-[#FF5722]">Girişimler</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl leading-relaxed"
          >
            Özyeğin Üniversitesi'nin Türkiye'deki en büyük farkı <strong>Girişim Fabrikası</strong> ve kampüsten çıkan başarılı şirketlerdir. Öğrencilerimiz küresel pazara teknoloji ve inovasyon ihraç ediyor.
          </motion.p>
        </div>

        {/* Startup Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {startups.map((startup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx + 1) }}
              className="bg-white rounded-[20px] p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#FF5722]/10 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {startup.icon}
                </div>
                <div className="bg-[#0B1B3D] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {startup.investment} Yatırım
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="text-sm font-bold text-[#FF5722] mb-1">{startup.category}</div>
                <h4 className="text-2xl font-black text-[#0B1B3D] mb-3">{startup.name}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {startup.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0B1B3D] rounded-[24px] p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute -right-20 -top-40 w-96 h-96 bg-[#FF5722]/30 rounded-full blur-[80px]"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 shrink-0 bg-[#FF5722] rounded-2xl flex items-center justify-center shadow-lg shadow-[#FF5722]/30 rotate-3">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-black text-white mb-2">Fikrin mi var?</h4>
                <p className="text-slate-300 text-lg">
                  Hazırlık sınıfında bile olsan, Girişim Fabrikası'na başvurunu yapabilir, ilk yatırımını alabilirsin.
                </p>
              </div>
            </div>
            <button className="shrink-0 bg-white text-[#0B1B3D] px-8 py-4 rounded-xl font-black text-sm md:text-base hover:bg-[#FF5722] hover:text-white transition-all flex items-center gap-2 group shadow-xl">
              Hemen Başvur 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
