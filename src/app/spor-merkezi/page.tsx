"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, Dumbbell, Waves, Users, Target, MapPin, 
  Calendar, CheckCircle2, ArrowRight, Play, Activity,
  Clock, Flame, HeartPulse, Search, Sparkles, Filter,
  UserCheck, ShieldCheck, ChevronRight, Calculator,
  Award, Zap, Check, AlertCircle, X, GraduationCap, FileText, Globe
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
  { id: "fitness", label: "Fitness & Kondisyon" },
  { id: "pool", label: "Yüzme Havuzu" },
  { id: "arena", label: "Spor Salonu (Arena)" },
  { id: "studios", label: "Grup Stüdyoları" },
  { id: "outdoor", label: "Açık Tesisler & Kortlar" },
];

// Official Class Schedule Data
const SCHEDULE_DATA: Record<string, Array<{ time: string; title: string; instructor: string; studio: string; category: string }>> = {
  "Pazartesi": [
    { time: "08:30 - 09:30", title: "Morning Pilates", instructor: "Ezgi Yılmaz", studio: "Stüdyo 1", category: "Pilates" },
    { time: "12:15 - 13:00", title: "Spinning Express", instructor: "Mert Demir", studio: "Spinning Salonu", category: "Cardio" },
    { time: "17:30 - 18:30", title: "Functional HIIT", instructor: "Caner Kaya", studio: "Stüdyo 2", category: "Strength" },
    { time: "19:00 - 20:00", title: "Zumba Party", instructor: "Selin Şahin", studio: "Stüdyo 1", category: "Dance" },
  ],
  "Salı": [
    { time: "09:00 - 10:00", title: "Vinyasa Yoga", instructor: "Ayşe Özkan", studio: "Stüdyo 3", category: "Yoga" },
    { time: "13:00 - 14:00", title: "Aqua Fitness", instructor: "Deniz Arslan", studio: "Yarı Olimpik Havuz", category: "Water" },
    { time: "18:00 - 19:15", title: "Cross Training", instructor: "Mert Demir", studio: "Kondisyon Alanı", category: "Strength" },
  ],
  "Çarşamba": [
    { time: "08:30 - 09:30", title: "Core & Abs Blast", instructor: "Ezgi Yılmaz", studio: "Stüdyo 1", category: "Strength" },
    { time: "12:30 - 13:30", title: "Spinning Rhythm", instructor: "Caner Kaya", studio: "Spinning Salonu", category: "Cardio" },
    { time: "18:30 - 19:30", title: "Kickboxing Aerobics", instructor: "Barış Tufan", studio: "Stüdyo 2", category: "Martial" },
  ],
  "Perşembe": [
    { time: "09:30 - 10:30", title: "Yin Yoga & Meditasyon", instructor: "Ayşe Özkan", studio: "Stüdyo 3", category: "Yoga" },
    { time: "17:30 - 18:30", title: "Total Body Sculpt", instructor: "Selin Şahin", studio: "Stüdyo 1", category: "Strength" },
    { time: "19:00 - 20:00", title: "Serbest Yüzme Tekniği", instructor: "Deniz Arslan", studio: "Yarı Olimpik Havuz", category: "Water" },
  ],
  "Cuma": [
    { time: "12:15 - 13:00", title: "Lunch Time HIIT", instructor: "Mert Demir", studio: "Kondisyon Alanı", category: "Cardio" },
    { time: "18:00 - 19:30", title: "ÖzÜ Wolves Takım Antrenmanı", instructor: "Koç Kaan Koçer", studio: "Ana Arena", category: "Wolves" },
  ],
  "Cumartesi": [
    { time: "10:30 - 11:30", title: "Weekend Pilates Mat", instructor: "Ezgi Yılmaz", studio: "Stüdyo 1", category: "Pilates" },
    { time: "14:00 - 15:30", title: "Tenis Kliniği", instructor: "Volkan Er", studio: "Açık Tenis Kortu", category: "Tennis" },
  ],
  "Pazar": [
    { time: "11:00 - 12:30", title: "Stretching & Serbest Çalışma", instructor: "Barış Tufan", studio: "Stüdyo 3", category: "Recovery" },
  ]
};

export default function SportsCenterPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDay, setSelectedDay] = useState("Pazartesi");
  const [searchBranch, setSearchBranch] = useState("");
  const [selectedClassModal, setSelectedClassModal] = useState<any>(null);
  
  // Fitness Calculator State
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(175);
  
  // Appointment Form State
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [selectedFacilityName, setSelectedFacilityName] = useState("Fitness & Kondisyon Merkezi");
  const [submittedForm, setSubmittedForm] = useState(false);

  // Filtered facilities
  const filteredFacilities = activeCategory === "all" 
    ? sportsCenterData.facilities 
    : sportsCenterData.facilities.filter(f => f.category === activeCategory);

  // Filtered sports branches
  const filteredBranches = sportsCenterData.teams.branches.filter(b => 
    b.toLowerCase().includes(searchBranch.toLowerCase())
  );

  // BMI Calculation
  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);
  const waterTarget = (weight * 0.035).toFixed(1);

  const getBmiStatus = (val: number) => {
    if (val < 18.5) return { label: "İdeal Altı", color: "text-amber-500", rec: "Kas kütlesini artırmak için Fitness ve Beslenme Danışmanlığı önerilir." };
    if (val < 24.9) return { label: "İdeal Form", color: "text-emerald-600", rec: "Formunuzu korumak için Yüzme, HIIT ve Grup Stüdyo dersleri harika bir seçenek!" };
    if (val < 29.9) return { label: "Hafif Kilolu", color: "text-blue-600", rec: "Kardiyo, Spinning ve Yarı Olimpik Yüzme Havuzu seansları ile dayanıklılık kazanın." };
    return { label: "Yüksek BMI", color: "text-rose-600", rec: "Uzman antrenörlerimiz eşliğinde bireysel çalışma programı önerilir." };
  };

  const bmiStatus = getBmiStatus(parseFloat(bmi));

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedForm(true);
    setTimeout(() => {
      setSubmittedForm(false);
      setStudentName("");
      setStudentId("");
    }, 4000);
  };

  return (
    <main className="bg-slate-50 text-slate-900 font-sans min-h-screen relative overflow-x-hidden selection:bg-[#DF1934] selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
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
                ÖZYEĞİN ÜNİVERSİTESİ SPOR MERKEZİ
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]"
              >
                Kampüste Spor & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF1934] via-rose-400 to-amber-400">
                  Sağlıklı Yaşam.
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

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
              >
                <a 
                  href="#facilities-section" 
                  className="px-7 py-4 bg-[#DF1934] hover:bg-[#c4152d] text-white font-extrabold text-sm rounded-2xl transition-all shadow-lg shadow-red-600/30 flex items-center gap-2 group hover:scale-[1.02]"
                >
                  Tesis Kullanım Programları
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="#scholarships-section" 
                  className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm rounded-2xl transition-all backdrop-blur-md flex items-center gap-2"
                >
                  <Award className="w-5 h-5 text-amber-400" />
                  Spor Bursları & Takımlar
                </a>
              </motion.div>
            </div>

            {/* Hero Metric Cards */}
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
                    <CheckCircle2 className="w-3.5 h-3.5" /> Hizmete Açık
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Facilities & Usage Schedule Section */}
      <section id="facilities-section" className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[#DF1934] font-bold text-xs uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" /> 13.000 m² KAPALI ALAN & AÇIK TESİSLER
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Spor Tesislerimiz ve Özellikleri
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Özyeğin Üniversitesi Spor Merkezi bünyesinde yer alan tesisleri ve haftalık kullanım imkanlarını inceleyin.
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
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    {facility.status}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1 rounded-xl">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> {facility.hours}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-[#DF1934] transition-colors">
                      {facility.title}
                    </h3>

                    {/* Features List */}
                    <div className="space-y-2.5 mb-2">
                      {facility.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-[#DF1934] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#appointment-section"
                    onClick={() => setSelectedFacilityName(facility.title)}
                    className="w-full py-3 bg-slate-900 hover:bg-[#DF1934] text-white text-xs font-bold rounded-2xl transition-all text-center flex items-center justify-center gap-2 group/btn"
                  >
                    {facility.linkText}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Official Class Schedule Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/20 text-red-400 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-red-500/30">
              <Calendar className="w-4 h-4" /> HAFTALIK GRUP DERS PROGRAMI
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              Stüdyo & Egzersiz Seansları
            </h2>
            <p className="text-slate-300 text-sm">
              Pilates, Yoga, Spinning ve Pilates gibi grup derslerimize hafta içi ve hafta sonu seanslarıyla katılabilirsiniz.
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

          {/* Class Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  </div>
                </div>

                <button
                  onClick={() => setSelectedClassModal(item)}
                  className="w-full py-2.5 bg-[#DF1934] hover:bg-[#c4152d] text-white font-bold text-xs rounded-xl transition-all shadow-md text-center"
                >
                  Detay & Katılım
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Modal */}
      {selectedClassModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative text-slate-900 border border-slate-200"
          >
            <button 
              onClick={() => setSelectedClassModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-red-100 text-[#DF1934] rounded-2xl flex items-center justify-center mx-auto mb-3">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold">{selectedClassModal.title}</h3>
              <p className="text-xs text-slate-500">{selectedDay} • {selectedClassModal.time}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl space-y-2 mb-6 text-xs text-slate-700">
              <div className="flex justify-between">
                <span>Eğitmen:</span>
                <strong className="text-slate-900">{selectedClassModal.instructor}</strong>
              </div>
              <div className="flex justify-between">
                <span>Stüdyo:</span>
                <strong className="text-slate-900">{selectedClassModal.studio}</strong>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Derslerimize kampüs öğrencileri ve personelleri doğrudan katılabilir. Ekipmanlar Spor Merkezi tarafından temin edilmektedir.
            </p>

            <button 
              onClick={() => setSelectedClassModal(null)}
              className="w-full py-3.5 bg-slate-900 hover:bg-[#DF1934] text-white font-extrabold rounded-xl transition-all text-xs"
            >
              Kapat
            </button>
          </motion.div>
        </div>
      )}

      {/* Official Modules: Scholarships & Academic Courses */}
      <section id="scholarships-section" className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Sports Scholarships Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              {sportsCenterData.scholarships.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {sportsCenterData.scholarships.description}
            </p>

            <div className="space-y-2.5 pt-2">
              {sportsCenterData.scholarships.benefits.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <a 
              href="https://www.ozyegin.edu.tr/tr/spor-merkezi/burslar" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#DF1934] font-extrabold text-xs hover:underline"
            >
              Spor Bursları Detaylarını İnceleyin <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Academic Courses Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              {sportsCenterData.academicCourses.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {sportsCenterData.academicCourses.description}
            </p>

            <div className="space-y-2.5 pt-2">
              {sportsCenterData.academicCourses.courses.map((c, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <a 
              href="https://www.ozyegin.edu.tr/tr/spor-merkezi/kredili-spor-dersleri" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-extrabold text-xs hover:underline"
            >
              Kredili Spor Ders Kataloğu <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </section>

      {/* Fitness & Activity Calculator */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase tracking-wider border border-red-500/30">
                <Calculator className="w-4 h-4" /> FİTNESS & SAĞLIK ASİSTANI
              </div>
              <h2 className="text-3xl font-black tracking-tight">
                Vücut Kitle İndeksi & Öneri Aracı
              </h2>
              <p className="text-slate-300 text-sm">
                Kilo ve boy değerlerinizi girerek Vücut Kitle İndeksinizi (BMI) hesaplayabilir, antrenörlerimiz tarafından tavsiye edilen spor rutinini öğrenebilirsiniz.
              </p>

              <div className="space-y-5 pt-2">
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

            <div className="lg:col-span-6 bg-white/10 border border-white/15 rounded-3xl p-8 backdrop-blur-xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-bold text-slate-300 uppercase">BMI Değeri</div>
                  <div className="text-4xl font-black text-white font-mono">{bmi}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-300 uppercase">Değerlendirme</div>
                  <div className={`text-lg font-extrabold ${bmiStatus.color}`}>{bmiStatus.label}</div>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Günlük Hedef Su Tüketimi: <strong className="text-white font-mono">{waterTarget} Litre</strong></span>
                </div>
                <div className="flex items-start gap-2 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <Sparkles className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-white">Spor Merkezi Tavsiyesi:</strong> {bmiStatus.rec}
                  </p>
                </div>
              </div>

              <a 
                href="#appointment-section" 
                className="block text-center py-3.5 bg-[#DF1934] hover:bg-[#c4152d] text-white font-extrabold text-xs rounded-2xl transition-all shadow-md"
              >
                InBody Vücut Analiz Randevusu Al
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ÖzÜ Wolves Sports Teams */}
      <section className="py-20 bg-white max-w-7xl mx-auto px-6 border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[#DF1934] font-bold text-xs uppercase tracking-widest mb-2">
              <Trophy className="w-4 h-4" /> ÖZÜ WOLVES KAMPÜS SPOR TAKIMLARI
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Spor Branşlarımız
            </h2>
          </div>

          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Branş Ara (örn: Yüzme, Kürek)..."
              value={searchBranch}
              onChange={(e) => setSearchBranch(e.target.value)}
              className="w-full bg-slate-100 border border-slate-300 rounded-2xl pl-10 pr-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#DF1934]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredBranches.map((branch, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center hover:bg-[#DF1934] hover:text-white hover:border-[#DF1934] transition-all cursor-default group"
            >
              <Award className="w-6 h-6 text-[#DF1934] group-hover:text-white mx-auto mb-2 transition-colors" />
              <div className="text-xs font-extrabold tracking-tight">{branch}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Appointment & Info Form Section */}
      <section id="appointment-section" className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-100 text-[#DF1934] rounded-full text-xs font-bold tracking-widest uppercase mb-3">
                <FileText className="w-4 h-4" /> SPOR MERKEZİ İLETİŞİM & KULLANIM DANIŞMA
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                Bilgi & Randevu Talebi
              </h2>
              <p className="text-slate-600 text-xs">
                Tesis kullanımı, InBody ölçümü veya takım seçmeleri hakkında bilgi almak için formu doldurabilirsiniz.
              </p>
            </div>

            {submittedForm ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-extrabold text-emerald-900">Talebiniz Alındı!</h4>
                <p className="text-xs text-emerald-700">Spor Merkezi ekibimiz en kısa sürede sizinle iletişime geçecektir.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-6">
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

                <div>
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-2">Konu / Tesis Seçimi</label>
                  <select 
                    value={selectedFacilityName}
                    onChange={(e) => setSelectedFacilityName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-5 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#DF1934] cursor-pointer"
                  >
                    {sportsCenterData.facilities.map(f => (
                      <option key={f.id} value={f.title}>{f.title}</option>
                    ))}
                    <option value="InBody Vücut Analiz Randevusu">InBody Vücut Analiz Randevusu</option>
                    <option value="Spor Bursları Bilgi Talebi">Spor Bursları Bilgi Talebi</option>
                    <option value="ÖzÜ Wolves Takım Seçmesi Bilgisi">ÖzÜ Wolves Takım Seçmesi Bilgisi</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-[#DF1934] hover:bg-[#c4152d] text-white font-extrabold text-sm rounded-2xl transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 group"
                >
                  Bilgi / Randevu Talebini Gönder
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
