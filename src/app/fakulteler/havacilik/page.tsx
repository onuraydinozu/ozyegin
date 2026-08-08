"use client";

import { motion, useInView } from "framer-motion";
import { Plane, Compass, Globe, Wind, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function AviationPage() {
  return (
    <main className="bg-slate-50 text-slate-800 font-sans">
      <Header />
      
      {/* Hero Section (Contains Background, Airplane, and Titles) */}
      <div className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Dynamic Sky Background (Özyeğin Colors) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sky-200 via-blue-50 to-white opacity-90"></div>
          {/* Glowing Sun/Moon */}
          <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-sky-400/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-[20%] left-[-20%] w-[60vw] h-[60vw] bg-blue-300/30 rounded-full blur-[150px]"></div>
        </div>

        {/* Airplane Takeoff Animation (Zero Lag, Hardware Accelerated) */}
        <motion.div 
          className="absolute bottom-0 left-0 z-10"
          initial={{ x: "-20vw", y: "100vh", scale: 4, rotate: -15 }}
          animate={{ 
            x: ["-20vw", "40vw", "120vw"],
            y: ["100vh", "30vh", "-50vh"],
            scale: [3, 1.5, 0.4],
            rotate: [-15, -35, -45]
          }}
          transition={{ 
            duration: 3, 
            ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for realistic takeoff acceleration
            times: [0, 0.6, 1],
            delay: 0.2
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="450" 
            height="160" 
            viewBox="0 0 600 200" 
            className="drop-shadow-2xl"
          >
            {/* Tail Fin */}
            <path d="M 120 120 L 80 30 L 40 30 L 20 120 Z" fill="#0ea5e9" />
            
            {/* OZU logo on tail */}
            <text x="50" y="80" fill="white" fontSize="24" fontWeight="bold" transform="rotate(-15 60 80)">ÖzÜ</text>

            {/* Main Fuselage */}
            <path d="M 560 120 
                     C 595 120, 595 135, 595 135 
                     C 595 150, 560 150, 560 150 
                     L 40 150 
                     C 10 150, 0 135, 20 120 
                     Z" fill="#ffffff" />
                     
            {/* Cockpit Window */}
            <path d="M 580 135 L 560 135 L 565 126 L 585 126 Z" fill="#0284c7" />
            
            {/* Passenger Windows */}
            <g fill="#0284c7">
              {Array.from({length: 22}).map((_, i) => (
                <circle key={i} cx={160 + i * 16} cy="135" r="4" />
              ))}
            </g>

            {/* OZU AIRLINES text on fuselage */}
            <text x="180" y="115" fill="#0284c7" fontSize="32" fontWeight="900" fontStyle="italic" letterSpacing="2">
              ÖZÜ HAVA YOLLARI
            </text>
            
            {/* Front Door */}
            <rect x="525" y="125" width="8" height="20" rx="2" fill="#0ea5e9" />

            {/* Wing (Right side, facing us) */}
            <path d="M 380 145 L 440 200 L 370 200 L 290 145 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
            
            {/* Engine */}
            <rect x="360" y="155" width="60" height="24" rx="12" fill="#94a3b8" />
            {/* Engine front */}
            <ellipse cx="415" cy="167" rx="5" ry="10" fill="#1e293b" />
          </svg>
        </motion.div>

        {/* Cloud Layers (Parallax Effect) */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-white/60 to-transparent pointer-events-none blur-3xl z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        ></motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-sky-100 border border-sky-200 rounded-full text-sky-800 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <Plane className="w-4 h-4 text-sky-600" />
            Geleceğin Kaptanları ve Yöneticileri
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight drop-shadow-xl text-sky-950"
          >
            Havacılık ve<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Uzay Bilimleri
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Sınırları gökyüzünde değil, uzayın derinliklerinde arayanlar için tasarlandı. Türkiye&apos;nin en donanımlı havacılık fakültesinde geleceğe uçmaya hazır olun.
          </motion.p>

          {/* Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <Compass className="w-10 h-10 text-sky-500 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Pilotaj Eğitimleri</h3>
              <p className="text-slate-600 text-sm">Uluslararası standartlarda, en güncel simülatörler ve uçuş filosu ile tam donanımlı pilotaj eğitimi.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <Globe className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Havacılık Yönetimi</h3>
              <p className="text-slate-600 text-sm">Global havacılık endüstrisine yön verecek vizyoner yöneticiler yetiştiren uluslararası akredite program.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <Wind className="w-10 h-10 text-indigo-500 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Uzay Bilimleri</h3>
              <p className="text-slate-600 text-sm">Sadece atmosferde değil, uzay teknolojilerinde de çığır açacak yeni nesil mühendislik ve bilim yaklaşımları.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 1. Hedefimiz ve Hızlı Erişimler */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Hedefimiz</h2>
            <div className="w-20 h-1 bg-sky-500 mb-8 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Hızla büyüyen havacılık sektöründe başarıyla görev alan, havacılık sektörünü şekillendiren dinamikleri takip eden, bilgi teknolojilerini en ileri düzeyde kullanabilen, iletişim, liderlik, yaratıcılık ve grup çalışması gibi becerilere sahip tam donanımlı bireyler yetiştirmektedir.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.ozyegin.edu.tr/tr/havacilik-yonetimi" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                Havacılık Yönetimi
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/pilotaj" target="_blank" rel="noreferrer" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)]">
                Pilotaj
              </a>
              <a href="https://catalog.ozyegin.edu.tr/3d-flip-book/havacilik-ve-uzay-bilimleri-fakultesi-2026-2027-tr/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-semibold rounded-xl transition-all">
                Fakülte Broşürü
              </a>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-sky-100 group bg-sky-50/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-blue-50/50 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <Plane className="w-48 h-48 text-sky-900/5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. AABI Accreditation Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-amber-500/20 via-amber-600/20 to-yellow-500/10 border border-amber-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-amber-500/20 border-2 border-amber-400/50 flex items-center justify-center">
              <Globe className="w-12 h-12 text-amber-500" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-700 mb-4">
                AABI (Aviation Accreditation Board International)
              </h3>
              <p className="text-amber-900/80 text-lg leading-relaxed mb-6">
                Özyeğin Üniversitesi Havacılık ve Uzay Bilimleri Fakültesi Havacılık Yönetimi ve Pilotaj Programları, AABI (Aviation Accreditation Board International) Tarafından Avrupa’da ve Türkiye’de Akredite Edilen İlk Programlar oldu.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/havacilik-ve-uzay-bilimleri-fakultesi/aabi-aviation-accreditation-board-international" target="_blank" rel="noreferrer" className="inline-block px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors shadow-lg">
                Daha Fazla Bilgi
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
              <h3 className="text-2xl font-bold text-slate-900 text-center lg:text-left">Prof. Dr. Mehmet Burçin Ünlü</h3>
              <p className="text-sky-600 font-medium text-center lg:text-left mb-6">Havacılık ve Uzay Bilimleri Fakültesi Dekanı</p>
              <div className="hidden lg:block w-12 h-1 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Havacılık sektöründeki sürekli gelişim ve büyüme hızı, beraberinde nitelikli insan kaynağı ihtiyacını da getirmektedir. Her geçen yıl artan rekabet, havacılık alanına yapılan yatırımlar, ve teknolojik gelişmeler gibi etkenler, sektörün ihtiyaçlarını doğru analiz edebilecek ve gereklilikleri karşılayabilecek insan kaynağına olan ihtiyaca işaret etmektedir.
            </p>
            <p>
              Bu noktada, Özyeğin Üniversitesi Havacılık ve Uzay Bilimleri Fakültesi, havacılık sektörü için gerekli bilgi ve becerilere sahip insan kaynağını yetiştirmek üzere 2011 yılından itibaren havacılık eğitim faaliyetlerini sürdürmektedir. Fakültemiz, eğitim programı ve yaklaşımı, yenilikçi dersler, akademik kadro ve mezunları ile kısa sürede adından söz ettirmeyi başarmıştır. Yoğun teorik bilginin yanı sıra uygulamaya dönük eğitimler, staj imkanları, sektörün önde gelen kurumları ile işbirlikleri gibi avantajları sayesinde fakülte mezunlarımız kariyerlerini kolaylıkla şekillendirmektedirler.
            </p>
            <p>
              Havacılık ve Uzay Bilimleri Fakültesi olarak, 2021 yılında AABI (Aviation Accreditation Board International) tarafından hem Avrupa’da hem de Türkiye’de akredite edilen ilk fakülte olduk. Bu önemli başarı, verdiğimiz eğitimin uluslararası standartlarda olduğunun resmi bir göstergesi niteliğindedir. Aldığımız akreditasyon sayesinde, AABI tarafından akredite edilen, havacılık alanında eğitim veren üniversiteler arasında yerimizi aldık. Bu durum, öğrencilerimizin aldıkları eğitimlerinin ve üniversitemizdeki akademik ve idari süreçlerimizin sürekli geliştiği ve gereklilikleri sürekli karşıladığı anlamını taşımaktadır. Kendisini ispat eden eğitim ve faaliyetlerimiz ile hedefimiz, ülkemizde olduğu kadar küresel ölçekte de tercih edilen bir eğitim kurumu haline gelmektir. Bu doğrultuda, uluslararası havacılık mevzuat ve standartlarına uygun, kaliteli eğitim vererek, hem akademi hem sektör için nitelikli insan kaynağı yetiştirmeyi sürdüreceğiz.
            </p>
            <p>
              Böylece hem Türk havacılık sektörünün ihtiyaçlarını karşılamak hem de gençlerimizin küresel ölçekte kariyer yapmalarını sağlamak için çalışmaya devam edeceğiz. Elde ettiğimiz bu prestijli akreditasyon, verdiğimiz eğitim kalitesinin ve uluslararası düzeydeki iddiamızın somut bir göstergesidir. Havacılık alanındaki öncü rolümüzü sürdürerek, sektöre ve ülkemize katkı sunmaya devam edeceğiz.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Mezunlarımız & Bir Bölüm Üç Açı */}
      <section className="relative z-10 w-full bg-sky-50/50 border-y border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Mezunlarımız</h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Özyeğin Üniversitesinde öğrencilerimiz, hem teorik bilgiyi hem de pratik deneyimi bir arada sunan dengeli bir eğitim modeliyle yetişir. Vaka analizleri, proje çalışmaları ve uygulamalı derslerle zenginleştirilmiş bu model, yalnızca öğretici değil, aynı zamanda dönüştürücü bir öğrenme süreci sunar.
              </p>
              <p>
                Sektörle iç içe yürütülen bu eğitim anlayışı sayesinde öğrenciler, mezun olmadan önce iş dünyasını tanıma fırsatı bulur. Böylece, mezun olduklarında neyle karşılaşacaklarını bilen, bilinçli, kendine güvenen ve fark yaratan profesyoneller olarak kariyerlerine güçlü bir başlangıç yaparlar.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[50px] group-hover:bg-red-500/20 transition-all"></div>
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

      {/* 5. İstatistikler ve Çalışılan Kurumlar */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">ÖzÜ Mezunları Güçlü Başlıyor</h2>
          <p className="text-xl text-sky-700">Öğrencilerimiz mezun olmadan iş hayatına adım atıyor</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "%44", label: "Mezuniyet anında veya öncesinde işe başlama", color: "text-sky-500" },
            { value: "5 Ay", label: "Mezuniyet sonrası ortalama işe başlama süresi", color: "text-blue-500" },
            { value: "%12", label: "Yurt dışında çalışan mezun oranı", color: "text-indigo-500" },
            { value: "%37", label: "Lisansüstü eğitimde yurt dışını tercih edenler", color: "text-purple-500" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:bg-slate-50 transition-colors shadow-sm"
            >
              <div className={`text-5xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
              <p className="text-slate-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <p className="text-xs text-slate-500 text-center mb-16 italic">
          * Bu oranlar Haziran 2026 itibariyle ulaşılabilmiş son 3 yıl mezunlarımızın verilerine göre hesaplanmıştır.<br/>
          ** Bu oranlar Haziran 2026 itibariyle ulaşılabilmiş tüm mezunlarımızın verilerine göre hesaplanmıştır.
        </p>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Mezunlarımızın Çalıştığı Kurumlar</h3>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {[
              { name: "Türk Hava Yolları", count: 85 },
              { name: "Pegasus", count: 66 },
              { name: "Sun Express", count: 22 },
              { name: "Hitit", count: 16 },
              { name: "Corendon Airlines", count: 7 },
              { name: "Air France KLM", count: 6 },
              { name: "Ayjet", count: 5 },
              { name: "Aviation Parts", count: 4 },
              { name: "Fenix Havacılık", count: 4 },
              { name: "Çelebi Aviation", count: 3 },
              { name: "KEYVAN", count: 3 },
              { name: "Onur Air", count: 2 },
              { name: "MNG Airlines", count: 2 },
              { name: "SAS", count: 2 },
              { name: "TAV Airports", count: 2 },
              { name: "DHL", count: 2 },
              { name: "Qatar Airways", count: 2 },
              { name: "İGA İstanbul", count: 2 }
            ].map((company, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 150 } }
                }}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-sky-50 transition-colors shadow-sm"
              >
                <span className="text-slate-700 font-semibold text-sm mb-2">{company.name}</span>
                <span className="text-sky-600 font-black text-xl">{company.count}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 6. Fakülte Öne Çıkanlar (Simülatör, Ödül, Akademik Kadro) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full bg-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Card 1: Simulator Center */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-[#266295] font-bold text-sm tracking-wide block mb-2">Havacılık ve Uzay Bilimleri Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-none">ÖZÜ<br/>Simülatör<br/>Merkezi</h2>
            </div>
            <div className="w-full aspect-square md:aspect-[4/3] relative mb-6 overflow-hidden">
              <Image src="/ozu_simulator_merkezi.jpg" alt="ÖZÜ Simülatör Merkezi" fill className="object-cover" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Öğrencilerinin uçuş tecrübelerini artırmak ve onları mesleğe hazırlamak amacıyla “Simülatör Merkezi” kuran ilk üniversite olan Özyeğin Üniversitesi bu uygulama ile Pilotaj Lisans Programı’nı tamamlayan mezunlarının, iş başvurularının standart bir parçası olan simülatör deneyimini kazanmasını ve bulundukları ortamda fark yaratmasını sağlıyor.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/havacilik-ve-uzay-bilimleri-fakultesi/ozu-simulator-merkezi" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#266295] hover:bg-[#1a4569] text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Award */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-[#266295] font-bold text-sm tracking-wide block mb-2">Havacılık ve Uzay Bilimleri Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">Özyeğin<br/>Üniversitesi&apos;ne<br/>&quot;Yılın<br/>Havacılık ve<br/>Uzay Bilimleri<br/>Fakültesi<br/>Ödülü&quot;</h2>
            </div>
            <div className="w-full aspect-square md:aspect-[4/3] relative mb-6 overflow-hidden">
              <Image src="/ozu_havacilik_odulu.jpg" alt="Yılın Fakültesi Ödülü" fill className="object-cover" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Özyeğin Üniversitesi Havacılık ve Uzay Bilimleri Fakültesi, BLUESKY Havacılık Başarı Ödülleri kapsamında, “Yılın Havacılık ve Uzay Bilimleri Fakültesi” ödülüne layık görüldü. Ulusal ve uluslararası çapta havacılık sektörünü ileri taşıyan kurum ve kuruluşların değerlendirildiği ödül programında, Özyeğin Üniversitesi bu alana sunduğu akademik katkı ve sektörlerle iç içe eğitim anlayışı dolayısıyla ödülün sahibi oldu.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/duyurular/23534" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#266295] hover:bg-[#1a4569] text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: Academic Staff */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-[#266295] font-bold text-sm tracking-wide block mb-2">Havacılık ve Uzay Bilimleri Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">Akademik<br/>Kadro</h2>
            </div>
            <div className="w-full aspect-square md:aspect-[4/3] relative mb-6 mt-16 overflow-hidden">
              <Image src="/ozu_akademik_kadro.jpg" alt="Akademik Kadro" fill className="object-cover" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Özyeğin Üniversitesi’nin deneyimli akademisyenleri, hem akademik birikimleri hem de sektörel deneyimleriyle öğrencilere ilham veren rehberlerdir. Öğrenmeyi teoriyle sınırlamayıp, gerçek dünya uygulamalarıyla zenginleştiren bu öğretim üyeleri; öğrencilerin analitik düşünme, problem çözme ve yenilikçi yaklaşımlar geliştirme becerilerini destekler. Açık iletişime önem veren ve her öğrencinin potansiyeline ulaşması için birebir ilgi gösteren akademisyenler, üniversite yaşamınızı sadece bir eğitim süreci değil, aynı zamanda kişisel gelişim yolculuğu haline getirir.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/havacilik-ve-uzay-bilimleri-fakultesi/akademik-kadro" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#266295] hover:bg-[#1a4569] text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </motion.section>

        {/* Department Heads Testimonials */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
          <div className="text-center mb-16">
            <p className="text-sky-600 font-medium mb-2">Havacılık ve Uzay Bilimleri Fakültesi Dekanlığı</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Bölüm Başkanlarımız</h2>
          </div>

          <div className="space-y-12">
            {/* Testimonial 1: Leyla Adiloğlu Yalçınkaya */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 text-center max-w-5xl mx-auto shadow-xl relative">
              <div className="flex justify-center gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-slate-600 md:text-lg leading-relaxed italic mb-10 max-w-4xl mx-auto">
                “Havacılık Yönetimi bölümümüz, hava taşımacılığı alanına ilgi duyan ve bu alanda kendini geliştirmek ve farklılaşmak isteyen adaylara yönelik hazırlanmış bir programdır. Bizler, fakültemizin kuruluşundan bu yana, teori ve pratiği harmanlayarak; derslerimizi ve faaliyetlerimizi sürekli geliştirerek öğrencilerimizi hem sektöre hem de akademik dünyaya hazırlamaya çalışıyoruz. Farklı sesleri dinleyen, kapsayıcı ve eşitlikçi bir yaklaşımla; ders yükleri ve beklentilerimiz ile öğrencilerimizi çoğunlukla zorlayarak ama aynı zamanda çeşitli faaliyetleri birlikte düzenleyerek, onları yarışmalara, konferanslara veya diğer sosyal aktivitelere katılmaya teşvik ederek hep birlikte daha iyiye ulaşmaya gayret ediyoruz. Bu yolculukta, hem üniversitemizin hem de dış paydaşlarımızın güçlü desteğini arkamızda hissettik ve bu desteği kalıcı bir değere dönüştürmek için özveriyle çalıştık. En büyük gururumuz öğrencilerimiz; gelişime açık yaklaşımımız ve hem literatüre hem de sektöre sunduğumuz katkılardır. Bu yolda, bizlerle yürümek isteyen tüm adayları, Özyeğin Üniversitesi Havacılık Yönetimi programına katılmaya davet ediyoruz.”
              </p>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full mb-4 border-2 border-slate-200 flex items-center justify-center overflow-hidden">
                   <span className="text-slate-400 text-xs">Fotoğraf</span>
                </div>
                <h4 className="text-slate-900 font-bold text-lg">Dr. Öğr. Üyesi Leyla Adiloğlu Yalçınkaya</h4>
                <span className="text-slate-500 text-sm">Havacılık Yönetimi Bölüm Başkanı</span>
              </div>
            </div>

            {/* Testimonial 2: Semih Soran */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 text-center max-w-5xl mx-auto shadow-xl relative">
              <div className="flex justify-center gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-slate-600 md:text-lg leading-relaxed italic mb-10 max-w-4xl mx-auto">
                “Özyeğin Üniversitesi Pilotaj Lisans Programı, pilot eğitimindeki mevcut tecrübesi ile uzun yıllardır sektöre başarılı mezunlar vermiş ve bu süreçte devamlı olarak süreçlerini geliştirerek üniversiteler arasında öncü olmuştur. İlk pilotaj programı, ilk simulatör merkezi, ilk dil sınav merkezi, ilk akredite olan pilotaj bölümü... Mezunlarımız, üst düzeyde bilgi, beceri, yabancı dil ve özgüvene sahip bir şekilde yurt içi ve yurt dışında havacılık sektöründe hizmet veren işletmelerde pilot olarak çalışma imkan ve ayrıcalığına sahip olmuş ve ilk mezunlarımız Hava Yolu Kaptanı olmuşlardır. Bizi gururlandıran ve aynı zamanda heyecanlandıran bu unsurlar gelecek dönemde bizlere güç sağlayacak kilometre taşlarıdır. Bundan sonraki süreçte daha çok çalışarak ülkemizde ve dünyada tüm pilotlarla işe giriş aşamalarında rekabet edebilecek güçte, beceride, bilgili ve özgüvenli pilotlar yetiştirmeye devam edeceğiz. Mezunlarımızın tüm süreçlerde arkasında destek olarak hayallerini gerçeğe dönüştürme noktasında yanlarındayız. Gelecekte öğrencimiz olacak, uçmayı ve pilot olmayı, hayallerinin ötesine taşıyarak, gerçeğe ve yaşam biçimine dönüştürmek isteyen aday öğrencilerimizi bekliyoruz. Gelecek havacılık tutkunu gençler için her daim açık ve aydınlık olsun...”
              </p>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full mb-4 border-2 border-slate-200 flex items-center justify-center overflow-hidden">
                   <span className="text-slate-400 text-xs">Fotoğraf</span>
                </div>
                <h4 className="text-slate-900 font-bold text-lg">Doç. Dr. Semih Soran</h4>
                <span className="text-slate-500 text-sm">Pilotaj Lisans Programı Eğitim Müdürü & Bölüm Başkanı</span>
              </div>
            </div>
          </div>
        </section>
      <Footer />
    </main>
  );
}
