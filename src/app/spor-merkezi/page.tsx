"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, Phone, Mail, ChevronDown, CheckCircle2, 
  MapPin, X, ArrowRight, UserCheck, ShieldCheck, 
  Image as ImageIcon, Search, ChevronRight, Activity, Eye
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { sportsCenterData } from "@/data/sportsCenterData";
import Image from "next/image";

export default function SportsCenterPage() {
  // Tabs State for Teams
  const [activeTab, setActiveTab] = useState("all");
  const [searchTeam, setSearchTeam] = useState("");

  // Accordion State for Courses
  const [expandedCourse, setExpandedCourse] = useState<number | null>(0);

  // Modal State for Staff
  const [selectedStaff, setSelectedStaff] = useState<any | null>(null);

  // Gallery Modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filtering Teams
  const allBranches = sportsCenterData.teams.categories.flatMap(c => c.branches);
  const getFilteredBranches = () => {
    let branches = activeTab === "all" 
      ? allBranches 
      : sportsCenterData.teams.categories.find(c => c.id === activeTab)?.branches || [];
    
    if (searchTeam) {
      branches = branches.filter(b => b.toLowerCase().includes(searchTeam.toLowerCase()));
    }
    return branches;
  };
  const filteredBranches = getFilteredBranches();

  return (
    <main className="bg-[#FFFFFF] text-[#1A1A1A] font-sans min-h-screen relative overflow-x-hidden selection:bg-[#FF5722] selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] py-32 overflow-hidden bg-[#0B1B3D] text-white flex flex-col justify-end">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={sportsCenterData.hero.image} 
            alt="ÖzÜ Spor Tesisleri" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3D]/90 via-[#0B1B3D]/80 to-[#0B1B3D]/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mb-16"
          >
            <div className="flex items-center gap-3 mb-4 text-[#FF5722]">
              <Trophy className="w-5 h-5" />
              <h3 className="text-sm font-black uppercase tracking-widest">ÖzÜ Spor Merkezi</h3>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight drop-shadow-lg">
              {sportsCenterData.hero.title}
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 font-light">
              {sportsCenterData.hero.description} {sportsCenterData.hero.description2}
            </p>
          </motion.div>

          {/* KPI Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-b border-white/10 py-12">
            {[
              { value: "20.000 m²", label: "Kapalı Spor Salonu ve Ana Bina" },
              { value: "400 m²", label: "Fitness ve Kardiyo Alanı" },
              { value: "25 m", label: "Yarı Olimpik Kapalı Yüzme Havuzu" },
              { value: "20+", label: "Ulusal ve Uluslararası Aktif Spor Takımı" }
            ].map((kpi, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="flex flex-col gap-2 relative"
              >
                {/* Optional separator line for desktop */}
                {idx !== 0 && (
                  <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-white/10"></div>
                )}
                <div className="text-4xl md:text-5xl font-black text-[#FF5722] drop-shadow-md tracking-tighter">
                  {kpi.value}
                </div>
                <div className="text-sm text-slate-300 leading-relaxed max-w-[200px] font-medium">
                  {kpi.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams Vitrini (Tabbed Grid) */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0B1B3D] tracking-tight">
                {sportsCenterData.teams.title}
              </h2>
            </div>
            <div className="relative w-full md:w-80">
              <input 
                type="text" 
                placeholder="Takım Ara..."
                value={searchTeam}
                onChange={(e) => setSearchTeam(e.target.value)}
                className="w-full bg-white border border-slate-200 shadow-sm rounded-[12px] pl-10 pr-4 py-3.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#0B1B3D] focus:ring-1 focus:ring-[#0B1B3D] transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 rounded-[12px] text-sm font-bold whitespace-nowrap transition-all shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${
                activeTab === "all" ? "bg-[#0B1B3D] text-white" : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              Tüm Takımlar
            </button>
            {sportsCenterData.teams.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-[12px] text-sm font-bold whitespace-nowrap transition-all shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${
                  activeTab === cat.id ? "bg-[#0B1B3D] text-white" : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredBranches.map((branch, idx) => (
                <motion.div
                  key={branch}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-[12px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-100 hover:bg-[#0B1B3D] hover:text-white transition-all duration-300 group flex items-center gap-3 cursor-default"
                >
                  <Activity className="w-5 h-5 text-[#FF5722] group-hover:text-[#FF5722]" />
                  <span className="font-bold text-sm tracking-tight">{branch}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Courses Accordion & Tournament Highlight */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Courses Accordion (7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#0B1B3D] mb-4">
                {sportsCenterData.academicCourses.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {sportsCenterData.academicCourses.description}
              </p>
            </div>

            <div className="space-y-3">
              {sportsCenterData.academicCourses.courses.map((course, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-[12px] overflow-hidden transition-all shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${expandedCourse === idx ? 'border-[#0B1B3D]' : 'border-slate-100'}`}
                >
                  <button 
                    onClick={() => setExpandedCourse(expandedCourse === idx ? null : idx)}
                    className={`w-full flex items-center justify-between p-5 text-left transition-colors ${expandedCourse === idx ? 'bg-[#F8F9FA]' : 'bg-white hover:bg-slate-50'}`}
                  >
                    <span className={`font-bold text-lg ${expandedCourse === idx ? 'text-[#0B1B3D]' : 'text-slate-800'}`}>
                      {course.name}
                    </span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${expandedCourse === idx ? 'rotate-180 text-[#FF5722]' : 'text-slate-400'}`} />
                  </button>
                  
                  <AnimatePresence>
                    {expandedCourse === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white border-t border-slate-100"
                      >
                        <div className="p-5 text-slate-600 leading-relaxed text-sm">
                          {course.desc}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tournament Highlight Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="bg-[#0B1B3D] text-white rounded-[12px] shadow-[0_8px_24px_rgba(0,40,85,0.2)] overflow-hidden">
                <div className="p-8 md:p-10 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5722]/20 rounded-full blur-[50px] -mt-10 -mr-10"></div>
                  
                  <h3 className="text-[#FF5722] font-black text-xs uppercase tracking-widest mb-3">
                    {sportsCenterData.tournaments.title}
                  </h3>
                  <h4 className="text-3xl md:text-4xl font-black mb-6 drop-shadow-md">
                    {sportsCenterData.tournaments.subtitle}
                  </h4>
                  <p className="text-slate-300 leading-relaxed mb-8 text-sm md:text-base">
                    {sportsCenterData.tournaments.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Başlıca Branşlar</div>
                    <div className="flex flex-wrap gap-2">
                      {sportsCenterData.tournaments.items.map((item, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-white/10 border border-white/20 text-white rounded-[12px] text-xs font-bold shadow-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-24 bg-[#F8F9FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0B1B3D]">Kadromuz</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsCenterData.staff.map((member, idx) => (
              <div key={idx} className="bg-white rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col hover:-translate-y-1 transition-transform">
                <div className="h-64 w-full relative bg-slate-200">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white">{member.name}</h3>
                    <p className="text-[#FF5722] font-bold text-sm">{member.title}</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="space-y-3 mb-6">
                    <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-sm font-medium text-slate-600 hover:text-[#0B1B3D] transition-colors">
                      <Mail className="w-4 h-4 text-[#FF5722]" />
                      {member.email}
                    </a>
                    <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-sm font-medium text-slate-600 hover:text-[#0B1B3D] transition-colors">
                      <Phone className="w-4 h-4 text-[#FF5722]" />
                      {member.phone}
                    </a>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedStaff(member)}
                    className="mt-auto w-full py-3 bg-[#F8F9FA] hover:bg-[#0B1B3D] hover:text-white text-[#0B1B3D] border border-slate-200 rounded-[12px] font-bold text-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" /> Özgeçmiş / Detay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Modal */}
      <AnimatePresence>
        {selectedStaff && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-900/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[12px] shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="relative h-48 md:h-64 shrink-0 bg-[#0B1B3D]">
                <img src={selectedStaff.photo} alt={selectedStaff.name} className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] to-transparent"></div>
                <button 
                  onClick={() => setSelectedStaff(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-[#FF5722] text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-black text-white mb-1">{selectedStaff.name}</h3>
                  <p className="text-[#FF5722] font-bold">{selectedStaff.title}</p>
                </div>
              </div>
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 pb-8 border-b border-slate-100">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#FF5722]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a href={`mailto:${selectedStaff.email}`} className="hover:text-[#FF5722]">{selectedStaff.email}</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#FF5722]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <a href={`tel:${selectedStaff.phone.replace(/\s+/g, '')}`} className="hover:text-[#FF5722]">{selectedStaff.phone}</a>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0B1B3D] mb-4">Biyografi</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedStaff.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Gallery Section */}
      <section className="py-24 bg-[#0B1B3D] border-t border-slate-800 text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white">Görsel Galeri</h2>
            <p className="text-slate-400 mt-4 font-medium">Spor Merkezimizden Kareler</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {sportsCenterData.gallery.map((imgUrl, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedImage(imgUrl)}
                className="break-inside-avoid relative group rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)] cursor-pointer"
              >
                <img 
                  src={imgUrl} 
                  alt={`Spor Faaliyeti ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0B1B3D]/0 group-hover:bg-[#0B1B3D]/50 transition-colors duration-300 flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-[12px] overflow-hidden flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Gallery Enlarge" className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-[12px]" />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-black/50 hover:bg-[#FF5722] text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
