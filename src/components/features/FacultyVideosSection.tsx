"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";
import Link from "next/link";

const playlist = [
  {
    id: "Od_ZWLwcngU",
    title: "Genel Kampüs Turu",
    desc: "Özyeğin Üniversitesi kampüs yaşamı ve imkanlar.",
    duration: "Video 1"
  },
  {
    id: "YzzPPphDWVc",
    title: "Havacılık ve Uzay Bilimleri",
    desc: "Uçuş simülatörleri ve kokpit eğitimi detayları.",
    duration: "Video 2"
  },
  {
    id: "aB-hu1Gjdig",
    title: "Mühendislik Fakültesi",
    desc: "Laboratuvarlar, atölyeler ve teknolojik altyapı.",
    duration: "Video 3"
  },
  {
    id: "97nLT1u1IcM",
    title: "İşletme Fakültesi",
    desc: "Girişimcilik, finans laboratuvarları ve küresel iş ağı.",
    duration: "Video 4"
  },
  {
    id: "iI8ROgW07e8",
    title: "Hukuk Fakültesi",
    desc: "Farazi duruşma salonları ve pratik uygulamalar.",
    duration: "Video 5"
  },
  {
    id: "AFxcMduE8DM",
    title: "Mimarlık ve Tasarım Fakültesi",
    desc: "Tasarım stüdyoları ve yaratıcı çalışma alanları.",
    duration: "Video 6"
  },
  {
    id: "5f-30Wql4ig",
    title: "Uygulamalı Bilimler (Gastronomi)",
    desc: "Le Cordon Bleu mükemmelliğiyle gastronomi mutfakları.",
    duration: "Video 7"
  },
  {
    id: "0GNYZc3Z9ZM",
    title: "Yurtlar ve Öğrenci Yaşamı",
    desc: "Konaklama, sosyal alanlar ve kampüs içi etkinlikler.",
    duration: "Video 8"
  }
];

export default function FacultyVideosSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeVideo = playlist[activeIndex];

  return (
    <section className="py-24 bg-[#0B1B3D] relative border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[#FF5722] font-black uppercase tracking-widest text-sm mb-3">Keşfet</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              KAMPÜSÜ & FAKÜLTELERİ KEŞFET
            </h3>
          </div>
          <Link 
            href="/fakulteler"
            className="inline-flex items-center gap-2 text-slate-300 font-bold hover:text-white transition-colors group"
          >
            Tüm Fakülteleri İncele
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Video Hub Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white/5 rounded-[32px] p-4 lg:p-8 border border-white/10 backdrop-blur-sm">
          
          {/* Main Video Player (Left - 8 cols) */}
          <div className="lg:col-span-8 relative rounded-[24px] overflow-hidden bg-black aspect-video shadow-2xl">
            <iframe
              key={activeVideo.id} // Forces iframe reload on change
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=0&rel=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          </div>

          {/* Playlist (Right - 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3 max-h-[500px] overflow-y-auto no-scrollbar pr-2">
            <h4 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 px-2">Video Listesi</h4>
            {playlist.map((item, idx) => {
              const isActive = activeIndex === idx;
              // Getting high quality thumbnail from YouTube
              const thumbnailUrl = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-4 rounded-[16px] transition-all flex items-center gap-4 group ${
                    isActive 
                      ? "bg-white text-[#0B1B3D]" 
                      : "bg-transparent text-white hover:bg-white/10"
                  }`}
                >
                  {/* Thumbnail Mini */}
                  <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-800 hidden sm:block">
                    <img src={thumbnailUrl} alt={item.title} className="w-full h-full object-cover opacity-80" />
                    {isActive && (
                      <div className="absolute inset-0 bg-[#FF5722]/80 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-current" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h5 className={`font-bold text-sm mb-1 ${isActive ? "text-[#0B1B3D]" : "group-hover:text-[#FF5722]"}`}>
                      {item.title}
                    </h5>
                    <p className={`text-xs line-clamp-1 ${isActive ? "text-slate-600" : "text-slate-400"}`}>
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
