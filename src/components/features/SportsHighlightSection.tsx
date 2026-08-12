"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Trophy, Swords, Medal } from "lucide-react";
import Link from "next/link";

const kpis = [
  { value: "20.000 m²", label: "Kapalı Spor Salonu ve Ana Bina" },
  { value: "400 m²", label: "Fitness ve Kardiyo Alanı" },
  { value: "25 m", label: "Yarı Olimpik Kapalı Yüzme Havuzu" },
  { value: "20+", label: "Ulusal ve Uluslararası Aktif Spor Takımı" }
];

const cards = [
  {
    icon: <BookOpen className="w-8 h-8 text-[#FF5722]" />,
    title: "Akademik Kredili Dersler",
    desc: "Yüzme, Yelken, Tenis, Bilardo, Bireysel Savunma ve Fitness gibi 12 farklı branşta 2 kredili seçmeli ders alma imkanı."
  },
  {
    icon: <Trophy className="w-8 h-8 text-[#FF5722]" />,
    title: "ÖzÜ Wolves (Okul Takımları)",
    desc: "Amerikan Futbolundan Küreğe, Yüzmeden Karateye kadar 20'den fazla branşta lisanslı sporcu olma ve okulu temsil etme şansı."
  },
  {
    icon: <Swords className="w-8 h-8 text-[#FF5722]" />,
    title: "Dönem İçi Kampüs Turnuvaları",
    desc: "Takımda olmasan bile her dönem düzenlenen Futbol, Basketbol, Voleybol, Tenis ve Satranç turnuvalarıyla kampüs içi rekabet."
  }
];

export default function SportsHighlightSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0B1B3D] text-white">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.ozyegin.edu.tr/sites/default/files/_bom9910_final.jpg" 
          alt="ÖzÜ Spor Tesisleri" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3D]/90 via-[#0B1B3D]/80 to-[#0B1B3D]/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header (Hero Teaser) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4 text-[#FF5722]">
              <Medal className="w-5 h-5" />
              <h3 className="text-sm font-black uppercase tracking-widest">Kampüste Yaşam</h3>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              ÖzÜ’de Spor: <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Sadece Hobi Değil, Yaşam Tarzı</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Ders aralarında formda kal, 20'den fazla okul takımından birine gir veya kredili spor dersleriyle akademik ortalamana katkı sağla.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Link 
              href="/spor-merkezi"
              className="inline-flex items-center justify-center gap-2 bg-[#FF5722] text-white px-8 py-4 rounded-[12px] font-bold text-lg hover:bg-white hover:text-[#0B1B3D] transition-colors shadow-xl group"
            >
              Spor Tesislerini & Takımları İncele
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* KPI Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20 border-t border-b border-white/10 py-12">
          {kpis.map((kpi, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="flex flex-col gap-2 relative"
            >
              {/* Optional separator line for desktop */}
              {idx !== 0 && (
                <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-white/10"></div>
              )}
              <div className="text-4xl md:text-5xl font-black text-[#FF5722] drop-shadow-md tracking-tighter">
                {kpi.value}
              </div>
              <div className="text-sm text-slate-300 leading-relaxed max-w-[200px] font-medium">
                {kpi.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3 Info Cards (Minimalist, 3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (0.1 * idx) }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[20px] p-8 hover:bg-white/10 transition-colors group"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{card.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
