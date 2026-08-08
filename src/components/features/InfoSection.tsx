"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Wallet, Target, Globe, Building2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    id: 1,
    title: "Modern Kampüs",
    description: "Doğayla iç içe, sürdürülebilir ve teknolojik altyapıya sahip LEED sertifikalı binalar.",
    icon: Building2,
    image: "/images/campus1.jpg",
    link: "https://www.ozyegin.edu.tr/tr/kampus-hayati",
    color: "from-blue-600 to-[#1B365D]"
  },
  {
    id: 2,
    title: "Burslar",
    description: "Eğitiminizin her aşamasında %100'e varan karşılıksız burs olanaklarıyla daima yanınızdayız.",
    icon: Award,
    image: "/images/campus2.jpg",
    link: "/burslar",
    color: "from-[#DF1934] to-red-900"
  },
  {
    id: 3,
    title: "Ücretler",
    description: "Şeffaf ve sürdürülebilir finansal planlama seçenekleriyle geleceğinize güvenle yatırım yapın.",
    icon: Wallet,
    image: "/images/campus3.jpg",
    link: "/ucretler",
    color: "from-[#0066FF] to-blue-900"
  },
  {
    id: 4,
    title: "Taban Puanlar",
    description: "En güncel YKS verileri, sıralamalar ve geniş kontenjanlar ile üniversite hedefinizi netleştirin.",
    icon: Target,
    image: "/images/campus2.jpg",
    link: "/taban-puanlar",
    color: "from-emerald-500 to-emerald-900"
  },
  {
    id: 5,
    title: "Uluslararası Deneyim",
    description: "Değişim programları ve yurt dışı staj olanaklarıyla global bir vizyon edinin.",
    icon: Globe,
    image: "/images/campus3.jpg",
    link: "https://www.ozyegin.edu.tr/tr/uluslararasi-ofis",
    color: "from-amber-500 to-orange-700"
  }
];

export default function InfoSection() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-60 pointer-events-none mix-blend-multiply">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-sky-200/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-rose-200/50 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Sınırları Aşan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF1934] to-orange-500">Deneyim</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Akademik, sosyal ve kültürel gelişiminizi destekleyen inovatif bir ekosistem.
          </motion.p>
        </div>

        {/* Expanding Cards Desktop / Stacked Mobile */}
        <div className="flex flex-col md:flex-row gap-4 h-[700px] md:h-[600px] lg:h-[650px] w-full">
          {cards.map((card) => {
            const isActive = activeCard === card.id;
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                layout
                onMouseEnter={() => setActiveCard(card.id)}
                onClick={() => setActiveCard(card.id)}
                className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 flex-shrink-0 shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                  ${isActive ? 'md:flex-[4] lg:flex-[5] flex-[4]' : 'md:flex-[1] flex-[1] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]'}
                `}
                style={{
                  height: '100%',
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image 
                    src={card.image}
                    alt={card.title}
                    fill
                    className={`object-cover transition-all duration-1000 ease-out ${isActive ? 'scale-105 opacity-100' : 'scale-100 opacity-60 grayscale-[30%]'}`}
                  />
                </div>
                
                {/* Gradient Overlays */}
                <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t ${isActive ? 'from-slate-900/95 via-slate-900/40 to-transparent' : 'from-slate-900/90 via-slate-900/60 to-slate-900/40'}`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} mix-blend-multiply transition-opacity duration-500 ${isActive ? 'opacity-40' : 'opacity-80'}`} />

                {/* Content */}
                <div className={`absolute inset-0 flex transition-all duration-500 ${isActive ? 'flex-col justify-end p-6 md:p-8' : 'flex-row md:flex-col justify-start md:justify-end items-center p-6 md:py-8 gap-4'}`}>
                  
                  {/* Icon */}
                  <div className={`flex shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border shadow-2xl transition-all duration-500 ${isActive ? 'w-16 h-16 border-white/30' : 'w-12 h-12 border-white/10 group-hover:border-white/30'}`}>
                    <Icon className="text-white" size={isActive ? 32 : 24} />
                  </div>
                  
                  {isActive ? (
                    <div className="w-full overflow-hidden flex flex-col justify-end h-full">
                      <div className="mt-auto">
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="font-bold text-white text-3xl md:text-4xl whitespace-nowrap drop-shadow-md mb-4"
                        >
                          {card.title}
                        </motion.h3>
                        
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          <p className="text-white/90 text-base md:text-lg font-medium max-w-md mb-8 leading-relaxed drop-shadow-sm">
                            {card.description}
                          </p>
                          <Link 
                            href={card.link}
                            className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                          >
                            Hemen İncele <ArrowRight size={20} />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Mobile Title (Horizontal) */}
                      <h3 className="font-bold text-white text-xl md:hidden whitespace-nowrap drop-shadow-md opacity-90">
                        {card.title}
                      </h3>
                      {/* Desktop Title (Vertical) */}
                      <h3 className="font-bold text-white text-xl hidden md:block [writing-mode:vertical-rl] rotate-180 opacity-70 tracking-widest whitespace-nowrap">
                        {card.title}
                      </h3>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
