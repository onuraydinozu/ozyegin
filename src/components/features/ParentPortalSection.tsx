"use client";

import React, { useState } from 'react';
import { ozuParentPortalData } from '@/data/parentPortalData';
import Link from 'next/link';

export default function ParentPortalSection() {
  const [activeTab, setActiveTab] = useState('burs');

  return (
    <section className="w-full bg-slate-900 text-slate-100 py-16 px-4 md:px-12 border-t border-white/10 rounded-3xl overflow-hidden relative shadow-2xl mt-12 mb-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-emerald-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-500/5 rounded-full blur-[140px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* HEADER SECTION */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold bg-blue-500/10 text-blue-400 border border-blue-500/20 tracking-widest uppercase">
            Geleceğin Güvencesi
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            {ozuParentPortalData.portalTitle}
          </h2>
          <p className="text-sm md:text-base text-slate-400">
            {ozuParentPortalData.tagline}
          </p>
        </div>

        {/* TOP STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-5 text-center">
            <div className="text-3xl font-black text-emerald-400">
              {ozuParentPortalData.careerAndROI.employmentRate}
            </div>
            <div className="text-xs text-slate-300 font-bold mt-1">İşe Başlama Oranı</div>
            <div className="text-[11px] text-slate-500">İlk 6 ay içerisinde</div>
          </div>

          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-5 text-center">
            <div className="text-3xl font-black text-blue-400">
              %100
            </div>
            <div className="text-xs text-slate-300 font-bold mt-1">Burs Güvencesi</div>
            <div className="text-[11px] text-slate-500">Başarısızlıktan kesilmez</div>
          </div>

          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-5 text-center">
            <div className="text-3xl font-black text-purple-400">
              LEED Gold
            </div>
            <div className="text-xs text-slate-300 font-bold mt-1">Yeşil & Güvenli Kampüs</div>
            <div className="text-[11px] text-slate-500">Çekmeköy Kampüsü</div>
          </div>

          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-5 text-center">
            <div className="text-3xl font-black text-amber-400">
              Top %5
            </div>
            <div className="text-xs text-slate-300 font-bold mt-1">AACSB / AABI Prestij</div>
            <div className="text-[11px] text-slate-500">Uluslararası Akreditasyon</div>
          </div>
        </div>

        {/* TAB NAVIGATION */}
        <div className="flex justify-center gap-2 border-b border-white/10 pb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('burs')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'burs'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            🛡️ Finans & Burs Güvencesi
          </button>

          <button
            onClick={() => setActiveTab('kariyer')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'kariyer'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            💼 İşe Yerleşme & ROI
          </button>

          <button
            onClick={() => setActiveTab('guvenlik')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'guvenlik'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            🏥 Kampüs Güvenliği & Revir
          </button>

          <button
            onClick={() => setActiveTab('akademik')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'akademik'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            🎓 Akademik Kadro & Akreditasyon
          </button>
        </div>

        {/* TAB CONTENT PANELS */}
        <div className="bg-slate-800/30 border border-white/10 rounded-3xl p-6 md:p-8 min-h-[300px]">
          
          {/* TAB 1: BURS VE FİNANS */}
          {activeTab === 'burs' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 flex items-center gap-4">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="text-sm font-extrabold text-emerald-400">
                    {ozuParentPortalData.financialSecurity.bursKesilmemeGarantisi.badge}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {ozuParentPortalData.financialSecurity.bursKesilmemeGarantisi.statement}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ozuParentPortalData.financialSecurity.bursTurleri.map((burs, i) => (
                  <div key={i} className="bg-slate-900/60 p-4 rounded-xl border border-white/5 space-y-1">
                    <h5 className="text-sm font-bold text-white">{burs.tur}</h5>
                    <p className="text-xs text-slate-400">{burs.kapsam}</p>
                    <span className="inline-block text-[10px] text-blue-400 font-mono mt-2">
                      Süre: {burs.sure}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: KARİYER VE ROI */}
          {activeTab === 'kariyer' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <p className="text-xs md:text-sm text-slate-300">
                {ozuParentPortalData.careerAndROI.employmentDescription}
              </p>

              <div>
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Mezunlarımızın Düzenli Olarak İşe Başladığı Kurumlar:
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {ozuParentPortalData.careerAndROI.topEmployers.map((emp, i) => (
                    <div key={i} className="bg-slate-900/60 p-3 rounded-xl border border-white/5 text-center">
                      <div className="text-xs font-extrabold text-white">{emp.name}</div>
                      <div className="text-[10px] text-slate-500">{emp.type}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GÜVENLİK VE SAĞLIK */}
          {activeTab === 'guvenlik' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 space-y-2">
                <span className="text-2xl">🛡️</span>
                <h5 className="text-sm font-bold text-white">
                  {ozuParentPortalData.campusSafetyAndLiving.security.title}
                </h5>
                <p className="text-xs text-slate-400">
                  {ozuParentPortalData.campusSafetyAndLiving.security.details}
                </p>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 space-y-2">
                <span className="text-2xl">🏥</span>
                <h5 className="text-sm font-bold text-white">
                  {ozuParentPortalData.campusSafetyAndLiving.healthCenter.title}
                </h5>
                <p className="text-xs text-slate-400">
                  {ozuParentPortalData.campusSafetyAndLiving.healthCenter.details}
                </p>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 space-y-2">
                <span className="text-2xl">🧠</span>
                <h5 className="text-sm font-bold text-white">
                  {ozuParentPortalData.campusSafetyAndLiving.pdrService.title}
                </h5>
                <p className="text-xs text-slate-400">
                  {ozuParentPortalData.campusSafetyAndLiving.pdrService.details}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: AKADEMİK VE AKREDİTASYON */}
          {activeTab === 'akademik' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <p className="text-xs md:text-sm text-slate-300">
                {ozuParentPortalData.academicPrestige.facultyPhD}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {ozuParentPortalData.academicPrestige.accreditations.map((acc, i) => (
                  <div key={i} className="bg-slate-900/60 p-4 rounded-xl border border-white/5 space-y-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-black bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {acc.code}
                    </span>
                    <h5 className="text-xs font-bold text-white">{acc.faculty}</h5>
                    <p className="text-[11px] text-slate-400">{acc.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* CALL TO ACTION FOR PARENTS */}
        <div className="bg-blue-600/10 border border-blue-500/30 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-extrabold text-white">
              Sorularınız İçin Veli Danışma Hattımız Hizmetinizde
            </h4>
            <p className="text-xs text-slate-300">
              Doğrudan ÖzÜ Tanıtım Ekibi Veli Temsilcileriyle Görüşün: <strong className="text-white">{ozuParentPortalData.parentContact.phone}</strong>
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <a href={`tel:${ozuParentPortalData.parentContact.phone.replace(/[^0-9]/g, '')}`} className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white text-xs font-extrabold transition-all">
              Hemen Ara
            </a>
            <Link href="/veli-portali" className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2">
              Veliler İçin & Hesaplayıcı
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
