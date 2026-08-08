"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Home, Wifi, ShieldCheck, HeartPulse, ChevronRight, User, Users, Coffee } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import DormAccessGate from "@/components/features/DormAccessGate";

const faqs = [
  {
    q: "Özyeğin Üniversitesi’ni kazandım, yurtta konaklamak istiyorum, kaydımı ne zaman ve nasıl yaptırabilirim?",
    a: "Yurt başvuruları üniversite kayıt haftası ile birlikte başlayacak olup, SIS üzerinden başvurularınızı yapabilirsiniz."
  },
  {
    q: "Yurtlarınıza başvuru yaparken oda arkadaşımı seçebilir miyim?",
    a: "Evet, yurt başvuruları sırasında oda arkadaşı tercihinizi sistem üzerinden belirtebilirsiniz."
  },
  {
    q: "Yurtta konakladığım odayı istediğim zaman değiştirebilir miyim?",
    a: "Oda değişiklik talepleri, yurt kapasitesinin uygunluğuna göre dönem içlerinde Konaklama Hizmetleri Direktörlüğü tarafından değerlendirilmektedir."
  },
  {
    q: "Yurtlara hangi tarihte girebilirim? Yurtlardan hangi tarihte ayrılabilirim?",
    a: "Akademik takvime göre belirlenen giriş tarihlerinde yerleşebilir, dönem bittiğinde duyurulan çıkış tarihlerine kadar ayrılmanız gerekmektedir."
  },
  {
    q: "Yurtlara ait ödenmemiş borcum var. Yurda giriş yapabilir miyim?",
    a: "Yurtlara yerleşim için gelen öğrenciler, mevcut dönem ücretleri de dahil olmak üzere yurtlara ait tüm ödemelerini tamamlamalıdır. Ödenmemiş ücreti bulunan öğrencinin yurt giriş işlemleri yapılamaz."
  }
];

export default function YurtlarPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <main className="bg-slate-50 text-slate-800 font-sans">
      {!isUnlocked && <DormAccessGate onUnlock={() => setIsUnlocked(true)} />}
      
      <Header />
      
      {/* Hero Section (Aynen korunan yapı) */}
      <div className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Dynamic Sky Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-100 via-sky-50 to-white opacity-90"></div>
          <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-400/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-[20%] left-[-20%] w-[60vw] h-[60vw] bg-blue-300/20 rounded-full blur-[150px]"></div>
        </div>

        {/* Floating Building / Turnstile ID Card Animation */}
        <motion.div 
          className="absolute bottom-0 left-[5%] md:left-[10%] z-10"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        >
          <svg width="400" height="300" viewBox="0 0 400 300" className="drop-shadow-2xl scale-75 md:scale-100 origin-bottom-left">
            {/* Turnstile Base */}
            <path d="M 50 300 L 150 300 L 140 100 L 60 100 Z" fill="#cbd5e1" />
            <path d="M 60 100 L 140 100 L 150 80 L 50 80 Z" fill="#94a3b8" />
            
            {/* Scanner area */}
            <rect x="70" y="85" width="60" height="10" rx="3" fill="#1e293b" />
            
            {/* Green Light (Beep) */}
            <motion.circle 
              cx="100" cy="90" r="3" 
              fill="#22c55e"
              animate={{ fill: ["#475569", "#22c55e", "#22c55e", "#475569"] }}
              transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
            />
            
            {/* Turnstile Arms */}
            <motion.g
              animate={{ rotate: [0, 0, -60, -60] }}
              transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.8, 1], ease: "anticipate" }}
              style={{ originX: "150px", originY: "150px" }}
            >
              <path d="M 150 150 L 300 120" stroke="#94a3b8" strokeWidth="12" strokeLinecap="round" />
              <path d="M 150 150 L 250 250" stroke="#64748b" strokeWidth="12" strokeLinecap="round" />
              <path d="M 150 150 L 50 200" stroke="#475569" strokeWidth="12" strokeLinecap="round" />
              <circle cx="150" cy="150" r="15" fill="#334155" />
            </motion.g>

            {/* ID Card Floating & Tapping */}
            <motion.g
              animate={{ 
                x: [250, 75, 75, 250], 
                y: [0, 30, 30, 0],
                rotate: [15, 0, 0, 15] 
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <rect x="0" y="0" width="70" height="45" rx="5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
              {/* OZU Logo colors on card */}
              <rect x="0" y="32" width="70" height="13" rx="2" fill="#0ea5e9" />
              {/* Student Photo block */}
              <circle cx="15" cy="15" r="8" fill="#94a3b8" />
              {/* Text lines */}
              <rect x="30" y="10" width="35" height="4" fill="#cbd5e1" />
              <rect x="30" y="20" width="25" height="4" fill="#cbd5e1" />
            </motion.g>
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
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-800 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <Home className="w-4 h-4 text-blue-600" />
            Evinizden Uzaktaki Eviniz
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight drop-shadow-xl text-slate-900"
          >
            Yurtlarda <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              Yaşam
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Çekmeköy Kampüsü’nde bulunan 2.729 kişilik kapasiteye sahip yurt binaları her türlü ihtiyaç ve detay düşünülerek tasarlanmıştır. Yurt binalarında 1, 2, 3 ve 4 kişilik kapasiteye kadar değişen konaklama seçenekleriyle öğrencilerin kendilerini evlerinde hissedecekleri şekilde hizmet verilmektedir.
          </motion.p>

          {/* Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <Wifi className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Sınırsız Olanaklar</h3>
              <p className="text-slate-600 text-sm">Ücretsiz çamaşırhane, kablosuz internet, grup etüt salonları, sinema salonu, TV salonu ve oyun alanları.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <ShieldCheck className="w-10 h-10 text-emerald-500 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Güvenlik ve Konfor</h3>
              <p className="text-slate-600 text-sm">7/24 kamera sistemi, merkezi ısınma, devamlı sıcak su, güvenlik ve 3 ayrı ofisten kesintisiz hizmet.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <HeartPulse className="w-10 h-10 text-rose-500 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Sağlık ve Spor</h3>
              <p className="text-slate-600 text-sm">Kampüs içi revir, ambulans hizmeti, futbol, basketbol, voleybol sahaları, tenis kortu ve fitness salonu.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ücretler Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-slate-200">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Yurt Ücretleri</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Özyeğin Üniversitesi Mütevelli Heyeti Tarafından Onaylanan 2026-2027 Akademik Yılı Güz ve Bahar Dönemi Yurt Ücretleri. Depozito Ücreti: 15.000 TL.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Yurt 1 (Erkek) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-4">Yurt 1 (Erkek Yurdu)</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center"><span className="text-slate-600">Tek Kişilik Standart Oda</span><span className="font-bold text-blue-600">480.000 TL</span></li>
              <li className="flex justify-between items-center"><span className="text-slate-600">İki Kişilik Ortak Kullanımlı Özel Oda</span><span className="font-bold text-blue-600">354.300 TL</span></li>
              <li className="flex justify-between items-center"><span className="text-slate-600">Üç Kişilik Standart Oda</span><span className="font-bold text-blue-600">238.400 TL</span></li>
              <li className="flex justify-between items-center"><span className="text-slate-600">Dört Kişilik Standart Oda</span><span className="font-bold text-blue-600">146.000 TL</span></li>
              <li className="flex justify-between items-center"><span className="text-slate-600">Dört Kişilik Ranzalı Oda</span><span className="font-bold text-blue-600">137.900 TL</span></li>
            </ul>
          </div>

          {/* Yurt 3 (Kız) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-4">Yurt 3 (Kız Yurdu)</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center"><span className="text-slate-600">Üç Kişilik Standart Oda</span><span className="font-bold text-blue-600">238.400 TL</span></li>
              <li className="flex justify-between items-center"><span className="text-slate-600">Dört Kişilik Standart Oda</span><span className="font-bold text-blue-600">146.000 TL</span></li>
              <li className="flex justify-between items-center"><span className="text-slate-600">Dört Kişilik Ranzalı Oda</span><span className="font-bold text-blue-600">137.900 TL</span></li>
            </ul>
          </div>

          {/* Yurt 2 (Kız/Erkek) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-4">Yurt 2 (Kız/Erkek Yurdu)</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center"><span className="text-slate-600">Tek Kişilik Standart Oda</span><span className="font-bold text-blue-600">480.000 TL</span></li>
              <li className="flex justify-between items-center"><span className="text-slate-600">Üç Kişilik Standart Oda</span><span className="font-bold text-blue-600">259.800 TL</span></li>
              <li className="flex justify-between items-center"><span className="text-slate-600">Üç Kişilik Bölmeli Oda</span><span className="font-bold text-blue-600">334.600 TL</span></li>
            </ul>
          </div>

          {/* Yurt 6 (Kız/Erkek) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-4">Yurt 6 (Kız/Erkek Yurdu)</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center"><span className="text-slate-600">Tek Kişilik Mutfaklı Oda</span><span className="font-bold text-blue-600">480.000 TL</span></li>
              <li className="flex justify-between items-center"><span className="text-slate-600">İki Kişilik Süit Özel Oda</span><span className="font-bold text-blue-600">443.700 TL</span></li>
              <li className="flex justify-between items-center"><span className="text-slate-600">Üç Kişilik Süit Özel Oda</span><span className="font-bold text-blue-600">346.800 TL</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gerçek Fotoğraflar Galerisi */}
      <section className="relative z-10 w-full bg-white py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Yurtlarımızı Keşfedin</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group rounded-3xl overflow-hidden shadow-lg border border-slate-100 relative aspect-[4/3]">
              <img src="/ozu_yurtlar_hero.jpg" alt="ÖzÜ Yurtlar Dış Görünüm" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Modern Kampüs Mimarisi</h3>
                <p className="text-white/80 text-sm">Doğa ile iç içe, premium yurt binaları</p>
              </div>
            </div>
            <div className="group rounded-3xl overflow-hidden shadow-lg border border-slate-100 relative aspect-[4/3]">
              <img src="/ozu_yurtlar_oda.jpg" alt="ÖzÜ Yurtlar İç Görünüm" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Konforlu Yaşam Alanları</h3>
                <p className="text-white/80 text-sm">Aydınlık, ferah ve tam donanımlı odalar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet ve Olanaklar (Grid with Icons) */}
      <section className="relative z-10 w-full bg-blue-50/50 border-y border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Hizmet ve Olanaklar</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: HeartPulse, label: "Sağlık Merkezi", desc: "7/24 hizmet veren tam teşekküllü merkez ve ambulans." },
              { icon: ShieldCheck, label: "Güvenlik", desc: "Tüm yurtlar ve kampüs alanlarında 7/24 güvenlik." },
              { icon: Coffee, label: "Mutfaklar", desc: "Ocak ve mikrodalga fırın bulunan ortak alanlar." },
              { icon: Users, label: "Çalışma Odaları", desc: "Ders çalışabileceğiniz ve etüt yapabileceğiniz alanlar." },
              { icon: Wifi, label: "Ücretsiz İnternet", desc: "Tüm yurt binalarında kesintisiz Wi-Fi erişimi." },
              { icon: Building2, label: "Çamaşırhane", desc: "Öğrencilerin ücretsiz kullanabileceği 8 farklı çamaşırhane." },
              { icon: User, label: "Psikolojik Destek", desc: "Gece 20:00 - 04:00 arası yurt psikologlarından destek." },
              { icon: Home, label: "Oyun & Sinema", desc: "Masa tenisi, bilardo salonları ve sinema odaları." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-center">
                <feature.icon className="w-10 h-10 mx-auto text-blue-500 mb-4" />
                <h4 className="font-bold text-slate-800 mb-2">{feature.label}</h4>
                <p className="text-xs text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sıkça Sorulan Sorular (Accordion) */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Sıkça Sorulan Sorular</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <h4 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">{faq.q}</h4>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
