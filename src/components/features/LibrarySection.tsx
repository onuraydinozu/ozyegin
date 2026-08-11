"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Search, Clock, Users, Database, FileText, 
  Bookmark, Award, CheckCircle2, ArrowRight, ExternalLink,
  Sparkles, Calendar, Monitor, Volume2, ShieldCheck, Check, X
} from "lucide-react";

export default function LibrarySection() {
  const [activeTab, setActiveTab] = useState<"catalog" | "ozoogle" | "journals">("catalog");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("Grup Çalışma Odası 1 (Sessiz Bölge)");
  const [selectedTime, setSelectedTime] = useState("14:00 - 16:00");
  const [roomReserved, setRoomReserved] = useState(false);

  // Quick stats from library.ozyegin.edu.tr
  const stats = [
    { label: "Elektronik Kitap", value: "350.000+", desc: "Tam metin erişilebilir e-kitap" },
    { label: "Basılı Koleksiyon", value: "80.000+", desc: "Açık raf sistemli basılı eser" },
    { label: "Uluslararası Veri Tabanı", value: "110+", desc: "IEEE, Scopus, Web of Science vb." },
    { label: "E-Dergi & Yayın", value: "120.000+", desc: "Sürekli güncellenen dergi portalı" },
  ];

  // Popular Databases list
  const databases = [
    { name: "Scopus & Web of Science", category: "Akademik Atıf & İndeks", link: "https://ozyegin.libguides.com/az.php" },
    { name: "IEEE Xplore", category: "Mühendislik & Teknoloji", link: "https://ozyegin.libguides.com/az.php" },
    { name: "ScienceDirect & JSTOR", category: "Fen & Sosyal Bilimler", link: "https://ozyegin.libguides.com/az.php" },
    { name: "LexisNexis & Lexpera", category: "Hukuk & Mevzuat", link: "https://ozyegin.libguides.com/az.php" },
    { name: "Euromonitor Passport", category: "İşletme & Pazar Araştırması", link: "https://ozyegin.libguides.com/az.php" },
    { name: "EBSCOhost e-Book Collection", category: "Dijital Kütüphane", link: "https://ozyegin.libguides.com/az.php" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    let targetUrl = "";
    if (activeTab === "catalog") {
      targetUrl = `https://discover.ozyegin.edu.tr/iii/encore/search/C__S${encodeURIComponent(searchQuery)}__Orightresult__U?lang=tur`;
    } else if (activeTab === "ozoogle") {
      targetUrl = `https://research.ebsco.com/c/56kitg/search/results?q=${encodeURIComponent(searchQuery)}`;
    } else {
      targetUrl = `https://publications.ebsco.com/c/akqljs?search=${encodeURIComponent(searchQuery)}`;
    }
    window.open(targetUrl, "_blank");
  };

  const handleReserveRoom = (e: React.FormEvent) => {
    e.preventDefault();
    setRoomReserved(true);
    setTimeout(() => {
      setRoomReserved(false);
    }, 4000);
  };

  return (
    <section className="w-full relative py-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
      {/* Background Lighting Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#DF1934]/15 rounded-full blur-[130px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 space-y-12">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-xs font-bold tracking-widest uppercase">
              <BookOpen className="w-4 h-4 text-blue-400" />
              ÖZYEĞİN ÜNİVERSİTESİ KÜTÜPHANESİ
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Araştırma & Bilgi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
                Merkezi Portal
              </span>
            </h2>
          </div>

          {/* Opening Hours Badge */}
          <div className="bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-md flex items-center gap-4 shrink-0">
            <div className="w-10 h-10 bg-amber-400/20 text-amber-300 rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-xs space-y-0.5">
              <div className="font-extrabold text-white flex items-center gap-2">
                <span>Çalışma Saatleri</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-slate-300">Hafta İçi: <strong className="text-white">08:30 - 22:00</strong> | Hafta Sonu: <strong className="text-white">09:00 - 18:00</strong></p>
              <p className="text-[11px] text-amber-300 font-semibold">Sınav Dönemlerinde 7/24 Kesintisiz Hizmet</p>
            </div>
          </div>
        </div>

        {/* Interactive Search Bar Module */}
        <div className="bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6">
          {/* Search Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/10 no-scrollbar">
            <button
              onClick={() => setActiveTab("catalog")}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === "catalog"
                  ? "bg-[#DF1934] text-white shadow-lg shadow-red-600/30"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              <BookOpen className="w-4 h-4" /> Kütüphane Kataloğu (Kitap / e-Kitap / DVD)
            </button>
            
            <button
              onClick={() => setActiveTab("ozoogle")}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === "ozoogle"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              <Sparkles className="w-4 h-4" /> oZoogle+ (Makale & e-Kaynak Arama)
            </button>

            <button
              onClick={() => setActiveTab("journals")}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === "journals"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              <FileText className="w-4 h-4" /> E-Dergi & Yayın Portalı
            </button>
          </div>

          {/* Search Input Form */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  activeTab === "catalog"
                    ? "Kitap adı, yazar, konu veya e-Kitap tara..."
                    : activeTab === "ozoogle"
                    ? "Makale başlığı, anahtar kelime veya akademik araştırma konusu..."
                    : "Dergi adı veya ISSN girin..."
                }
                className="w-full bg-slate-900/80 border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-[#DF1934] hover:bg-[#c4152d] text-white font-extrabold text-sm rounded-2xl transition-all shadow-lg shrink-0 flex items-center justify-center gap-2"
            >
              Kütüphanede Ara <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Collection Stats Marquee */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm space-y-1 hover:border-blue-400/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black text-blue-300 font-mono">{stat.value}</div>
              <div className="text-xs font-bold text-white">{stat.label}</div>
              <p className="text-[11px] text-slate-400">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Two Columns: Group Study Room Reservation & Databases */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Group Study Room Reservation Simulator */}
          <div className="lg:col-span-6 bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold text-amber-400 uppercase tracking-widest">
                <Users className="w-4 h-4" /> ÇALIŞMA ODASI REZERVASYONU
              </div>
              <h3 className="text-2xl font-black text-white">Grup Çalışma Odası Ayırtın</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Özyeğin Üniversitesi Kütüphanesi bünyesinde yer alan 12 adet teknolojik grup çalışma odasını projeleriniz ve grup ödevleriniz için online rezerve edebilirsiniz.
              </p>
            </div>

            {roomReserved ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-2 text-emerald-300">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <div className="font-extrabold text-sm text-white">Çalışma Odası Rezervasyonunuz Alındı!</div>
                <p className="text-xs">{selectedRoom} • {selectedTime}</p>
              </div>
            ) : (
              <form onSubmit={handleReserveRoom} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Oda Seçimi</label>
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full bg-slate-900 border border-white/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-400 cursor-pointer"
                  >
                    <option value="Grup Çalışma Odası 1 (Sessiz Bölge)">Grup Çalışma Odası 1 (Sessiz Bölge - 6 Kişilik)</option>
                    <option value="Grup Çalışma Odası 2 (Ekran & Tahta)">Grup Çalışma Odası 2 (Ekran & Tahta - 8 Kişilik)</option>
                    <option value="Grup Çalışma Odası 3 (Proje Odası)">Grup Çalışma Odası 3 (Proje Odası - 10 Kişilik)</option>
                    <option value="Multimedya & Video Odası">Multimedya & Video Izleme Odası</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Saat Dilimi</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-slate-900 border border-white/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-400 cursor-pointer"
                  >
                    <option value="10:00 - 12:00">10:00 - 12:00</option>
                    <option value="12:00 - 14:00">12:00 - 14:00</option>
                    <option value="14:00 - 16:00">14:00 - 16:00</option>
                    <option value="16:00 - 18:00">16:00 - 18:00</option>
                    <option value="18:00 - 20:00">18:00 - 20:00</option>
                    <option value="20:00 - 22:00">20:00 - 22:00</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Oda Rezerve Et (LibCal) <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Popular Electronic Databases A-Z */}
          <div className="lg:col-span-6 bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-400 uppercase tracking-widest">
                <Database className="w-4 h-4" /> VERİ TABANLARI & E-KAYNAKLAR
              </div>
              <h3 className="text-2xl font-black text-white">Popüler Akademik Veri Tabanları</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Dünyanın en prestijli akademik yayıncılarının veri tabanlarına kampüs içinden veya kampüs dışı erişim (EZproxy) ile 7/24 erişebilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {databases.map((db, idx) => (
                <a
                  key={idx}
                  href={db.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 bg-slate-900/60 border border-white/10 rounded-2xl hover:border-blue-400/50 hover:bg-white/10 transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                    <span>{db.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <span className="text-[10px] text-slate-400">{db.category}</span>
                </a>
              ))}
            </div>

            <a
              href="https://library.ozyegin.edu.tr/tr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition-all border border-white/20 text-center"
            >
              Özyeğin Kütüphanesi Web Sitesine Git (library.ozyegin.edu.tr)
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
