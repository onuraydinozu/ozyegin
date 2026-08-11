"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Brain, 
  Globe, 
  Users, 
  ChevronRight, 
  GraduationCap, 
  Award, 
  Plus, 
  Minus,
  Eye,
  BrainCircuit,
  HeartPulse,
  Baby,
  Globe2,
  Database,
  LineChart,
  Terminal,
  Stethoscope,
  Briefcase,
  Building
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialScienceTicket from "@/components/tickets/SocialScienceTicket";

export default function SocialSciencesPage() {
  return (
    <main className="bg-slate-50 text-slate-800 font-sans min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section (Contains Dynamic Indigo/Violet Background and Interactive Motion Graphic) */}
      <div className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex flex-col justify-center pt-24 pb-16">
        
        {/* Dynamic Glowing Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-100/70 via-purple-50/40 to-white opacity-90"></div>
          {/* Glowing Aura Spheres */}
          <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-300/30 rounded-full blur-[140px]"></div>
          <div className="absolute top-[25%] left-[-15%] w-[55vw] h-[55vw] bg-purple-300/30 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[10%] right-[15%] w-[40vw] h-[40vw] bg-rose-200/30 rounded-full blur-[120px]"></div>
        </div>

        {/* Decorative Floating Nodes Graphic */}
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none opacity-40 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
        >
          <div className="relative w-full h-full">
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute top-24 right-[15%] w-64 h-64 border border-indigo-200 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <div className="w-48 h-48 border border-purple-300/50 rounded-full flex items-center justify-center">
                <Brain className="w-20 h-20 text-indigo-400/40" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ 
                y: [0, 25, 0],
                rotate: [0, -8, 0]
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 left-[10%] w-72 h-72 border border-purple-200 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <div className="w-56 h-56 border border-indigo-300/40 rounded-full flex items-center justify-center">
                <Globe className="w-24 h-24 text-purple-400/30" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-16 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-100/90 border border-indigo-200 rounded-full text-indigo-900 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-sm"
          >
            <Brain className="w-4 h-4 text-indigo-600" />
            İnsanı, Toplumu ve Dünyayı Anlamak
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight drop-shadow-sm text-slate-900"
          >
            Sosyal Bilimler<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-[#DF1934]">
              Fakültesi
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            İnsan davranışlarını, toplumsal yapıları ve küresel dinamikleri dönüştürücü araştırmalar ve yenilikçi müfredat ile inceleyin. Eleştirel düşünen, etik sorumluluk sahibi geleceğin liderleri arasına katılın.
          </motion.p>

          {/* Department Highlights Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          >
            <div className="bg-white/90 backdrop-blur-xl border border-indigo-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl text-left">
              <Brain className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Psikoloji (İngilizce)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                İnsan zihnini, duygusal süreçleri ve davranışları bilimsel yöntemlerle inceleyen; TPD akreditasyonuna sahip uygulama ve araştırma odaklı lisans eğitimi.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xl border border-purple-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl text-left">
              <Globe className="w-10 h-10 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Uluslararası İlişkiler (İngilizce)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Diplomasi, küresel siyaset, güvenlik ve uluslararası hukuk alanlarında derinleşerek dünya sorunlarına analitik çözümler üreten vizyoner program.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-xl border border-rose-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl text-left">
              <Users className="w-10 h-10 text-rose-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Antropoloji (İngilizce)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                İş antropolojisi ve dijital etnografi gibi çağdaş alanlarıyla Türkiye&apos;de öncü, insan odaklı strateji ve kültür analizi kazandıran yenilikçi disiplin.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 1. Hedefimiz ve Hızlı Erişimler */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-indigo-600 font-bold text-sm tracking-wide block mb-2 uppercase">Sosyal Bilimler Fakültesi</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Hedefimiz</h2>
            <div className="w-20 h-1 bg-indigo-600 mb-8 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Özyeğin Üniversitesi Sosyal Bilimler Fakültesi; öğrencilerini sürdürülebilir kariyerler için hazırlarken aynı zamanda sosyal sorumluluğu yüksek, açık görüşlü, etik değerlere bağlı, eleştirel düşünebilen ve yaşadıkları çevrenin bilinçli ve aktif katılımcıları olan bireyler yetiştirmeyi amaçlamaktadır.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.ozyegin.edu.tr/tr/psikoloji" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)]"
              >
                Psikoloji
              </a>
              <a 
                href="https://www.ozyegin.edu.tr/tr/uluslararasi-iliskiler" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)]"
              >
                Uluslararası İlişkiler
              </a>
              <a 
                href="https://www.ozyegin.edu.tr/tr/antropoloji" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)]"
              >
                Antropoloji
              </a>
              <a 
                href="https://catalog.ozyegin.edu.tr/3d-flip-book/sosyal-bilimler-fakultesi-2026-2027-tr/" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold rounded-xl transition-all"
              >
                Fakülte Broşürü
              </a>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/50 via-purple-100/30 to-rose-100/30 z-10"></div>
            <div className="relative z-20 flex flex-col items-center p-8 text-center">
              <Brain className="w-32 h-32 text-indigo-600/20 group-hover:scale-110 transition-all duration-700 mb-4" />
              <span className="text-xl font-bold text-slate-800 mb-2">Kuramdan Uygulamaya Sosyal Bilimler</span>
              <p className="text-slate-600 text-sm max-w-md">Disiplinlerarası araştırmalar, laboratuvar çalışmaları ve toplumsal fayda odaklı saha projeleri.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TPD Akreditasyonu & Disiplinlerarası Eğitim Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          {/* Background Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-white/10 border-2 border-indigo-400/50 flex items-center justify-center backdrop-blur-md">
              <Award className="w-12 h-12 text-indigo-300" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <span className="inline-block px-4 py-1 bg-indigo-500/30 border border-indigo-400/40 rounded-full text-indigo-200 text-xs font-bold tracking-widest uppercase mb-3">
                Uluslararası Standartlarda Eğitim
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                TPD Akreditasyonu ve Disiplinlerarası Araştırma Yetkinliği
              </h3>
              <p className="text-slate-200 text-lg leading-relaxed mb-6">
                Özyeğin Üniversitesi Psikoloji Bölümü, Türk Psikologlar Derneği (TPD) tarafından akredite edilmiş olup; Uluslararası İlişkiler ve Antropoloji bölümlerimizle birlikte lisans düzeyinde doğrudan bilimsel araştırmalara katılım ve ÇAP / Yan Dal imkanları sunmaktadır.
              </p>
              <a 
                href="https://www.ozyegin.edu.tr/tr/sosyal-bilimler-fakultesi" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block px-6 py-3 bg-white text-indigo-950 font-bold rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Akreditasyon & Detaylar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dekan'ın Mesajı */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="sticky top-32 text-center lg:text-left">
              <div className="w-48 h-48 rounded-full bg-slate-200 border-4 border-white shadow-xl mx-auto lg:mx-0 overflow-hidden mb-6 flex items-center justify-center relative">
                <span className="text-slate-500 font-medium">Fotoğraf</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Prof. Dr. Ali İzzet Tekcan</h3>
              <p className="text-indigo-600 font-medium mb-6">Sosyal Bilimler Fakültesi Dekan V.</p>
              <div className="hidden lg:block w-12 h-1 bg-indigo-600 rounded-full"></div>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-6 text-slate-600 text-[17px] leading-relaxed">
            <h4 className="text-2xl font-bold text-slate-900 mb-4">
              Özyeğin Üniversitesi Sosyal Bilimler Fakültesi&apos;ne Hoş Geldiniz!
            </h4>
            <p>
              Sosyal Bilimler Fakültesi olarak temel amacımız; öğrencilerimizi sürdürülebilir kariyerler için en üst düzeyde hazırlarken, aynı zamanda sosyal sorumluluğu yüksek, açık görüşlü, etik ilkelere bağlı, eleştirel düşünebilen ve yaşadıkları çevrenin bilinçli ve aktif katılımcıları olan bireyler olarak yetiştirmektir.
            </p>
            <p>
              Fakültemizde öğrenme deneyimi yalnızca geleneksel derslik duvarlarıyla sınırlı kalmamaktadır. Psikoloji, Uluslararası İlişkiler ve Antropoloji bölümlerimizdeki öğrencilerimiz; kuramsal derslerin ötesine geçerek saha araştırmaları, psikoloji laboratuvar çalışmaları, hastane ve kurum stajları ile dezavantajlı gruplara yönelik toplumsal fayda projelerinde bizzat yer alırlar.
            </p>
            <p>
              Özyeğin Üniversitesi&apos;nin güçlü araştırma üniversitesi kimliği sayesinde, öğrencilerimiz henüz lisans yıllarındayken ulusal ve uluslararası araştırma projelerine dahil olmakta, öğretim üyelerimizle birlikte makaleler ve sunumlar hazırlayarak akademide ve sektörde fark yaratan yetkinlikler kazanmaktadır.
            </p>
            <p>
              Fakültemiz bünyesinde sunulan disiplinlerarası çift anadal (ÇAP) ve yan dal olanakları, öğrencilerimizin çok yönlü bir entelektüel derinlik ve kariyer esnekliği elde etmelerini sağlamaktadır. İnsanı, toplumu ve küresel olguları bilimsel titizlikle kavramak ve dünyayı daha yaşanabilir kılacak çözümler üretmek isteyen tüm gençleri aramıza davet ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Mezunlarımız & Bir Bölüm Üç Açı */}
      <section className="relative z-10 w-full bg-white border-y border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold text-sm tracking-wide block mb-2 uppercase">Sosyal Bilimler Fakültesi</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Mezunlarımız</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Özyeğin Üniversitesi Sosyal Bilimler Fakültesi mezunları, yalnızca teorik analiz yöntemlerine hakim olmakla kalmaz; aynı zamanda insan odaklı problem çözme, veri analizi, araştırma metodolojisi ve çoklu kültürle iletişim becerileri kazanırlar.
              </p>
              <p>
                Sektörle iç içe stajlar ve araştırma projeleri sayesinde mezunlarımız; küresel şirketlerden sivil toplum kuruluşlarına, uluslararası örgütlerden klinik ve akademilere uzanan geniş bir yelpazede başarıyla görev alırlar.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[50px] group-hover:bg-red-500/20 transition-all"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Bir Bölüm Üç Açı</h3>
              <p className="text-slate-500 mb-8">
                Lisans bölümlerimizi akademisyenlerimizin, mezunlarımızın ve öğrencilerimizin deneyimlerinden yola çıkarak tanıtan YouTube video serimize buradan erişebilirsiniz.
              </p>
              <a 
                href="https://youtube.com/playlist?list=PLKzTz6QQRYz3XV0HyCjcrTS_BXrKp_NFc" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#FF0000] hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-500/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                Seriyi İzle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Transition (Light to Dark) */}
      <div className="w-full h-32 bg-gradient-to-b from-white to-slate-900 pointer-events-none"></div>

      {/* 4. Research & Clinical Career Matrix (Replaces old İstatistikler) */}
      <section className="relative z-10 w-full py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-2 block">CAREER MATRIX</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Sosyal Bilimler Mezunu Ne İş Yapar?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Veriyle desteklenen net istatistikler ve global istihdam haritası.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
             {/* Path 1 */}
             <div className="bg-slate-800 border border-slate-700/50 rounded-3xl p-8 hover:border-indigo-500/50 transition-colors">
                <Stethoscope className="w-10 h-10 text-indigo-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Klinik & Akademik Yol</h3>
                <p className="text-slate-400 text-sm mb-6">Yurt içi ve yurt dışı saygın üniversitelerde klinik psikoloji yüksek lisansı ve doktora (PhD) kabulleri.</p>
                <div className="w-full bg-slate-800 rounded-full h-2 mb-2"><div className="bg-indigo-500 h-2 rounded-full" style={{width: '37%'}}></div></div>
                <span className="text-xs font-mono text-indigo-400">%37 Lisansüstü Eğitime Devam</span>
             </div>
             {/* Path 2 */}
             <div className="bg-slate-800 border border-slate-700/50 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors">
                <Briefcase className="w-10 h-10 text-emerald-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Kurumsal, İK & Nöropazarlama</h3>
                <p className="text-slate-400 text-sm mb-6">Dev şirketlerin İnsan Kaynakları, Kullanıcı Deneyimi (UX Research) ve Tüketici Davranışı departmanları.</p>
                <div className="w-full bg-slate-800 rounded-full h-2 mb-2"><div className="bg-emerald-500 h-2 rounded-full" style={{width: '44%'}}></div></div>
                <span className="text-xs font-mono text-emerald-400">%44 Kurumsal İstihdam</span>
             </div>
             {/* Path 3 */}
             <div className="bg-slate-800 border border-slate-700/50 rounded-3xl p-8 hover:border-rose-500/50 transition-colors">
                <Building className="w-10 h-10 text-rose-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Uluslararası Örgütler & NGO</h3>
                <p className="text-slate-400 text-sm mb-6">Birleşmiş Milletler, AB organları, Think-Tank kuruluşları ve kamu diplomasisi uzmanlığı.</p>
                <div className="w-full bg-slate-800 rounded-full h-2 mb-2"><div className="bg-rose-500 h-2 rounded-full" style={{width: '19%'}}></div></div>
                <span className="text-xs font-mono text-rose-400">%19 STK ve Uluslararası Örgüt</span>
             </div>
          </div>
          
          {/* Static Institution Tags */}
          <div className="flex flex-wrap justify-center gap-3">
             {["Birleşmiş Milletler (UN)", "UNICEF", "Koç Holding", "Trendyol", "L'Oréal", "Garanti BBVA", "Deloitte", "TEGV", "Klinikler"].map((inst, i) => (
                <span key={i} className="px-4 py-2 bg-slate-800 border border-slate-700/50 rounded-full text-sm font-mono text-slate-300">{inst}</span>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Cognitive & Behavioral Data Lab */}
      <section className="relative w-full py-32 bg-slate-900 border-t border-slate-700/50 overflow-hidden group cursor-crosshair">
         <div className="absolute inset-0 z-0">
            {/* Heatmap background representation */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] group-hover:bg-rose-500/20 transition-all duration-700 ease-out"></div>
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] group-hover:bg-amber-500/20 transition-all duration-700 ease-out"></div>
            <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[90px] group-hover:bg-blue-500/20 transition-all duration-700 ease-out"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
         </div>
         <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="lg:w-1/2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/20 border border-rose-500/30 rounded-md text-rose-400 text-xs font-mono tracking-widest uppercase mb-6">
                     <Eye className="w-4 h-4"/> Eye-Tracking & EEG Paneli
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Cognitive & Behavioral Data Lab</h2>
                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                     İnsan beynini ve davranışını sadece gözlemlemiyor; nörobilimsel veriler, göz izleme (eye-tracking) ve EEG ile ölçerek analiz ediyoruz.
                  </p>
                  <div className="space-y-4">
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                           <BrainCircuit className="w-5 h-5 text-rose-400" />
                        </div>
                        <div>
                           <h4 className="text-white font-bold">Bilişsel Psikoloji & Nörobilim Labı</h4>
                           <p className="text-sm text-slate-500">Dikkat, bellek ve algı araştırmaları.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                           <HeartPulse className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                           <h4 className="text-white font-bold">ÖZÜ-ÇİFT (Çift ve Aile Terapisi)</h4>
                           <p className="text-sm text-slate-500">Türkiye'nin en kapsamlı klinik uygulama merkezi.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                           <Baby className="w-5 h-5 text-amber-400" />
                        </div>
                        <div>
                           <h4 className="text-white font-bold">ÇAM (Çocuk ve Aile Çalışmaları)</h4>
                           <p className="text-sm text-slate-500">Gelişimsel psikoloji ve ebeveyn-çocuk etkileşimi.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="lg:w-1/2 w-full h-[400px] bg-slate-800 border border-slate-700/50 rounded-3xl p-6 relative overflow-hidden shadow-2xl">
                  {/* Eye Tracking Simulation UI */}
                  <div className="absolute top-4 left-4 flex gap-2 z-20">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="absolute top-4 right-4 text-xs font-mono text-slate-500 z-20">REC 00:14:32</div>
                  <div className="absolute inset-0 w-full h-full">
                     <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polyline points="0,50 20,50 25,30 30,70 35,50 100,50" fill="none" stroke="#f43f5e" strokeWidth="1" strokeDasharray="100"/>
                        <polyline points="0,70 30,70 35,40 40,80 45,70 100,70" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="100"/>
                     </svg>
                     {/* Static heatmap blobs */}
                     <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-rose-500/40 rounded-full blur-xl"></div>
                     <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-amber-500/30 rounded-full blur-2xl"></div>
                     <div className="absolute bottom-1/4 left-1/2 w-24 h-24 bg-blue-500/40 rounded-full blur-xl"></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Geopolitical Radar */}
      <section className="relative w-full py-32 bg-slate-800 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-md text-blue-400 text-xs font-mono tracking-widest uppercase mb-6">
                  <Globe2 className="w-4 h-4"/> Diplomasi Simülatörü
               </span>
               <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Geopolitical Radar & Diplomatic Matrix</h2>
               <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Harita okumaktan öteye geçin. Canlı küresel krizlerin, AB politikalarının ve dış politikanın analiz edildiği strateji merkezine katılın.
               </p>
            </div>
            
            <div className="relative w-full h-[500px] border border-slate-700/50 bg-slate-900 rounded-3xl overflow-hidden flex items-center justify-center">
               <Globe className="w-[800px] h-[800px] text-slate-800/50 absolute" />
               {/* Nodes */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-8 h-8 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,1)] flex items-center justify-center">
                     <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 font-mono text-xs text-blue-400">ISTANBUL_HQ</span>
               </div>
               
               <div className="absolute top-1/4 left-1/3 z-20 group">
                  <div className="w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] cursor-pointer"></div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-slate-900 border border-slate-700 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity w-48 text-center pointer-events-none">
                     <span className="text-purple-400 font-bold text-xs block mb-1">BRÜKSEL (AB)</span>
                     <span className="text-slate-400 text-[10px]">Avrupa Birliği Araştırmaları ve TÜBİTAK Projeleri.</span>
                  </div>
               </div>

               <div className="absolute bottom-1/3 right-1/4 z-20 group">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)] cursor-pointer"></div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-slate-900 border border-slate-700 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity w-48 text-center pointer-events-none">
                     <span className="text-emerald-400 font-bold text-xs block mb-1">CENEVRE (BM)</span>
                     <span className="text-slate-400 text-[10px]">Model UN (MUN) ve Uluslararası Hukuk.</span>
                  </div>
               </div>

               <div className="absolute top-1/3 right-1/3 z-20 group">
                  <div className="w-4 h-4 bg-rose-500 rounded-full shadow-[0_0_15px_rgba(244,63,94,0.8)] cursor-pointer"></div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-slate-900 border border-slate-700 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity w-48 text-center pointer-events-none">
                     <span className="text-rose-400 font-bold text-xs block mb-1">WASHINGTON</span>
                     <span className="text-slate-400 text-[10px]">Güvenlik ve Küresel Politik Ekonomi Analizleri.</span>
                  </div>
               </div>

               {/* Static laser streams */}
               <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                  <line x1="50%" y1="50%" x2="33.33%" y2="25%" stroke="#a855f7" strokeWidth="2" opacity="0.4" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="75%" y2="66.66%" stroke="#10b981" strokeWidth="2" opacity="0.4" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="66.66%" y2="33.33%" stroke="#f43f5e" strokeWidth="2" opacity="0.4" strokeDasharray="4 4" />
               </svg>
            </div>
         </div>
      </section>

      {/* 7. Computational Social Science */}
      <section className="relative w-full py-32 bg-slate-800 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
               <div className="lg:w-1/2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-md text-teal-400 text-xs font-mono tracking-widest uppercase mb-6">
                     <Database className="w-4 h-4"/> Big Data & AI
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Computational Social Science</h2>
                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                     İnsan davranışını ve toplumu incelerken Python, R, Büyük Veri (Big Data) ve Yapay Zekâ araçlarını kullanın.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                        <LineChart className="w-6 h-6 text-teal-400 mb-3"/>
                        <h4 className="text-white font-bold text-sm mb-1">Sosyal Veri Madenciliği</h4>
                        <p className="text-slate-500 text-xs">Sosyal medya analitiği ve algoritmik kamuoyu araştırmaları.</p>
                     </div>
                     <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                        <Terminal className="w-6 h-6 text-indigo-400 mb-3"/>
                        <h4 className="text-white font-bold text-sm mb-1">İstatistiksel Modeller</h4>
                        <p className="text-slate-500 text-xs">SPSS, R ve Python ile veri odaklı davranış araştırmaları.</p>
                     </div>
                  </div>
               </div>
               <div className="lg:w-1/2 w-full h-[400px] bg-slate-950 border border-slate-700/50 rounded-3xl p-6 relative shadow-2xl font-mono text-sm overflow-hidden">
                  <div className="text-slate-400 mb-4 flex items-center gap-2 border-b border-slate-700/50 pb-2">
                     <span className="text-teal-400">analyze_society.py</span>
                  </div>
                  <pre className="text-slate-300">
                     <span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd<br/>
                     <span className="text-purple-400">import</span> numpy <span className="text-purple-400">as</span> np<br/>
                     <span className="text-purple-400">from</span> sklearn.cluster <span className="text-purple-400">import</span> KMeans<br/><br/>
                     <span className="text-slate-500"># Toplumsal eğilimleri makine öğrenmesiyle analiz et</span><br/>
                     data = pd.read_csv(<span className="text-amber-300">'human_behavior.csv'</span>)<br/>
                     model = KMeans(n_clusters=<span className="text-blue-400">4</span>)<br/>
                     predictions = model.fit_predict(data)<br/><br/>
                     <span className="text-blue-400">print</span>(<span className="text-amber-300">"Toplumsal Segmentasyon Tamamlandı."</span>)
                  </pre>
               </div>
            </div>
         </div>
      </section>

      {/* Soft Transition (Dark to Light) */}
      <div className="w-full h-32 bg-gradient-to-b from-slate-800 to-white pointer-events-none"></div>

      {/* 7. Sıkça Sorulan Sorular */}
      <section className="relative z-10 w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-slate-500">Programlar, akreditasyonlar, staj olanakları ve burs imkanları hakkında merak edilen soruları yanıtladık.</p>
          </div>

          <div className="flex flex-col border border-slate-200">
            <FAQAccordion />
          </div>
        </div>
      </section>

      <SocialScienceTicket />
      <Footer />
    </main>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    { 
      q: "Özyeğin Üniversitesi Sosyal Bilimler Fakültesi bünyesinde hangi lisans programları yer almaktadır?", 
      a: "Sosyal Bilimler Fakültesi bünyesinde Psikoloji (İngilizce), Uluslararası İlişkiler (İngilizce) ve Antropoloji (İngilizce) lisans programları yer almaktadır." 
    },
    { 
      q: "Psikoloji Bölümü'nün akreditasyon durumu nedir?", 
      a: "Psikoloji Lisans Programımız, Türk Psikologlar Derneği (TPD) tarafından akredite edilmiş olup, yüksek kalitede teorik ve uygulamalı eğitimi garanti etmektedir." 
    },
    { 
      q: "Antropoloji bölümünün diğer üniversitelerdeki programlardan farkı nedir?", 
      a: "Özyeğin Üniversitesi Antropoloji Bölümü; iş antropolojisi, piyasa etnografisi ve dijital etnografi gibi güncel alanlara odaklanan disiplinlerarası müfredatı ile Türkiye'de yenilikçi ve öncü bir konuma sahiptir." 
    },
    { 
      q: "Sosyal Bilimler Fakültesi'nde Çift Anadal (ÇAP) ve Yan Dal olanakları nelerdir?", 
      a: "Öğrencilerimiz gerekli başarı şartlarını sağladıklarında İşletme, Hukuk, Mimarlık ve Tasarım gibi üniversitemizin diğer fakültelerindeki programlarla Çift Anadal yapabilir veya Yan Dal derecesi alabilirler." 
    },
    { 
      q: "Öğrencilerin lisans düzeyinde araştırmalara katılım imkanı var mıdır?", 
      a: "Evet, fakültemiz bünyesindeki laboratuvarlarda ve araştırma projelerinde lisans öğrencileri bizzat araştırmacı veya bursiyer olarak görev alarak akademik yayın ve proje deneyimi kazanmaktadır." 
    },
    { 
      q: "Mezunların istihdam ve yüksek lisans olanakları nasıldır?", 
      a: "Mezunlarımızın %44'ü henüz mezun olmadan veya mezuniyet anında işe başlamakta; %12'si yurt dışında kariyerine devam etmektedir. Ayrıca mezunlarımızın %37'si yurt dışındaki seçkin üniversitelerde lisansüstü eğitime kabul almaktadır." 
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
              className="w-full flex items-center gap-4 p-5 text-left bg-white hover:bg-slate-50 transition-colors"
            >
              {isOpen ? <Minus className="w-5 h-5 text-slate-800 shrink-0" /> : <Plus className="w-5 h-5 text-slate-500 shrink-0" />}
              <span className={`text-[15px] ${isOpen ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>{faq.q}</span>
            </button>
            {isOpen && (
              <div className="p-5 pt-0 text-slate-500 text-[15px] leading-relaxed bg-white">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
