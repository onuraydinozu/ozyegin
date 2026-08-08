"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CreditCard, Landmark, Phone, Smartphone, FileText, ArrowRightLeft, ShieldCheck, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function OdemeYontemleriPage() {
  return (
    <main className="bg-slate-50 min-h-screen text-slate-800 font-sans overflow-x-hidden selection:bg-[#DF1934] selection:text-white">
      <Header />
      
      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-20 bg-slate-900 text-white overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] via-slate-900 to-black z-0"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay z-0"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-600 rounded-full blur-[120px] opacity-20 z-0 mix-blend-screen animate-pulse duration-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#DF1934] rounded-full blur-[150px] opacity-20 z-0 mix-blend-screen"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
            >
              <CreditCard className="w-4 h-4 text-sky-400" />
              <span className="text-sm font-medium tracking-wide text-white uppercase">Öğrenci Hizmetleri</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight"
            >
              Ödeme <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Yöntemleri</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-300 font-light leading-relaxed mb-6"
            >
              Öğrenim ücreti ödemeleri, akademik takvimde ilan edilen ödeme tarihlerinde aşağıdaki yöntemlerden biri seçilerek yapılır. Üniversitemize doğrudan havale veya EFT ile ödeme yapılamamaktadır.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block bg-red-500/10 border border-red-500/20 text-red-200 px-6 py-3 rounded-2xl text-sm font-medium"
            >
              Not: Yıllık ya da dönemlik seçim yapıldıktan sonra ödeme iptal edilemez ve ödeme yöntemi değiştirilemez.
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 px-6 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Peşin Ödeme */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center">
                <Landmark className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Peşin Ödeme</h2>
            </div>
            
            <p className="text-slate-600 mb-8">Peşin ödeme yapmak isteyen adaylar, duyurulan ücret ödeme tarihleri içinde aşağıdaki peşin ödeme yöntemlerinden birini tercih ederek ödeme yapabilirler.</p>

            <div className="space-y-4">
              {/* Fibabanka Şubelerinden */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-sky-600" /> Fibabanka Şubelerinden
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">Fibabanka şubeleri aracılığıyla yapılacak ödemelerde Fibabanka hesabı bulunması gerekmektedir. Öğrencinin adı, soyadı ve öğrenci numarasının belirtilmesi yeterlidir.</p>
              </div>

              {/* Fibabanka İnternet/Mobil */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-sky-600" /> Fibabanka İnternet ve Mobil
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">Ödemeler menüsünde yer alan “Okul Ödemeleri” seçeneğinden, öğrenci numarasını girerek tüm borç bilgilerini görüntüleyebilir ve hesabından peşin ödeme yapabilir.</p>
              </div>

              {/* Fibabanka Telefon */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-sky-600" /> Fibabanka Telefon Bankacılığı
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">Fibabanka müşterileri, 444 88 88 numaralı Fibabanka Telefon Bankacılığını arayarak peşin ödeme yapabilir.</p>
              </div>

              {/* Banka/Kredi Kartı */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl group-hover:bg-sky-50 transition-colors"></div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 relative z-10">
                  <CreditCard className="w-5 h-5 text-sky-600" /> Banka veya Kredi Kartı
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 relative z-10">Ödemeler, herhangi bir banka (ATM/Debit) veya kredi kartı ile online ödeme yapılabilir. Kartınızda aşağıdaki kriterlerin bulunması gerekir:</p>
                <ul className="space-y-2 relative z-10">
                  {[
                    "İnternet-Sanal POS işlem izninin olması",
                    "3D Secure işlem izninin açık olması",
                    "İşlemlere ait limitin yeterli olması",
                    "Yurtdışı kartlarının uluslararası işlem izninin olması"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Taksitli Ödeme */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-slate-900">Taksitli Ödeme</h2>
            </div>
            
            <p className="text-slate-600 mb-8">Taksitli ödeme seçeneği, öğrenim ücreti ve yurt ücretleri için geçerlidir. Finansal kuruluş seçilen taksit sayısına göre komisyon talep edebilir.</p>

            <div className="space-y-4">
              {/* Kredi Kartı Taksit */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Kredi Kartı ile Taksitli Ödeme</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">Bu seçenek ile ödeme, Üniversitemiz web sayfasında &quot;Borç Görüntüleme ve E-Ödeme&quot; sayfasından yapılır. Kartınızda bulunması gereken kriterler:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "İnternet-Sanal POS işlem izninin olması",
                    "3D Secure işlem izninin olması",
                    "Limitin yeterli olması"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://studentservices.ozyegin.edu.tr/tr/ucretler-ve-odemeler/borc-goruntuleme-ve-e-odeme" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold text-[#1B365D] hover:text-[#DF1934] transition-colors">
                  E-Ödeme Sayfasına Git <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Vakıfbank Vinov */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3">VakıfBank Vinov Kampüs ile Taksit</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sadece dönemlik öğrenim ücreti ödemeleri için geçerlidir. Dönemlik ücretlere <strong>4 taksit (1 Peşin + 3 Taksit)</strong> olanağı sunulmaktadır. Vakıfbank&apos;ta Vadesiz TL hesabı açtırarak Vinov Hesabı tanımlaması ve &quot;Vinov Onay İşlemleri&quot; menüsünden onaylanması gerekmektedir.
                </p>
              </div>

              {/* Fibabanka KMH */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Fibabanka (KMH) ile Taksitli Ödeme</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sadece dönemlik öğrenim ücreti için geçerlidir. Dönemlik ücretlere <strong>4 taksit (1 Peşin + 3 Taksit)</strong> olanağı sunulmaktadır. Fibabanka Özyeğin Üniversitesi Şubesi nezdinde hesap açılması gerekmektedir (Görüntülü Bankacılık ile şubeye gitmeden açılabilir).
                </p>
                <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm">
                  <p className="font-bold text-slate-800 mb-1">Fibabanka Özyeğin Üniversitesi Şubesi</p>
                  <p className="text-slate-600">Telefon: 0 216 525 50 00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faturalar & İadeler Section */}
      <section className="py-20 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-4">Faturalar</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
              <p>Öğrenim ücretlerine ait faturalar öğrenci adına ve her dönem için dört eşit tutarda düzenlenmektedir.</p>
              <p>Güz dönemine ait faturalar <strong>Eylül, Ekim, Kasım ve Aralık</strong> aylarında; Bahar dönemine ait faturalar <strong>Şubat, Mart, Nisan ve Mayıs</strong> aylarında düzenlenmektedir.</p>
              <p>Faturalara SIS üzerinden Finansal Bilgiler -&gt; Fatura Görüntüleme ekranı aracılığıyla ulaşabilirsiniz. Üniversitemiz Kurumlar Vergisi&apos;nden muaftır.</p>
              <p className="pt-2 border-t border-slate-200 font-medium">Mali İşler İletişim: <a href="mailto:collection@ozyegin.edu.tr" className="text-blue-600 hover:underline">collection@ozyegin.edu.tr</a></p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <ArrowRightLeft className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-4">İadeler</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
              <p>Ücret iadesi gerektiren durumlarda (kayıt dondurma, vb.) iadeler ancak öğrencinin üniversiteye karşı herhangi bir borcunun olmaması ve kendisine kullanım için sağlanan mal ve teçhizatı hasarsız olarak iade etmiş olması koşuluyla yapılır.</p>
              <p>İadeler, yapılan ödemenin ödeme yöntemi dikkate alınarak gerçekleştirilir.</p>
              <p className="font-bold text-red-500 mt-4 bg-red-50 p-3 rounded-lg">Yaz okulunda yapılacak olan ders kayıt iptallerinde ücret iadesi yapılmamaktadır.</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
