"use client";

import { motion } from "framer-motion";
import { 
  DraftingCompass, 
  Globe, 
  ChevronRight, 
  PenTool, 
  Ruler, 
  Palette, 
  Layers, 
  Award, 
  Sparkles, 
  CheckCircle2,
  Building2,
  Layout,
  Box
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ArchitectureAndDesignPage() {
  return (
    <main className="bg-slate-50 text-slate-800 font-sans min-h-screen">
      <Header />
      
      {/* Hero Section (Contains Background, Animated Blueprint/Design Graphic, and Titles) */}
      <div className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Dynamic Architectural Background (Özyeğin Palette) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-amber-50 via-orange-50/50 to-white opacity-90"></div>
          {/* Glowing Ambient Light Orbs */}
          <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-amber-300/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-[20%] left-[-20%] w-[60vw] h-[60vw] bg-orange-300/25 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-rose-200/20 rounded-full blur-[140px]"></div>
        </div>

        {/* Floating Blueprint / Geometric Design Grid Graphic Animation */}
        <motion.div 
          className="absolute top-20 right-10 md:right-20 pointer-events-none opacity-20 md:opacity-35 z-10"
          initial={{ scale: 0.8, rotate: 0 }}
          animate={{ scale: [0.8, 1.05, 0.8], rotate: [0, 45, 90, 135, 180] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <svg width="420" height="420" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="160" height="160" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="70" stroke="#ea580c" strokeWidth="1.5" />
            <polygon points="100,30 170,170 30,170" stroke="#b45309" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="#d97706" strokeWidth="1" />
            <line x1="100" y1="20" x2="100" y2="180" stroke="#d97706" strokeWidth="1" />
            <rect x="75" y="75" width="50" height="50" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-amber-100/80 border border-amber-200 rounded-full text-amber-900 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <DraftingCompass className="w-4 h-4 text-amber-600" />
            Geleceğin Mimarları ve Tasarımcıları
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight drop-shadow-xl text-slate-900"
          >
            Mimarlık ve<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">
              Tasarım Fakültesi
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            İnsan ve toplumun yaşam kalitesini artıran, sürdürülebilir, estetik ve yenilikçi çözümler üreten geleceğin mimarları ve tasarımcıları Özyeğin Üniversitesi&apos;nde yetişiyor.
          </motion.p>

          {/* Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-amber-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <Award className="w-10 h-10 text-amber-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">MiAK Akreditasyonu</h3>
              <p className="text-slate-600 text-sm">Mimarlık Lisans Programlarımız, MiAK (Mimarlık Eğitimi Akreditasyon Derneği) tarafından 6 yıl süreyle akredite edilmiştir.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-amber-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <Building2 className="w-10 h-10 text-orange-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">AB4 Tasarım Binası</h3>
              <p className="text-slate-600 text-sm">Yenilikçi stüdyolar, FabLab dijital imalat atölyeleri, sergi ve ortak çalışma alanlarıyla donatılmış özgün mimari ortam.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-amber-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <Sparkles className="w-10 h-10 text-rose-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Disiplinler Arası Yaklaşım</h3>
              <p className="text-slate-600 text-sm">Kent ölçeğinden ürün ve görsel tasarıma kadar sürdürülebilir, bütünleşik ve girişimci tasarım eğitimi.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 1. Hedefimiz ve Hızlı Erişimler */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-600 font-bold text-sm tracking-wide block mb-2 uppercase">Özyeğin Üniversitesi</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Hedefimiz</h2>
            <div className="w-20 h-1 bg-amber-600 mb-8 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              İnsanların ve toplumun yaşam kalitesini yükselten, yüksek estetik algısına ve yaratıcılığa sahip, girişimciliğin önemini kavramış, çok kültürlü ve disiplinler arası bir bakış açısına değer veren, sürdürülebilir tasarım anlayışına sahip mimarlar ve tasarımcılar yetiştirmektir. Yaratıcılık, yenilikçilik ve girişimcilik konularını yerel ve küresel değerler çerçevesinde ele alan, bütünleşik tasarım ve üretim odaklı bir eğitim-araştırma vizyonu sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.ozyegin.edu.tr/tr/mimarlik" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-xl transition-all text-sm shadow-[0_0_20px_rgba(217,119,6,0.3)]">
                Mimarlık (TR / EN)
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/ic-mimarlik-ve-cevre-tasarimi" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl transition-all text-sm shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                İç Mimarlık ve Çevre Tasarımı
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/endustriyel-tasarim" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl transition-all text-sm shadow-[0_0_20px_rgba(225,29,72,0.3)]">
                Endüstriyel Tasarım
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/iletisim-ve-tasarimi" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all text-sm shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                İletişim ve Tasarımı
              </a>
              <a href="https://catalog.ozyegin.edu.tr/tr/mimarlik-ve-tasarim-fakultesi-2025-2026/" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-semibold rounded-xl transition-all text-sm">
                Fakülte Broşürü
              </a>
            </div>
          </div>
          <div className="relative h-[420px] w-full rounded-3xl overflow-hidden border border-amber-100 group bg-gradient-to-br from-amber-50 to-orange-50/50 p-8 flex flex-col justify-between shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/50 to-orange-100/30 z-10 pointer-events-none"></div>
            <div className="relative z-20">
              <span className="px-4 py-1.5 bg-amber-600 text-white font-bold text-xs rounded-full inline-block mb-4">Öne Çıkan Mekân</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">AB4 Tasarım Binası ve Atölyeler</h3>
              <p className="text-slate-600 text-sm">Tasarım stüdyoları, maket ve dijital imalat laboratuvarları (FabLab), 3D yazıcı stüdyoları ve sergi alanları ile yaratıcı düşüncenin fiziksel mekâna dönüştüğü ilham verici ortam.</p>
            </div>
            <div className="relative z-20 flex justify-center items-center py-6">
              <DraftingCompass className="w-36 h-36 text-amber-600/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700" />
            </div>
            <div className="relative z-20 flex items-center justify-between text-sm font-semibold text-amber-700">
              <span>Stüdyo ve Üretim Odaklı Eğitim</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MiAK Accreditation Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-rose-500/10 border border-amber-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-amber-600/20 border-2 border-amber-500/40 flex items-center justify-center">
              <Award className="w-12 h-12 text-amber-600" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-md mb-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                Ulusal ve Uluslararası Kalite Standartları
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                MiAK (Mimarlık Eğitimi Akreditasyon Derneği) Akreditasyonu
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Özyeğin Üniversitesi Mimarlık ve Tasarım Fakültesi Mimarlık Türkçe ve İngilizce Lisans Programları, Mimarlık Eğitimi Akreditasyon Derneği (MiAK) tarafından 6 yıl süreyle (2022-2028) akredite edilerek eğitim kalitesini ulusal ve uluslararası standartlarda belgelendirmiştir.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/mimarlik-ve-tasarim-fakultesi/akreditasyon" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-amber-500/30">
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
              <h3 className="text-2xl font-bold text-slate-900 text-center lg:text-left">Prof. Dr. Aslıhan Ünlü</h3>
              <p className="text-amber-600 font-medium text-center lg:text-left mb-6">Mimarlık ve Tasarım Fakültesi Dekanı</p>
              <div className="hidden lg:block w-12 h-1 bg-amber-600 rounded-full"></div>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-6 text-slate-600 text-lg leading-relaxed">
            <h3 className="text-2xl font-bold text-slate-900">Dekanımızın Mesajı</h3>
            <p>
              Sevgili Aday Öğrenciler, Mimarlık ve Tasarım Fakültesi olarak, insanların ve toplumların yaşam alanlarını güzelleştiren, kentten mekâna, üründen dijital iletişime kadar her ölçekte katma değer yaratan yaratıcı, eleştirel düşünebilen ve sosyal-çevresel sorumlulukları yüksek bireyler yetiştirmeyi amaçlıyoruz.
            </p>
            <p>
              Fakültemizin eğitim felsefesinin odağında; sürdürülebilirlik, teknoloji entegrasyonu, girişimcilik ve disiplinler arası bütünleşik tasarım anlayışı yer almaktadır. Tasarım stüdyolarımız, dijital üretim laboratuvarlarımız (FabLab), sergi alanlarımız ve ortak çalışma ortamlarımızla donatılmış özgün mimari yapımız olan AB4 binasında, öğrencilerimiz fikirlerini somut projelere dönüştürme heyecanını yaşarlar.
            </p>
            <p>
              Geniş uluslararası akademik ağımız, sektörün saygın uygulayıcıları ve akademisyenlerinden oluşan güçlü kadromuz ve ulusal/uluslararası yarışmalarda kazanılan başarılar sayesinde öğrencilerimiz, mezuniyet öncesinde geleceğin tasarım dünyasına yön verecek yetkinlikler kazanırlar. Mimarlık lisans programlarımızın MiAK akreditasyonu, sunduğumuz eğitimen yüksek ulusal ve uluslararası standartlarda olduğunun somut bir kanıtıdır.
            </p>
            <p>
              Sizleri de yaratıcılığınızı keşfetmeye, hayallerinizi tasarlamaya ve Özyeğin Üniversitesi Mimarlık ve Tasarım Fakültesi ailesinin bir parçası olmaya davet ediyorum.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Mezunlarımız & Bir Bölüm Üç Açı */}
      <section className="relative z-10 w-full bg-slate-100/70 border-y border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Mezunlarımız</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Özyeğin Üniversitesinde mimarlık ve tasarım eğitimi alan öğrencilerimiz, teorik birikimi zengin stüdyo pratikleri, vaka çalışmaları ve proje üretimiyle harmanlayan dönüştürücü bir öğrenme modeliyle yetişirler.
              </p>
              <p>
                Sektörle iç içe yürütülen bu stüdyo kültürü sayesinde öğrenciler, mezun olmadan önce ulusal ve uluslararası mimarlık ofisleri, tasarım stüdyoları ve teknoloji şirketleriyle temas kurar. Böylesine özgüvenli ve yetkin bir altyapıyla mezun olan profesyoneller olarak kariyerlerine güçlü bir başlangıç yaparlar.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[50px] group-hover:bg-amber-500/20 transition-all"></div>
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
          <p className="text-xl text-amber-700">Öğrencilerimiz henüz mezun olmadan tasarım ve mimarlık dünyasına adım atıyor</p>
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
            { value: "%44", label: "Mezuniyet anında veya öncesinde işe başlama", color: "text-amber-600" },
            { value: "5 Ay", label: "Mezuniyet sonrası ortalama işe başlama süresi", color: "text-orange-600" },
            { value: "%12", label: "Yurt dışında çalışan mezun oranı", color: "text-rose-600" },
            { value: "%37", label: "Lisansüstü eğitimde yurt dışını tercih edenler", color: "text-purple-600" }
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
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Mezunlarımızın Çalıştığı Kurumlar ve Ofisler</h3>
          
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
              { name: "Tabanlıoğlu Mimarlık", count: 24 },
              { name: "Emre Arolat Architecture", count: 18 },
              { name: "Erginoğlu & Çalışlar", count: 14 },
              { name: "Autoban", count: 12 },
              { name: "Zoom TPU", count: 10 },
              { name: "Arçelik / Beko", count: 9 },
              { name: "Vestel Tasarım Ekibi", count: 8 },
              { name: "HAS Mimarlık", count: 7 },
              { name: "IKEA", count: 6 },
              { name: "DB Mimarlık", count: 5 },
              { name: "Vakko Design", count: 5 },
              { name: "Dyson", count: 4 },
              { name: "Norm Mimarlık", count: 4 },
              { name: "Studio Vural", count: 3 },
              { name: "Muuto", count: 3 },
              { name: "Philips Lighting", count: 3 },
              { name: "Signify", count: 2 },
              { name: "Mudo Concept", count: 2 }
            ].map((company, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 150 } }
                }}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-amber-50 transition-colors shadow-sm"
              >
                <span className="text-slate-700 font-semibold text-sm mb-2">{company.name}</span>
                <span className="text-amber-600 font-black text-xl">{company.count}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 6. Lisans Bölümlerimiz Grid */}
      <section className="relative z-10 w-full bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-bold text-sm uppercase tracking-widest block mb-2">Akademik Programlar</span>
            <h2 className="text-3xl md:text-5xl font-black">Lisans Bölümlerimiz</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-amber-500/50 transition-all group">
              <Ruler className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3 text-white">Mimarlık (TR / EN)</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Sürdürülebilirlik, ekolojik tasarım ve bütünleşik yapı teknolojileri odaklı MiAK akredite lisans programı.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/mimarlik" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm hover:text-amber-300">
                Detaylı Bilgi <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-orange-500/50 transition-all group">
              <Layout className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3 text-white">İç Mimarlık ve Çevre Tasarımı</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                İnsan-mekân etkileşimi, malzeme, aydınlatma ve sürdürülebilir iç mekân tasarımları uzmanlığı.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/ic-mimarlik-ve-cevre-tasarimi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-orange-400 font-semibold text-sm hover:text-orange-300">
                Detaylı Bilgi <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-rose-500/50 transition-all group">
              <Box className="w-12 h-12 text-rose-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3 text-white">Endüstriyel Tasarım</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Kullanıcı deneyimi, ürün geliştirme, inovasyon ve prototipleme odaklı yeni nesil endüstriyel tasarım eğitimi.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/endustriyel-tasarim" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-rose-400 font-semibold text-sm hover:text-rose-300">
                Detaylı Bilgi <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all group">
              <Palette className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3 text-white">İletişim ve Tasarımı</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Dijital medya, görsel iletişim, grafik tasarım ve dijital içerik üretimi alanlarında yaratıcı vizyon.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/iletisim-ve-tasarimi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-purple-400 font-semibold text-sm hover:text-purple-300">
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
          
          {/* Card 1: AB4 & FabLab */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-amber-600 font-bold text-sm tracking-wide block mb-2">Mimarlık ve Tasarım Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">AB4 Binasi ve<br/>FabLab<br/>Atölyeleri</h2>
            </div>
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl mb-6 flex items-center justify-center border border-amber-100">
              <PenTool className="w-20 h-20 text-amber-600/40" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Fakültemiz, stüdyoları, maket laboratuvarları, 3D baskı teknolojileri ve sergi salonları ile öğrencilerin fikirlerini fiziksel ve dijital prototiplere dönüştürebildiği AB4 binasında ilham verici bir çalışma iklimi sunar.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/mimarlik-ve-tasarim-fakultesi" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: MiAK & Competitions */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-amber-600 font-bold text-sm tracking-wide block mb-2">Mimarlık ve Tasarım Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">MiAK<br/>Akreditasyonu ve<br/>Ödüller</h2>
            </div>
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-orange-50 to-rose-100 rounded-2xl mb-6 flex items-center justify-center border border-orange-100">
              <Award className="w-20 h-20 text-orange-600/40" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Mimarlık programlarımızın 6 yıllık MiAK akreditasyonunun yanı sıra, öğrencilerimiz ve akademisyenlerimiz ulusal ve uluslararası mimarlık ve tasarım yarışmalarında her yıl prestijli ödüller kazanmaktadır.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/mimarlik-ve-tasarim-fakultesi/akreditasyon" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: Academic Staff */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-amber-600 font-bold text-sm tracking-wide block mb-2">Mimarlık ve Tasarım Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">Güçlü<br/>Akademik<br/>Kadro</h2>
            </div>
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-rose-50 to-amber-100 rounded-2xl mb-6 flex items-center justify-center border border-rose-100">
              <Globe className="w-20 h-20 text-rose-600/40" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Uluslararası akademik yetkinliğe ve zengin mesleki stüdyo deneyimine sahip öğretim üyelerimiz, öğrencilere birebir mentorluk sağlayarak özgün tasarım kimliklerinin gelişmesine liderlik etmektedir.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/mimarlik-ve-tasarim-fakultesi/akademik-kadro" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-colors w-max">
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
