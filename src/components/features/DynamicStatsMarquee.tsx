"use client";

import { motion } from "framer-motion";
import { Rocket, Leaf, Plane, Cpu } from "lucide-react";

const stats = [
  {
    icon: <Rocket className="w-5 h-5 text-ozu-red" />,
    text: "%94 Mezuniyet Sonrası İlk 6 Ayda İşe Başlama Oranı"
  },
  {
    icon: <Leaf className="w-5 h-5 text-emerald-500" />,
    text: "1. LEED Gold Türkiye'nin İlk Yeşil Sertifikalı Kampüsü"
  },
  {
    icon: <Plane className="w-5 h-5 text-blue-500" />,
    text: "12 Filo Uçağı & 4 Simülatör Havacılık Altyapısı"
  },
  {
    icon: <Cpu className="w-5 h-5 text-purple-500" />,
    text: "MIT FabLab Türkiye'deki İlk Dijital Fabrikasyon Laboratuvarı"
  }
];

export default function DynamicStatsMarquee() {
  return (
    <div className="w-full bg-slate-900 border-y border-slate-800 py-4 overflow-hidden relative flex items-center">
      {/* Left/Right Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex whitespace-nowrap items-center w-max"
        animate={{ x: ["0%", "-33.333333%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25
        }}
      >
        {/* Render 3 times for seamless looping on ultra-wide screens */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center px-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 mr-12">
                <div className="bg-slate-800 p-2 rounded-full border border-slate-700 shadow-inner">
                  {stat.icon}
                </div>
                <span className="text-slate-300 font-bold text-sm md:text-base tracking-wide">
                  {stat.text}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700 ml-9"></div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
