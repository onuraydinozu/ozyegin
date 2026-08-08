"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Info, Download, BookOpen, CheckCircle2, ChevronRight, CreditCard, Award, GraduationCap } from "lucide-react";

export default function UcretlerPage() {
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
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-20 z-0 mix-blend-screen"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#DF1934] animate-ping"></div>
              <span className="text-sm font-medium tracking-wide text-white">2026-2027 AKADEMİK YILI</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight"
            >
              Öğrenim <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#DF1934]">Ücretleri</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10"
            >
              Öğrenim ücretleri her akademik yıl başında, Mütevelli Heyeti tarafından maliyet artışları ile o yılın üniversite bütçesi dikkate alınarak yeniden belirlenir.
            </motion.p>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f8fafc] to-transparent z-10"></div>
      </section>

      {/* Pricing Table Section */}
      <section className="relative z-20 -mt-20 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#b32c66] text-white font-bold text-lg md:text-xl p-4 md:p-6 text-center border-r border-white/20">
                    Fakülte Programları
                  </th>
                  <th className="bg-[#b32c66] text-white font-bold text-lg md:text-xl p-4 md:p-6 text-center whitespace-nowrap">
                    Yıllık Ücret<br/>(Güz + Bahar)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#c24a7d] text-white text-lg">
                <tr className="border-t border-white/30">
                  <td className="p-4 md:p-6 border-r border-white/30 align-top">
                    <ul className="space-y-1">
                      <li>İşletme Fakültesi</li>
                      <li>Mimarlık ve Tasarım Fakültesi</li>
                      <li>Mühendislik Fakültesi</li>
                      <li>Hukuk Fakültesi</li>
                      <li>Sosyal Bilimler Fakültesi</li>
                      <li>Havacılık ve Uzay Bilimleri Fakültesi - (Pilotaj)¹</li>
                    </ul>
                  </td>
                  <td className="p-4 md:p-6 text-center align-middle font-normal text-2xl tracking-wide">
                    1.975.000 TL
                  </td>
                </tr>
                <tr className="border-t border-white/30">
                  <td className="p-4 md:p-6 border-r border-white/30 align-top">
                    <ul className="space-y-1">
                      <li>Gastronomi ve Mutfak Sanatları²</li>
                      <li>Havacılık Yönetimi</li>
                      <li>Otel Yöneticiliği³</li>
                    </ul>
                  </td>
                  <td className="p-4 md:p-6 text-center align-middle font-normal text-2xl tracking-wide">
                    1.450.000 TL
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Information Blocks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Rules */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Info className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Önemli Bilgilendirmeler</h3>
              </div>
              
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#1B365D] mt-2 shrink-0"></div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Öğrenim ücretlerine <strong className="text-slate-800">%10 Katma Değer Vergisi (KDV)</strong> dâhildir. Akademik yıl içerisinde KDV oranlarında değişiklik yapılması halinde aynı oranda yansıtılacaktır.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#1B365D] mt-2 shrink-0"></div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Yıllık öğrenim ücreti güz ve bahar dönemi eğitimini kapsar; yaz okulu, yurt, yemek ve ulaşım giderlerini kapsamaz.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#1B365D] mt-2 shrink-0"></div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      İngilizce Hazırlık Programı öğrencilerine, kayıtlı oldukları lisans programının öğrenim ücreti uygulanır.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#1B365D] mt-2 shrink-0"></div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Kazanılmış burslar ya da indirimler olması halinde öğrenim ücretine yansıtılır. Dönemlik ödeme yapılması halinde, Bahar dönemi öğrenim ücretinde enflasyon oranı ile sınırlı artış yapılabilir.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex-1 w-full space-y-6">
              <a href="/odeme-yontemleri" className="block group">
                <div className="bg-[#1B365D] rounded-3xl p-8 flex items-center justify-between overflow-hidden relative transition-transform hover:-translate-y-1 shadow-lg shadow-[#1B365D]/20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 transform translate-x-4 group-hover:-translate-x-2 transition-transform duration-500">
                    <CreditCard className="w-32 h-32 text-white" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <CreditCard className="w-6 h-6 text-sky-300" />
                      <h4 className="text-white text-xl font-bold">Ödeme Yöntemleri</h4>
                    </div>
                    <p className="text-sky-100/80 text-sm max-w-sm">Dönemlik ödemeler, taksit imkanları ve banka anlaşmaları hakkında detaylı bilgi.</p>
                  </div>
                  <ChevronRight className="w-8 h-8 text-white relative z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>

              <a href="https://studentservices.ozyegin.edu.tr/tr/burs-ve-finansal-destek" target="_blank" rel="noreferrer" className="block group">
                <div className="bg-[#DF1934] rounded-3xl p-8 flex items-center justify-between overflow-hidden relative transition-transform hover:-translate-y-1 shadow-lg shadow-[#DF1934]/20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 transform translate-x-4 group-hover:-translate-x-2 transition-transform duration-500">
                    <Award className="w-32 h-32 text-white" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-6 h-6 text-red-200" />
                      <h4 className="text-white text-xl font-bold">Burs ve Finansal Destek</h4>
                    </div>
                    <p className="text-red-100/80 text-sm max-w-sm">YKS giriş bursları, sporcu bursları ve akademik başarı bursları detayları.</p>
                  </div>
                  <ChevronRight className="w-8 h-8 text-white relative z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
              
              <div className="grid grid-cols-2 gap-4">
                <a href="https://catalog.ozyegin.edu.tr/3d-flip-book/2026-2027-tercih-donemi-bilgilendirme-brosuru/" target="_blank" rel="noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 transition-colors group">
                  <Download className="w-6 h-6 text-slate-400 group-hover:text-[#DF1934] transition-colors" />
                  <span className="text-xs font-bold uppercase tracking-wide">Bilgilendirme<br/>Broşürü</span>
                </a>
                <Link href="/tercih" className="bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 transition-colors group">
                  <BookOpen className="w-6 h-6 text-slate-400 group-hover:text-[#1B365D] transition-colors" />
                  <span className="text-xs font-bold uppercase tracking-wide">Burs ve Tercih<br/>Rehberi</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Diğer Programlar</h2>
            <p className="text-slate-500">Yurt dışı kontenjanları ve lisansüstü eğitim ücretleri</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a href="https://studentservices.ozyegin.edu.tr/tr/ogrenci-hizmetleri/ucretler-ve-odemeler/2026-2027-akademik-yili-ucretleri/yurt-disindan-ogrenciler" target="_blank" rel="noreferrer" className="bg-white border border-slate-200 rounded-3xl p-6 flex items-center gap-6 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-sky-100 transition-colors">
                <GraduationCap className="w-8 h-8 text-sky-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-[#1B365D] transition-colors">Yurt Dışından Öğrenciler (YDO)</h3>
                <p className="text-sm text-slate-500 flex items-center gap-1">Detaylı Bilgi <ChevronRight className="w-3 h-3" /></p>
              </div>
            </a>
            
            <a href="https://studentservices.ozyegin.edu.tr/tr/ucretler-ve-odemeler/2026-2027-akademik-yili-ucretleri/lisansustu-ogrenim" target="_blank" rel="noreferrer" className="bg-white border border-slate-200 rounded-3xl p-6 flex items-center gap-6 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-[#DF1934] transition-colors">Lisansüstü Öğrenim Ücretleri</h3>
                <p className="text-sm text-slate-500 flex items-center gap-1">Detaylı Bilgi <ChevronRight className="w-3 h-3" /></p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
