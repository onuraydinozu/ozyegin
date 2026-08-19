"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { BookOpen, Briefcase, Compass, Calendar, MapPin, Users, Mail, Phone, ChevronRight, CheckCircle2, Building, Building2, Target, Award, MonitorSmartphone, Search, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const team = [
  { name: "Sema Pak KARACA", title: "Sektörel Eğitim ve Profesyonel Gelişim İdari Direktörü", email: "sema.karaca@ozyegin.edu.tr", phone: "+90 216 564 99 79" },
  { name: "Şule Nur ARPASATAN", title: "Profesyonel Gelişim Uzmanı", email: "sulenur.arpasatan@ozyegin.edu.tr", phone: "+90 216 564 99 24" },
  { name: "Begüm TEZEL", title: "Profesyonel Gelişim Danışmanı", email: "begum.tezel@ozyegin.edu.tr", phone: "+90 216 564 34 24" },
  { name: "Gizem KILAVUZ", title: "Profesyonel Gelişim Danışmanı", email: "gizem.kilavuz@ozyegin.edu.tr", phone: "+90 216 564 98 83" },
  { name: "Gülizar Atalay HAZNEDAR", title: "Profesyonel Gelişim Danışmanı", email: "gulizar.haznedar@ozyegin.edu.tr", phone: "+90 216 564 44 96" },
  { name: "Emre UNKAN", title: "Profesyonel Gelişim Danışmanı", email: "emre.unkan@ozyegin.edu.tr", phone: "+90 216 564 98 24" },
  { name: "Merve Coşkun", title: "Profesyonel Gelişim Danışmanı", email: "merve.coskun@ozyegin.edu.tr", phone: "+90 216 564 47 84" }
];

const timeline = [
  {
    time: "Staja Başlamadan 3-6 Ay Önce",
    items: [
      "Bir özgeçmiş ve ön yazı oluşturun ve danışmanlarımızdan birine inceletin.",
      "Özgeçmişinizi incelenmesi ve onaylanması için LinkProfessional'a yükleyin.",
      "Ne tür bir staj aradığınızı belirleyin (Ör: konum, sektör, ücretli/ücretsiz).",
      "Hedefinizdeki spesifik kuruluş ve işletmeleri tespit edin ve son başvuru tarihlerini öğrenin.",
      "Profesyonel Gelişim'in etkinliklerine katılın (Sectoral Orienteering, mülakat simülasyonları vb.)."
    ]
  },
  {
    time: "2-3 Ay Önce",
    items: [
      "Stajınızı akademik kredi için kullanmak istiyorsanız bilgileri gözden geçirin.",
      "İlgi alanlarınıza uygun 10-20 kuruluşluk bir hedef listesi oluşturun.",
      "LinkedIn hesabı oluşturun ve mezunlar gruplarına katılarak irtibat kurun.",
      "Gerekirse tasarım/dijital portföy hazırlayın.",
      "LinkProfessional'da staj ilanlarına başvurmaya başlayın."
    ]
  },
  {
    time: "1-2 Ay Önce",
    items: [
      "Hedef listenizdeki işverenleri inceleyip başvurulara devam edin ve kaydını tutun.",
      "Mülakat ipuçlarını gözden geçirin, simülasyonlara katılın.",
      "Her mülakattan sonra teşekkür notu göndermeyi unutmayın.",
      "Akademik kredi için onay sürecine başlayın."
    ]
  },
  {
    time: "Staj Süresince",
    items: [
      "İş önceliklerine odaklanın ve inisiyatif alın.",
      "Her zaman hazırlıklı olun, not defteri ve kalem bulundurun.",
      "Geri bildirimsiz kalmayın, mentör edinin.",
      "Profesyonel ağınızı (networking) oluşturun ve koruyun."
    ]
  }
];

const resumes = [
  "2024-2025 Lisans Mezunları", "2023-2024 Lisans Mezunları", "2022-2023 Lisans Mezunları",
  "2021-2022 Lisans Mezunları", "2020-2021 Lisans Mezunları", "2019-2020 Lisans Mezunları",
  "2018-2019 Lisans Mezunları", "2017-2018 Lisans Mezunları", "2016-2017 Lisans Mezunları"
];

export default function KariyerVeMezunlar() {
  const [activeTab, setActiveTab] = useState("Danışmanlık");
  const tabs = ["Danışmanlık", "Eğitimler / Atölyeler", "Firma Etkinlikleri", "Kısmi Zamanlı Çalışma", "Staj ve İş", "Özgeçmiş Kataloğu"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Danışmanlık":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Kariyerinizin Mimarı Olun</h3>
            <p className="text-slate-600 leading-relaxed">
              Özyeğin Üniversitesi'nin Profesyonel Gelişim birimine hoş geldiniz! Lisans seviyesindeki tüm öğrencilerimize ve yeni mezunlarımıza hizmet vermekten gurur duyuyoruz. Okula başladığınız ilk günden itibaren kariyer olanaklarını keşfetmek, CV, ön yazı ve LinkedIn profili hazırlamak, mülakatlara hazırlanmak ve staj bulmak için yanınızdayız.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 bg-red-50 text-[#DF1934] flex items-center justify-center rounded-xl mb-4"><BookOpen size={20} /></div>
                <h4 className="font-bold text-slate-900 mb-2">CV Danışmanlığı</h4>
                <p className="text-sm text-slate-600">ÖzÜ CV formatında hazırladığınız CV'nizi uzmanlarımızla inceleyip geliştirebilirsiniz.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl mb-4"><Target size={20} /></div>
                <h4 className="font-bold text-slate-900 mb-2">Kariyer Danışmanlığı</h4>
                <p className="text-sm text-slate-600">Yol haritanız yoksa, birebir kariyer planlaması yapabilir, staj/iş stratejisi kurabilirsiniz.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-xl mb-4"><Users size={20} /></div>
                <h4 className="font-bold text-slate-900 mb-2">Mülakat Danışmanlığı</h4>
                <p className="text-sm text-slate-600">İş görüşmelerine nasıl hazırlanmanız gerektiği ve sorulabilecek sorular hakkında pratikler yapın.</p>
              </div>
            </div>
          </motion.div>
        );
      case "Eğitimler / Atölyeler":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Sürekli Gelişim Atölyeleri</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Öğrencilerimize üniversiteye adım attıkları ilk günden mezuniyetlerine kadar yararlanabilecekleri çeşitli kişisel gelişim eğitimleri ve atölye çalışmaları sunmaktayız. İnteraktif olarak, konusunda uzman danışmanlar tarafından verilen bu eğitimler, kişisel ilgi alanlarına göre gereken becerileri kazandırmayı hedefler.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {["CV & Cover Letter Eğitimi", "Mülakat Teknikleri", "İş Arama Stratejileri", "Networking", "Kariyer Yönetimi"].map(tag => (
                <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
              <h4 className="font-bold text-orange-900 mb-2">İptal Politikası (No Show)</h4>
              <p className="text-sm text-orange-800 leading-relaxed">
                Etkinliğin gerçekleşeceği saatten en az 24 saat önce rezervasyonlarını iptal etmeyen katılımcılar «no show» sayılır. Kontenjan sınırı olan eğitimlerde bu durum haksızlığa yol açar. İkinci kez katılımsızlık durumunda, akademik yılın sonuna kadar etkinlik kayıt hakkı dondurulur.
              </p>
            </div>
          </motion.div>
        );
      case "Firma Etkinlikleri":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">İş Dünyası Kampüste</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              Her dönem 10 farklı sektörden 60'ın üzerinde şirketi temsil eden üst düzey yöneticiler öğrencilerimizle bir araya gelmektedir. Türkçe ve İngilizce olarak çift dilli gerçekleştirilen bu oturumlar interaktif soru-cevap bölümleriyle tamamlanır.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mt-1"><Building className="text-[#DF1934]" /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Sektörel Sohbetler</h4>
                  <p className="text-sm text-slate-600 mt-1">SEC 201/203 dersleri kapsamında, iş dünyasının deneyimli isimleriyle güncel eğilimleri, geleceğin yetkinliklerini konuştuğumuz deneyim paylaşımları.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mt-1"><Users className="text-[#DF1934]" /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Mülakat Simülasyonları</h4>
                  <p className="text-sm text-slate-600 mt-1">Yetkinlik bazlı, panel veya telefon mülakatlarını firmalarla organize ettiğimiz seanslarda deneyimleme fırsatı.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mt-1"><MonitorSmartphone className="text-[#DF1934]" /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Gerçek Mülakatlar & Seminerler</h4>
                  <p className="text-sm text-slate-600 mt-1">Firmaların kampüs içi işe alım süreçlerini yürüttüğü gerçek mülakatlar ve iş hayatından liderlerin ağırlandığı paneller.</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case "Kısmi Zamanlı Çalışma":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Kampüste Çalışma Fırsatları</h3>
            <p className="text-slate-600 leading-relaxed">
              Kısmi Zamanlı Çalışma Programı'nın temel amacı, öğrencilerin henüz öğrenciyken iş deneyimi kazanmalarıdır. Aynı zamanda bu çalışma fırsatı, çoğu öğrencimize ihtiyaç duydukları maddi desteği sağlamaktadır. Çalışan öğrenciler, toplam çalışma saatine göre aylık maaş alır.
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-4 flex items-start gap-4">
              <CheckCircle2 className="text-green-600 shrink-0 mt-1" />
              <p className="text-slate-700">
                Profesyonel Gelişim Birimi, diğer iş ilanları gibi Kısmi Zamanlı İş ilanlarını da LinkProfessional üzerinden duyurur. LinkProfessional üzerinden kampüs içi ilanları filtreleyerek online başvuru yapabilirsiniz.
              </p>
            </div>
          </motion.div>
        );
      case "Staj ve İş":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Kariyer Yolu</h3>
            <p className="text-slate-600 leading-relaxed">
              Özyeğin Üniversitesi öğrencileri, akademik hayatlarının ilk yıllarından itibaren kredisiz veya zorunlu staj programları aracılığıyla profesyonel iş hayatına adım atar. İşletme programından mühendisliğe kadar tüm öğrencilerimiz farklı sektörleri yakından tanıma şansı bulur.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-slate-700"><CheckCircle2 className="text-[#DF1934] w-5 h-5 shrink-0" /> Gönüllü ve zorunlu stajlar için yüzlerce ilan.</li>
              <li className="flex items-start gap-3 text-slate-700"><CheckCircle2 className="text-[#DF1934] w-5 h-5 shrink-0" /> Yurtiçi ve yurtdışı uluslararası staj seçenekleri.</li>
              <li className="flex items-start gap-3 text-slate-700"><CheckCircle2 className="text-[#DF1934] w-5 h-5 shrink-0" /> Kredisiz stajlar için düzenli bilgilendirme ve destek süreçleri.</li>
            </ul>
          </motion.div>
        );
      case "Özgeçmiş Kataloğu":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Mezuniyet Özgeçmişleri</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Özgeçmiş Kataloğu; iş veya staj arayışında olan, ilgili akademik yılda mezun olan ya da mezun adayı konumundaki Özyeğin Üniversitesi lisans öğrencilerinin özgeçmişlerinden oluşan seçilmiş bir kaynaktır ve sektörün önde gelen firmalarıyla paylaşılır.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {resumes.map((resume, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-[#DF1934] hover:shadow-sm transition-all cursor-pointer group">
                  <Download className="w-5 h-5 text-slate-400 group-hover:text-[#DF1934]" />
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-[#DF1934]">{resume}</span>
                </div>
              ))}
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#DF1934] selection:text-white overflow-x-hidden">
      <Header />

      <main className="pt-[88px]">
        {/* HERO SECTION */}
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-4 py-2 bg-[#DF1934]/20 text-white rounded-full text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md border border-[#DF1934]/30 inline-block"
            >
              Geleceğin Profesyonelleri
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Sektörel Eğitim ve <br className="hidden md:block"/>Profesyonel Gelişim
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-slate-300 max-w-3xl font-light leading-relaxed mb-8"
            >
              Bir araştırma üniversitesi olan Özyeğin Üniversitesi, öğrencilerine açtığı yeni ufuklar ve sunduğu olanaklarla kendi yetkinliklerini keşfetmelerini sağlıyor. Sektörlerle iç içe dönüştürücü eğitim felsefesiyle sizi iş dünyasına hazırlıyoruz.
            </motion.p>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-[#DF1934] font-bold text-sm tracking-widest uppercase block">Kuruluş Amacı</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Sektörlerle İç İçe Dönüştürücü Eğitim.
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Sektörel Eğitim ve Profesyonel Gelişim, Özyeğin Üniversitesi'nin "sektörlerle iç içe dönüştürücü eğitim" felsefesi doğrultusunda öğrencilerin profesyonel gelişimlerine katkı sağlamak ve istihdam edilebilirliklerini güçlendirmek amacıyla tasarlanmış yenilikçi ve çok boyutlu bir oluşumdur.
                </p>
                <div className="flex gap-4 items-start bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Award className="w-8 h-8 text-[#DF1934] shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">İki Temel Odak Noktası</h4>
                    <p className="text-slate-600 text-sm">Birinci sınıftan itibaren alınan "Sektörel Çözümler" dersleri ve akademik beceriler ile işveren beklentileri arasındaki uçurumu kapatan "Profesyonel Gelişim" faaliyetleri.</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="https://www.ozyegin.edu.tr/sites/default/files/sektorel-egitim.png" alt="Sektörel Eğitim" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* LINKPROFESSIONAL HIGHLIGHT */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[#DF1934]/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight">LinkProfessional Nedir?</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Özyeğin Üniversitesi'nin Sektörel Eğitim ve Profesyonel Gelişim Birimi tarafından kullanılan ve öğrenciler, mezunlar ile işverenleri bir araya getiren <strong>kariyer yönetim platformudur.</strong> Yalnızca bir iş ilanı sistemi değil, danışmanlık, eğitim ve etkinlikleri kapsayan dev bir kariyer ekosistemidir.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://ozyegin-csm.symplicity.com/students/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#DF1934] hover:bg-red-700 text-white font-bold rounded-full transition-colors flex justify-center items-center gap-2">
                    <Users size={20} /> Öğrenci Girişi
                  </a>
                  <a href="https://ozyegin-csm.symplicity.com/employers/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-full transition-colors flex justify-center items-center gap-2">
                    <Building2 size={20} /> Firma Girişi
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Search, title: "Staj ve İş", desc: "Güncel ilanlar" },
                  { icon: BookOpen, title: "Danışmanlık", desc: "CV & Kariyer desteği" },
                  { icon: Calendar, title: "Etkinlikler", desc: "Firma tanıtımları" },
                  { icon: Compass, title: "Mülakat", desc: "Simülasyon randevuları" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <item.icon className="w-8 h-8 text-[#DF1934] mb-4" />
                    <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES (TABS) */}
        <section className="py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#DF1934] font-bold text-sm tracking-widest uppercase block mb-3">Sizler İçin Neler Yapıyoruz?</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Hizmetlerimiz ve Programlarımız</h2>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/3 flex flex-col gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-left px-6 py-4 rounded-2xl font-bold transition-all border ${
                      activeTab === tab 
                        ? "bg-white border-[#DF1934] text-[#DF1934] shadow-md" 
                        : "bg-transparent border-transparent text-slate-600 hover:bg-slate-200/50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="w-full lg:w-2/3 bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-slate-100">
                <AnimatePresence mode="wait">
                  {renderTabContent()}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Staj Arama Süreci</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Başarılı bir staj için atmanız gereken adımlar ve zaman çizelgesi.</p>
            </div>
            
            <div className="relative border-l-4 border-slate-100 ml-4 md:ml-12 space-y-12 pb-8">
              {timeline.map((phase, i) => (
                <div key={i} className="relative pl-8 md:pl-12">
                  <div className="absolute w-8 h-8 bg-[#DF1934] rounded-full -left-[18px] top-0 flex items-center justify-center text-white font-bold border-4 border-white shadow-sm">
                    {timeline.length - i}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{phase.time}</h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM & CONTACT */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Kampüsteki Konumumuz</h2>
                  <p className="text-slate-600 mb-6">Özyeğin Üniversitesi Çekmeköy Kampüsü<br/>Nişantepe Mah. Orman Sok. 34794<br/>Çekmeköy - İSTANBUL</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-700">
                      <MapPin className="text-[#DF1934]" /> Profesyonel Gelişim Ofisi, Öğrenci Merkezi -2. Kat
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <Phone className="text-[#DF1934]" /> +90 (216) 564 92 60
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 font-medium">
                      <Mail className="text-[#DF1934]" /> professional@ozu.edu.tr
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 font-medium">
                      <Mail className="text-[#DF1934]" /> sectoraledu@ozu.edu.tr
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">Sectoral Orienteering</h4>
                  <p className="text-sm text-slate-600 mb-4">"ÖzÜ Farkıyla Yeniden Kurgulanmış Kariyer Günleri" olan SO, öğrencileri iş dünyasının liderleri ile bir araya getiren prestijli bir faaliyettir.</p>
                  <img src="https://www.ozyegin.edu.tr/sites/default/files/so_6.png" alt="Sectoral Orienteering" className="w-full h-auto rounded-xl" />
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Biz Kimiz?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {team.map((member, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors shadow-sm">
                      <h4 className="font-bold text-lg text-slate-900">{member.name}</h4>
                      <p className="text-sm text-[#DF1934] font-medium mb-4">{member.title}</p>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex items-center gap-2"><Mail size={14} className="text-slate-400" /> <a href={`mailto:${member.email}`} className="hover:text-slate-900">{member.email}</a></div>
                        <div className="flex items-center gap-2"><Phone size={14} className="text-slate-400" /> {member.phone}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
