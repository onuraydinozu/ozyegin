"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, Dumbbell, Waves, Users, Target, MapPin, 
  Calendar, CheckCircle2, ArrowRight, Play, Activity,
  Clock, Flame, HeartPulse, Search, Sparkles, Filter,
  QrCode, UserCheck, ShieldCheck, ChevronRight, Calculator,
  Award, Zap, Check, AlertCircle, X
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { sportsCenterData } from "@/data/sportsCenterData";

// Counter component for animated metrics
const CountUp = ({ to, suffix = "" }: { to: number | string, suffix?: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {to}{suffix}
    </motion.span>
  );
};

// Facility categories
const FACILITY_CATEGORIES = [
  { id: "all", label: "Tüm Tesisler" },
  { id: "fitness", label: "Kondisyon & Fitness" },
  { id: "pool", label: "Yüzme & Su Sporları" },
  { id: "arena", label: "Kapalı Arena" },
  { id: "studios", label: "Grup Stüdyoları" },
  { id: "outdoor", label: "Açık Saha & Kortlar" },
];

// Interactive Class Schedule Data
const SCHEDULE_DATA: Record<string, Array<{ time: string; title: string; instructor: string; studio: string; capacity: string; spotsLeft: number; category: string }>> = {
  "Pazartesi": [
    { time: "08:30 - 09:30", title: "Morning Pilates", instructor: "Ezgi Yılmaz", studio: "Stüdyo 1", capacity: "20 Kişi", spotsLeft: 3, category: "Pilates" },
    { time: "12:15 - 13:00", title: "Spinning Express", instructor: "Mert Demir", studio: "Spinning Salonu", capacity: "15 Kişi", spotsLeft: 1, category: "Cardio" },
    { time: "17:30 - 18:30", title: "Functional HIIT", instructor: "Caner Kaya", studio: "Stüdyo 2", capacity: "25 Kişi", spotsLeft: 6, category: "Strength" },
    { time: "19:00 - 20:00", title: "Zumba Party", instructor: "Selin Şahin", studio: "Stüdyo 1", capacity: "30 Kişi", spotsLeft: 12, category: "Dance" },
  ],
  "Salı": [
    { time: "09:00 - 10:00", title: "Vinyasa Yoga", instructor: "Ayşe Özkan", studio: "Stüdyo 3", capacity: "18 Kişi", spotsLeft: 4, category: "Yoga" },
    { time: "13:00 - 14:00", title: "Aqua Fitness", instructor: "Deniz Arslan", studio: "Yarı Olimpik Havuz", capacity: "12 Kişi", spotsLeft: 2, category: "Water" },
    { time: "18:00 - 19:15", title: "ÖzÜ Cross Training", instructor: "Mert Demir", studio: "Kondisyon Alanı", capacity: "15 Kişi", spotsLeft: 0, category: "Strength" },
  ],
  "Çarşamba": [
    { time: "08:30 - 09:30", title: "Core & Abs Blast", instructor: "Ezgi Yılmaz", studio: "Stüdyo 1", capacity: "25 Kişi", spotsLeft: 8, category: "Strength" },
    { time: "12:30 - 13:30", title: "Spinning Rhythm", instructor: "Caner Kaya", studio: "Spinning Salonu", capacity: "15 Kişi", spotsLeft: 5, category: "Cardio" },
    { time: "18:30 - 19:30", title: "Kickboxing Aerobics", instructor: "Barış Tufan", studio: "Stüdyo 2", capacity: "20 Kişi", spotsLeft: 3, category: "Martial" },
  ],
  "Perşembe": [
    { time: "09:30 - 10:30", title: "Yin Yoga & Meditasyon", instructor: "Ayşe Özkan", studio: "Stüdyo 3", capacity: "18 Kişi", spotsLeft: 7, category: "Yoga" },
    { time: "17:30 - 18:30", title: "Total Body Sculpt", instructor: "Selin Şahin", studio: "Stüdyo 1", capacity: "25 Kişi", spotsLeft: 2, category: "Strength" },
    { time: "19:00 - 20:00", title: "Serbest Yüzme Tekniği", instructor: "Deniz Arslan", studio: "Yarı Olimpik Havuz", capacity: "10 Kişi", spotsLeft: 1, category: "Water" },
  ],
  "Cuma": [
    { time: "12:15 - 13:00", title: "Lunch Time HIIT", instructor: "Mert Demir", studio: "Kondisyon Alanı", capacity: "20 Kişi", spotsLeft: 9, category: "Cardio" },
    { time: "18:00 - 19:30", title: "ÖzÜ Wolves Takım Antrenmanı", instructor: "Koç Kaan Koçer", studio: "Ana Arena", capacity: "Özel Takım", spotsLeft: 0, category: "Wolves" },
  ],
  "Cumartesi": [
    { time: "10:30 - 11:30", title: "Weekend Pilates Mat", instructor: "Ezgi Yılmaz", studio: "Stüdyo 1", capacity: "25 Kişi", spotsLeft: 10, category: "Pilates" },
    { time: "14:00 - 15:30", title: "Tenis Başlangıç Kliniği", instructor: "Volkan Er", studio: "Açık Tenis Kortu", capacity: "8 Kişi", spotsLeft: 2, category: "Tennis" },
  ],
  "Pazar": [
    { time: "11:00 - 12:30", title: "Stretching & Foam Roller", instructor: "Barış Tufan", studio: "Stüdyo 3", capacity: "20 Kişi", spotsLeft: 14, category: "Recovery" },
  ]
};

// Facility Live Occupancy Data
const DETAILED_FACILITIES = [
  {
    id: "fitness",
    title: "Fitness & Kondisyon Merkezi",
    category: "fitness",
    occupancy: 65,
    status: "Yoğun",
    statusColor: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    specs: ["2 Katlı 1.800 m²", "Technogym & Eleiko Parkuru", "InBody 770 Vücut Analiz Cihazı", "İklimlendirilmiş Temiz Hava"],
    hours: "07:00 - 23:00"
  },
  {
    id: "pool",
    title: "Yarı Olimpik Kapalı Yüzme Havuzu",
    category: "pool",
    occupancy: 28,
    status: "Müsait",
    statusColor: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    specs: ["25 Metre, 5 Kulvar", "Ozon & UV Filtrasyon", "28°C Sabit Su Sıcaklığı", "Tribün & Seyir Alanı"],
    hours: "07:30 - 22:00"
  },
  {
    id: "arena",
    title: "FIBA Standartlarında Ana Arena",
    category: "arena",
    occupancy: 40,
    status: "Normal",
    statusColor: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    specs: ["1.500 Koltuk Kapasitesi", "Akçaağaç Parke Zemin", "Skorboard & Ses Sistemi", "Basketbol / Voleybol / Hentbol"],
    hours: "08:00 - 23:00"
  },
  {
    id: "studios",
    title: "Grup Egzersiz Stüdyoları",
    category: "studios",
    occupancy: 82,
    status: "Çok Yoğun",
    statusColor: "bg-rose-500",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    specs: ["4 Bağımsız Özel Stüdyo", "Yaylı Ahşap Taban", "Aynalı Duvar Sistemleri", "Spinning & Pilates Donanımı"],
    hours: "08:30 - 21:30"
  },
  {
    id: "squash",
    title: "Squash & Tenis Kortları",
    category: "outdoor",
    occupancy: 50,
    status: "Normal",
    statusColor: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=80",
    specs: ["2 Adet Kapalı Squash Kortu", "Açılabilir Tenis Kortu", "WSF Standartları", "Online Saatlik Randevu"],
    hours: "08:00 - 22:00"
  },
  {
    id: "outdoor",
    title: "Açık Spor Tesisleri & Parkur",
    category: "outdoor",
    occupancy: 35,
    status: "Müsait",
    statusColor: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80",
    specs: ["FIFA Onaylı Sentetik Çim Saha", "Açık Basketbol & Voleybol", "1.2 km Tartan Koşu Parkuru", "Aydınlatmalı Gece Kullanımı"],
    hours: "06:00 - 24:00"
  }
];

export default function SportsCenterPage() {
  // State variables for dynamic interactive components
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDay, setSelectedDay] = useState("Pazartesi");
  const [searchBranch, setSearchBranch] = useState("");
  const [selectedClassBooking, setSelectedClassBooking] = useState<any>(null);
  
  // Interactive Calculator State
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(175);
  const [goal, setGoal] = useState<string>("fit");
  
  // Dynamic Booking Form State
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [selectedFacilityName, setSelectedFacilityName] = useState<string>("Fitness & Kondisyon Merkezi");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("14:00 - 15:30");
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [generatedPass, setGeneratedPass] = useState<any>(null);

  // Filtered facilities
  const filteredFacilities = activeCategory === "all" 
    ? DETAILED_FACILITIES 
    : DETAILED_FACILITIES.filter(f => f.category === activeCategory);

  // Filtered sports branches
  const filteredBranches = sportsCenterData.teams.branches.filter(b => 
    b.toLowerCase().includes(searchBranch.toLowerCase())
  );

  // BMI Calculation
  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);
  const waterTarget = (weight * 0.035).toFixed(1);

  const getBmiStatus = (val: number) => {
    if (val < 18.5) return { label: "İdeal Altı", color: "text-amber-500", rec: "Kas kazanımı için Fitness ve Beslenme danışmanlığı önerilir." };
    if (val < 24.9) return { label: "İdeal Form", color: "text-emerald-600", rec: "Formunuzu korumak için Yüzme, HIIT ve Grup dersleri tam size göre!" };
    if (val < 29.9) return { label: "Hafif Kilolu", color: "text-blue-600", rec: "Kardiyo, Spinning ve Yarı Olimpik Havuz seansları ile kalori yakın." };
    return { label: "Yüksek BMI", color: "text-rose-600", rec: "Bireysel eğitmen eşliğinde düşük etkili kardiyo ve yürüyüş programı." };
  };

  const bmiStatus = getBmiStatus(parseFloat(bmi));

  // Handle Pass Generation
  const handleGeneratePass = (e: React.FormEvent) => {
    e.preventDefault();
    const passCode = "OZU-SPORTS-" + Math.floor(100000 + Math.random() * 900000);
    setGeneratedPass({
      code: passCode,
      name: studentName,
      idNo: studentId,
      facility: selectedFacilityName,
      slot: selectedTimeSlot,
      date: new Date().toLocaleDateString("tr-TR")
    });
    setBookingStep(3);
  };

  return (
    <main className="bg-slate-50 text-slate-900 font-sans min-h-screen relative overflow-x-hidden selection:bg-[#DF1934] selection:text-white">
      <Header />

      {/* Dynamic Animated Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
        {/* Dynamic Glowing Accent Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#DF1934]/30 rounded-full blur-[140px] animate-pulse"></div>
          <div className="absolute top-1/2 -left-24 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[130px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 font-extrabold text-xs tracking-widest uppercase backdrop-blur-md"
              >
                <Zap className="w-4 h-4 text-red-500 animate-pulse" />
                {sportsCenterData.hero.subtitle} • DİNAMİK YAŞAM KAMPÜSÜ
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]"
              >
                Enerjini Keşfet, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF1934] via-rose-400 to-amber-400">
                  Sınırlarını Aş.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
              >
                {sportsCenterData.hero.description}
              </motion.p>

              {/* Hero Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
              >
                <a 
                  href="#booking-wizard" 
                  className="px-7 py-4 bg-[#DF1934] hover:bg-[#c4152d] text-white font-extrabold text-sm rounded-2xl transition-all shadow-lg shadow-red-600/30 flex items-center gap-2 group hover:scale-[1.02]"
                >
                  <QrCode className="w-5 h-5" />
                  Hemen QR Pass / Randevu Al
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="#classes-schedule" 
                  className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm rounded-2xl transition-all backdrop-blur-md flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5 text-red-400" />
                  Haftalık Ders Programı
                </a>
              </motion.div>
            </div>

            {/* Hero Live Metric Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {sportsCenterData.hero.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="bg-white/5 border border-white/15 rounded-3xl p-6 backdrop-blur-xl hover:border-red-500/50 hover:bg-white/10 transition-all group"
                >
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1 group-hover:text-red-400 transition-colors">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">{stat.label}</div>
                  <div className="mt-3 flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Aktif Kullanımda
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Facility Explorer Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[#DF1934] font-bold text-xs uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" /> 13.000 m² Profesyonel Altyapı
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Tesisler & Canlı Doluluk Oranları
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Kampüsümüzde yer alan spor tesislerimizin anlık doluluk durumlarını inceleyin, gitmek istediğiniz alanı seçin.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {FACILITY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-[#DF1934] text-white shadow-lg shadow-red-600/20 scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Facility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredFacilities.map((facility) => (
              <motion.div
                key={facility.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-slate-300 transition-all flex flex-col group"
              >
                {/* Facility Image & Live Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Live Status Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold">
                    <span className={`w-2.5 h-2.5 rounded-full ${facility.statusColor} animate-ping`}></span>
                    <span className={`w-2.5 h-2.5 rounded-full ${facility.statusColor}`}></span>
                    {facility.status} (Anlık %{facility.occupancy})
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1 rounded-xl">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> {facility.hours}
                    </span>
                  </div>
                </div>

                {/* Facility Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#DF1934] transition-colors">
                      {facility.title}
                    </h3>
                    
                    {/* Live Progress Bar */}
                    <div className="space-y-1.5 mb-5">
                      <div className="flex justify-between text-xs font-bold text-slate-500">
                        <span>Doluluk Oranı</span>
                        <span className="text-slate-800">%{facility.occupancy}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ${
                            facility.occupancy > 75 ? "bg-rose-500" : facility.occupancy > 50 ? "bg-amber-500" : "bg-emerald-500"
                          }`}
                          style={{ width: `${facility.occupancy}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2">
                      {facility.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-[#DF1934] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#booking-wizard"
                    onClick={() => setSelectedFacilityName(facility.title)}
                    className="w-full py-3 bg-slate-900 hover:bg-[#DF1934] text-white text-xs font-bold rounded-2xl transition-all text-center flex items-center justify-center gap-2 group/btn"
                  >
                    Tesis İçin Randevu Al
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Interactive Classes & Schedule Section */}
      <section id="classes-schedule" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/20 text-red-400 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-red-500/30">
              <Calendar className="w-4 h-4" /> CANLI DERS PROGRAMI & REZERVASYON
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              Grup Egzersiz Dersleri
            </h2>
            <p className="text-slate-300 text-sm">
              Uzman eğitmenlerimiz eşliğinde gerçekleştirilen grup derslerine ücretsiz katılın. Gün seçin ve kontenjan dolmadan yerinizi ayırtın.
            </p>
          </div>

          {/* Days Selector Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {Object.keys(SCHEDULE_DATA).map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-2xl text-xs font-extrabold transition-all whitespace-nowrap ${
                  selectedDay === day
                    ? "bg-[#DF1934] text-white shadow-lg shadow-red-600/40 scale-105"
                    : "bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule Class Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCHEDULE_DATA[selectedDay]?.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:bg-white/10 hover:border-red-500/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-300 text-[11px] font-extrabold rounded-xl">
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> {item.time}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  
                  <div className="text-xs text-slate-300 space-y-1">
                    <div><strong className="text-slate-100">Eğitmen:</strong> {item.instructor}</div>
                    <div><strong className="text-slate-100">Konum:</strong> {item.studio}</div>
                    <div><strong className="text-slate-100">Kapasite:</strong> {item.capacity}</div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-white/10">
                  <span className={`text-xs font-bold ${item.spotsLeft === 0 ? "text-rose-400" : item.spotsLeft < 4 ? "text-amber-400" : "text-emerald-400"}`}>
                    {item.spotsLeft === 0 ? "Kontenjan Doldu" : `Son ${item.spotsLeft} Kontenjan!`}
                  </span>
                  <button
                    onClick={() => setSelectedClassBooking(item)}
                    disabled={item.spotsLeft === 0}
                    className="px-4 py-2 bg-[#DF1934] hover:bg-[#c4152d] disabled:bg-slate-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl transition-all shadow-md"
                  >
                    {item.spotsLeft === 0 ? "Dolu" : "Derse Kaydol"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Booking Modal */}
      {selectedClassBooking && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative text-slate-900 border border-slate-200"
          >
            <button 
              onClick={() => setSelectedClassBooking(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-red-100 text-[#DF1934] rounded-2xl flex items-center justify-center mx-auto mb-3">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold">{selectedClassBooking.title}</h3>
              <p className="text-xs text-slate-500">{selectedDay} • {selectedClassBooking.time}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl space-y-2 mb-6 text-xs text-slate-700">
              <div className="flex justify-between">
                <span>Eğitmen:</span>
                <strong className="text-slate-900">{selectedClassBooking.instructor}</strong>
              </div>
              <div className="flex justify-between">
                <span>Stüdyo:</span>
                <strong className="text-slate-900">{selectedClassBooking.studio}</strong>
              </div>
              <div className="flex justify-between">
                <span>Kalan Kontenjan:</span>
                <strong className="text-emerald-600">{selectedClassBooking.spotsLeft} Kişi</strong>
              </div>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert(`Tebrikler! ${selectedClassBooking.title} dersi için kaydınız alındı.`);
              setSelectedClassBooking(null);
            }} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase">Öğrenci Ad Soyad</label>
                <input required type="text" placeholder="Adınız ve Soyadınız" className="w-full bg-slate-100 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#DF1934]" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase">Öğrenci Numarası</label>
                <input required type="text" placeholder="Örn: 20261104" className="w-full bg-slate-100 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#DF1934]" />
              </div>
              <button type="submit" className="w-full py-4 bg-[#DF1934] hover:bg-[#c4152d] text-white font-extrabold rounded-xl shadow-lg transition-all text-sm">
                Kaydı Onayla
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Interactive Fitness & Activity Calculator */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Calculator Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase tracking-wider border border-red-500/30">
                <Calculator className="w-4 h-4" /> İNTERAKTİF FİTNESS ASİSTANI
              </div>
              <h2 className="text-3xl font-black tracking-tight">
                Vücut Kitle İndeksi & Sağlık Öneri Aracı
              </h2>
              <p className="text-slate-300 text-sm">
                Kilonuzu ve boyunuzu girerek BMI (Vücut Kitle İndeksi) değerinizi hesaplayın, Özyeğin Üniversitesi Spor Merkezi'nin size özel önerilerini öğrenin.
              </p>

              <div className="space-y-5 pt-2">
                {/* Weight Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-300">Kilo (kg)</span>
                    <span className="text-red-400 text-sm">{weight} kg</span>
                  </div>
                  <input 
                    type="range" 
                    min={40} 
                    max={140} 
                    value={weight} 
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full accent-[#DF1934] cursor-pointer"
                  />
                </div>

                {/* Height Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-300">Boy (cm)</span>
                    <span className="text-red-400 text-sm">{height} cm</span>
                  </div>
                  <input 
                    type="range" 
                    min={140} 
                    max={210} 
                    value={height} 
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full accent-[#DF1934] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Results Box */}
            <div className="lg:col-span-6 bg-white/10 border border-white/15 rounded-3xl p-8 backdrop-blur-xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-bold text-slate-300 uppercase">Hesaplanan BMI</div>
                  <div className="text-4xl font-black text-white font-mono">{bmi}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-300 uppercase">Durum</div>
                  <div className={`text-lg font-extrabold ${bmiStatus.color}`}>{bmiStatus.label}</div>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Günlük Hedeflenen Su Tüketimi: <strong className="text-white font-mono">{waterTarget} Litre</strong></span>
                </div>
                <div className="flex items-start gap-2 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <Sparkles className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-white">Kişiye Özel ÖzÜ Spor Tavsiyesi:</strong> {bmiStatus.rec}
                  </p>
                </div>
              </div>

              <a 
                href="#booking-wizard" 
                className="block text-center py-3.5 bg-[#DF1934] hover:bg-[#c4152d] text-white font-extrabold text-xs rounded-2xl transition-all shadow-md"
              >
                InBody Vücut Analizi İçin Randevu Al
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ÖzÜ Wolves Sports Teams & Tryouts */}
      <section className="py-20 bg-white max-w-7xl mx-auto px-6 border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[#DF1934] font-bold text-xs uppercase tracking-widest mb-2">
              <Trophy className="w-4 h-4" /> ULUSAL & ULUSLARARASI ŞAMPİYONLAR
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              ÖzÜ Wolves Takımları & Branşlar
            </h2>
          </div>

          {/* Search Branch Input */}
          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Branş Ara (örn: Basketbol, Kürek)..."
              value={searchBranch}
              onChange={(e) => setSearchBranch(e.target.value)}
              className="w-full bg-slate-100 border border-slate-300 rounded-2xl pl-10 pr-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#DF1934]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {filteredBranches.map((branch, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center hover:bg-[#DF1934] hover:text-white hover:border-[#DF1934] transition-all cursor-default group"
            >
              <Award className="w-6 h-6 text-[#DF1934] group-hover:text-white mx-auto mb-2 transition-colors" />
              <div className="text-xs font-extrabold tracking-tight">{branch}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Booking & QR Pass Generator */}
      <section id="booking-wizard" className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-100 text-[#DF1934] rounded-full text-xs font-bold tracking-widest uppercase mb-3">
                <QrCode className="w-4 h-4" /> DİJİTAL SPOR PASS OLUŞTURUCU
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                Tesis Rezerve Et & QR Giriş Kartı Al
              </h2>
              <p className="text-slate-600 text-xs">
                Bilgilerinizi girin, kampüs turnikelerinden tek tıkla geçiş sağlayabileceğiniz dijital giriş QR Pass kartınızı anında oluşturun.
              </p>
            </div>

            {bookingStep === 1 && (
              <form onSubmit={handleGeneratePass} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-2">Adınız Soyadınız</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Ad Soyad"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#DF1934]" 
                    />
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-2">Öğrenci / Sicil No</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Örn: 20261104"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#DF1934]" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-2">Tesis / Hizmet</label>
                    <select 
                      value={selectedFacilityName}
                      onChange={(e) => setSelectedFacilityName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#DF1934] cursor-pointer"
                    >
                      {DETAILED_FACILITIES.map(f => (
                        <option key={f.id} value={f.title}>{f.title}</option>
                      ))}
                      <option value="InBody Vücut Analiz Randevusu">InBody Vücut Analiz Randevusu</option>
                      <option value="ÖzÜ Wolves Takım Seçmesi">ÖzÜ Wolves Takım Seçmesi</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-2">Saat Dilimi</label>
                    <select 
                      value={selectedTimeSlot}
                      onChange={(e) => setSelectedTimeSlot(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#DF1934] cursor-pointer"
                    >
                      <option value="09:00 - 10:30">09:00 - 10:30</option>
                      <option value="11:00 - 12:30">11:00 - 12:30</option>
                      <option value="14:00 - 15:30">14:00 - 15:30</option>
                      <option value="16:00 - 17:30">16:00 - 17:30</option>
                      <option value="18:00 - 19:30">18:00 - 19:30</option>
                      <option value="20:00 - 21:30">20:00 - 21:30</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-[#DF1934] hover:bg-[#c4152d] text-white font-extrabold text-sm rounded-2xl transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 group"
                >
                  <QrCode className="w-5 h-5" />
                  Dijital QR Giriş Pass Kartı Oluştur
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}

            {/* Generated QR Pass Preview Ticket */}
            {generatedPass && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-700 shadow-2xl relative space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#DF1934] rounded-xl flex items-center justify-center text-white font-black">
                      ÖzÜ
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-white">ÖZÜ SPORTS DIGITAL PASS</h4>
                      <p className="text-[11px] text-slate-400">{generatedPass.code}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> ONAYLANDI
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div>
                    <span className="text-slate-500 block">Öğrenci Adı:</span>
                    <strong className="text-white text-sm">{generatedPass.name}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Öğrenci No:</span>
                    <strong className="text-white text-sm">{generatedPass.idNo}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Tesis / Hizmet:</span>
                    <strong className="text-white text-sm">{generatedPass.facility}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Tarih & Saat:</span>
                    <strong className="text-white text-sm">{generatedPass.date} ({generatedPass.slot})</strong>
                  </div>
                </div>

                {/* Simulated QR Pass Image */}
                <div className="bg-white p-4 rounded-2xl flex items-center justify-between text-slate-900">
                  <div className="space-y-1">
                    <p className="text-xs font-bold">Turnike Geçiş İzni</p>
                    <p className="text-[10px] text-slate-500">Spor Merkezi Giriş Danışmasında Okutun</p>
                  </div>
                  <div className="w-16 h-16 bg-slate-900 rounded-xl p-2 flex items-center justify-center">
                    <QrCode className="w-12 h-12 text-white" />
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setGeneratedPass(null);
                    setStudentName("");
                    setStudentId("");
                  }}
                  className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition-all text-center"
                >
                  Yeni Randevu / Pass Oluştur
                </button>
              </motion.div>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
