"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portalConfig } from "@/data/portalConfig";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString("tr-TR")}{suffix}</span>;
}

export default function StatsMap() {
  const { employmentRate, topCompanies, abroadRate, localRate } = portalConfig.statistics;

  return (
    <div className="py-12 w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-ozu-dark mb-4">Mezunlar Nerede?</h2>
        <p className="text-muted-foreground text-lg">ÖzÜ mezunları dünyanın her yerinde lider pozisyonlarda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="glass-card p-8 rounded-3xl anti-gravity flex flex-col items-center justify-center text-center">
          <h4 className="text-6xl font-extrabold text-ozu-red mb-2">
            <CountUp end={employmentRate} suffix="%" />
          </h4>
          <p className="font-semibold text-foreground">Mezun Olmadan İş Bulma Oranı</p>
        </div>

        <div className="glass-card p-8 rounded-3xl anti-gravity flex flex-col justify-center gap-4">
          <div>
            <div className="flex justify-between text-sm font-semibold mb-1">
              <span>Yurt Dışı İstihdam</span>
              <span>%{abroadRate}</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${abroadRate}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-ozu-dark h-3 rounded-full"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm font-semibold mb-1">
              <span>Yurt İçi İstihdam</span>
              <span>%{localRate}</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${localRate}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-ozu-red h-3 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-blue-50/50 border border-black/5 shadow-xl shadow-blue-900/5 rounded-3xl p-8 md:p-12 text-gray-900 text-center relative overflow-hidden anti-gravity">
        <h3 className="text-2xl font-bold mb-8">Çalışılan Popüler Şirketler</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {topCompanies.map((company, i) => (
            <motion.span
              key={company}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-3 bg-white/70 backdrop-blur-md rounded-xl border border-black/5 font-bold text-lg shadow-sm hover:scale-105 transition-all text-[#0066FF]"
            >
              {company}
            </motion.span>
          ))}
        </div>
      </div>

      {/* NEW: Alumni Profile Section */}
      <div className="mt-12 bg-white/60 backdrop-blur-3xl border border-white/60 shadow-2xl shadow-ozu-red/5 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-ozu-red/10 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32 transition-transform duration-700 group-hover:scale-150"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] border-[4px] border-white shadow-xl overflow-hidden bg-gradient-to-br from-ozu-red/10 to-blue-500/10 flex items-center justify-center transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <span className="text-4xl md:text-5xl font-black text-ozu-dark/30 tracking-tighter">SKG</span>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Öne Çıkan Mezunumuz
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-1 tracking-tight">Sena Karagöl</h3>
            <p className="text-[#0066FF] font-bold text-sm md:text-base mb-5 uppercase tracking-wide">
              Şef / Gastronomi ve Mutfak Sanatları Mezunu &bull; Paris, Fransa
            </p>
            
            <div className="relative">
              <svg className="absolute -top-3 -left-4 w-8 h-8 text-ozu-red/10 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <p className="text-gray-600/90 text-lg md:text-xl font-medium leading-relaxed italic relative z-10 pl-6">
                Özyeğin Üniversitesi Gastronomi ve Mutfak Sanatları bölümünden mezun olduktan sonra, kampüste aldığım dünya standartlarındaki pratik mutfak eğitimleri ve edindiğim global vizyon sayesinde kariyerime uluslararası arenada güçlü bir giriş yaptım. Şu an Paris&apos;te önde gelen bir restoranda şef olarak farklı kültürlerin mutfaklarını harmanlıyorum. ÖzÜ bana sadece bir meslek değil, sınırları aşan bir tutku kazandırdı.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
