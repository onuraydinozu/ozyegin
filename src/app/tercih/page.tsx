"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calculator, ChevronRight, Info, Search, CalendarDays, ExternalLink, Award, GraduationCap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { tabanPuanlarData, ProgramData } from "@/data/taban-puanlar";

export default function TercihRehberiPage() {
  const [puanTuru, setPuanTuru] = useState("");
  const [siralama, setSiralama] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  const [matchedPrograms, setMatchedPrograms] = useState<{ faculty: string, program: ProgramData }[]>([]);

  const calculateMatches = (tur: string, sira: number) => {
    const matches: { faculty: string, program: ProgramData }[] = [];
    tabanPuanlarData.forEach(faculty => {
      faculty.programs.forEach(prog => {
        if (prog.puanTuru === tur && prog.siraDusuk !== "-") {
          const maxSira = parseInt(prog.siraDusuk.replace(/\./g, ""), 10);
          // 20% margin for "girme ihtimali"
          if (!isNaN(maxSira) && sira <= (maxSira * 1.2)) {
            matches.push({ faculty: faculty.faculty, program: prog });
          }
        }
      });
    });
    // Sort by siraDusuk (most competitive first)
    matches.sort((a, b) => {
      const aRank = parseInt(a.program.siraDusuk.replace(/\./g, ""), 10);
      const bRank = parseInt(b.program.siraDusuk.replace(/\./g, ""), 10);
      return aRank - bRank;
    });
    return matches;
  };

  const handleHesapla = (e: React.FormEvent) => {
    e.preventDefault();
    if (puanTuru && siralama) {
      const siraNum = parseInt(siralama, 10);
      const matches = calculateMatches(puanTuru, siraNum);
      setMatchedPrograms(matches);
      setIsCalculated(true);
      // Scroll to results
      setTimeout(() => {
        document.getElementById('sonuclar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <main className="bg-[#f8fafc] min-h-screen text-slate-800 font-sans overflow-x-hidden selection:bg-[#DF1934] selection:text-white">
      <Header />
      
      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-32 bg-slate-900 text-white overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] via-slate-900 to-black z-0"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay z-0"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#DF1934] rounded-full blur-[120px] opacity-20 z-0 mix-blend-screen animate-pulse duration-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-sky-600 rounded-full blur-[150px] opacity-20 z-0 mix-blend-screen"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
            >
              <Calculator className="w-4 h-4 text-sky-400" />
              <span className="text-sm font-medium tracking-wide text-white uppercase">Hesaplama Aracı</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight"
            >
              Burs ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Tercih Rehberi</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-300 font-light leading-relaxed"
            >
              Sıralama başarılarına özel bursları görmek ve burssuz kontenjanlara özel destek burslarındaki puanınıza göre burs oranınızı öğrenmek için hesaplama tablosundan yararlanabilirsiniz. Bu arama motoru, geçen seneki sıralama sonuçlarına göre yerleşebileceğiniz bölümleri göstermektedir.
            </motion.p>
          </div>

          {/* Calculator Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-4xl bg-white/10 backdrop-blur-2xl rounded-3xl p-2 shadow-2xl border border-white/20"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 text-slate-800">
              <form onSubmit={handleHesapla} className="flex flex-col md:flex-row gap-6 items-end">
                <div className="flex-1 w-full">
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Puan Türü</label>
                  <div className="relative">
                    <select 
                      value={puanTuru}
                      onChange={(e) => setPuanTuru(e.target.value)}
                      className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D]/20 focus:border-[#1B365D] transition-all cursor-pointer"
                      required
                    >
                      <option value="" disabled>Puan türü seçin</option>
                      <option value="SAY">SAY (Sayısal)</option>
                      <option value="EA">EA (Eşit Ağırlık)</option>
                      <option value="SOZ">SÖZ (Sözel)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Sıralamanız</label>
                  <input 
                    type="number"
                    value={siralama}
                    onChange={(e) => setSiralama(e.target.value)}
                    placeholder="Örn: 15000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D]/20 focus:border-[#1B365D] transition-all"
                    required
                    min="1"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full md:w-auto bg-[#DF1934] hover:bg-[#c7162e] text-white px-10 py-4 rounded-xl font-bold tracking-wide transition-all shadow-lg shadow-red-500/30 flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  HESAPLA
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
      </section>

      {/* Results & Guidelines Section */}
      <section id="sonuclar" className="py-24 px-6 bg-slate-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          
          {isCalculated && (
            <div className="mb-20">
              <h2 className="text-3xl font-black text-[#1B365D] mb-4 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-[#DF1934]" />
                Sizin İçin Uygun Bölümler
              </h2>
              <p className="text-slate-600 mb-8 text-lg">Girdiğiniz <strong>{siralama}</strong> sıralamasına göre yerleşme ihtimaliniz olan programlar aşağıda listelenmiştir.</p>
              
              {matchedPrograms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {matchedPrograms.map((match, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-sky-50 rounded-full blur-2xl group-hover:bg-[#DF1934]/5 transition-colors"></div>
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-3">
                          <span className={`px-3 py-1 text-xs font-bold rounded-lg ${
                            match.program.burs === "Tam Burslu" || match.program.burs === "%100 Burslu" ? "bg-emerald-100 text-emerald-700" :
                            match.program.burs === "Ücretli" ? "bg-slate-100 text-slate-700" :
                            "bg-blue-100 text-blue-700"
                          }`}>
                            {match.program.burs}
                          </span>
                          <span className="text-xs font-bold text-slate-400">2025 Sınırı: {match.program.siraDusuk}</span>
                        </div>
                        <h3 className="text-lg font-bold text-[#1B365D] mb-1 leading-tight">{match.program.name}</h3>
                        <p className="text-sm text-slate-500">{match.faculty}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-10 rounded-2xl text-center border border-slate-200 shadow-sm">
                  <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Eşleşen Program Bulunamadı</h3>
                  <p className="text-slate-500">Girdiğiniz puan türü ve sıralamaya uygun bir program bulunamadı. Lütfen bilgilerinizi kontrol edip tekrar deneyin.</p>
                </div>
              )}
            </div>
          )}

          <div className="mb-16">
            <h2 className="text-3xl font-black text-[#1B365D] mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-[#DF1934]" />
              Sıralama Başarılarına Özel Burslar
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">İlk 100, 1000, 3000 Başarı Sıralamasına Özel</h3>
                <p className="text-slate-600 text-lg">Nakit Bursu ve Yurt Bursu <span className="text-[#DF1934] font-bold">*</span></p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Hukuk Fakültesinde İlk 15.000, Diğer E.A ve SAY Programlarında (Pilotaj Hariç) İlk 25.000 Başarı Sıralamasına Özel</h3>
                <p className="text-slate-600 text-lg">%50 indirimli giriş bursuna ek %25 Sıralama Başarı Bursu <span className="text-[#DF1934] font-bold">**</span></p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Burssuz Kontenjanlı Bazı Programlara Özel Destek Bursları</h3>
                <p className="text-slate-600 text-lg">%15 ve %30 oranlarında destek burslarıyla indirimli ücretler <span className="text-[#DF1934] font-bold">***</span></p>
              </div>
            </div>

            <div className="mt-10 bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="font-bold text-[#DF1934] shrink-0">*</span>
                  <p>Özyeğin Üniversitesi&apos;nin %100 (tam) burslu kontenjanlarını ilk 3 (üç) tercihi içerisinde yazmak. Başka bir üniversiteden mezun olmamak.</p>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#DF1934] shrink-0">**</span>
                  <p>Özyeğin Üniversitesi&apos;nin %50 burslu kontenjanlarını ilk 3 (üç) tercihi içerisinde yazmak. Başka bir üniversiteden mezun olmamak.</p>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#DF1934] shrink-0">***</span>
                  <p>Özyeğin Üniversitesi&apos;nin burssuz/ücretli kontenjanlarını yerleşilecek başarı sırası limitinden ilk 5 (beş) tercihi içerisinde yazmak. Başka bir üniversiteden mezun olmamak.</p>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 flex items-center justify-center">
              <a href="https://studentservices.ozyegin.edu.tr/tr/burs-ve-finansal-destek" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#1B365D] font-bold hover:text-[#DF1934] transition-colors">
                <Info className="w-5 h-5" />
                Tüm burs koşullarının detayları için Öğrenci Hizmetleri sayfamızı ziyaret edebilirsiniz.
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Tanıtım Dönemi Section */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#1B365D] to-[#25487a] rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl mix-blend-overlay"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center shrink-0 backdrop-blur-md">
                <CalendarDays className="w-12 h-12 text-sky-300" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-black mb-4">Tanıtım Dönemi Bilgilendirmesi</h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Tercih Tanıtım Dönemi <strong className="text-white">16 Temmuz – 10 Ağustos</strong> tarihleri arasında gerçekleştirilmektedir. Kampüsümüze gelerek yüz yüze veya çevrimiçi katılım göstererek akademik programlarımız, burs olanaklarımız ve kampüs yaşamı hakkında detaylı bilgi alabilirsiniz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a href="https://tanitim.ozyegin.edu.tr/" target="_blank" rel="noreferrer" className="bg-white text-[#1B365D] px-8 py-3 rounded-full font-bold hover:bg-sky-50 transition-colors inline-flex items-center justify-center gap-2">
                    Detaylı Bilgi
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link href="/burslar" className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2">
                    Burs Fırsatları
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
