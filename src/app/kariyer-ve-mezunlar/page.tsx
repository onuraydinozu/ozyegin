"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Globe, Briefcase, TrendingUp, Building2, MapPin, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const topCompanies = [
  "Google", "Microsoft", "Apple", "Amazon", "Meta", 
  "Türk Hava Yolları", "Unilever", "PwC", "Deloitte", 
  "Ford Otosan", "Mercedes-Benz", "Trendyol", "Aselsan", 
  "L'Oréal", "Procter & Gamble"
];

const stats = [
  { icon: Globe, value: "48+", label: "Ülke" },
  { icon: Users, value: "12,400+", label: "Aktif Mezun" },
  { icon: Building2, value: "2,000+", label: "Global Şirket" },
  { icon: Briefcase, value: "%86", label: "İlk Yıl İstihdam Oranı" },
];

export default function KariyerVeMezunlar() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#DF1934] selection:text-white overflow-x-hidden">
      <Header />

      <main className="pt-[88px]">
        {/* HERO SECTION */}
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md border border-white/20 inline-block"
              >
                Geleceğin Profesyonelleri
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
              >
                Sınırları Aşan <br className="hidden md:block"/>Bir Kariyer Ağı.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg lg:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-12"
              >
                Özyeğin Üniversitesi, sadece bir diploma değil; dünya çapında 48 ülkede, en prestijli global şirketlerde yer almanızı sağlayan güçlü bir vizyon sunar.
              </motion.p>
            </div>
            
            {/* STATS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-8">
              {stats.map((stat, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  key={index} 
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors"
                >
                  <stat.icon className="w-8 h-8 text-[#DF1934] mb-4" strokeWidth={1.5} />
                  <span className="text-3xl lg:text-4xl font-black text-white mb-1">{stat.value}</span>
                  <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ALUMNI LOCATIONS (MEZUNLARIMIZ NEREDE) */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Mezunlarımız Nerede?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                ÖzÜ mezunları, Silikon Vadisi'nden Avrupa'nın finans merkezlerine kadar dünyanın en saygın şirketlerinde fark yaratıyor.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {topCompanies.map((company, i) => (
                <div 
                  key={i} 
                  className="px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center hover:shadow-lg hover:border-slate-200 transition-all hover:-translate-y-1 cursor-default group"
                >
                  <span className="text-lg font-bold text-slate-700 group-hover:text-[#DF1934] transition-colors">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KARİYER MERKEZİ */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://www.ozyegin.edu.tr/sites/default/files/spor_salonu.jpg" 
                  alt="Özyeğin Üniversitesi Profesyonel Gelişim" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-white">
                    <Award className="w-10 h-10 mb-3 text-white" strokeWidth={1.5} />
                    <h3 className="text-xl font-bold mb-2">Sektörel Entegrasyon</h3>
                    <p className="text-sm text-white/90">Eğitiminiz devam ederken iş dünyasının gerçek projelerinde yer alma fırsatı.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <span className="text-[#DF1934] font-bold text-sm tracking-widest uppercase mb-3 block">Profesyonel Gelişim</span>
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    İş Dünyasına <br/>Hazır Mezunlar.
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Kariyer Merkezimiz, ilk günden itibaren kariyer yolculuğunuzu tasarlamanıza yardımcı olur. Sektörel bağlantılarımız, staj olanaklarımız ve kişiselleştirilmiş kariyer danışmanlığımız ile sizi global iş dünyasına hazırlıyoruz.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                      <TrendingUp className="w-6 h-6 text-[#DF1934]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Kariyer Koçluğu</h4>
                      <p className="text-slate-600">Uzman danışmanlarımızla güçlü yönlerinizi keşfedin ve hedeflerinize uygun staj/iş planlamanızı yapın.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-[#DF1934]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Uluslararası Staj Olanakları</h4>
                      <p className="text-slate-600">Erasmus Staj Konsorsiyumu ve global işbirliklerimiz sayesinde Avrupa ve ötesinde iş deneyimi kazanın.</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
