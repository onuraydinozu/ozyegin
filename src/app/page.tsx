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

      <AIChatbot />

      {/* Footer */}
      <Footer />
    </main>
  );
}
