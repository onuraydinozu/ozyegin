"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Globe, 
  ChevronRight, 
  Code, 
  Cog, 
  Building2, 
  Bot, 
  Award, 
  Sparkles, 
  CheckCircle2,
  Zap,
  Layers,
  FlaskConical,
  Terminal,
  Trophy,
  Network,
  Database,
  Code2,
  Server,
  Rocket,
  Shield,
  MonitorPlay,
  Share2
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import EngineeringTicket from "@/components/tickets/EngineeringTicket";

export default function EngineeringPage() {
  const fullCode = `const ozuEngineer = new Engineer({
  university: "Özyeğin University",
  labs: ["Robotics & AI Lab", "Cleanroom", "Autonomous Testbed"],
  skills: ["AI/ML", "Embedded Systems", "Quantum Computing"],
  status: "READY_FOR_FAANG_AND_DEFENSE"
});

await ozuEngineer.buildFuture();`;

  return (
    <main className="bg-slate-50 text-slate-800 font-sans min-h-screen">
      <Header />

      {/* 1. Live IDE / Terminal Code Hero Animasyonu */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center pt-24 overflow-hidden bg-slate-900">
        {/* Dark Cyberpunk Ambient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border-[1px] border-cyan-900/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border-[1px] border-blue-900/20 rounded-full"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/50 border border-cyan-800/50 rounded-md text-cyan-400 text-xs font-mono tracking-widest uppercase"
            >
              <Terminal className="w-4 h-4" /> Silicon Valley R&D Command Center
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight"
            >
              Sözde Değil, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Kodda ve Donanımda
              </span><br/>
              Mühendislik.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-400 max-w-xl leading-relaxed"
            >
              20 yıl öncesinin tozlu teorilerini ezberlemiyoruz. PyTorch, ROS2, Otonom Araçlar ve Mikroçiplerle çalışan bir AR-GE canavarı yetiştiriyoruz.
            </motion.p>
          </div>

          {/* Right IDE Window */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full rounded-xl overflow-hidden border border-slate-700/50 bg-slate-950 shadow-[0_0_50px_rgba(6,182,212,0.15)]"
          >
            {/* IDE Header */}
            <div className="flex items-center px-4 py-3 bg-slate-800 border-b border-slate-700/50">
              <div className="flex gap-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs font-mono text-slate-500 flex-1 text-center">engineer.ts — Özyeğin University</div>
            </div>
            {/* IDE Body */}
            <div className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-x-auto min-h-[300px]">
              <pre className="text-slate-300">
                <code dangerouslySetInnerHTML={{
                  __html: fullCode
                    .replace(/const/g, '<span class="text-[#FF7B72]">const</span>')
                    .replace(/new/g, '<span class="text-[#FF7B72]">new</span>')
                    .replace(/await/g, '<span class="text-[#FF7B72]">await</span>')
                    .replace(/Engineer/g, '<span class="text-[#D2A8FF]">Engineer</span>')
                    .replace(/university|labs|skills|status/g, '<span class="text-[#79C0FF]">$&</span>')
                    .replace(/"[^"]*"/g, '<span class="text-[#A5D6FF]">$&</span>')
                    .replace(/buildFuture/g, '<span class="text-[#D2A8FF]">buildFuture</span>')
                }} />
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="mt-4 text-[#3FB950]"
                >
                  <br/>
                  {`// Output: ✓ Compiled successfully in 0.2s | 100% Industry Ready`}
                </motion.div>
                <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-pulse align-middle"></span>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive CAD / 3D Exploded View */}
      <section className="relative w-full py-32 border-t border-slate-700/50 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-4 block">DONANIM & MAKİNE ŞOVU</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Interactive CAD Explorer</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Teoriyle yetinmeyin, parçalayın. Otonom bir aracın mimarisini ve laboratuvarlarımızın bu araca katkılarını inceleyin.</p>
          </div>

          <div className="relative w-full h-[600px] bg-slate-800 rounded-3xl border border-slate-700/50 overflow-hidden flex items-center justify-center group cursor-crosshair">
             {/* Base Chassis Layer */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-auto transition-transform duration-700 ease-out group-hover:translate-y-[100px] group-hover:scale-95 opacity-50">
               <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
                 <path d="M50 150 L350 150 L300 50 L100 50 Z" stroke="#334155" strokeWidth="2" fill="#0f172a" />
                 <circle cx="100" cy="150" r="30" stroke="#334155" strokeWidth="4" />
                 <circle cx="300" cy="150" r="30" stroke="#334155" strokeWidth="4" />
               </svg>
               {/* Hotspot */}
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                  <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span>
                  <div className="bg-slate-900 border border-slate-700 text-xs text-white px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                    <strong className="text-green-400">Şasi:</strong> Tasarım ve Üretim Laboratuvarı (FabLab)
                  </div>
               </div>
             </div>

             {/* Battery / Engine Layer */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[350px] h-auto transition-transform duration-700 ease-out group-hover:translate-y-[0px] z-10">
               <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
                 <rect x="20" y="20" width="160" height="60" rx="4" stroke="#eab308" strokeWidth="2" fill="#422006" strokeDasharray="4 4" />
                 <path d="M40 20 L40 80 M80 20 L80 80 M120 20 L120 80 M160 20 L160 80" stroke="#ca8a04" strokeWidth="1" />
               </svg>
               {/* Hotspot */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                  <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span></span>
                  <div className="bg-slate-900 border border-slate-700 text-xs text-white px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                    <strong className="text-red-400">Batarya Paketi:</strong> ÖzÜ Elektrikli Araç Takımı
                  </div>
               </div>
             </div>

             {/* Sensor / Lidar / Roof Layer */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-[250px] h-auto transition-transform duration-700 ease-out group-hover:-translate-y-[120px] z-20">
               <svg viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
                 <path d="M20 70 L130 70 L110 20 L40 20 Z" stroke="#0ea5e9" strokeWidth="2" fill="#0c4a6e" fillOpacity="0.6" />
                 <circle cx="75" cy="15" r="10" fill="#38bdf8" className="animate-pulse" />
                 <path d="M75 5 L75 -15" stroke="#38bdf8" strokeWidth="2" />
               </svg>
               {/* Hotspot */}
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                  <div className="bg-slate-900 border border-slate-700 text-xs text-white px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl mb-1">
                    <strong className="text-sky-400">Otonom Sensör:</strong> ROS2 ve Lidar Entegrasyon Lab.
                  </div>
                  <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span></span>
               </div>
             </div>
             
             {/* Hover Instruction */}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 text-sm font-mono flex items-center gap-2 opacity-100 group-hover:opacity-0 transition-opacity">
               <MonitorPlay className="w-4 h-4" /> Parçalara ayırmak için üzerine gelin (Hover)
             </div>
          </div>
        </div>
      </section>

      {/* Soft Transition (Dark to Light) */}
      <div className="w-full h-32 bg-gradient-to-b from-slate-900 to-white pointer-events-none"></div>

      {/* 3. Hedefimiz ve Hızlı Erişimler */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold text-sm tracking-wide block mb-2 uppercase">Özyeğin Üniversitesi</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Hedefimiz</h2>
            <div className="w-20 h-1 bg-blue-600 mb-8 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Teknik problemler çözebilen, yeni teknolojiler geliştiren, yerel ve küresel eğilimleri takip eden, kuramsal bilgiyi uygulamayla harmanlayan, takım çalışmasına ve disiplinler arası çalışmaya yatkın, araştırmacı, girişimci ve yenilikçi yüksek teknoloji şirketleri kurabilecek donanıma sahip yeni nesil mühendisler yetiştirmektir.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.ozyegin.edu.tr/tr/bilgisayar-muhendisligi" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Bilgisayar Mühendisliği
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/elektrik-elektronik-muhendisligi" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all text-sm shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                Elektrik-Elektronik
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/endustri-muhendisligi" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl transition-all text-sm shadow-[0_0_20px_rgba(2,132,199,0.3)]">
                Endüstri Mühendisliği
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/makina-muhendisligi" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all text-sm shadow-[0_0_20px_rgba(14,116,144,0.3)]">
                Makina Mühendisliği
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/insaat-muhendisligi" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all text-sm">
                İnşaat Mühendisliği
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/yapay-zeka-ve-veri-muhendisligi" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all text-sm shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                Yapay Zeka & Veri
              </a>
              <a href="https://catalog.ozyegin.edu.tr/3d-flip-book/muhendislik-fakultesi-2026-2027-tr/" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-semibold rounded-xl transition-all text-sm">
                Fakülte Broşürü
              </a>
            </div>
          </div>
          <div className="relative h-[420px] w-full rounded-3xl overflow-hidden border border-blue-100 group bg-gradient-to-br from-blue-50 to-indigo-50/50 p-8 flex flex-col justify-between shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-indigo-100/30 z-10 pointer-events-none"></div>
            <div className="relative z-20">
              <span className="px-4 py-1.5 bg-blue-600 text-white font-bold text-xs rounded-full inline-block mb-4">Öne Çıkan Özellik</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Gelişmiş Laboratuvar & Proje Kültürü</h3>
              <p className="text-slate-600 text-sm">Öğrencilerimiz ilk yıldan itibaren araştırma laboratuvarlarında yer alır, gerçek sektör problemlerine yenilikçi çözümler üretir.</p>
            </div>
            <div className="relative z-20 flex justify-center items-center py-6">
              <Cpu className="w-36 h-36 text-blue-600/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700" />
            </div>
            <div className="relative z-20 flex items-center justify-between text-sm font-semibold text-blue-700">
              <span>Ar-Ge Odaklı Eğitim</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MÜDEK & EUR-ACE Accreditation Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-sky-500/10 border border-blue-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-blue-600/20 border-2 border-blue-500/40 flex items-center justify-center">
              <Award className="w-12 h-12 text-blue-600" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 font-bold text-xs rounded-md mb-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Uluslararası Akreditasyon Güvencesi
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                MÜDEK ve EUR-ACE® Kalite Etiketi
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Özyeğin Üniversitesi Mühendislik Fakültesi bünyesindeki Bilgisayar, Elektrik-Elektronik, Endüstri, Makina ve İnşaat Mühendisliği lisans programları MÜDEK tarafından akredite edilmiş olup, Avrupa standartlarında eğitim sunulduğunu gösteren EUR-ACE® Bachelor etiketine sahiptir.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/muhendislik-fakultesi/mudek-akreditasyonu" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-500/30">
                Akreditasyon Detayları
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
              <div className="w-48 h-48 rounded-full bg-slate-100 border-4 border-slate-200 mx-auto lg:mx-0 overflow-hidden mb-6 flex items-center justify-center">
                <span className="text-slate-400 font-medium">Fotoğraf</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 text-center lg:text-left">Prof. Dr. Okan Örsan Özener</h3>
              <p className="text-blue-600 font-medium text-center lg:text-left mb-6">Mühendislik Fakültesi Dekanı</p>
              <div className="hidden lg:block w-12 h-1 bg-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-6 text-slate-600 text-lg leading-relaxed">
            <h3 className="text-2xl font-bold text-slate-900">Dekanımızın Mesajı</h3>
            <p>
              Teknolojinin ivmelenen bir hızla dönüştüğü çağımızda, mühendislik eğitimi yalnızca teorik formüllerin aktarılmasından çok daha öte bir anlam taşımaktadır. Özyeğin Üniversitesi Mühendislik Fakültesi olarak amacımız; günümüzün ve geleceğin karmaşık sorunlarına yenilikçi, sürdürülebilir ve etik çözümler sunabilen araştırmacı mühendisler yetiştirmektir.
            </p>
            <p>
              Fakültemizde uyguladığımız disiplinler arası ve proje odaklı eğitim modeli, öğrencilerimizin henüz lisans yıllarındayken ileri teknoloji laboratuvarlarımızda araştırmalara katılmasına ve sektörle doğrudan temas kurmasına olanak tanımaktadır. Bilgisayar, Elektrik-Elektronik, Endüstri, Makina, İnşaat ve Yapay Zeka & Veri Mühendisliği programlarımız, MÜDEK akreditasyonu ve uluslararası EUR-ACE etiketi ile kalitesini kanıtlamıştır.
            </p>
            <p>
              Öğrencilerimiz; yapay zekadan otonom sistemlere, yenilenebilir enerjiden akıllı yapılara kadar pek çok öncü alanda donanım kazanarak mezun olmaktadır. Üniversitemizin girişimcilik ekosistemi ve sanayi iş birlikleri sayesinde öğrencilerimiz yalnızca alanında aranan uzmanlar olmakla kalmayıp kendi teknoloji girişimlerini hayata geçiren vizyoner liderler olarak iş dünyasında fark yaratmaktadır.
            </p>
            <p>
              Geleceği tasarlama ve teknolojiyle dünyayı dönüştürme tutkusuna sahip tüm adaylarımızı Özyeğin Üniversitesi Mühendislik Fakültesi ailesine katılmaya davet ediyorum.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Mezunlarımız & Bir Bölüm Üç Açı */}
      <section className="relative z-10 w-full bg-slate-100/70 border-y border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Mezunlarımız</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Özyeğin Üniversitesinde mühendislik eğitimi alan öğrencilerimiz, teorik mükemmelliği pratik uygulama ve Ar-Ge çalışmalarıyla birleştiren üst düzey bir vizyon kazanırlar.
              </p>
              <p>
                Sektör lideri şirketlerle gerçekleştirilen stajlar, bitirme projeleri ve laboratuvar deneyimleri sayesinde mezunlarımız henüz diplomalarını almadan profesyonel iş dünyasının içinde yer alırlar. Dünyanın önde gelen teknoloji devlerinde ve araştırma merkezlerinde kritik sorumluluklar üstlenirler.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-all"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Bir Bölüm Üç Açı</h3>
              <p className="text-slate-500 mb-8">
                Lisans bölümlerimizi akademisyenlerimizin, mezunlarımızın ve öğrencilerimizin deneyimlerinden ve bakış açılarından yola çıkarak tanıtan YouTube video serimize buradan erişebilirsiniz.
              </p>
              <a href="https://youtube.com/playlist?list=PLKzTz6QQRYz17A3Heyl2p_2Va8h-mjKZP" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-[#FF0000] hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-500/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                Seriyi İzle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Transition (Light to Dark) */}
      <div className="w-full h-32 bg-gradient-to-b from-slate-100/70 to-slate-800 pointer-events-none"></div>

      {/* 5. FAANG & Global R&D Career Nodes */}
      <section className="relative w-full py-32 bg-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">FAANG & Milli Teknoloji Ağı</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Mezunlarımız dünyanın en büyük teknoloji şirketlerine ve savunma sanayisine aralıksız veri ve yetenek taşıyor.</p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-between px-4 md:px-0">
             
             {/* Background Laser Lines */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
               {/* Lines to Global */}
               <path d="M 200 200 Q 500 50 800 100" stroke="#06b6d4" strokeWidth="2" fill="none" strokeDasharray="5 5" opacity="0.3"/>
               <path d="M 200 200 Q 500 150 800 150" stroke="#06b6d4" strokeWidth="1" fill="none" opacity="0.2"/>
               {/* Lines to Defense */}
               <path d="M 200 200 Q 500 350 800 300" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="5 5" opacity="0.3"/>
               <path d="M 200 200 Q 500 250 800 250" stroke="#ef4444" strokeWidth="1" fill="none" opacity="0.2"/>
             </svg>

             {/* Center Node (ÖzÜ) */}
             <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-slate-950 rounded-full border-[4px] border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.6)] flex items-center justify-center -translate-y-4">
                <div className="text-center">
                  <div className="font-black text-white text-xl">ÖzÜ</div>
                  <div className="text-[10px] text-cyan-400 font-mono mt-1">ENGINEERING</div>
                </div>
             </div>

             {/* Right Nodes (Global & Defense) */}
             <div className="flex flex-col gap-24 relative z-10">
                {/* Global FAANG Node */}
                <div className="relative group">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-950 rounded-full border-[2px] border-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.4)] flex items-center justify-center cursor-pointer">
                     <Network className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="absolute top-1/2 right-full mr-6 md:left-full md:mr-0 md:ml-6 -translate-y-1/2 bg-slate-800 border border-slate-700 p-4 rounded-xl w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:pointer-events-auto">
                     <h4 className="text-blue-400 font-bold text-sm mb-2">Küresel Devler</h4>
                     <ul className="text-xs text-slate-300 space-y-1 font-mono">
                       <li>&gt; Google</li>
                       <li>&gt; Amazon (AWS)</li>
                       <li>&gt; Meta</li>
                       <li>&gt; ASML</li>
                       <li>&gt; BMW Group</li>
                     </ul>
                  </div>
                </div>

                {/* Defense & Local Node */}
                <div className="relative group">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-950 rounded-full border-[2px] border-red-400 shadow-[0_0_20px_rgba(248,113,113,0.4)] flex items-center justify-center cursor-pointer">
                     <Server className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="absolute top-1/2 right-full mr-6 md:left-full md:mr-0 md:ml-6 -translate-y-1/2 bg-slate-800 border border-slate-700 p-4 rounded-xl w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:pointer-events-auto">
                     <h4 className="text-red-400 font-bold text-sm mb-2">Milli Teknoloji</h4>
                     <ul className="text-xs text-slate-300 space-y-1 font-mono">
                       <li>&gt; ASELSAN</li>
                       <li>&gt; BAYKAR</li>
                       <li>&gt; TUSAŞ</li>
                       <li>&gt; Trendyol</li>
                       <li>&gt; ROKETSAN</li>
                     </ul>
                  </div>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* 3. Tech Stack & Lab Explorer Grid */}
      <section className="relative w-full py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4 block">SEKTÖREL TEKNOLOJİLER</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">Tech Stack & Lab Explorer</h2>
            </div>
            <p className="text-slate-400 max-w-md text-right md:text-left">Düz ders isimleri aşırı sıkıcıdır. Biz doğrudan global endüstride kullanılan canlı teknoloji kütüphaneleriyle öğretiyoruz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AI & Data */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-colors group">
              <Bot className="w-10 h-10 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Yapay Zekâ & Veri</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">PyTorch</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">TensorFlow</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">OpenCV</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">CUDA</span>
              </div>
            </div>

            {/* Software & System */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors group">
              <Code2 className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Yazılım & Sistem</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">Rust</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">Python</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">C++</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">Docker</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">K8s</span>
              </div>
            </div>

            {/* Hardware & Autonomous */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors group">
              <Cpu className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Donanım & Otonom</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">ROS2</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">MATLAB</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">FPGA</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">Verilog</span>
              </div>
            </div>

            {/* Labs */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-amber-500/50 transition-colors group">
              <Database className="w-10 h-10 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">Laboratuvarlar</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">Fiziksel Sistemler</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">Cleanroom</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono">İnsan-Robot</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 4. Teknofest & Hackathon Trophy Wall */}
      <section className="relative w-full py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Canlı Proje Vitrini</h2>
          </div>
          <p className="text-slate-400">Mühendislik sadece derse girmek değildir; yarışmak, üretmek ve kazanmaktır.</p>
        </div>

        {/* Native Horizontal Scroll (No Marquee to save performance) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-6 scrollbar-hide">
          {/* Item 1 */}
          <div className="w-[350px] inline-flex flex-col bg-slate-800 border border-slate-700/50 p-6 rounded-2xl shrink-0 whitespace-normal hover:-translate-y-2 transition-transform cursor-pointer">
             <Rocket className="w-8 h-8 text-orange-500 mb-4" />
             <h4 className="text-xl font-bold text-white mb-2">ÖzÜ Rover Takımı</h4>
             <p className="text-sm text-slate-400 mb-4">University Rover Challenge (USA) Derecesi ve yarışma finalisti.</p>
             <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="text-green-400">[ STATUS: ACTIVE ]</span>
                <span className="text-cyan-400 hover:underline flex items-center gap-1">GitHub <Share2 className="w-3 h-3"/></span>
             </div>
          </div>
          {/* Item 2 */}
          <div className="w-[350px] inline-flex flex-col bg-slate-800 border border-slate-700/50 p-6 rounded-2xl shrink-0 whitespace-normal hover:-translate-y-2 transition-transform cursor-pointer">
             <Zap className="w-8 h-8 text-yellow-400 mb-4" />
             <h4 className="text-xl font-bold text-white mb-2">ÖzÜ Racing</h4>
             <p className="text-sm text-slate-400 mb-4">Formula Student için tasarlanan ve %100 özgün elektrikli araç mimarisi.</p>
             <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="text-blue-400">[ STATUS: COMPLETED ]</span>
                <span className="text-cyan-400 hover:underline flex items-center gap-1">Docs <Share2 className="w-3 h-3"/></span>
             </div>
          </div>
          {/* Item 3 */}
          <div className="w-[350px] inline-flex flex-col bg-slate-800 border border-slate-700/50 p-6 rounded-2xl shrink-0 whitespace-normal hover:-translate-y-2 transition-transform cursor-pointer">
             <Shield className="w-8 h-8 text-red-500 mb-4" />
             <h4 className="text-xl font-bold text-white mb-2">AI Hackathon 1.si</h4>
             <p className="text-sm text-slate-400 mb-4">Otonom dronlar için gerçek zamanlı görüntü işleme ve hedef tespit algoritması.</p>
             <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="text-purple-400">[ STATUS: DEPLOYED ]</span>
                <span className="text-cyan-400 hover:underline flex items-center gap-1">Repo <Share2 className="w-3 h-3"/></span>
             </div>
          </div>
          {/* Repeat for seamless loop */}
          <div className="w-[350px] inline-flex flex-col bg-slate-800 border border-slate-700/50 p-6 rounded-2xl shrink-0 whitespace-normal hover:-translate-y-2 transition-transform cursor-pointer">
             <Rocket className="w-8 h-8 text-orange-500 mb-4" />
             <h4 className="text-xl font-bold text-white mb-2">ÖzÜ Rover Takımı</h4>
             <p className="text-sm text-slate-400 mb-4">University Rover Challenge (USA) Derecesi ve yarışma finalisti.</p>
             <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="text-green-400">[ STATUS: ACTIVE ]</span>
                <span className="text-cyan-400 hover:underline flex items-center gap-1">GitHub <Share2 className="w-3 h-3"/></span>
             </div>
          </div>
          <div className="w-[350px] inline-flex flex-col bg-slate-800 border border-slate-700/50 p-6 rounded-2xl shrink-0 whitespace-normal hover:-translate-y-2 transition-transform cursor-pointer">
             <Zap className="w-8 h-8 text-yellow-400 mb-4" />
             <h4 className="text-xl font-bold text-white mb-2">ÖzÜ Racing</h4>
             <p className="text-sm text-slate-400 mb-4">Formula Student için tasarlanan ve %100 özgün elektrikli araç mimarisi.</p>
             <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="text-blue-400">[ STATUS: COMPLETED ]</span>
                <span className="text-cyan-400 hover:underline flex items-center gap-1">Docs <Share2 className="w-3 h-3"/></span>
             </div>
          </div>
          <div className="w-[350px] inline-flex flex-col bg-slate-800 border border-slate-700/50 p-6 rounded-2xl shrink-0 whitespace-normal hover:-translate-y-2 transition-transform cursor-pointer">
             <Shield className="w-8 h-8 text-red-500 mb-4" />
             <h4 className="text-xl font-bold text-white mb-2">AI Hackathon 1.si</h4>
             <p className="text-sm text-slate-400 mb-4">Otonom dronlar için gerçek zamanlı görüntü işleme ve hedef tespit algoritması.</p>
             <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="text-purple-400">[ STATUS: DEPLOYED ]</span>
                <span className="text-cyan-400 hover:underline flex items-center gap-1">Repo <Share2 className="w-3 h-3"/></span>
             </div>
          </div>
        </div>
      </section>

      {/* 7. Fakülte Öne Çıkanlar (3 Column Cards) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full bg-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Card 1: Advanced Research Labs */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-blue-600 font-bold text-sm tracking-wide block mb-2">Mühendislik Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">İleri Teknoloji<br/>ve Ar-Ge<br/>Laboratuvarları</h2>
            </div>
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl mb-6 flex items-center justify-center border border-blue-100">
              <FlaskConical className="w-20 h-20 text-blue-600/40" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Fakültemiz bünyesindeki robotik, yapay zeka, mikroelektronik, yenilenebilir enerji ve malzeme bilimleri laboratuvarları; öğrencilere lisans seviyesinden itibaren üst düzey araştırma ve prototipleme imkanı sunmaktadır.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/muhendislik-fakultesi" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: MUDEK Quality */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-blue-600 font-bold text-sm tracking-wide block mb-2">Mühendislik Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">MÜDEK ve<br/>EUR-ACE®<br/>Güvencesi</h2>
            </div>
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl mb-6 flex items-center justify-center border border-indigo-100">
              <Award className="w-20 h-20 text-indigo-600/40" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Mühendislik programlarımızın kalitesi MÜDEK akreditasyonu ve Avrupa Mühendislik Eğitimi Akreditasyon Ağı (ENAEE) tarafından verilen EUR-ACE etiketi ile onaylanmıştır.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/muhendislik-fakultesi/mudek-akreditasyonu" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: Academic Staff */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-blue-600 font-bold text-sm tracking-wide block mb-2">Mühendislik Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">Güçlü<br/>Akademik<br/>Kadro</h2>
            </div>
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl mb-6 flex items-center justify-center border border-sky-100">
              <Globe className="w-20 h-20 text-sky-600/40" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Dünyanın saygın üniversitelerinde doktora derecelerini almış, uluslararası araştırma projeleri ve patentleri bulunan öğretim üyelerimiz öğrencilerimize rehberlik etmektedir.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/muhendislik-fakultesi/akademik-kadro" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </motion.section>

      <EngineeringTicket />
      <Footer />
    </main>
  );
}
