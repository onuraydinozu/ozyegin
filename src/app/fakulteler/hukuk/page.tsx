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
  Landmark,
  Cpu, 
  Shield, 
  Coins, 
  Handshake, 
  Globe, 
  Map, 
  Briefcase, 
  FileText, 
  Building2, 
  Terminal, 
  Users, 
  FileSearch, 
  Fingerprint, 
  Bitcoin, 
  Building, 
  FileSignature, 
  Video,
  QrCode
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LawTicket from "@/components/tickets/LawTicket";

export default function LawFacultyPage() {
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

      {/* 1. "Law 2.0 & LegalTech" Uzmanlık Hub'ı */}
      <section className="relative z-10 w-full py-24 bg-slate-900 border-t border-slate-700/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <span className="text-red-500 font-bold text-sm tracking-widest uppercase mb-4 block">GELECEĞİN HUKUKU</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Law 2.0 & LegalTech <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Uzmanlık Hub'ı</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">Klasik Borçlar Hukuku'nun ötesine geçiyoruz. Günümüzün milyar dolarlık yeni hukuk alanlarına odaklanan uzmanlık yollarını keşfet.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="group bg-slate-800/50 backdrop-blur-md border border-slate-700 hover:border-red-500/50 rounded-3xl p-8 transition-all duration-300 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] group-hover:bg-red-500/20 transition-all"></div>
                 <Cpu className="w-12 h-12 text-red-400 mb-6" />
                 <h3 className="text-xl font-bold text-white mb-4">Yapay Zeka & Siber Hukuk</h3>
                 <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Fingerprint className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> AI Etiği ve Algoritmik Sorumluluk</li>
                    <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> KVKK & GDPR Uyum Süreçleri</li>
                    <li className="flex items-start gap-2"><Terminal className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Siber Suçlar ve Dijital Deliller</li>
                 </ul>
              </div>
              {/* Card 2 */}
              <div className="group bg-slate-800/50 backdrop-blur-md border border-slate-700 hover:border-red-500/50 rounded-3xl p-8 transition-all duration-300 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] group-hover:bg-red-500/20 transition-all"></div>
                 <Bitcoin className="w-12 h-12 text-red-400 mb-6" />
                 <h3 className="text-xl font-bold text-white mb-4">Fintek & Blokzincir</h3>
                 <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><FileSignature className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Akıllı Sözleşmeler (Smart Contracts)</li>
                    <li className="flex items-start gap-2"><Coins className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Kripto Varlık Regülasyonları</li>
                    <li className="flex items-start gap-2"><Building className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Dijital Bankacılık Hukuku</li>
                 </ul>
              </div>
              {/* Card 3 */}
              <div className="group bg-slate-800/50 backdrop-blur-md border border-slate-700 hover:border-red-500/50 rounded-3xl p-8 transition-all duration-300 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] group-hover:bg-red-500/20 transition-all"></div>
                 <Globe className="w-12 h-12 text-red-400 mb-6" />
                 <h3 className="text-xl font-bold text-white mb-4">Ticaret & Uluslararası Tahkim</h3>
                 <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Handshake className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Şirket Birleşmeleri (M&A)</li>
                    <li className="flex items-start gap-2"><Building2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Uluslararası Yatırım Uyuşmazlıkları</li>
                    <li className="flex items-start gap-2"><Scale className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Londra / Cenevre Tahkim Kuralları</li>
                 </ul>
              </div>
              {/* Card 4 */}
              <div className="group bg-slate-800/50 backdrop-blur-md border border-slate-700 hover:border-red-500/50 rounded-3xl p-8 transition-all duration-300 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] group-hover:bg-red-500/20 transition-all"></div>
                 <BookOpen className="w-12 h-12 text-red-400 mb-6" />
                 <h3 className="text-xl font-bold text-white mb-4">Fikri Mülkiyet & Start-Up</h3>
                 <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Briefcase className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Girişimcilik Ekosistemi</li>
                    <li className="flex items-start gap-2"><FileSearch className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Patent ve Marka Hukuku</li>
                    <li className="flex items-start gap-2"><Users className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Melek Yatırımcı Sözleşmeleri</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* 2. "Moot Court & Hukuk Kliniği" 360° Pratik Laboratuvarı */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
         <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-bold tracking-widest uppercase mb-4">SİMÜLASYON & PRATİK</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">"Moot Court & Hukuk Kliniği"<br/>360° Pratik Laboratuvarı</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Hukuk sadece amfide dinlenmez, duruşma salonunda yaşanır. Türkiye'nin en aktif pratik hukuk laboratuvarına hoş geldin.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gradient-to-br from-red-900 to-rose-950 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-end min-h-[400px] shadow-2xl">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.ozyegin.edu.tr/sites/default/files/images/hukuk/moot-court.jpg')] bg-cover bg-center mix-blend-overlay"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-950/80 to-transparent"></div>
               <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="bg-red-500/30 p-2 rounded-lg backdrop-blur-sm"><Video className="w-6 h-6 text-red-200" /></div>
                     <span className="font-bold tracking-wider text-red-200 uppercase text-sm">ÖzÜ Kurgusal Duruşma Salonu</span>
                  </div>
                  <h3 className="text-3xl font-black mb-4">Birebir Adliye Düzeni ve Kayıt Altyapısı</h3>
                  <p className="text-red-100/80 text-lg max-w-2xl">Duruşma yönetimi, çapraz sorgu ve savunma tekniklerini, ses ve görüntü kayıt sistemiyle donatılmış modern simülasyon salonumuzda gerçeğe en yakın şartlarda deneyimlersin.</p>
               </div>
            </div>
            
            <div className="flex flex-col gap-8">
               <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 flex-1">
                  <Award className="w-10 h-10 text-red-600 mb-4" />
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Uluslararası Takımlar</h4>
                  <p className="text-slate-600 text-sm mb-4">Dünyanın en prestijli kurgusal duruşma yarışmaları olan Philip C. Jessup ve Willem C. Vis'te fakültemizi ve ülkemizi küresel arenada temsil etme fırsatı.</p>
                  <div className="flex flex-wrap gap-2">
                     <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold">Willem C. Vis</span>
                     <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold">Jessup</span>
                  </div>
               </div>
               <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 flex-1">
                  <Handshake className="w-10 h-10 text-red-600 mb-4" />
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Hukuk Kliniği (Legal Clinic)</h4>
                  <p className="text-slate-600 text-sm">Öğrencilerin akademik danışmanlar eşliğinde gerçek hukuki vakalara dahil olarak toplumsal fayda sağladığı ve henüz öğrenciyken pratik kazandığı uygulama modeli.</p>
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

      {/* 3. Çift Dil & Uluslararası Hukuk Geçidi */}
      <section className="relative z-10 w-full py-24 bg-red-50 border-y border-red-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                 <span className="text-red-600 font-bold text-sm tracking-widest uppercase mb-4 block">GLOBAL LEGAL PASSPORT</span>
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Çift Dil & Uluslararası Hukuk Geçidi</h2>
                 <p className="text-lg text-slate-600 mb-8 leading-relaxed">Sadece Türkiye'de değil, tüm dünyada hukuk yapabilmek için ihtiyacınız olan altyapı. "Yurt dışı imkanı var mı?" sorusunun ÖzÜ'deki net cevabı.</p>
                 
                 <div className="space-y-6">
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-red-100 shadow-sm shrink-0">
                          <Map className="w-6 h-6 text-red-600" />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">Alman & İsviçre Hukuku Entegrasyonu</h4>
                          <p className="text-slate-600">Türk Medeni ve Borçlar Hukuku'nun kökeni olan Alman ve İsviçre sistemine tam hakimiyet sağlayan Almanca seçmeli dersler ve akademik partnerlikler.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-red-100 shadow-sm shrink-0">
                          <FileText className="w-6 h-6 text-red-600" />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">Hukuk İngilizcesi & Legal Writing</h4>
                          <p className="text-slate-600">Uluslararası sözleşme yazımı (Contract Drafting), tahkim dili ve İngilizce dilekçe tekniklerini kapsayan ileri seviye mesleki dil eğitimi.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-red-100 shadow-sm shrink-0">
                          <GraduationCap className="w-6 h-6 text-red-600" />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">Yurt Dışı LL.M. Hazırlığı</h4>
                          <p className="text-slate-600">Amerika ve Avrupa'nın en iyi hukuk fakültelerinden (Harvard, Columbia, Leiden vb.) kabul alma ve burs bulma süreçlerinde etkin danışmanlık.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 w-full h-[500px] relative bg-white rounded-3xl border border-red-100 shadow-2xl p-6 flex flex-col justify-center items-center">
                 <Globe className="w-64 h-64 text-red-50 absolute opacity-50" />
                 <div className="relative z-10 w-full max-w-sm">
                    <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-2xl transform rotate-3">
                       <h3 className="font-bold text-xl mb-4 text-red-400">ÖzÜ Global Legal Passport</h3>
                       <div className="space-y-4">
                          <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                             <span className="text-slate-400 text-sm">Destination</span>
                             <span className="font-mono font-bold">WORLDWIDE</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                             <span className="text-slate-400 text-sm">Class</span>
                             <span className="font-mono font-bold">PREMIUM LEGAL</span>
                          </div>
                          <div className="flex justify-between items-center pb-2">
                             <span className="text-slate-400 text-sm">Languages</span>
                             <span className="font-mono font-bold text-emerald-400">TR / EN / DE</span>
                          </div>
                       </div>
                       <QrCode className="w-full mt-6 h-12 text-slate-500 opacity-50" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Kariyer Yolları & Sektör Ağı Dashboard'u */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
         <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-slate-700 text-sm font-bold tracking-widest uppercase mb-4">MEZUN AĞI & KARİYER</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Kariyer Yolları & Sektör Ağı <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500">Dashboard'u</span></h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Mezunlarımız nerede? Dev hukuk bürolarından global şirketlerin hukuk müşavirliklerine kadar ÖzÜ Hukuk ekosistemi verileri.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6"><Building2 className="w-6 h-6" /></div>
               <h3 className="text-4xl font-black text-slate-900 mb-2">%35+</h3>
               <h4 className="font-bold text-slate-800 mb-2">Tier-1 Hukuk Büroları</h4>
               <p className="text-sm text-slate-500">Uluslararası birleşme ve satın almalara (M&A) bakan en büyük ve prestijli dev hukuk bürolarında çalışan mezun oranı.</p>
            </div>
            {/* Stat Card 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Briefcase className="w-6 h-6" /></div>
               <h3 className="text-4xl font-black text-slate-900 mb-2">%25</h3>
               <h4 className="font-bold text-slate-800 mb-2">In-House Counsel</h4>
               <p className="text-sm text-slate-500">THY, Trendyol, Garanti BBVA, Unilever gibi devlerin şirket içi hukuk departmanlarında hukuk müşaviri olarak görev alanlar.</p>
            </div>
            {/* Stat Card 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6"><Scale className="w-6 h-6" /></div>
               <h3 className="text-4xl font-black text-slate-900 mb-2">%15</h3>
               <h4 className="font-bold text-slate-800 mb-2">Hakimlik & Akademi</h4>
               <p className="text-sm text-slate-500">Adalet Bakanlığı sınavlarında yüksek başarı oranlarıyla yargı kurumlarına yerleşenler ve akademide ilerleyenler.</p>
            </div>
            {/* Stat Card 4 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6"><GraduationCap className="w-6 h-6" /></div>
               <h3 className="text-4xl font-black text-slate-900 mb-2">%30</h3>
               <h4 className="font-bold text-slate-800 mb-2">ÇAP & Yan Dal Oranı</h4>
               <p className="text-sm text-slate-500">Hukuk + İşletme, Hukuk + Uluslararası İlişkiler veya Bilgisayar Mühendisliği ile multidisipliner bir kariyere adım atanlar.</p>
            </div>
         </div>

         {/* Big Law Logolar */}
         <div className="mt-16 bg-slate-900 rounded-3xl p-10 text-center relative overflow-hidden">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Mezunlarımızın Kariyer İnşa Ettiği Bazı Dev Kurumlar</h4>
            <div className="flex flex-wrap justify-center gap-6 opacity-80">
               <span className="px-6 py-3 bg-slate-800 text-white rounded-lg font-mono font-bold border border-slate-700">Pekin & Pekin</span>
               <span className="px-6 py-3 bg-slate-800 text-white rounded-lg font-mono font-bold border border-slate-700">Paksoy</span>
               <span className="px-6 py-3 bg-slate-800 text-white rounded-lg font-mono font-bold border border-slate-700">Hergüner</span>
               <span className="px-6 py-3 bg-slate-800 text-white rounded-lg font-mono font-bold border border-slate-700">Baker McKenzie</span>
               <span className="px-6 py-3 bg-slate-800 text-white rounded-lg font-mono font-bold border border-slate-700">Türk Hava Yolları</span>
               <span className="px-6 py-3 bg-slate-800 text-white rounded-lg font-mono font-bold border border-slate-700">PwC Hukuk</span>
               <span className="px-6 py-3 bg-slate-800 text-white rounded-lg font-mono font-bold border border-slate-700">Trendyol</span>
            </div>
         </div>
      </section>

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

      <LawTicket />
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
