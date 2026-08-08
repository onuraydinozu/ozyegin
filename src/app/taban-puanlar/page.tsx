"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { tabanPuanlarData } from "@/data/taban-puanlar";
import { Download, BookOpen, AlertCircle } from "lucide-react";

export default function TabanPuanlarPage() {
  const getFacultyColor = (facultyName: string) => {
    if (facultyName.includes("Havacılık")) return "bg-[#1f5984] text-white";
    if (facultyName.includes("Hukuk")) return "bg-[#ce2225] text-white";
    if (facultyName.includes("İşletme")) return "bg-[#e3a059] text-white";
    if (facultyName.includes("Sosyal Bilimler")) return "bg-[#503276] text-white";
    if (facultyName.includes("Mimarlık")) return "bg-[#7a4645] text-white";
    if (facultyName.includes("Mühendislik")) return "bg-[#eb6b23] text-white";
    if (facultyName.includes("Uygulamalı")) return "bg-[#087d5d] text-white";
    return "bg-[#1a2530] text-white";
  };

  return (
    <main className="bg-slate-50 min-h-screen text-slate-800 font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-[#1B365D] to-[#0f213a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-[#DF1934] rounded-full blur-[150px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Taban Puanları ve Kontenjanlar
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 font-light mb-4"
          >
            2026-2027 Akademik Yılı Kontenjanlar ve Taban Puanları
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto text-slate-400 text-sm md:text-[15px] leading-relaxed bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
          >
            <p>
              Tabloda belirtilen puan ve başarı sırası bilgileri, 2025 - YKS sonuçlarına göre oluşan verilerdir. 
              En Düşük Yerleşen Puanı ve Başarı Sırası sütunlarında yer alan veriler, ilgili kontenjanlara 2025 - YKS kapsamında yerleşen son öğrencinin verileridir. 
              2026 yılında YKS kapsamında öğrenci alan programlarımızın kontenjanları aşağıdaki tabloda gösterilmiştir. 
              Aday öğrencilere faydalı olması amacıyla, tabloda 2026 yılı kontenjan bilgilerine ve 2025 yılı YKS süreci sonucunda oluşan En Yüksek ve En Düşük puan / sıralama bilgilerine de yer verilmiştir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a href="https://catalog.ozyegin.edu.tr/3d-flip-book/2026-2027-tercih-donemi-bilgilendirme-brosuru/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl hover:border-[#DF1934] hover:shadow-lg hover:shadow-[#DF1934]/10 transition-all text-slate-700 font-medium text-sm group">
              <Download className="w-5 h-5 text-[#DF1934] group-hover:-translate-y-1 transition-transform" />
              2026-2027 Tercih Dönemi Bilgilendirme Broşürü
            </a>
            <Link href="/tercih" className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl hover:border-[#1B365D] hover:shadow-lg hover:shadow-[#1B365D]/10 transition-all text-slate-700 font-medium text-sm group">
              <BookOpen className="w-5 h-5 text-[#1B365D] group-hover:scale-110 transition-transform" />
              Burs ve Tercih Rehberi
            </Link>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap border-collapse border border-slate-300">
                {/* Table Header */}
                <thead>
                  <tr className="bg-[#a81c43] text-white">
                    <th rowSpan={2} className="px-6 py-4 text-xs font-bold uppercase align-middle border border-white/20 text-center w-1/5">Program Adı</th>
                    <th rowSpan={2} className="px-2 py-4 text-xs font-bold uppercase text-center align-middle border border-white/20">Puan<br/>Türü</th>
                    <th rowSpan={2} className="px-4 py-4 text-xs font-bold uppercase text-center align-middle border border-white/20">Burs</th>
                    <th colSpan={3} className="px-4 py-3 text-xs font-bold uppercase text-center border border-white/20">Kontenjanlar</th>
                    <th colSpan={2} className="px-4 py-3 text-xs font-bold uppercase text-center border border-white/20">2025 Yerleşen Puanları</th>
                    <th colSpan={3} className="px-4 py-3 text-xs font-bold uppercase text-center border border-white/20">2025 Yerleşen Başarı Sırası</th>
                  </tr>
                  <tr className="bg-[#a81c43] text-white text-[10px] font-bold text-center">
                    <th className="px-2 py-3 border border-white/20">2025<br/>Genel</th>
                    <th className="px-2 py-3 border border-white/20">2026<br/>Genel</th>
                    <th className="px-2 py-3 border border-white/20">Şehit/Gazi<br/>Ek Kont.</th>
                    <th className="px-2 py-3 border border-white/20">En Düşük</th>
                    <th className="px-2 py-3 border border-white/20">En Yüksek</th>
                    <th className="px-2 py-3 border border-white/20">En Düşük</th>
                    <th className="px-2 py-3 border border-white/20" title="Yerleşen öğrencilerin %80’nin içinde olduğu sıralama">80. Yüzdelik**</th>
                    <th className="px-2 py-3 border border-white/20">En Yüksek</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {tabanPuanlarData.map((faculty, fIndex) => (
                    <React.Fragment key={fIndex}>
                      {/* Faculty Header Row */}
                      <tr className={`${getFacultyColor(faculty.faculty)} border border-slate-300`}>
                        <td colSpan={11} className="px-6 py-3 font-medium text-sm">
                          {faculty.faculty}
                        </td>
                      </tr>
                      {/* Programs */}
                      {faculty.programs.map((prog, pIndex) => (
                        <tr key={`${fIndex}-${pIndex}`} className="hover:bg-slate-50 transition-colors border-b border-slate-200">
                          <td className="px-6 py-4 text-slate-700 whitespace-normal border border-slate-200 text-center">{prog.name}</td>
                          <td className="px-2 py-4 text-center border border-slate-200 text-slate-600">
                            {prog.puanTuru}
                          </td>
                          <td className="px-4 py-4 text-center border border-slate-200 text-slate-600 whitespace-nowrap">
                            {prog.burs}
                          </td>
                          <td className="px-2 py-4 text-center text-slate-500 border border-slate-200">{prog.kont2025}</td>
                          <td className="px-2 py-4 text-center text-slate-500 border border-slate-200">{prog.kont2026}</td>
                          <td className="px-2 py-4 text-center text-slate-500 border border-slate-200">{prog.sehit}</td>
                          <td className="px-2 py-4 text-center text-slate-500 border border-slate-200">{prog.puanDusuk}</td>
                          <td className="px-2 py-4 text-center text-slate-500 border border-slate-200">{prog.puanYuksek}</td>
                          <td className="px-2 py-4 text-center text-slate-500 border border-slate-200">{prog.siraDusuk}</td>
                          <td className="px-2 py-4 text-center text-slate-500 border border-slate-200">{prog.sira80}</td>
                          <td className="px-2 py-4 text-center text-slate-500 border border-slate-200">{prog.siraYuksek}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footnotes */}
          <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4 text-[#1B365D]">
              <AlertCircle className="w-6 h-6" />
              <h3 className="text-lg font-bold">Önemli Notlar</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed list-disc list-outside ml-5">
              <li><strong className="text-slate-800">“*”</strong> ibaresi bulunan kontenjanlarda 2025-2026 Akademik Yılı’na göre artış olmuştur.</li>
              <li><strong className="text-slate-800">“**”</strong> Yerleşen öğrencilerin %80’nin içinde olduğu sıralama.</li>
              <li>2026 YKS Kılavuzu yayınlandıktan sonra tabloda paylaşılan 2026 kontenjan bilgilerinde değişiklik yaşanabilir. Tercihleriniz arasında göstermek istediğiniz lisans programı ile ilgili kontenjan ve geçmiş yıla ait puan ve başarı sırası bilgilerinin ÖSYM tarafından yayımlanan 2026 YKS kılavuzundan kontrol edilmesi gerekir.</li>
              <li>Şehit/Gazi yakını kontenjanından yararlanacak adayların 2026 YKS Kılavuzu&apos;nu esas almaları gerekmektedir. Şehit/Gazi bursu yalnızca öğrenim ücretine uygulanmakta olup yurt ve nakit burslarını kapsamamaktadır.</li>
              <li>Hukuk, Mimarlık ve Mühendislik programlarına yerleşmek için ÖSYM tarafından yayımlanan 2026 YKS kılavuzunda yer alan en düşük başarı sıralaması koşulunun sağlanması gerekir.</li>
            </ul>
          </div>
          
          {/* Support Section */}
          <div className="mt-12 text-center bg-white border border-slate-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-slate-900 mb-3">Öğrenci Hizmetleri</h4>
            <p className="text-slate-500 mb-6">
              Soru, görüş ve önerilerinizi <a href="mailto:student.services@ozu.edu.tr" className="text-[#DF1934] hover:underline font-medium">student.services@ozu.edu.tr</a> adresine iletebilirsiniz.
            </p>
            <a href="https://studentservices.ozyegin.edu.tr/tr/hakkimizda" target="_blank" rel="noreferrer" className="inline-block px-8 py-3 bg-[#1B365D] text-white text-sm font-bold tracking-widest rounded-full hover:bg-slate-800 transition-colors">
              DAHA FAZLA BİLGİ
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
