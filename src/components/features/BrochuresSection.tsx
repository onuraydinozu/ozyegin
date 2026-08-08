"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ExternalLink, Download } from "lucide-react";

export default function BrochuresSection() {
  const brochures = [
    {
      id: "genel-brosur",
      title: "2026-2027 Tercih Dönemi Bilgilendirme Broşürü",
      category: "Genel",
      link: "https://catalog.ozyegin.edu.tr/3d-flip-book/2026-2027-tercih-donemi-bilgilendirme-brosuru/",
      coverColor: "from-ozu-red to-orange-500",
      delay: 0.1,
    },
    {
      id: "muhendislik",
      title: "Mühendislik Fakültesi Broşürü",
      category: "Fakülte",
      link: "https://catalog.ozyegin.edu.tr/3d-flip-book/2026-2027-tercih-donemi-bilgilendirme-brosuru/",
      coverColor: "from-blue-600 to-cyan-500",
      delay: 0.2,
    },
    {
      id: "hukuk",
      title: "Hukuk Fakültesi Broşürü",
      category: "Fakülte",
      link: "https://catalog.ozyegin.edu.tr/3d-flip-book/2026-2027-tercih-donemi-bilgilendirme-brosuru/",
      coverColor: "from-emerald-600 to-teal-500",
      delay: 0.3,
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-slate-50 via-red-50/30 to-white">
      {/* Smooth transition from the dark InfoSection above */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none z-0" />
      
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-ozu-red/5 rounded-[40%_60%_70%_30%] blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-600/5 rounded-[60%_40%_30%_70%] blur-[120px] translate-y-1/3 translate-x-1/4 pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: About Text & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ozu-red/10 border border-ozu-red/20 text-ozu-red mb-6">
              <BookOpen size={16} />
              <span className="text-sm font-bold tracking-wider">HAKKIMIZDA</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight drop-shadow-sm">
              Branşlar Farklı <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ozu-red to-orange-500">
                Hedefler Aynı
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              Özyeğin Üniversitesi’nin güçlü ve araştırma odaklı akademik kadrosu, 
              sahip oldukları patentler, uluslararası hakemli dergilerde yayımlanan 
              makaleleri ve aldıkları ödüller ile öne çıkıyor.
            </p>
            
            <div className="relative p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] mb-8 w-full">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-ozu-red to-orange-500 rounded-l-2xl" />
              <p className="text-gray-700 font-medium leading-relaxed pl-4">
                Özyeğin Üniversitesi hâlihazırda, <strong className="text-ozu-dark">7 fakülte ve 1 yüksekokul</strong> çatısı altında 
                toplamda <strong className="text-ozu-dark">23 lisans programı</strong> ile eğitim veriyor.
              </p>
            </div>

            <a 
              href="https://aday.ozyegin.edu.tr/hakkimizda" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-ozu-red text-white rounded-full font-bold text-lg hover:bg-ozu-dark transition-all duration-300 shadow-[0_10px_25px_rgba(163,31,52,0.3)] hover:shadow-[0_15px_35px_rgba(163,31,52,0.4)] hover:-translate-y-1"
            >
              Hakkımızda Daha Fazla
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Side: Brochures Gallery */}
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">Fakülte <span className="text-gray-400">Broşürlerimiz</span></h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {brochures.map((brochure) => (
                <motion.a
                  key={brochure.id}
                  href={brochure.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: brochure.delay, duration: 0.6 }}
                  className="group relative bg-white/30 backdrop-blur-3xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] rounded-[2rem] p-6 flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 h-64 overflow-hidden"
                >
                  {/* Glowing backdrop based on coverColor */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${brochure.coverColor} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Mock Brochure Cover */}
                  <div className={`absolute -right-4 -top-8 w-32 h-40 bg-gradient-to-br ${brochure.coverColor} rounded-lg shadow-2xl opacity-20 group-hover:opacity-40 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 blur-[2px]`} />

                  <div className="relative z-10 flex-1">
                    <span className="inline-block px-3 py-1 mb-4 rounded-full bg-white/60 text-[10px] font-extrabold tracking-widest uppercase text-gray-600 border border-white shadow-sm">
                      {brochure.category}
                    </span>
                    <h4 className="text-xl font-extrabold text-gray-900 leading-tight group-hover:text-ozu-red transition-colors">
                      {brochure.title}
                    </h4>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-between mt-4 pt-4 border-t border-gray-200/50">
                    <span className="text-sm font-semibold text-gray-500 group-hover:text-gray-900 transition-colors">İncele</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:bg-ozu-red group-hover:text-white transition-all duration-300 text-gray-400">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* View All Card */}
              <motion.a
                href="https://aday.ozyegin.edu.tr/brosurler"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="group relative bg-transparent border-2 border-dashed border-gray-300 hover:border-ozu-red rounded-[2rem] p-6 flex flex-col items-center justify-center hover:-translate-y-2 transition-all duration-500 h-64"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-ozu-red/10 flex items-center justify-center mb-4 transition-colors">
                  <Download className="text-gray-400 group-hover:text-ozu-red transition-colors" size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-500 group-hover:text-ozu-red transition-colors">Tüm Broşürleri Gör</h4>
              </motion.a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
