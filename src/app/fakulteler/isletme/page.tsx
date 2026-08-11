"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Building2, 
  Briefcase, 
  TrendingUp, 
  Globe, 
  ChevronRight, 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  Plus, 
  Minus, 
  Lightbulb, 
  PieChart, 
  BarChart3,
  Rocket, ArrowUpRight, Target, Activity, Zap, CreditCard, Network, Coins, Bitcoin, Search
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BusinessTicket from "@/components/tickets/BusinessTicket";

export default function BusinessFacultyPage() {
  return (
    <main className="bg-slate-50 text-slate-800 font-sans min-h-screen">
      <Header />
      
      {/* 1. Live Market Ticker (Borsa Bandı) */}
      <div className="w-full bg-slate-900 border-b border-slate-700/50 py-3 flex overflow-x-auto snap-x snap-mandatory gap-8 px-6 scrollbar-hide text-sm font-mono text-slate-400">
        <span className="text-emerald-400 font-bold flex items-center gap-2 shrink-0"><ArrowUpRight className="w-4 h-4"/> $OZUBIZ ▲ +24%</span>
        <span className="shrink-0">|</span>
        <span className="text-blue-400 font-bold shrink-0">STARTUP_FUNDING: $12.5M</span>
        <span className="shrink-0">|</span>
        <span className="text-amber-400 font-bold shrink-0">BIG4_RECRUITMENT: %94</span>
        <span className="shrink-0">|</span>
        <span className="text-sky-400 font-bold shrink-0">GLOBAL_EXCHANGE: 42 COUNTRIES</span>
        <span className="shrink-0">|</span>
        <span className="text-purple-400 font-bold shrink-0">ALUMNI_NETWORK: 15,000+</span>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* Dynamic Background (Özyeğin Business gradient) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-100 via-slate-50 to-white opacity-90"></div>
          <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-500/15 rounded-full blur-[120px]"></div>
          <div className="absolute top-[20%] left-[-20%] w-[60vw] h-[60vw] bg-indigo-400/20 rounded-full blur-[150px]"></div>
        </div>

        {/* Animated Background Graphic */}
        <motion.div 
          className="absolute top-1/4 right-10 z-10 hidden lg:block opacity-20 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <Building2 className="w-96 h-96 text-blue-900" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-blue-100/80 border border-blue-200 rounded-full text-blue-900 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <Building2 className="w-4 h-4 text-blue-700" />
            Geleceğin Vizyoner Liderleri ve Girişimcileri
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight drop-shadow-xl text-slate-900"
          >
            İşletme <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600">
              Fakültesi
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Küresel iş dünyasına yön verecek, veri odaklı düşünen, girişimci ve sürdürülebilir başarıya odaklanan yeni nesil liderler yetiştiriyoruz.
          </motion.p>

          {/* Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl text-left">
              <Briefcase className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Uluslararası İşletme Eğitimi</h3>
              <p className="text-slate-600 text-sm">AACSB akreditasyonu ile dünya standartlarında vaka analizi ve uygulama odaklı müfredat.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl text-left">
              <Lightbulb className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Girişimcilik & İnovasyon</h3>
              <p className="text-slate-600 text-sm">Türkiye’nin önde gelen kuluçka merkezleri ve melek yatırım ağı destekleriyle kendi işini kurma imkânı.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl text-left">
              <BarChart3 className="w-10 h-10 text-sky-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Veri & Finans Analitiği</h3>
              <p className="text-slate-600 text-sm">Dijital dönüşüm, finansal teknolojiler (FinTech) ve stratejik karar verme becerileri.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 1. Hedefimiz ve Hızlı Erişimler */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-700 font-bold text-sm tracking-wide block mb-2 uppercase">Özyeğin Üniversitesi</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Hedefimiz</h2>
            <div className="w-20 h-1 bg-blue-600 mb-8 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Özyeğin Üniversitesi İşletme Fakültesi, küresel ölçekte rekabet edebilen, etik değerlere bağlı, dijital çağın gereksinimlerine hakim, analitik düşünme yetkinliği yüksek ve yenilikçi çözümler üreten liderler ve girişimciler yetiştirmeyi hedeflemektedir. Sektörle iç içe vaka analizleri ve uygulamalı projelerle öğrencilerimize teorik altyapının ötesinde somut iş tecrübesi kazandırıyoruz.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.ozyegin.edu.tr/tr/isletme" target="_blank" rel="noreferrer" className="px-5 py-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(29,78,216,0.3)]">
                İşletme
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/ekonomi" target="_blank" rel="noreferrer" className="px-5 py-3 bg-indigo-700 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(67,56,202,0.3)]">
                Ekonomi
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/uluslararasi-finans" target="_blank" rel="noreferrer" className="px-5 py-3 bg-sky-700 hover:bg-sky-600 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(3,105,161,0.3)]">
                Uluslararası Finans
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/girisimcilik" target="_blank" rel="noreferrer" className="px-5 py-3 bg-teal-700 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(15,118,110,0.3)]">
                Girişimcilik
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/yonetim-bilisim-sistemleri" target="_blank" rel="noreferrer" className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(30,41,59,0.3)]">
                Yönetim Bilişim Sistemleri
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/uluslararasi-ticaret-ve-isletmecilik" target="_blank" rel="noreferrer" className="px-5 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-xl transition-all">
                Uluslararası Ticaret ve İşletmecilik
              </a>
              <a href="https://catalog.ozyegin.edu.tr/3d-flip-book/isletme-fakultesi-2026-2027-tr/" target="_blank" rel="noreferrer" className="px-5 py-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold rounded-xl transition-all">
                Fakülte Broşürü
              </a>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-blue-100 group bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-indigo-100/30 z-10"></div>
            <div className="relative z-20 text-center">
              <Building2 className="w-32 h-32 text-blue-700/20 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700" />
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-blue-100 shadow-xl">
                <span className="text-xs font-bold text-blue-700 tracking-wider uppercase block mb-1">Küresel Standart</span>
                <h4 className="text-xl font-bold text-slate-900">Dünyanın Seçkin İş Okulları Arasında</h4>
                <p className="text-slate-600 text-sm mt-2">AACSB akreditasyonuna sahip ayrıcalıklı müfredat ve güçlü mezun ağı.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AACSB Accreditation Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 border border-blue-700/30 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-blue-500/20 border-2 border-blue-400/50 flex items-center justify-center">
              <ShieldCheck className="w-12 h-12 text-blue-400" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-blue-500/30 border border-blue-400/40 rounded-full text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
                Uluslararası Kalite Güvencesi
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                AACSB International Akreditasyonu
              </h3>
              <p className="text-blue-100/90 text-lg leading-relaxed mb-6">
                Özyeğin Üniversitesi İşletme Fakültesi, dünyadaki en saygın iş okulları akreditasyon kurumu olan AACSB (Association to Advance Collegiate Schools of Business) tarafından akredite edilmiştir. Dünyadaki iş okullarının yalnızca %5’inin sahip olduğu bu prestijli akreditasyon, verilen eğitimin uluslararası seviyedeki mükemmelliğini tescillemektedir.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/isletme-fakultesi/aacsb-akreditasyonu" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30">
                AACSB Hakkında Detaylı Bilgi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dean's Message */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="w-48 h-48 rounded-full bg-blue-50 border-4 border-blue-200 mx-auto lg:mx-0 overflow-hidden mb-6 flex items-center justify-center shadow-lg">
                <span className="text-blue-800 font-semibold text-lg text-center px-4">Dekanlık</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 text-center lg:text-left">Prof. Dr. Alpay Er</h3>
              <p className="text-blue-600 font-medium text-center lg:text-left mb-6">İşletme Fakültesi Dekanı</p>
              <div className="hidden lg:block w-12 h-1 bg-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Gelişen teknoloji, küreselleşme ve hızlı değişen pazar dinamikleri, iş dünyasında yeni nesil liderlik ve yönetim anlayışını zorunlu kılmaktadır. Özyeğin Üniversitesi İşletme Fakültesi olarak amacımız, öğrencilerimizi yalnızca bugünün iş dünyasına hazırlamak değil, aynı zamanda geleceğin iş modellerine yön verecek vizyona ulaştırmaktır.
            </p>
            <p>
              Fakültemiz bünyesinde yer alan İşletme, Ekonomi, Uluslararası Finans, Girişimcilik, Yönetim Bilişim Sistemleri ve Uluslararası Ticaret ve İşletmecilik lisans programlarımız, teorik derinlik ile sektörel uygulamayı mükemmel biçimde harmanlamaktadır. Vaka çalışmaları, simülasyonlar, sanayi iş birlikleri ve uluslararası değişim olanakları sayesinde öğrencilerimiz henüz mezun olmadan küresel iş ortamının ritmini kavrar.
            </p>
            <p>
              Dünyanın önde gelen iş okullarının dâhil olduğu AACSB akreditasyonumuz, fakültemizin sunduğu eğitim kalitesinin, akademik kadromuzun üretkenliğinin ve idari süreçlerimizin mükemmelliğinin uluslararası standartlarda bağımsız bir tescilidir. Bu sayede mezunlarımız, hem Türkiye’de hem de dünyanın dört bir yanındaki uluslararası şirketlerde ve prestijli lisansüstü programlarda öncelikli olarak tercih edilmektedir.
            </p>
            <p>
              Bunun yanı sıra üniversitemizin girişimcilik ekosistemiyle kurduğumuz entegrasyon sayesinde, öğrencilerimiz inovatif iş fikirlerini hayata geçirme ve kendi girişimlerini kurma fırsatı bulmaktadır. Sizleri de İşletme Fakültemizin dinamik, kapsayıcı ve ilham veren atmosferinde yerinizi almaya davet ediyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Pitch Deck & Girişimcilik */}
      <section className="relative z-10 w-full py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">STARTUP ECOSYSTEM</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Pitch Deck & Kuluçka</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Sadece vaka analizi yapmıyor, doğrudan yatırımcı karşısına çıkıyorsunuz.</p>
          </div>

          {/* Native Horizontal Scroll for Pitch Cards */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-6 pb-6 scrollbar-hide">
             {/* Card 1 */}
             <div className="w-[300px] shrink-0 bg-white border border-slate-200 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-transform snap-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Lightbulb className="w-6 h-6"/></div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Girişimcilik Merkezi</h3>
                <p className="text-slate-600 text-sm">Fikir doğrulama, prototipleme ve erken aşama (seed) yatırım destekleriyle fikrini ürüne dönüştür.</p>
             </div>
             {/* Card 2 */}
             <div className="w-[300px] shrink-0 bg-white border border-slate-200 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-transform snap-center">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6"><BarChart3 className="w-6 h-6"/></div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Finans & Analitik</h3>
                <p className="text-slate-600 text-sm">Şirket değerlemesi, finansal modelleme ve yatırımcı görüşmelerinde elini güçlendirecek veri setleri.</p>
             </div>
             {/* Card 3 */}
             <div className="w-[300px] shrink-0 bg-white border border-slate-200 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-transform snap-center">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6"><Target className="w-6 h-6"/></div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Dijital Pazarlama</h3>
                <p className="text-slate-600 text-sm">Growth Hacking teknikleri, SEO, kullanıcı kazanımı ve pazar penetrasyon stratejileri.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Soft Transition (Light to Dark) */}
      <div className="w-full h-32 bg-gradient-to-b from-white to-slate-950 pointer-events-none"></div>

      {/* 4. Finviz Style Heatmap */}
      <section className="relative z-10 w-full bg-slate-950 py-24 border-y border-slate-700/50">
         <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
               <h2 className="text-3xl font-black text-white mb-2">Uzmanlık Alanları & Piyasa Derinliği</h2>
               <p className="text-slate-400">S&P 500 ısı haritalarından ilham alınan etkileşimli alan matrisi.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-2 h-auto md:h-[600px]">
               {/* Box 1 (Large) */}
               <div className="md:col-span-2 md:row-span-2 h-48 md:h-auto bg-emerald-500/20 border border-emerald-500/30 hover:bg-emerald-500/40 transition-colors p-4 relative group flex flex-col cursor-pointer">
                  <div className="flex justify-between items-start mb-auto">
                     <span className="font-mono font-bold text-emerald-300">FİNANS (FIN)</span>
                     <span className="font-mono text-emerald-400 text-sm">+8.4%</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 mt-4">Uluslararası Finans & Yatırım</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 bg-emerald-600/95 p-6 flex flex-col justify-center items-center text-center z-10">
                     <Coins className="w-12 h-12 text-white mb-4"/>
                     <h4 className="font-bold text-xl text-white mb-2">Finans Sektöründe Yüksek Talep</h4>
                     <p className="text-emerald-100 text-sm">Mezunlarımızın %40'ı yatırım bankacılığı, portföy yönetimi ve özel fonlarda kariyerine başlamaktadır.</p>
                  </div>
               </div>
               
               {/* Box 2 (Medium) */}
               <div className="md:col-span-1 md:row-span-2 h-48 md:h-auto bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/40 transition-colors p-4 relative group flex flex-col cursor-pointer">
                  <div className="flex justify-between items-start mb-auto">
                     <span className="font-mono font-bold text-blue-300">MKTG</span>
                     <span className="font-mono text-blue-400 text-sm">+5.2%</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4">Pazarlama</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 bg-blue-600/95 p-4 flex flex-col justify-center items-center text-center z-10">
                     <p className="text-blue-100 text-sm font-medium">Dijital ajanslar ve FMCG devlerinde marka yönetimi liderliği.</p>
                  </div>
               </div>

               {/* Box 3 (Small) */}
               <div className="md:col-span-1 md:row-span-1 h-32 md:h-auto bg-red-500/20 border border-red-500/30 hover:bg-red-500/40 transition-colors p-4 relative group flex flex-col cursor-pointer">
                  <div className="flex justify-between items-start mb-auto">
                     <span className="font-mono font-bold text-red-300">ENT</span>
                     <span className="font-mono text-red-400 text-sm">-1.2%</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-2">Girişimcilik</h3>
               </div>
               
               {/* Box 4 (Small) */}
               <div className="md:col-span-1 md:row-span-1 h-32 md:h-auto bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/30 transition-colors p-4 relative group flex flex-col cursor-pointer">
                  <div className="flex justify-between items-start mb-auto">
                     <span className="font-mono font-bold text-emerald-300">MIS</span>
                     <span className="font-mono text-emerald-400 text-sm">+4.1%</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-2">Yönetim Bilişim</h3>
               </div>

               {/* Box 5 (Medium/Wide) */}
               <div className="md:col-span-2 md:row-span-1 h-40 md:h-auto bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/40 transition-colors p-4 relative group flex flex-col cursor-pointer">
                  <div className="flex justify-between items-start mb-auto">
                     <span className="font-mono font-bold text-purple-300">IBUS</span>
                     <span className="font-mono text-purple-400 text-sm">+6.7%</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4">Uluslararası Ticaret</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 bg-purple-600/95 p-4 flex flex-col justify-center items-center text-center z-10">
                     <p className="text-purple-100 text-sm font-medium">Global tedarik zinciri ve lojistik devlerinde yönetim pozisyonları.</p>
                  </div>
               </div>

               {/* Box 6 (Wide) */}
               <div className="md:col-span-2 md:row-span-1 h-32 md:h-auto bg-slate-700/50 border border-slate-600 hover:bg-slate-600 transition-colors p-4 relative group flex flex-col cursor-pointer">
                  <div className="flex justify-between items-start mb-auto">
                     <span className="font-mono font-bold text-slate-300">ECON</span>
                     <span className="font-mono text-slate-400 text-sm">0.0%</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4">Ekonomi Politikaları</h3>
               </div>
            </div>
         </div>
      </section>

      {/* Soft Transition (Dark to Light) */}
      <div className="w-full h-32 bg-gradient-to-b from-slate-950 to-slate-50 pointer-events-none"></div>

      {/* 5. Global Business Network */}
      <section className="relative z-10 w-full bg-slate-50 py-32 overflow-hidden border-b border-slate-200">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center">
                  <Globe className="w-96 h-96 text-blue-100 absolute opacity-50" />
                  <div className="relative w-full max-w-sm aspect-square">
                     {/* Center Node (London / Wall Street) */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-slate-950 rounded-full border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center z-30">
                        <Globe className="w-10 h-10 text-blue-400" />
                     </div>

                     {/* Connection Lines & Nodes (Static to avoid lag) */}
                     <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                     </svg>
                     
                     {/* Node 1 */}
                     <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)] z-20"></div>
                     <span className="absolute top-[20%] left-[10%] -translate-x-1/2 -mt-5 font-bold text-slate-500 text-xs z-20">NEW YORK</span>
                     
                     {/* Node 2 */}
                     <div className="absolute top-[30%] left-[80%] w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] z-20"></div>
                     <span className="absolute top-[30%] left-[80%] -translate-x-1/2 -mt-5 font-bold text-slate-500 text-xs z-20">LONDON</span>

                     {/* Node 3 */}
                     <div className="absolute top-[80%] left-[70%] w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.8)] z-20"></div>
                     <span className="absolute top-[80%] left-[70%] -translate-x-1/2 mt-4 font-bold text-slate-500 text-xs z-20">SINGAPORE</span>
                  </div>
               </div>

               <div className="lg:w-1/2">
                  <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 block">KÜRESEL AĞ</span>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Global Exchange & Network Bağlantıları</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">ÖzÜ İşletme, seni İstanbul'a hapsetmez. New York'tan Singapur'a, Londra'dan Frankfurt'a uzanan devasa bir uluslararası ağın parçası olursun.</p>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0"><Network className="w-5 h-5"/></div>
                        <div><h4 className="font-bold text-slate-900">42 Ülkede Exchange Partneri</h4></div>
                     </div>
                     <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0"><Globe className="w-5 h-5"/></div>
                        <div><h4 className="font-bold text-slate-900">Erasmus+ ve Küresel Stajlar</h4></div>
                     </div>
                     <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center shrink-0"><Building2 className="w-5 h-5"/></div>
                        <div><h4 className="font-bold text-slate-900">Çokuluslu Şirketlerde İstihdam Garantisi</h4></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Department Heads Testimonials */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2 uppercase tracking-wider text-sm">İşletme Fakültesi</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Bölüm Başkanlarımızdan Mesajlar</h2>
        </div>

        <div className="space-y-12">
          {/* Testimonial 1 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 text-center max-w-5xl mx-auto shadow-xl relative">
            <div className="flex justify-center gap-1 mb-6 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="text-slate-600 md:text-lg leading-relaxed italic mb-10 max-w-4xl mx-auto">
              “İşletme Programımız, öğrencilerimizin analitik ve stratejik düşünme becerilerini en üst seviyeye taşımak amacıyla kurgulanmıştır. Dünya standartlarında güncel vaka analizleri ve interaktif ders tasarımlarımızla mezunlarımız dijitalleşen küresel ekonomi ortamında hemen ilk günden fark yaratmaktadır. Aday öğrencilerimizi bu vizyoner geleceği birlikte inşa etmeye çağırıyoruz.”
            </p>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full mb-4 border-2 border-blue-200 flex items-center justify-center overflow-hidden">
                 <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-slate-900 font-bold text-lg">İşletme Bölümü</h4>
              <span className="text-slate-500 text-sm">İşletme Lisans Programı Bölüm Başkanlığı</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 text-center max-w-5xl mx-auto shadow-xl relative">
            <div className="flex justify-center gap-1 mb-6 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="text-slate-600 md:text-lg leading-relaxed italic mb-10 max-w-4xl mx-auto">
              “Ekonomi ve Uluslararası Finans bölümlerimiz, finansal piyasaların karmaşık yapısını ve küresel makroekonomik eğilimleri derinlemesine anlayan yetkin profesyoneller yetiştirir. Veri analitiği, FinTech ve sayısal modelleme odaklı müfredatımız sayesinde öğrencilerimiz dünyanın önde gelen finansal kurumlarında başarılı kariyerlere adım atıyorlar.”
            </p>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-50 rounded-full mb-4 border-2 border-indigo-200 flex items-center justify-center overflow-hidden">
                 <TrendingUp className="w-10 h-10 text-indigo-600" />
              </div>
              <h4 className="text-slate-900 font-bold text-lg">Ekonomi ve Finans Bölümleri</h4>
              <span className="text-slate-500 text-sm">Ekonomi ve Uluslararası Finans Bölüm Başkanlığı</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Sıkça Sorulan Sorular */}
      <section className="relative z-10 w-full bg-white py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-slate-500">İşletme Fakültesi lisans programları, AACSB akreditasyonu ve mezuniyet imkânları hakkında merak edilen yanıtlar.</p>
          </div>

          <div className="flex flex-col border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <BusinessFAQAccordion />
          </div>
        </div>
      </section>

      <BusinessTicket />
      <Footer />
    </main>
  );
}

function BusinessFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    { 
      q: "Özyeğin Üniversitesi İşletme Fakültesi bünyesinde hangi lisans programları bulunmaktadır?", 
      a: "İşletme Fakültesi bünyesinde İşletme, Ekonomi, Uluslararası Finans, Girişimcilik, Yönetim Bilişim Sistemleri ve Uluslararası Ticaret ve İşletmecilik lisans programları yer almaktadır." 
    },
    { 
      q: "AACSB Akreditasyonu ne anlama gelmektedir?", 
      a: "AACSB (Association to Advance Collegiate Schools of Business), dünyadaki en saygın ve köklü iş okulları akreditasyon kuruluşudur. İşletme Fakültemiz bu akreditasyona sahip olarak dünyadaki iş okullarının en seçkin %5'lik dilimi arasında yer almakta ve diplomasının uluslararası geçerliliğini taahhüt etmektedir." 
    },
    { 
      q: "Öğrencilere sunulan staj ve sektör iş birliği imkânları nelerdir?", 
      a: "Öğrencilerimiz zorunlu ve isteğe bağlı staj programları ile Türkiye’nin ve dünyanın önde gelen kurumsal şirketlerinde tecrübe kazanır. Sektörle iç içe eğitim modelimiz sayesinde her iki öğrencimizden biri henüz mezun olmadan iş teklifi almaktadır." 
    },
    { 
      q: "Girişimcilik eğitimi ve kuluçka merkezi olanakları nasıldır?", 
      a: "Türkiye'nin ilk Girişimcilik Lisans Programı'nı başlatan üniversite olarak, kendi iş fikrini geliştirmek isteyen tüm öğrencilerimize kuluçka merkezimiz, prototipleme laboratuvarlarımız ve yatırımcı ağlarımız üzerinden birebir destek verilmektedir." 
    },
    { 
      q: "Yurt dışı değişim (Erasmus+) ve çift diploma fırsatları var mıdır?", 
      a: "Fakültemiz, Avrupa, Amerika ve Asya'daki onlarca prestijli üniversite ile anlaşmalıdır. Öğrencilerimiz Erasmus+ ve ikili değişim anlaşmalarıyla 1 veya 2 dönemi yurt dışındaki ortağımız olan üniversitelerde okuyarak küresel vizyon kazanırlar." 
    },
    { 
      q: "Mezunların ortalama işe başlama süresi ve istihdam oranları nasıldır?", 
      a: "İşletme Fakültesi mezunlarımızın %52'si mezuniyet anında veya öncesinde işe girmekte, mezuniyet sonrası ortalama işe başlama süresi ise 4 ay olmaktadır. Mezunlarımız McKinsey, Deloitte, PwC, EY, Unilever, Procter & Gamble, Google, Trendyol ve Garanti BBVA gibi lider kurumlarda görev almaktadır." 
    }
  ];

  return (
    <>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border-b border-slate-200 last:border-b-0">
            <button 
              onClick={() => setOpenIndex(isOpen ? null : idx)} 
              className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-slate-50 transition-colors"
            >
              <span className={`text-[16px] font-semibold ${isOpen ? 'text-blue-700' : 'text-slate-800'}`}>{faq.q}</span>
              {isOpen ? <Minus className="w-5 h-5 text-blue-600 shrink-0" /> : <Plus className="w-5 h-5 text-slate-400 shrink-0" />}
            </button>
            {isOpen && (
              <div className="p-5 pt-0 text-slate-600 text-[15px] leading-relaxed bg-white">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
