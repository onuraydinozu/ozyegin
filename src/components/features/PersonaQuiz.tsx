"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RefreshCcw, Briefcase, Zap, Scale, DraftingCompass, Plane, ChevronRight, Activity } from "lucide-react";

type Faculty = "muhendislik" | "isletme" | "hukuk" | "mimarlik" | "havacilik";

const questions = [
  {
    id: 1,
    text: "Gelecekteki çalışma ortamını nasıl hayal ediyorsun?",
    options: [
      { text: "Bilgisayar başında sistem ve algoritmalar kurarak", faculty: "muhendislik" },
      { text: "Dinamik ekipleri yönetip stratejik kararlar alarak", faculty: "isletme" },
      { text: "Mahkeme veya kürsüde hak ve adaleti savunarak", faculty: "hukuk" },
      { text: "Stüdyoda yeni mekanlar ve objeler tasarlayarak", faculty: "mimarlik" },
      { text: "Sınırları aşıp gökyüzünde veya operasyonlarda", faculty: "havacilik" }
    ]
  },
  {
    id: 2,
    text: "Bir problemi çözerken ilk yaklaşımın nedir?",
    options: [
      { text: "Analitik verileri ve mantığı kullanırım", faculty: "muhendislik" },
      { text: "İletişim kurar ve kriz yönetimini devreye sokarım", faculty: "isletme" },
      { text: "Kuralları ve emsalleri detaylıca incelerim", faculty: "hukuk" },
      { text: "Görsel veya pratik yeni bir alternatif çizerim", faculty: "mimarlik" },
      { text: "Prosedürlere harfiyen uyar ve riskleri hesaplarım", faculty: "havacilik" }
    ]
  },
  {
    id: 3,
    text: "Hobilerin veya boş zaman aktivitelerin hangisine daha yakın?",
    options: [
      { text: "Teknoloji, oyun veya yeni araçları keşfetmek", faculty: "muhendislik" },
      { text: "Sosyal etkinlikler, ekonomi takibi veya ağ kurmak", faculty: "isletme" },
      { text: "Felsefe, tarih okumaları veya tartışma kulüpleri", faculty: "hukuk" },
      { text: "Sanat, fotoğrafçılık, el işi veya sergiler", faculty: "mimarlik" },
      { text: "Macera sporları, seyahat veya mekanik sistemler", faculty: "havacilik" }
    ]
  },
  {
    id: 4,
    text: "Kendini tek kelimeyle nasıl tanımlarsın?",
    options: [
      { text: "Yenilikçi", faculty: "muhendislik" },
      { text: "Lider", faculty: "isletme" },
      { text: "Adil", faculty: "hukuk" },
      { text: "Yaratıcı", faculty: "mimarlik" },
      { text: "Disiplinli", faculty: "havacilik" }
    ]
  }
];

const facultyData: Record<Faculty, { title: string; link: string; icon: React.ReactNode; color: string }> = {
  muhendislik: { title: "Mühendislik Fakültesi", link: "/fakulteler/muhendislik", icon: <Zap className="w-6 h-6 text-cyan-500" />, color: "border-cyan-500 text-cyan-600 bg-cyan-50" },
  isletme: { title: "İşletme Fakültesi", link: "/fakulteler/isletme", icon: <Briefcase className="w-6 h-6 text-emerald-500" />, color: "border-emerald-500 text-emerald-600 bg-emerald-50" },
  hukuk: { title: "Hukuk Fakültesi", link: "/fakulteler/hukuk", icon: <Scale className="w-6 h-6 text-amber-500" />, color: "border-amber-500 text-amber-600 bg-amber-50" },
  mimarlik: { title: "Mimarlık ve Tasarım Fakültesi", link: "/fakulteler/mimarlik-ve-tasarim", icon: <DraftingCompass className="w-6 h-6 text-blue-500" />, color: "border-blue-500 text-blue-600 bg-blue-50" },
  havacilik: { title: "Havacılık ve Uzay Bilimleri", link: "/fakulteler/havacilik", icon: <Plane className="w-6 h-6 text-red-500" />, color: "border-red-500 text-red-600 bg-red-50" }
};

export default function PersonaQuiz() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Start, 1-4: Qs, 5: Analyzing, 6: Result
  const [scores, setScores] = useState<Record<Faculty, number>>({
    muhendislik: 0, isletme: 0, hukuk: 0, mimarlik: 0, havacilik: 0
  });

  const handleStart = () => setCurrentStep(1);

  const handleAnswer = (faculty: Faculty) => {
    setScores(prev => ({ ...prev, [faculty]: prev[faculty] + 1 }));
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      setCurrentStep(5); // Analyzing
      setTimeout(() => setCurrentStep(6), 2000);
    }
  };

  const resetQuiz = () => {
    setScores({ muhendislik: 0, isletme: 0, hukuk: 0, mimarlik: 0, havacilik: 0 });
    setCurrentStep(0);
  };

  // Determine top 2 matches
  const sortedScores = Object.entries(scores).sort(([, a], [, b]) => b - a);
  const topMatch = sortedScores[0][0] as Faculty;
  const secondMatch = sortedScores[1][0] as Faculty;
  
  // Fake percentages based on score differences
  const topPercentage = 85 + (scores[topMatch] * 3) + Math.floor(Math.random() * 5);
  const secondPercentage = 70 + (scores[secondMatch] * 4) + Math.floor(Math.random() * 5);

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-ozu-red/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-ozu-red font-bold text-sm uppercase tracking-widest block mb-2">Geleceğini Keşfet</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Hangi ÖzÜ Bölümü Sensin?</h2>
          <p className="text-slate-500 text-lg">Adayların %60'ı kararsızdır. Seni en iyi yansıtacak bölümü 4 soruda bulalım.</p>
        </div>

        <div className="bg-white border border-slate-200 shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden min-h-[400px] flex flex-col relative">
          
          {/* Progress Bar */}
          {currentStep > 0 && currentStep <= 4 && (
            <div className="w-full h-1.5 bg-slate-100">
              <motion.div 
                className="h-full bg-ozu-red"
                initial={{ width: `${((currentStep - 1) / 4) * 100}%` }}
                animate={{ width: `${(currentStep / 4) * 100}%` }}
              ></motion.div>
            </div>
          )}

          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              
              {/* Step 0: Start */}
              {currentStep === 0 && (
                <motion.div
                  key="start"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-ozu-red/10 text-ozu-red rounded-full flex items-center justify-center mx-auto mb-6">
                    <Activity className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-slate-800">Senin Potansiyelin Nerede?</h3>
                  <button 
                    onClick={handleStart}
                    className="flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-ozu-red text-white font-bold rounded-xl transition-colors mx-auto"
                  >
                    Testi Başlat <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {/* Step 1-4: Questions */}
              {currentStep > 0 && currentStep <= 4 && (
                <motion.div
                  key={`q-${currentStep}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="w-full max-w-2xl"
                >
                  <span className="text-sm font-bold text-slate-400 mb-2 block">Soru {currentStep} / 4</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 leading-snug">
                    {questions[currentStep - 1].text}
                  </h3>
                  
                  <div className="flex flex-col gap-3">
                    {questions[currentStep - 1].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(opt.faculty as Faculty)}
                        className="text-left w-full p-4 rounded-xl border-2 border-slate-100 hover:border-ozu-red hover:bg-ozu-red/5 font-semibold text-slate-700 transition-all flex items-center justify-between group"
                      >
                        {opt.text}
                        <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-ozu-red flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-ozu-red opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 5: Analyzing */}
              {currentStep === 5 && (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 border-4 border-slate-200 border-t-ozu-red rounded-full animate-spin mb-6"></div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Profilin Analiz Ediliyor...</h3>
                  <p className="text-slate-500">Yeteneklerin 5 farklı fakülteyle eşleştiriliyor.</p>
                </motion.div>
              )}

              {/* Step 6: Results */}
              {currentStep === 6 && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full"
                >
                  <div className="text-center mb-8">
                    <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 font-bold text-sm rounded-full mb-4">
                      Analiz Tamamlandı
                    </span>
                    <h3 className="text-3xl font-black text-slate-900">İşte Senin ÖzÜ DNA'n!</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    
                    {/* Top Match */}
                    <a href={facultyData[topMatch].link} className={`block p-6 rounded-2xl border-2 transition-transform hover:-translate-y-1 ${facultyData[topMatch].color}`}>
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm">
                          {facultyData[topMatch].icon}
                        </div>
                        <span className="text-3xl font-black">%{topPercentage}</span>
                      </div>
                      <h4 className="font-bold text-xl mb-1 text-slate-800">{facultyData[topMatch].title}</h4>
                      <p className="text-sm font-medium opacity-80 mb-4">Sana En Çok Uyan Program</p>
                      <div className="flex items-center gap-1 text-sm font-bold opacity-90 group">
                        Fakülteyi İncele <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </a>

                    {/* Second Match */}
                    <a href={facultyData[secondMatch].link} className={`block p-6 rounded-2xl border-2 transition-transform hover:-translate-y-1 ${facultyData[secondMatch].color} opacity-80 hover:opacity-100`}>
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm">
                          {facultyData[secondMatch].icon}
                        </div>
                        <span className="text-2xl font-black">%{secondPercentage}</span>
                      </div>
                      <h4 className="font-bold text-lg mb-1 text-slate-800">{facultyData[secondMatch].title}</h4>
                      <p className="text-sm font-medium opacity-80 mb-4">Güçlü Alternatif</p>
                      <div className="flex items-center gap-1 text-sm font-bold opacity-90 group">
                        Fakülteyi İncele <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </a>
                  </div>

                  <div className="text-center">
                    <button 
                      onClick={resetQuiz}
                      className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 font-semibold transition-colors"
                    >
                      <RefreshCcw className="w-4 h-4" /> Testi Tekrar Çöz
                    </button>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
