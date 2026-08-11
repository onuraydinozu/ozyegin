"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, MapPin, AlertTriangle, Home, Utensils, Activity, Stethoscope, Users, Route, HelpCircle, ChevronDown, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { familyPortalData } from "@/data/familyPortalData";

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

export default function FamilyPortalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-slate-50 text-slate-800 font-sans min-h-screen relative overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-emerald-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[140px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-blue-300 font-bold text-sm tracking-widest mb-6 border border-white/20"
          >
            <ShieldCheck className="w-5 h-5" /> ÖZYEĞİN ÜNİVERSİTESİ
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter"
          >
            {familyPortalData.portalTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            {familyPortalData.tagline}
          </motion.p>

          {/* Animated Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {familyPortalData.metrics.map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col items-center justify-center hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-2">
                  <CountUp to={metric.value} />
                </div>
                <h3 className="font-bold text-sm text-slate-200 mb-1">{metric.label}</h3>
                <p className="text-[10px] text-slate-400 text-center leading-tight">{metric.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        
        {/* 1. Konum & Yerleşke */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-emerald-600 mb-2">
              <MapPin className="w-8 h-8" />
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">{familyPortalData.location.title}</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">{familyPortalData.location.description}</p>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-sm text-emerald-800 font-medium">
              {familyPortalData.location.logisticNote}
            </div>
          </motion.div>
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Kampüs Metrikleri</h3>
            <div className="space-y-3">
              {familyPortalData.location.details.map((detail, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                  <span className="text-sm text-slate-500">{detail.label}</span>
                  <span className="text-sm font-bold text-slate-800 text-right">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Deprem Güvenliği */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px]"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-red-400 mb-4">
              <AlertTriangle className="w-8 h-8" />
              <h2 className="text-2xl md:text-3xl font-black text-white">{familyPortalData.earthquakeSafety.title}</h2>
            </div>
            <p className="text-slate-300 text-lg mb-8">{familyPortalData.earthquakeSafety.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {familyPortalData.earthquakeSafety.points.map((point, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl font-black text-red-500/20 mb-2">0{idx + 1}</div>
                  <h4 className="font-bold text-lg mb-3 text-red-100">{point.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200 text-sm font-medium">
              {familyPortalData.earthquakeSafety.footer}
            </div>
          </div>
        </section>

        {/* 3. Yurt Yaşamı */}
        <section>
          <div className="flex items-center gap-3 text-blue-600 mb-6">
            <Home className="w-8 h-8" />
            <h2 className="text-3xl font-black text-slate-900">{familyPortalData.dormitoryLife.title}</h2>
          </div>
          <p className="text-lg text-slate-600 mb-8">{familyPortalData.dormitoryLife.description}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800">🛏️ Oda Konseptleri ve Tipleri</h3>
              {familyPortalData.dormitoryLife.roomTypes.map((room, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-black text-blue-700 mb-2">{room.title}</h4>
                  <p className="text-sm text-slate-600 mb-2"><strong className="text-slate-800">Seçenekler:</strong> {room.options}</p>
                  <p className="text-sm text-slate-600"><strong className="text-slate-800">Standart Donanım:</strong> {room.equipment}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800">🏢 Ortak Yaşam & Hizmetler</h3>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                {familyPortalData.dormitoryLife.commonAreas.map((area, idx) => (
                  <div key={idx}>
                    <h5 className="font-bold text-slate-800 text-sm">{area.title}</h5>
                    <p className="text-xs text-slate-600">{area.text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                {familyPortalData.dormitoryLife.services.map((service, idx) => (
                  <div key={idx}>
                    <h5 className="font-bold text-slate-800 text-sm">{service.title}</h5>
                    <p className="text-xs text-slate-600">{service.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl flex flex-col md:flex-row gap-4 justify-between items-center">
            <p className="text-sm text-blue-900 flex-1">{familyPortalData.dormitoryLife.note}</p>
            <a href="mailto:yurt@ozyegin.edu.tr" className="px-6 py-2 bg-blue-600 text-white font-bold rounded-xl whitespace-nowrap hover:bg-blue-700">Yurt İletişim</a>
          </div>
        </section>

        {/* 4 & 5. Beslenme ve Spor */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Beslenme */}
          <section className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <div className="flex items-center gap-3 text-orange-500 mb-6">
              <Utensils className="w-8 h-8" />
              <h2 className="text-2xl font-black text-slate-900">{familyPortalData.nutrition.title}</h2>
            </div>
            <div className="space-y-4 mb-6">
              {familyPortalData.nutrition.items.map((item, idx) => (
                <div key={idx} className="border-l-4 border-orange-200 pl-4">
                  <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-orange-50 rounded-xl text-xs text-orange-800 font-medium leading-relaxed">
              {familyPortalData.nutrition.footer}
            </div>
          </section>

          {/* Spor */}
          <section className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <div className="flex items-center gap-3 text-emerald-500 mb-6">
              <Activity className="w-8 h-8" />
              <h2 className="text-2xl font-black text-slate-900">{familyPortalData.sports.title}</h2>
            </div>
            <p className="text-sm text-slate-600 mb-4">{familyPortalData.sports.description}</p>
            <ul className="space-y-2 mb-6 text-sm text-slate-700">
              {familyPortalData.sports.facilities.map((fac, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  {fac}
                </li>
              ))}
            </ul>
            <div className="p-4 bg-emerald-50 rounded-xl text-xs text-emerald-800 font-medium leading-relaxed">
              {familyPortalData.sports.footer}
            </div>
          </section>
        </div>

        {/* 6. Güvenlik ve Sağlık */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-black mb-10 text-center">{familyPortalData.healthAndSecurity.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 text-blue-400 mb-6">
                <ShieldCheck className="w-8 h-8" />
                <h3 className="text-2xl font-bold">{familyPortalData.healthAndSecurity.security.title}</h3>
              </div>
              <div className="space-y-6">
                {familyPortalData.healthAndSecurity.security.items.map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h4 className="font-bold text-blue-300 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 text-red-400 mb-6">
                <Stethoscope className="w-8 h-8" />
                <h3 className="text-2xl font-bold">{familyPortalData.healthAndSecurity.health.title}</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">{familyPortalData.healthAndSecurity.health.description}</p>
              <div className="space-y-4">
                {familyPortalData.healthAndSecurity.health.items.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-red-500/50 pl-4">
                    <h4 className="font-bold text-red-200 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7 & 8 & 9. Aile Politikası, Uyum, Psikolojik Destek */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col h-full">
            <Users className="w-8 h-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">{familyPortalData.familyPolicy.title}</h3>
            <div className="space-y-4 flex-1">
              <div>
                <h4 className="font-bold text-sm text-indigo-700">{familyPortalData.familyPolicy.visits.title}</h4>
                <p className="text-xs text-slate-600 mt-1">{familyPortalData.familyPolicy.visits.text}</p>
              </div>
              <div>
                <h4 className="font-bold text-sm text-indigo-700">{familyPortalData.familyPolicy.policy.title}</h4>
                <p className="text-xs text-slate-600 mt-1">{familyPortalData.familyPolicy.policy.text}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col h-full">
            <Route className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">{familyPortalData.cityTransition.title}</h3>
            <div className="space-y-4 flex-1">
              {familyPortalData.cityTransition.steps.map((step, idx) => (
                <div key={idx} className="border-l-2 border-amber-200 pl-3">
                  <h4 className="font-bold text-xs text-amber-600">{step.step}</h4>
                  <p className="text-xs text-slate-600 mt-1">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col h-full">
            <Activity className="w-8 h-8 text-teal-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">{familyPortalData.socialSupport.title}</h3>
            <div className="space-y-4 flex-1">
              {familyPortalData.socialSupport.items.map((item, idx) => (
                <div key={idx} className="bg-teal-50 p-3 rounded-xl border border-teal-100">
                  <h4 className="font-bold text-sm text-teal-800">{item.title}</h4>
                  <p className="text-xs text-teal-700/80 mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. FAQ */}
        <section className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 justify-center text-slate-800 mb-8">
            <HelpCircle className="w-8 h-8" />
            <h2 className="text-3xl font-black text-center">{familyPortalData.faq.title}</h2>
          </div>
          <div className="space-y-3">
            {familyPortalData.faq.questions.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-4 font-bold text-slate-800 flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pt-2 text-sm text-slate-600 border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* 12. Contact Footer */}
        <section className="bg-blue-600 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-black mb-4">Aklınıza takılan başka bir soru mu var?</h2>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone className="w-5 h-5 text-blue-200" />
              <p className="font-bold">{familyPortalData.contacts.emergency}</p>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start text-blue-100">
              <Stethoscope className="w-5 h-5" />
              <p>{familyPortalData.contacts.health}</p>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start text-blue-100">
              <MapPin className="w-5 h-5" />
              <p>{familyPortalData.contacts.visit}</p>
            </div>
          </div>
          <div>
            <a href="tel:02165649000" className="px-8 py-4 bg-white text-blue-700 font-black rounded-2xl hover:bg-slate-100 transition-colors shadow-xl inline-block">
              Hemen Arayın
            </a>
          </div>
        </section>

      </div>
      
      <Footer />
    </main>
  );
}
