"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-3" 
          : "bg-white border-slate-100 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex flex-col group relative w-[160px] h-[48px] mt-1">
          <Image 
            src="/ozu_logo.png" 
            alt="Özyeğin Üniversitesi" 
            fill 
            className="object-contain"
            priority
          />
        </Link>
        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-[12px] font-bold tracking-widest text-slate-600 hover:text-[#DF1934] transition-colors whitespace-nowrap">AKADEMİK BİRİMLER</Link>
          
          <div className="relative group">
            <button className="text-[12px] font-bold tracking-widest text-slate-600 hover:text-[#DF1934] transition-colors whitespace-nowrap flex items-center gap-1">
              FAKÜLTELER
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
              <Link href="/fakulteler/isletme" className="block px-5 py-2.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 hover:text-[#DF1934] transition-colors">İşletme Fakültesi</Link>
              <Link href="/fakulteler/muhendislik" className="block px-5 py-2.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 hover:text-[#DF1934] transition-colors">Mühendislik Fakültesi</Link>
              <Link href="/fakulteler/sosyal-bilimler" className="block px-5 py-2.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 hover:text-[#DF1934] transition-colors">Sosyal Bilimler Fakültesi</Link>
              <Link href="/fakulteler/havacilik" className="block px-5 py-2.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 hover:text-[#DF1934] transition-colors">Havacılık ve Uzay Bilimleri Fakültesi</Link>
              <Link href="/fakulteler/hukuk" className="block px-5 py-2.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 hover:text-[#DF1934] transition-colors">Hukuk Fakültesi</Link>
              <Link href="/fakulteler/mimarlik-ve-tasarim" className="block px-5 py-2.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 hover:text-[#DF1934] transition-colors">Mimarlık ve Tasarım Fakültesi</Link>
              <Link href="/fakulteler/uygulamali-bilimler" className="block px-5 py-2.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 hover:text-[#DF1934] transition-colors">Uygulamalı Bilimler Fakültesi</Link>
            </div>
          </div>

          <Link href="/taban-puanlar" className="text-[12px] font-bold tracking-widest text-slate-600 hover:text-[#DF1934] transition-colors whitespace-nowrap">TABAN PUANLAR</Link>
          <Link href="/ucretler" className="text-[12px] font-bold tracking-widest text-slate-600 hover:text-[#DF1934] transition-colors whitespace-nowrap">ÜCRETLER</Link>
          <Link href="/yurtlar" className="text-[12px] font-bold tracking-widest text-slate-600 hover:text-[#DF1934] transition-colors whitespace-nowrap">YURTLAR</Link>
          <Link href="/burslar" className="text-[12px] font-bold tracking-widest text-slate-600 hover:text-[#DF1934] transition-colors whitespace-nowrap">BURSLAR</Link>
        </nav>
        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 text-slate-400">
            <button className="hover:text-[#DF1934] transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
          <a 
            href="https://aday.ozyegin.edu.tr/" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-2.5 bg-[#DF1934] hover:bg-[#c4152d] text-white text-[12px] font-bold tracking-widest rounded-full transition-all shadow-md shadow-red-500/20"
          >
            TERCİH VE TANITIM
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        
      </div>
    </header>
  );
}
