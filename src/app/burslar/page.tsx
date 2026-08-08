"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Info, Download, BookOpen, ChevronRight, Award, Trophy, GraduationCap, Briefcase, HelpCircle, HeartHandshake } from "lucide-react";

export default function BurslarPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen text-slate-800 font-sans overflow-x-hidden selection:bg-[#DF1934] selection:text-white">
      <Header />
      
      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-20 bg-slate-900 text-white overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] via-slate-900 to-black z-0"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay z-0"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#DF1934] rounded-full blur-[120px] opacity-20 z-0 mix-blend-screen animate-pulse duration-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-sky-600 rounded-full blur-[150px] opacity-20 z-0 mix-blend-screen"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium tracking-wide text-white uppercase">Aday Öğrenci</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight"
            >
              Burs ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#DF1934]">Finansal Destek</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 font-light leading-relaxed"
            >
              2026 YKS sonuçlarına göre üniversiteye yerleşerek kayıt yaptıran öğrencilere, aşağıda belirtilen koşulları sağlamaları şartıyla yerleştikleri programda YKS kılavuz bursu ve/veya kılavuz dışı burs/indirimler verilebilir.
            </motion.p>
          </div>
        </div>
      </section>

      {/* YKS Kılavuz Bursları */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-black text-slate-900 mb-6">YKS Kılavuz Bursları</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                Lisans programlarına yeni kabul edilecek öğrenciler için uygulanacak YKS kılavuz bursları ve kapsamları şöyledir:
              </p>

              {/* Exact Replicated Table */}
              <div className="rounded-lg overflow-hidden shadow-lg border border-slate-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="bg-[#b32c66] text-white font-bold text-lg p-4 text-center border-r border-white/20">
                        YKS Kılavuz Bursu
                      </th>
                      <th className="bg-[#b32c66] text-white font-bold text-lg p-4 text-center">
                        Kapsamı
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#c24a7d] text-white text-lg">
                    <tr className="border-t border-white/30">
                      <td className="p-4 border-r border-white/30 text-center font-normal tracking-wide">
                        Burslu
                      </td>
                      <td className="p-4 text-center font-light tracking-wide">
                        Öğrenim ücretinin <strong className="font-bold">tamamından</strong> muafiyet
                      </td>
                    </tr>
                    <tr className="border-t border-white/30">
                      <td className="p-4 border-r border-white/30 text-center font-normal tracking-wide">
                        %50 İndirimli
                      </td>
                      <td className="p-4 text-center font-light tracking-wide">
                        Öğrenim ücretinin <strong className="font-bold">%50&apos;sinden</strong> muafiyet
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="flex-1 w-full flex flex-col gap-4">
               <a href="https://catalog.ozyegin.edu.tr/3d-flip-book/2026-2027-tercih-donemi-bilgilendirme-brosuru/" target="_blank" rel="noreferrer" className="bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 border border-slate-200 rounded-3xl p-8 flex items-center justify-between group transition-all">
                 <div className="flex items-center gap-5">
                   <div className="w-14 h-14 bg-red-50 text-[#DF1934] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                     <Download className="w-7 h-7" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900">2026-2027 Tercih Broşürü</h4>
                     <p className="text-sm text-slate-500">Bilgilendirme broşürünü indirin</p>
                   </div>
                 </div>
                 <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-slate-900 transition-colors" />
               </a>

               <Link href="/tercih" className="bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 border border-slate-200 rounded-3xl p-8 flex items-center justify-between group transition-all">
                 <div className="flex items-center gap-5">
                   <div className="w-14 h-14 bg-[#1B365D]/10 text-[#1B365D] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                     <BookOpen className="w-7 h-7" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900">Burs ve Tercih Rehberi</h4>
                     <p className="text-sm text-slate-500">Tercih dönemi detaylarını inceleyin</p>
                   </div>
                 </div>
                 <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-slate-900 transition-colors" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kılavuz Dışı Burslar */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-6">Kılavuz Dışı Burslar</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Öğrenciler, koşullarını yerine getirmek şartıyla, varsa YKS Kılavuz burslarına ek olarak aşağıdaki burslardan/indirimlerden yalnızca birinden yararlanabilirler. Birden fazla bursun/indirimin koşulunu yerine getiren öğrenciler için, oranı en yüksek olan burs/indirim uygulanır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* YKS Giriş Bursları */}
            <a href="https://studentservices.ozyegin.edu.tr/tr/burs-ve-finansal-destek/yks-giris-burslari" target="_blank" rel="noreferrer" className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
              <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">YKS Giriş Bursları</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                2026-2027 akademik yılında YKS sonuçlarına göre Üniversiteye yerleşerek kayıt olan öğrencilere, yerleştikleri programa göre ek burs/indirimler verilebilir.
              </p>
              <div className="flex items-center text-sm font-bold text-sky-600 mt-auto">
                Detayları İncele <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Spor Bursu */}
            <a href="https://www.ozyegin.edu.tr/tr/spor-merkezi/spor-burslari" target="_blank" rel="noreferrer" className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Spor Bursu</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Öğrencinin akademik başarısı öncelikli olmak üzere, kendi branşında Özyeğin Üniversitesi&apos;ni temsil etmesi amacıyla sağlanan bir olanaktır.
              </p>
              <div className="flex items-center text-sm font-bold text-amber-600 mt-auto">
                Detayları İncele <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Eğitimde Fırsat Eşitliği Burs Programı */}
            <a href="https://ozuburs.ozyegin.edu.tr/" target="_blank" rel="noreferrer" className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">Eğitimde Fırsat Eşitliği Bursu</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Başarılı ve maddi desteğe ihtiyacı olan öğrencilerin Üniversitemizde tam burslu olarak öğrenim görmelerini amaçlayan bir sosyal girişim projesidir.
              </p>
              <div className="flex items-center text-sm font-bold text-emerald-600 mt-auto">
                Detayları İncele <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Lisans Akademik Başarı Bursu */}
            <a href="https://studentservices.ozyegin.edu.tr/tr/burs-ve-finansal-destek/lisans-akademik-basari-burslari" target="_blank" rel="noreferrer" className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Lisans Akademik Başarı Bursu</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Burssuz veya kısmi burslu okuyan öğrencilerin, akademik başarılarına göre bahar yarıyılı sonunda yararlanabileceği başarı odaklı burslar.
              </p>
              <div className="flex items-center text-sm font-bold text-indigo-600 mt-auto">
                Detayları İncele <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Kısmi Zamanlı Çalışma Olanağı */}
            <a href="https://studentservices.ozyegin.edu.tr/tr/burs-ve-finansal-destek/kismi-zamanli-calisma-olanagi" target="_blank" rel="noreferrer" className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">Kısmi Zamanlı Çalışma</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Öğrencilerin üniversite içindeki farklı birim ve pozisyonlarda iş deneyimi fırsatı kazanarak maddi destek sağladığı gelişim programı.
              </p>
              <div className="flex items-center text-sm font-bold text-orange-600 mt-auto">
                Detayları İncele <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Lisansüstü Bursları */}
            <a href="https://studentservices.ozyegin.edu.tr/tr/burs-ve-finansal-destek/lisansustu-burslari" target="_blank" rel="noreferrer" className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">Lisansüstü Bursları</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Lisansüstü programlarda öğrenim gören öğrencilere sağlanan öğrenim ücreti muafiyeti ve diğer spesifik burs olanakları.
              </p>
              <div className="flex items-center text-sm font-bold text-teal-600 mt-auto">
                Detayları İncele <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Bize Sorun Banner */}
      <section className="py-16 px-6 bg-[#1B365D]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-4">
              <HelpCircle className="w-4 h-4 text-sky-300" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">İletişim & Destek</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Bize Sorun</h2>
            <p className="text-sky-100/80 leading-relaxed max-w-2xl">
              Akademik programlardan burslara, başvuru süreçlerinden kampüs yaşamına kadar her türlü sorunuz için bize ulaşabilirsiniz. Uzman ekibimiz size en kısa sürede yardımcı olmaktan memnuniyet duyacaktır.
            </p>
          </div>
          <div className="shrink-0">
            <a href="https://aday.ozyegin.edu.tr/bize-sorun/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1B365D] hover:bg-sky-50 font-bold rounded-full transition-colors group text-lg">
              Daha Fazla Bilgi Al
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
