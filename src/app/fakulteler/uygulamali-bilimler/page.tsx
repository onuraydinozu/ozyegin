"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Utensils, Hotel, Globe, Award, ChevronRight, GraduationCap, Plus, Minus, Sparkles, ChefHat } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function UygulamaliBilimlerPage() {
  return (
    <main className="bg-slate-50 text-slate-800 font-sans min-h-screen relative overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <div className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* Dynamic Gradient & Lighting Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-amber-50/80 via-emerald-50/40 to-slate-50 opacity-90"></div>
          <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-amber-200/30 rounded-full blur-[140px]"></div>
          <div className="absolute top-[20%] left-[-20%] w-[60vw] h-[60vw] bg-emerald-200/30 rounded-full blur-[160px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-100/80 border border-emerald-200 rounded-full text-emerald-800 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Tutku, İlerleme ve Profesyonellik
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight drop-shadow-xl text-slate-900"
          >
            Uygulamalı Bilimler<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600">
              Fakültesi
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Otelcilik, gastronomi ve turizm sektöründe yenilikçi, girişimci ve dünya standartlarında vizyona sahip geleceğin liderlerini yetiştiriyoruz.
          </motion.p>

          {/* Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-emerald-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl text-left">
              <ChefHat className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Gastronomi & Mutfak Sanatları</h3>
              <p className="text-slate-600 text-sm">Le Cordon Bleu International iş birliğiyle yürütülen, Fransız mutfak teknikleri ve modern mutfak yönetiminde uluslararası lider eğitim.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-amber-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl text-left">
              <Hotel className="w-10 h-10 text-amber-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Otel Yöneticiliği</h3>
              <p className="text-slate-600 text-sm">ACPHA tarafından Avrupa ve Türkiye&apos;de akredite edilen ilk ve tek lisans programı olarak küresel ölçekte turizm ve otelcilik eğitimi.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-teal-100 rounded-3xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 shadow-xl text-left">
              <Award className="w-10 h-10 text-teal-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-800">Uluslararası Prestij</h3>
              <p className="text-slate-600 text-sm">Le Cordon Bleu şefleriyle eğitim, 3.650 m² Mükemmellik Merkezi, L&apos;Atelier Bleu uygulama restoranı ve Michelin yıldızlı stajlar.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 1. Hedefimiz ve Hızlı Erişimler */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-emerald-600 font-bold text-sm tracking-wide block mb-2 uppercase">Uygulamalı Bilimler Fakültesi</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Hedefimiz</h2>
            <div className="w-20 h-1 bg-emerald-500 mb-8 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Otelcilik, gastronomi ve turizm endüstrisinde yer alan tüm paydaşlara katma değer yaratan, tutkulu, ilerlemeye açık, profesyonel davranışlarıyla örnek, girişimci, başarılı ve uluslararası itibara sahip profesyoneller yetiştirmektir.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.ozyegin.edu.tr/tr/gastronomi-ve-mutfak-sanatlari" target="_blank" rel="noreferrer" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(5,150,105,0.4)]">
                Gastronomi ve Mutfak Sanatları
              </a>
              <a href="https://www.ozyegin.edu.tr/tr/otel-yoneticiligi" target="_blank" rel="noreferrer" className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(217,119,6,0.4)]">
                Otel Yöneticiliği
              </a>
              <a href="https://catalog.ozyegin.edu.tr/3d-flip-book/uygulamali-bilimler-fakultesi-2026-2027-tr/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold rounded-xl transition-all">
                Fakülte Broşürü
              </a>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image src="/ozu_gastronomi_hero.jpg" alt="Uygulamalı Bilimler Fakültesi" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 2. ACPHA Accreditation Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-12"
      >
        <div className="bg-gradient-to-r from-emerald-500/10 via-teal-600/10 to-amber-500/10 border border-emerald-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-md">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-emerald-100 border-2 border-emerald-200 flex items-center justify-center">
              <Globe className="w-12 h-12 text-emerald-600" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">
                ACPHA Akreditasyonu
              </h3>
              <p className="text-emerald-950/80 text-lg leading-relaxed mb-6">
                Özyeğin Üniversitesi Uygulamalı Bilimler Fakültesi Otel Yöneticiliği Lisans Programı, ACPHA (Accreditation Commission for Programs in Hospitality Administration) Akreditasyonunu Avrupa’da ve Türkiye’de Alan İlk ve Tek Program Oldu.
              </p>
              <a href="https://www.ozyegin.edu.tr/tr/uygulamali-bilimler-fakultesi/acpha-akreditasyonu" target="_blank" rel="noreferrer" className="inline-block px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/30">
                Daha Fazla Bilgi
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. Dean's Message */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-slate-200"
      >
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="sticky top-32 text-center lg:text-left">
              <div className="w-48 h-48 rounded-full bg-slate-200 border-4 border-white shadow-xl mx-auto lg:mx-0 overflow-hidden mb-6 flex items-center justify-center">
                <span className="text-slate-400 font-medium">Fotoğraf</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Prof. Dr. Gökhan Özertan</h3>
              <p className="text-emerald-600 font-medium mb-6">Uygulamalı Bilimler Fakültesi Dekan V.</p>
              <div className="hidden lg:block w-12 h-1 bg-emerald-500 rounded-full"></div>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-6 text-slate-600 text-[17px] leading-relaxed">
            <p>
              Özyeğin Üniversitesi Uygulamalı Bilimler Fakültesi, 2009 yılında başlattığı Otel Yöneticiliği Lisans Programı ile Türkiye’de bu alanda geliştirilen ilk ve tek akademik programı hayata geçirmiştir. Fakülte, 2012 yılında ise ikinci lisans programı olarak Gastronomi ve Mutfak Sanatları Programı’nı Le Cordon Bleu International iş birliğiyle başlatmıştır. Bu stratejik ortaklık, fakültenin güçlü akademik altyapısını Le Cordon Bleu’nün mutfak sanatları alanındaki köklü ve küresel deneyimiyle birleştirerek öğrencilere uluslararası standartlarda, çok yönlü ve uygulamalı bir eğitim sunmaktadır.
            </p>
            <p>
              Otel Yöneticiliği Lisans Programı’nda öğrenciler, ilgi alanları ve bireysel yetkinlikleri doğrultusunda belirlenen mesleki odak alanlarına yönlendirilmekte ve böylece sektöre donanımlı ve hedef odaklı bir şekilde hazırlanmaları sağlanmaktadır. Program, yalnızca teknik bilgi ve beceri kazandırmakla kalmayıp öğrencilerin eleştirel düşünebilen, vizyoner ve yaratıcı bireyler olarak otelcilik sektörünün geleceğini şekillendirmelerine imkân tanımaktadır. Bu yaklaşım doğrultusunda, Otel Yöneticiliği Lisans Programı Türkiye’de ve Avrupa’da alanında ilk ve tek olmak üzere, “Accreditation Commission for Programs in Hospitality Administration (ACPHA)” tarafından 2030 yılına kadar akredite edilmiştir. Mezunlarımız, küresel ölçekte katma değer yaratan, girişimci ve yenilikçi profesyoneller olarak sektörde güçlü bir konum elde etmektedir.
            </p>
            <p>
              Gastronomi ve Mutfak Sanatları Lisans Programı’nın temel misyonu ise yalnızca mutfak sanatları alanında değil, yiyecek-içecek sektörünün tamamında değer yaratacak, yaratıcı, girişimci ve lider özelliklere sahip profesyoneller yetiştirmektir. Le Cordon Bleu International ile yürütülen özel iş birliği kapsamında öğrenciler, mutfak sanatları eğitimlerini Le Cordon Bleu’nün eğitmen şeflerinden almakta ve özgün eğitim materyallerinden faydalanmaktadır. Kuramsal ve uygulamalı eğitimin entegre edildiği bu program, teknik becerilerin yanı sıra gastronominin bilimsel, kültürel ve yönetsel boyutlarını içeren, güçlü akademik kadro tarafından desteklenen geniş kapsamlı bir müfredat sunmaktadır. Mezunlarımız, uluslararası mutfak tekniklerine hâkim, yerel mutfak mirasına duyarlı ve çağdaş bir vizyonla donatılmış gastronomi profesyonelleri olarak hem ulusal hem de uluslararası düzeyde fark yaratmaktadır.
            </p>
            <p>
              Uygulamalı Bilimler Fakültesi, “tutku, ilerleme ve profesyonellik” değerleri doğrultusunda; öğrencilerini yalnızca bugünün değil, yarının da sektörel ihtiyaçlarına yanıt verecek bilgi, beceri, uzmanlık ve vizyonla donatarak, Türkiye’de ve dünyada hızla gelişen otelcilik ve gastronomi sektörlerine yön veren, yaratıcı, girişimci ve yenilikçi liderler olarak yetiştirmeyi amaçlamaktadır.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 4. Mezunlarımız & Bir Bölüm Üç Açı */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full bg-white border-y border-slate-200 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold text-sm tracking-wide block mb-2 uppercase">Uygulamalı Bilimler Fakültesi</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Mezunlarımız</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Özyeğin Üniversitesi öğrencileri, teorik derslerin yanı sıra uygulama ağırlıklı, araştırmacı, vaka ve proje çalışmalarıyla zenginleştirilmiş, stajlarla donanmış, eğitici ve dönüştürücü bir eğitim modeline tabi tutuluyor. Özyeğin Üniversitesi’nin sektörle iç içe çalışma felsefesi sayesinde, öğrenciler mezuniyet sonrasında kendilerini nasıl bir iş dünyasının beklediğini deneyimleyerek, eğitimlerini en bilinçli şekilde tamamlıyor ve fark yaratan mezunlar olarak hayata atılıyor.
              </p>
              <p>
                Özyeğin Üniversitesi bölümlerini Bir Bölüm Üç Açı Programı ile yakından tanımaya ne dersiniz?
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[50px] group-hover:bg-red-500/20 transition-all"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Bir Bölüm Üç Açı</h3>
              <p className="text-slate-500 mb-8">
                Lisans bölümlerimizi akademisyenlerimizin, mezunlarımızın ve öğrencilerimizin deneyimlerinden ve bakış açılarından yola çıkarak tanıtan YouTube video serimize buradan erişebilirsiniz.
              </p>
              <a href="https://youtube.com/playlist?list=PLKzTz6QQRYz3XV0HyCjcrTS_BXrKp_NFc" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-[#FF0000] hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-500/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                Seriyi İzle
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. İstatistikler ve Çalışılan Kurumlar */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-bold text-sm tracking-wide block mb-2 uppercase">Uygulamalı Bilimler Fakültesi</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">ÖzÜ Mezunları Güçlü Başlıyor</h2>
          <p className="text-xl text-emerald-700">Öğrencilerimiz mezun olmadan iş hayatına adım atıyor</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "%44", label: "Mezuniyet anında veya öncesinde işe başlama", color: "text-emerald-600" },
            { value: "5 Ay", label: "Mezuniyet sonrası ortalama işe başlama süresi", color: "text-teal-600" },
            { value: "%12", label: "Yurt dışında çalışan mezun oranı", color: "text-amber-600" },
            { value: "%37", label: "Lisansüstü eğitimde yurt dışını tercih edenler", color: "text-indigo-600" }
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
          ** Bu oranlar Haziran 2026 itibariyle ulaşılabilmiş tüm mezunlarımızın verilerine göre hesaplanmıştır.<br/>
          (Ayrıca mezunlarımızın %7’si girişimci, %20’si yüksek lisans, %1,2’si doktora derecesine sahiptir.)
        </p>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Mezunlarımızın Çalıştığı Kurumlar</h3>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16"
          >
            {[
              { name: "Four Seasons Hotels", count: 19 },
              { name: "Swissotel", count: 14 },
              { name: "Hilton Hotels", count: 11 },
              { name: "Fairmont", count: 7 },
              { name: "Mandarin Oriental Hotel", count: 7 },
              { name: "The Peninsula Hotels", count: 7 },
              { name: "Do & Co", count: 6 },
              { name: "The Bodrum Edition", count: 5 },
              { name: "Marriott International", count: 5 },
              { name: "Raffles Hotel İstanbul", count: 5 },
              { name: "The Ritz-Carlton Hotel", count: 4 },
              { name: "The St. Regis İstanbul", count: 4 },
              { name: "Shangri-La Group", count: 4 },
              { name: "Le Meridien", count: 4 },
              { name: "Lujo Hotel", count: 3 },
              { name: "sketch London", count: 3 },
              { name: "Address Hotels", count: 3 },
              { name: "Conrad Bosphorus", count: 3 },
              { name: "FineDine Digital Menu", count: 3 },
              { name: "Vakko Patisserie", count: 3 }
            ].map((company, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 150 } }
                }}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-emerald-50/50 transition-colors shadow-sm"
              >
                <span className="text-slate-700 font-semibold text-sm mb-2">{company.name}</span>
                <span className="text-emerald-600 font-black text-xl">{company.count}</span>
              </motion.div>
            ))}
          </motion.div>

          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8 mt-12">Mezunlarımızın Lisansüstü Eğitim Gördüğü Üniversiteler</h3>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[
              { name: "Özyeğin Üniversitesi", count: 6 },
              { name: "UCLA Extension", count: 2 },
              { name: "University of Padova", count: 2 },
              { name: "Brunel University", count: 2 },
              { name: "Dublin Business School", count: 2 },
              { name: "Griffith College Dublin", count: 2 },
              { name: "İstanbul Üniversitesi", count: 1 },
              { name: "Diğer", count: 19 }
            ].map((uni, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 150 } }
                }}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-emerald-50/50 transition-colors shadow-sm"
              >
                <span className="text-slate-700 font-semibold text-sm mb-2">{uni.name}</span>
                <span className="text-emerald-600 font-black text-xl">{uni.count}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 6. Fakülte Öne Çıkanlar (3 Columns Layout) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full bg-white py-24 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Card 1: Le Cordon Bleu */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-[#266295] font-bold text-sm tracking-wide block mb-2">Uygulamalı Bilimler Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">Le Cordon Bleu<br/>Sertifika<br/>Programları</h2>
            </div>
            <div className="w-full aspect-square md:aspect-[4/3] relative mb-6 overflow-hidden rounded-2xl">
              <Image src="/ozu_le_cordon_bleu.jpg" alt="Le Cordon Bleu" fill className="object-cover" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              “Le Cordon Bleu” (Mavi Kurdele) isminin mutfak sanatları ile ilişkilendirilmesi ilk olarak 16. yüzyılda ortaya çıktı. Le Cordon Bleu ismi, Fransa Kralı III. Henri tarafından kurulmuş ve zaferlerini şatafatlı ziyafetlerle kutlayan Saint-Esprit Şövalyeleri’nin sembolünde bulunan mavi kurdele nedeniyle, 16. yüzyıldan itibaren mutfaktaki mükemmeliyetin simgesi oldu.
            </p>
            <a href="https://lecordonbleu.ozyegin.edu.tr/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#266295] hover:bg-[#1a4569] text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: 360 Virtual Tour */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-[#266295] font-bold text-sm tracking-wide block mb-2">Uygulamalı Bilimler Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">Mükemmellik<br/>Merkezi<br/>360° Sanal Tur</h2>
            </div>
            <div className="w-full aspect-square md:aspect-[4/3] relative mb-6 mt-2 overflow-hidden rounded-2xl">
              <Image src="/ozu_mukemmellik_merkezi.jpg" alt="Mükemmellik Merkezi" fill className="object-cover" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Öğrencilerimiz, eğitimleri süresince gerek profesyonel olarak tasarlanmış örnek otel odalarında, ön büro ve rezervasyon alanlarında çalışarak, gerek kampüste bulunan 3,650 m2’lik Mükemmeliyet Merkezi’nin modern mutfaklarında yiyecek hazırlayarak, gerekse hazırladıkları yiyecekleri L’Atelier Bleu adlı uygulama restoranımızda misafirlerin beğenisine öğle ve akşam yemeklerinde sunarak, kendilerini geliştirmekte ve gelecekte topluma önderlik edebilecek bireyler haline gelmektedirler.
            </p>
            <a href="http://360.ozyegin.edu.tr/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#266295] hover:bg-[#1a4569] text-white font-semibold rounded-full transition-colors w-max">
              Daha Fazla
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: Academic Staff */}
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-[#266295] font-bold text-sm tracking-wide block mb-2">Uygulamalı Bilimler Fakültesi</span>
              <h2 className="text-[#1A1A1A] font-black text-4xl leading-tight">Akademik<br/>Kadro</h2>
            </div>
            <div className="w-full aspect-square md:aspect-[4/3] relative mb-6 mt-16 overflow-hidden bg-slate-100 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-32 h-32 text-slate-300" />
            </div>
            <p className="text-[#6D6D6D] text-[15px] leading-relaxed mb-8 flex-grow">
              Özyeğin Üniversitesi’nin deneyimli akademisyenleri, hem akademik birikimleri hem de sektörel deneyimleriyle öğrencilere ilham veren rehberlerdir. Öğrenmeyi teoriyle sınırlamayıp, gerçek dünya uygulamalarıyla zenginleştiren bu öğretim üyeleri; öğrencilerin analitik düşünme, problem çözme ve yenilikçi yaklaşımlar geliştirme becerilerini destekler. Açık iletişime önem veren ve her öğrencinin potansiyeline ulaşması için birebir ilgi gösteren akademisyenler, üniversite yaşamınızı sadece bir eğitim süreci değil, aynı zamanda kişisel gelişim yolculuğu haline getirir.
            </p>
            <a href="https://www.ozyegin.edu.tr/tr/uygulamali-bilimler-fakultesi/akademik-kadro" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#266295] hover:bg-[#1a4569] text-white font-semibold rounded-full transition-colors w-max">
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
            <p className="text-slate-500">Program içerikleri, akreditasyonlar ve staj imkanları gibi konularda en çok merak edilen soruları bu bölümde yanıtladık.</p>
          </div>

          <div className="flex flex-col border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
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
      q: "Özyeğin Üniversitesi Uygulamalı Bilimler Fakültesi bünyesinde hangi lisans programları yer almaktadır?", 
      a: "Özyeğin Üniversitesi Uygulamalı Bilimler Fakültesi bünyesinde Gastronomi ve Mutfak Sanatları Lisans Programı ile Otel Yöneticiliği Lisans Programı yer almaktadır." 
    },
    { 
      q: "Gastronomi ve Mutfak Sanatları Programı'nın öne çıkan uluslararası iş birliği nedir?", 
      a: "Gastronomi ve Mutfak Sanatları Lisans Programı, mutfak sanatları alanında dünyanın en köklü ve prestijli kurumu olan Le Cordon Bleu International iş birliği ile yürütülmektedir." 
    },
    { 
      q: "Otel Yöneticiliği Lisans Programı'nın Türkiye'deki önemi ve akreditasyonu nedir?", 
      a: "Otel Yöneticiliği Lisans Programı, ACPHA (Accreditation Commission for Programs in Hospitality Administration) akreditasyonunu Avrupa'da ve Türkiye'de alan ilk ve tek programdır. Öğrenciler sektöre yenilikçi, girişimci ve yönetici adayları olarak hazırlanmaktadır." 
    },
    { 
      q: "Fakültede sunulan uygulamalı alanlar ve tesisler nelerdir?", 
      a: "Öğrencilerimiz 3.650 m² alan üzerine kurulu Mükemmellik Merkezi'nin modern mutfaklarında, simüle otel odaları ve resepsiyon alanlarında ve kampüste hizmet veren L'Atelier Bleu uygulama restoranında birebir deneyim kazanmaktadır." 
    },
    { 
      q: "Zorunlu staj olanakları ve süreleri nasıldır?", 
      a: "Öğrencilerimiz yurtiçi ve yurtdışında dünyanın önde gelen 5 yıldızlı otelleri, Michelin yıldızlı restoranlar ve kurumsal turizm işletmelerinde zorunlu yaz stajlarını tamamlamaktadırlar." 
    },
    { 
      q: "Mezunların iş bulma oranları ve istihdam verileri nasıldır?", 
      a: "Sektörle iç içe eğitim modeli sayesinde her 2 öğrenciden 1’i henüz mezun olmadan iş hayatına adım atmaktadır. Mezuniyet sonrası ise ortalama 5 ay içinde kariyerlerine başlamaktadırlar. Mezunların %12’si yurt dışında çalışmakta, %7’si ise kendi işini kurarak girişimci olarak hayatına devam etmektedir." 
    }
  ];

  return (
    <>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border-b border-slate-200 last:border-b-0 bg-white">
            <button onClick={() => setOpenIndex(isOpen ? null : idx)} className="w-full flex items-center gap-4 p-5 text-left bg-white hover:bg-slate-50 transition-colors">
              {isOpen ? <Minus className="w-5 h-5 text-emerald-600 shrink-0" /> : <Plus className="w-5 h-5 text-slate-500 shrink-0" />}
              <span className={`text-[15px] font-semibold ${isOpen ? 'text-emerald-900' : 'text-slate-700'}`}>{faq.q}</span>
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
