"use client";

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
  FlaskConical
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function EngineeringPage() {
  return (
    <main className="bg-slate-50 text-slate-800 font-sans min-h-screen">
      <Header />
      
      {/* Hero Section (Contains Background, Animated Tech Graphic, and Titles) */}
      <div className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Dynamic Tech Background (Özyeğin Engineering Palette) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-100 via-slate-50 to-white opacity-90"></div>
          {/* Glowing Ambient Light Orbs */}
          <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-400/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-[20%] left-[-20%] w-[60vw] h-[60vw] bg-indigo-300/30 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-sky-300/20 rounded-full blur-[140px]"></div>
        </div>

        {/* Floating Hardware / Circuit Tech Graphic Animation */}
        <motion.div 
          className="absolute top-20 right-10 md:right-20 pointer-events-none opacity-20 md:opacity-40 z-10"
          initial={{ scale: 0.8, rotate: 0 }}
          animate={{ scale: [0.8, 1.05, 0.8], rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" stroke="#0284c7" strokeWidth="2" strokeDasharray="6 6" />
            <circle cx="100" cy="100" r="60" stroke="#4f46e5" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="40" stroke="#2563eb" strokeWidth="1" strokeDasharray="4 4" />
            <rect x="85" y="85" width="30" height="30" rx="6" fill="#0284c7" fillOpacity="0.2" stroke="#0284c7" strokeWidth="2" />
            <path d="M100 20 L100 40 M100 160 L100 180 M20 100 L40 100 M160 100 L180 100" stroke="#2563eb" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-blue-100/80 border border-blue-200 rounded-full text-blue-900 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <Cpu className="w-4 h-4 text-blue-600" />
            Geleceğin Mühendisleri ve Teknoloji Liderleri
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight drop-shadow-xl text-slate-900"
          >
            Mühendislik<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">
              Fakültesi
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Teknik problemleri çözen, yeni teknolojiler geliştiren, araştırmacı ve girişimci vizyona sahip yeni nesil mühendisler yetiştiriyoruz.
          </motion.p>

          {/* Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <Award className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">MÜDEK ve EUR-ACE</h3>
              <p className="text-slate-600 text-sm">Uluslararası standartlarda, Avrupa akreditasyonu ile belgelenmiş yüksek kaliteli mühendislik eğitimi.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <FlaskConical className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Uygulamalı & Ar-Ge Eğitimi</h3>
              <p className="text-slate-600 text-sm">İleri teknoloji laboratuvarları, projelendirme ve sektörle entegre staj olanakları.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <Sparkles className="w-10 h-10 text-sky-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Yenilikçi ve Girişimci</h3>
              <p className="text-slate-600 text-sm">Yüksek teknoloji şirketleri kurabilen ve küresel ölçekte katma değer yaratan mühendislik kültürü.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 1. Hedefimiz ve Hızlı Erişimler */}
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
          <p className="text-xl text-blue-700">Öğrencilerimiz henüz mezun olmadan küresel teknoloji dünyasına adım atıyor</p>
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
            { value: "%46", label: "Mezuniyet anında veya öncesinde işe başlama", color: "text-blue-600" },
            { value: "4.5 Ay", label: "Mezuniyet sonrası ortalama işe başlama süresi", color: "text-indigo-600" },
            { value: "%15", label: "Yurt dışında çalışan mezun oranı", color: "text-sky-600" },
            { value: "%35", label: "Lisansüstü eğitimde yurt dışını tercih edenler", color: "text-purple-600" }
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
              { name: "ASELSAN", count: 92 },
              { name: "Trendyol", count: 78 },
              { name: "TUSAŞ / TAI", count: 64 },
              { name: "Microsoft", count: 45 },
              { name: "Amazon", count: 38 },
              { name: "Mercedes-Benz", count: 32 },
              { name: "Siemens", count: 29 },
              { name: "Ford Otosan", count: 27 },
              { name: "ROKETSAN", count: 25 },
              { name: "Turkcell", count: 24 },
              { name: "Vodafone", count: 21 },
              { name: "HAVELSAN", count: 19 },
              { name: "Türk Hava Yolları", count: 18 },
              { name: "TÜBİTAK", count: 16 },
              { name: "IBM", count: 14 },
              { name: "Google", count: 12 },
              { name: "Arçelik", count: 11 },
              { name: "Vestel", count: 10 },
              { name: "Ericsson", count: 9 },
              { name: "Aselsan NET", count: 8 }
            ].map((company, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 150 } }
                }}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-blue-50 transition-colors shadow-sm"
              >
                <span className="text-slate-700 font-semibold text-sm mb-2">{company.name}</span>
                <span className="text-blue-600 font-black text-xl">{company.count}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 6. Lisans Bölümlerimiz Grid */}
      <section className="relative z-10 w-full bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold text-sm uppercase tracking-widest block mb-2">Akademik Programlar</span>
            <h2 className="text-3xl md:text-5xl font-black">Lisans Bölümlerimiz</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all group">
              <Code className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3 text-white">Bilgisayar Mühendisliği</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Yazılım geliştirme, veri yapıları, siber güvenlik ve bulut bilişim alanlarında teorik ve uygulamalı eğitim. MÜDEK akreditasyonuna sahiptir.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/bilgisayar-muhendisligi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm hover:text-blue-300">
                Detaylı Bilgi <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-indigo-500/50 transition-all group">
              <Zap className="w-12 h-12 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3 text-white">Elektrik-Elektronik</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Sinyal işleme, otonom sistemler, haberleşme ve mikroelektronik teknolojileri odaklı mühendislik eğitimi. MÜDEK akreditasyonuna sahiptir.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/elektrik-elektronik-muhendisligi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm hover:text-indigo-300">
                Detaylı Bilgi <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-sky-500/50 transition-all group">
              <Layers className="w-12 h-12 text-sky-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3 text-white">Endüstri Mühendisliği</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Yöneylem araştırması, tedarik zinciri, verimlilik ve karmaşık sistem optimizasyonu üzerine uzmanlık. MÜDEK akreditasyonuna sahiptir.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/endustri-muhendisligi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sky-400 font-semibold text-sm hover:text-sky-300">
                Detaylı Bilgi <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-all group">
              <Cog className="w-12 h-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3 text-white">Makina Mühendisliği</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Mekanik tasarım, termodinamik, robotik ve ileri imalat teknolojilerinde derinlemesine uzmanlaşma. MÜDEK akreditasyonuna sahiptir.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/makina-muhendisligi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300">
                Detaylı Bilgi <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-all group">
              <Building2 className="w-12 h-12 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3 text-white">İnşaat Mühendisliği</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Depreme dayanıklı yapı tasarımı, sürdürülebilir altyapı ve modern inşaat yönetimi teknolojileri. MÜDEK akreditasyonuna sahiptir.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/insaat-muhendisligi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm hover:text-emerald-300">
                Detaylı Bilgi <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all group">
              <Bot className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3 text-white">Yapay Zeka & Veri</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Derin öğrenme, makine öğrenmesi, büyük veri analitiği ve doğal dil işleme odaklı yeni nesil lisans programı.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/yapay-zeka-ve-veri-muhendisligi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-purple-400 font-semibold text-sm hover:text-purple-300">
                Detaylı Bilgi <ChevronRight className="w-4 h-4" />
              </a>
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

      <Footer />
    </main>
  );
}
