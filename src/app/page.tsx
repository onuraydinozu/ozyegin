"use client";

import { motion } from "framer-motion";
import EventBanner from "@/components/features/EventBanner";
import InfoSection from "@/components/features/InfoSection";
import BrochuresSection from "@/components/features/BrochuresSection";
import DynamicStatsMarquee from "@/components/features/DynamicStatsMarquee";
import PersonaQuiz from "@/components/features/PersonaQuiz";
import StatsMap from "@/components/features/StatsMap";
import LibrarySection from "@/components/features/LibrarySection";
import CalendarSync from "@/components/features/CalendarSync";
import FloatingActionBar from "@/components/features/FloatingActionBar";
import AIChatbot from "@/components/features/AIChatbot";
import SustainabilitySection from "@/components/features/SustainabilitySection";
import AlumniNetwork from "@/components/features/AlumniNetwork";
import ParentPortalSection from "@/components/features/ParentPortalSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden font-sans selection:bg-ozu-red selection:text-white">
      
      {/* NEW: Event Banner as the new Hero */}
      <EventBanner />
      {/* Dynamic Stats Marquee */}
      <DynamicStatsMarquee />

      {/* Info Section (Aday Öğrenci, Burslar vs) */}
      <InfoSection />

      {/* NEW: Brochures & About Section */}
      <BrochuresSection />

      {/* Persona Quiz - Hangi ÖzÜ Bölümü Sensin? */}
      <PersonaQuiz />

      {/* NEW: Sustainability / Eco-friendly Section */}
      <SustainabilitySection />

      {/* Main Content (V2 Features) */}
      <div className="relative z-10 bg-background pb-32 pt-16">
        <div className="max-w-7xl mx-auto px-4 space-y-20 md:space-y-32">
          
          {/* Calendar Sync */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <CalendarSync />
          </motion.section>

          {/* Library Section - Interactive Portal */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <LibrarySection />
          </motion.section>

          {/* Yurtlar Banner */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-8 border border-blue-100 shadow-xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-[40px] group-hover:bg-emerald-500/20 transition-colors"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
                <div className="flex-1">
                  <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-xs font-bold tracking-widest rounded-full mb-6">KONAKLAMA</span>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
                    Evinizden Uzaktaki <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Yeni Eviniz</span>
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    2.729 kişilik kapasitesi, modern tasarımı, 7/24 hizmeti, zengin sosyal olanakları ve kusursuz güvenliğiyle Özyeğin Üniversitesi yurtları, eşsiz bir kampüs deneyimi sunuyor.
                  </p>
                  <a href="/yurtlar" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 group/btn">
                    Yurtları Keşfet
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
                <div className="w-full lg:w-[450px] aspect-[16/9] relative rounded-2xl overflow-hidden shadow-md shrink-0">
                  <img src="/ozu_yurtlar_hero.jpg" alt="Yurtlar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Parent Portal Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <ParentPortalSection />
          </motion.section>

          {/* Alumni Network */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <AlumniNetwork />
          </motion.section>

          {/* Statistics */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <StatsMap />
          </motion.section>

        </div>
      </div>
      {/* Floating Elements */}
      <FloatingActionBar />
      <AIChatbot />

      {/* Footer */}
      <Footer />
    </main>
  );
}
