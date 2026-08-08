"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Scale, 
  Gavel, 
  BookOpen, 
  Award, 
  ChevronRight, 
  GraduationCap, 
  Plus, 
  Minus, 
  Landmark
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LawPage() {
  return (
    <main className="bg-slate-50 text-slate-800 font-sans min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <div className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-100 via-rose-50 to-white opacity-90"></div>
          {/* Glowing Orbs */}
          <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-red-400/20 rounded-full blur-[140px]"></div>
          <div className="absolute top-[20%] left-[-20%] w-[60vw] h-[60vw] bg-rose-300/30 rounded-full blur-[150px]"></div>
        </div>

        {/* Decorative Motion Emblem */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-10"
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <Scale className="w-[500px] h-[500px] text-red-900" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-700 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <Scale className="w-4 h-4 text-red-700" />
            Adaletin ve Geleceğin Savunucuları
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight drop-shadow-xl text-[#ce2225]"
          >
            Hukuk<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-[#ce2225]">
              Fakültesi
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
          >
            Hukukun üstünlüğüne inanan, etik değerlerle donanmış, ulusal ve uluslararası alanda yetkin geleceğin hukuk liderlerini yetiştiriyoruz. Çift dilli ve yenilikçi müfredatla adalet dünyasına yön verin.
          </motion.p>

          {/* Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-red-100 rounded-3xl p-8 text-left hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-red-900/5">
              <Scale className="w-10 h-10 text-red-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Küresel & Yenilikçi Müfredat</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Türk Hukuku temelinin yanında Uluslararası Ticaret, Yapay Zekâ Hukuku, KVKK ve AB Hukuku odaklı dersler.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-red-100 rounded-3xl p-8 text-left hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-red-900/5">
              <Gavel className="w-10 h-10 text-red-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Farazi Dava (Moot Court)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Modern kurgusal duruşma salonumuzda uluslararası dava yarışmaları ve simülasyonlarla pratik deneyim.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-red-100 rounded-3xl p-8 text-left hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-red-900/5">
              <BookOpen className="w-10 h-10 text-red-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Çift Dilli Yetkinlik</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Türkçe hukuk eğitimi yanında mesleki İngilizce, karşılaştırmalı hukuk ve uluslararası hukuk yetkinliği.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 1. Hedefimiz ve Hızlı Erişimler */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-red-600 font-bold text-sm tracking-wide block mb-2 uppercase">Hukuk Fakültesi</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Hedefimiz</h2>
            <div className="w-20 h-1 bg-red-600 mb-8 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Adaletin ve hukukun üstünlüğünün savunucusu olan, etik ilkelere bağlı, analitik ve eleştirel düşünme becerisine sahip, hem ulusal mevzuata hem de uluslararası hukuk normlarına hâkim vizyoner hukukçular yetiştirmektir.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.ozyegin.edu.tr/tr/hukuk" target="_blank" rel="noreferrer" className="px-6 py-3 bg-[#ce2225] hover:bg-red-700 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(206,34,37,0.3)]">
                Hukuk Lisans Programı
              </a>
              <a href="https://catalog.ozyegin.edu.tr/3d-flip-book/2026-2027-tercih-donemi-bilgilendirme-brosuru/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-semibold rounded-xl transition-all">
                Fakülte Broşürü
              </a>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-red-100 group bg-red-50/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-100/50 to-slate-100/50 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Landmark className="w-48 h-48 text-red-900/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Accreditation & Distinction Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-red-500/10 via-rose-600/5 to-red-500/5 border border-red-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-red-500/10 border-2 border-red-400/30 flex items-center justify-center">
              <Award className="w-12 h-12 text-red-600" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-red-900 mb-4">
                Uluslararası Farazi Dava (Moot Court) Yarışmaları ve Uygulamalı Hukuk Eğitimi
              </h3>
              <p className="text-red-950/80 text-lg leading-relaxed mb-6">
                Özyeğin Üniversitesi Hukuk Fakültesi, kurgusal duruşma salonlarında yetiştirdiği öğrencileriyle Philip C. Jessup ve Vis Moot gibi prestijli uluslararası dava simülasyonlarında ülkemizi temsil etmekte ve uygulama odaklı adalet anlayışını ön planda tutmaktadır.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/hukuk-fakultesi" target="_blank" rel="noreferrer" className="inline-block px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-red-600/20">
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
            <div className="sticky top-32 text-center lg:text-left">
              <div className="w-48 h-48 rounded-full bg-slate-200 border-4 border-slate-300 mx-auto lg:mx-0 overflow-hidden mb-6 flex items-center justify-center shadow-lg">
                <span className="text-slate-400 font-medium">Fotoğraf</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Prof. Dr. Yener Sözeri</h3>
              <p className="text-red-600 font-medium mb-6">Hukuk Fakültesi Dekanı</p>
              <div className="hidden lg:block w-12 h-1 bg-red-600 rounded-full"></div>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Hukuk eğitimi, sadece mevzuat bilgilerinin ezberlenmesinden ibaret değildir; adaleti arama bilinci, analitik düşünme yeteneği, etik duruş ve toplumsal meselelere akılcı çözümler sunabilme sanatıdır. Özyeğin Üniversitesi Hukuk Fakültesi olarak, öğrencilerimizi yalnızca bugünün değil, yarının karmaşık hukuk dünyasına hazırlıyoruz.
            </p>
            <p>
              Fakültemizin güçlü akademik kadrosu, ulusal ve uluslararası alanda saygın başarılara imza atmış yetkin öğretim üyelerinden oluşmaktadır. Müfredatımız, klasik hukuk disiplinlerini eksiksiz sunmanın yanı sıra Dijitalleşen Hukuk, Yapay Zekâ ve Hukuk, Kişisel Verilerin Korunması, Uluslararası Ticaret ve Tahkim Hukuku gibi güncel alanlarla zenginleştirilmiştir.
            </p>
            <p>
              Kurgusal Duruşma Salonumuz ve uluslararası kurgusal dava (Moot Court) takımlarımız sayesinde öğrencilerimiz, henüz lisans yıllarındayken karmaşık hukuki uyuşmazlıkları çözme ve savunma yapma pratikliği kazanırlar. Çift dilli (Türkçe & İngilizce) ders seçeneklerimiz ile mezunlarımız hem Türkiye barolarında hem de uluslararası arenada tercih edilen hukukçular olarak öne çıkmaktadır.
            </p>
            <p>
              Adaletin kılavuzluğunda, etik değerlerden ödün vermeden geleceği inşa etmek isteyen tüm aday öğrencilerimizi Özyeğin Üniversitesi Hukuk Fakültesi ailesine davet ediyorum.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Mezunlarımız & Bir Bölüm Üç Açı */}
      <section className="relative z-10 w-full bg-slate-100/70 border-y border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold text-sm tracking-wide block mb-2 uppercase">Hukuk Fakültesi</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Mezunlarımız</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Özyeğin Üniversitesi Hukuk Fakültesi öğrencileri, teorik alt yapıyı vaka analizleri, kurgusal dava çalışmaları ve sektör stajları ile pekiştiren dinamik bir eğitim sürecinden geçer.
              </p>
              <p>
                Mezunlarımız; serbest avukatlık, hakimlik-savcılık, uluslararası hukuk bürolarında danışmanlık, ulusal ve global şirketlerde hukuk müşavirliği, akademisyenlik ve uluslararası kuruluşlarda uzmanlık gibi geniş bir yelpazede fark yaratmaktadır.
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
          <span className="text-red-600 font-bold text-sm tracking-wide block mb-2 uppercase">Hukuk Fakültesi</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">ÖzÜ Hukuk Mezunları Güçlü Başlıyor</h2>
          <p className="text-xl text-red-700">Mezunlarımız ulusal ve uluslararası hukuk alanında öne çıkıyor</p>
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
            { value: "%48", label: "Mezuniyet anında veya öncesinde işe başlama", color: "text-red-600" },
            { value: "4 Ay", label: "Mezuniyet sonrası ortalama işe başlama süresi", color: "text-blue-600" },
            { value: "%15", label: "Uluslararası hukuk büroları ve yurt dışı kurumlar", color: "text-indigo-600" },
            { value: "%32", label: "Lisansüstü (LL.M.) eğitimine devam edenler", color: "text-purple-600" }
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
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Mezunlarımızın Çalıştığı Önde Gelen Kurumlar ve Bürolar</h3>
          
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
              { name: "Pekin & Pekin", count: 18 },
              { name: "Paksoy Hukuk Bürosu", count: 15 },
              { name: "Hergüner Bilgen Özeke", count: 14 },
              { name: "Esin Avukatlık Ortaklığı (Baker McKenzie)", count: 12 },
              { name: "Moral & Ortakları", count: 10 },
              { name: "PwC Türkiye Hukuk", count: 9 },
              { name: "KPMG Türkiye", count: 8 },
              { name: "Deloitte Türkiye", count: 8 },
              { name: "EY Türkiye", count: 7 },
              { name: "Türk Hava Yolları Hukuk", count: 6 },
              { name: "Trendyol Hukuk", count: 6 },
              { name: "Garanti BBVA Hukuk", count: 5 },
              { name: "İş Bankası Hukuk", count: 5 },
              { name: "Fiba Holding Hukuk", count: 5 },
              { name: "Yazıcıoğlu Hukuk", count: 4 }
            ].map((company, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 150 } }
                }}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-amber-50/50 transition-colors shadow-sm"
              >
                <span className="text-slate-700 font-semibold text-sm mb-2">{company.name}</span>
                <span className="text-amber-600 font-black text-xl">{company.count}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 6. Fakülte Öne Çıkanlar */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full bg-white py-24 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Card 1: Moot Court Salonu */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-amber-700 font-bold text-sm tracking-wide block mb-2">Hukuk Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">Farazi Dava<br/>(Moot Court)<br/>Salonu</h2>
            </div>
            <div className="w-full aspect-square md:aspect-[4/3] relative mb-6 overflow-hidden bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100">
              <Gavel className="w-24 h-24 text-amber-600/40" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Özyeğin Üniversitesi Hukuk Fakültesi, öğrencilerinin duruşma tecrübesi kazanmaları için tam donanımlı Kurgusal Duruşma Salonu&apos;na sahiptir. Dava simülasyonları ve uluslararası yarışma hazırlıkları bu özel alanda yürütülür.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/hukuk-fakultesi" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Uluslararası Başarılar */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-amber-700 font-bold text-sm tracking-wide block mb-2">Hukuk Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">Uluslararası<br/>Yarışmalar ve<br/>Dereceler</h2>
            </div>
            <div className="w-full aspect-square md:aspect-[4/3] relative mb-6 overflow-hidden bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200">
              <Award className="w-24 h-24 text-amber-500/40" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Fakülte Moot Court takımlarımız, Philip C. Jessup Uluslararası Law Moot Court Competition ve Willem C. Vis International Commercial Arbitration Moot gibi dünyanın en itibarlı hukuk yarışmalarında üniversitemizi ve ülkemizi başarıyla temsil etmektedir.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/hukuk-fakultesi" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: Academic Staff */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-amber-700 font-bold text-sm tracking-wide block mb-2">Hukuk Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">Akademik<br/>Kadro</h2>
            </div>
            <div className="w-full aspect-square md:aspect-[4/3] relative mb-6 overflow-hidden bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200">
              <GraduationCap className="w-24 h-24 text-slate-400/40" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Özyeğin Üniversitesi&apos;nin deneyimli akademisyenleri, hem akademik birikimleri hem de sektörel deneyimleriyle öğrencilere ilham veren rehberlerdir. Kamu Hukuku ve Özel Hukuk alanındaki duayen hocalarımız, analitik ve etik hukuk bilincini aşılar.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/hukuk-fakultesi/akademik-kadro" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </motion.section>

      {/* 7. Sıkça Sorulan Sorular */}
      <section className="relative z-10 w-full bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-slate-500">Program içerikleri, ÖSYM başarı sıralaması, staj ve kariyer imkânları hakkında merak edilen soruları yanıtladık.</p>
          </div>

          <div className="flex flex-col border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <FAQAccordion />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    { 
      q: "Özyeğin Üniversitesi Hukuk Fakültesi'nin eğitim dili nedir?", 
      a: "Hukuk Fakültemizde eğitim dili Türkçe olup, müfredatımızda zorunlu ve seçmeli mesleki İngilizce ile uluslararası hukuk dersleri yer almaktadır. Böylece öğrencilerimiz hem Türkiye barolarına kaydolma hakkı elde eder hem de küresel hukuk dünyasında rahatlıkla çalışabilirler." 
    },
    { 
      q: "Hukuk Fakültesi tercihinde ÖSYM başarı sırası şartı var mıdır?", 
      a: "Evet, ÖSYM YKS tercih kılavuzu uyarınca Hukuk programlarına yerleşebilmek için Eşit Ağırlık (EA) puan türünde en düşük başarı sırası şartının (ilk 125.000) sağlanması zorunludur." 
    },
    { 
      q: "Farazi Dava (Moot Court) yarışmaları ve uygulamalı eğitim imkânları nelerdir?", 
      a: "Fakültemizde uluslararası standartlarda tasarlanmış Kurgusal Duruşma Salonu bulunmaktadır. Öğrencilerimiz Philip C. Jessup Uluslararası Law Moot Court ve Vis Moot gibi prestijli uluslararası kurgusal dava yarışmalarına hazırlanmakta ve simülasyon dersleri almaktadır." 
    },
    { 
      q: "Mezuniyet sonrası kariyer olanakları nelerdir?", 
      a: "Mezunlarımız serbest veya kurumsal avukatlık, hâkimlik/savcılık, Noterlik, uluslararası hukuk bürolarında danışmanlık, ulusal ve uluslararası şirketlerde hukuk müşavirliği, diplomatlık ve akademisyenlik gibi geniş bir yelpazede görev alabilirler." 
    },
    { 
      q: "Çift Anadal (ÇAP) ve Yan Dal imkânları nelerdir?", 
      a: "Gerekli başarı şartlarını sağlayan öğrencilerimiz Hukuk Lisans Programı ile birlikte İşletme, Uluslararası İlişkiler, Psikoloji gibi bölümlerde Çift Anadal (ÇAP) veya Yan Dal yapma imkânına sahiptirler." 
    }
  ];

  return (
    <>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border-b border-slate-200 last:border-b-0">
            <button onClick={() => setOpenIndex(isOpen ? null : idx)} className="w-full flex items-center gap-4 p-5 text-left bg-white hover:bg-slate-50 transition-colors">
              {isOpen ? <Minus className="w-5 h-5 text-amber-700 shrink-0" /> : <Plus className="w-5 h-5 text-slate-400 shrink-0" />}
              <span className={`text-[15px] ${isOpen ? 'text-amber-900 font-bold' : 'text-slate-700 font-medium'}`}>{faq.q}</span>
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
