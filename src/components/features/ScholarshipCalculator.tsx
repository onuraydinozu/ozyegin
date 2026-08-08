"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portalConfig } from "@/data/portalConfig";
import { Calculator, ChevronDown, Check } from "lucide-react";

export default function ScholarshipCalculator() {
  const [selectedDeptId, setSelectedDeptId] = useState(portalConfig.departments[0].id);
  const [rank, setRank] = useState(12500);
  const [isAdmission50, setIsAdmission50] = useState(false);
  const [isFirstChoice, setIsFirstChoice] = useState(false);
  const [isSports, setIsSports] = useState(false);
  const [isIB, setIsIB] = useState(false);
  const [isFiba, setIsFiba] = useState(false);
  const [isOzuStaff, setIsOzuStaff] = useState(false);

  const { discounts, rankCashSupport } = portalConfig.scholarshipData;
  const selectedDept = portalConfig.departments.find(d => d.id === selectedDeptId) || portalConfig.departments[0];

  const results = useMemo(() => {
    const earnedRights: {desc: string, color: string}[] = [];
    
    for (const r of rankCashSupport) {
      if (rank <= r.maxRank) {
        earnedRights.push({ desc: r.desc, color: r.color });
        break;
      }
    }

    let totalDiscountRate = 0;
    if (isAdmission50) totalDiscountRate += discounts.admission50;
    if (isFirstChoice) totalDiscountRate += discounts.firstChoice;
    if (isSports) totalDiscountRate += discounts.sports;
    if (isIB) totalDiscountRate += discounts.ibAbitur;
    if (isFiba) totalDiscountRate += discounts.fibaStaff;
    if (isOzuStaff) totalDiscountRate += discounts.ozuStaff;

    if (totalDiscountRate > 1.0) totalDiscountRate = 1.0;

    const finalTuition = selectedDept.tuition * (1 - totalDiscountRate);
    
    let calculationText = `Toplam İndirim: %${Math.round(totalDiscountRate * 100)}`;
    
    if (totalDiscountRate === 1.0) {
       calculationText = "Tam Burslu (%100)";
    }

    return {
      rateText: calculationText,
      tuition: Math.round(finalTuition),
      rights: earnedRights,
      isFull: totalDiscountRate === 1.0
    };
  }, [rank, isAdmission50, isFirstChoice, isSports, isIB, isFiba, isOzuStaff, selectedDept, discounts, rankCashSupport]);

  const Switch = ({ checked, onChange, label, subtext }: { checked: boolean, onChange: (v: boolean) => void, label: string, subtext?: string }) => (
    <label className="flex flex-col gap-2 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 cursor-pointer transition-colors group">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="hidden" />
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-800 text-xs group-hover:text-slate-900">{label}</span>
        <div className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-300 ease-in-out shrink-0 ${checked ? 'bg-[#DF1934]' : 'bg-slate-300'}`}>
          <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition duration-300 ease-in-out ${checked ? 'translate-x-4' : 'translate-x-1'}`} />
        </div>
      </div>
      {subtext && <span className="text-[10px] font-semibold text-slate-400 leading-tight">{subtext}</span>}
    </label>
  );

  return (
    <div className="bg-white rounded-[2rem] w-full max-w-[400px] mx-auto shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden flex flex-col mx-auto md:ml-auto md:mr-0">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#DF1934] rounded-full blur-[40px] opacity-40 -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
            <Calculator className="text-white" size={20} />
          </div>
          <div>
            <h3 className="text-xl font-extrabold tracking-tight">Akıllı Hesaplayıcı</h3>
            <p className="text-white/70 font-medium text-xs">Burs ve Ücret Simülasyonu</p>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Department Select */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Hedef Bölüm</label>
          <div className="relative">
            <select 
              value={selectedDeptId}
              onChange={(e) => setSelectedDeptId(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm font-bold appearance-none focus:ring-2 focus:ring-[#DF1934]/20 focus:border-[#DF1934] focus:outline-none transition-all cursor-pointer"
            >
              {portalConfig.departments.map(d => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>
          
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[10px] font-bold">Tür: <span className="text-slate-900">{selectedDept.type}</span></span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[10px] font-bold">Kontenjan: <span className="text-slate-900">{selectedDept.quota}</span></span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[10px] font-bold">Taban Puan: <span className="text-slate-900">{selectedDept.baseScore}</span></span>
          </div>
        </div>

        {/* Rank Slider */}
        <div className="pt-2">
          <div className="flex justify-between items-end mb-3">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Sıralama</label>
            <span className="text-lg font-extrabold text-[#DF1934] bg-red-50 px-3 py-1 rounded-lg">{rank.toLocaleString("tr-TR")}</span>
          </div>
          <div className="relative py-2">
            <input
              type="range"
              min="1"
              max="100000"
              value={rank}
              onChange={(e) => setRank(Number(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-[#DF1934] focus:outline-none focus:ring-2 focus:ring-[#DF1934]/20"
              style={{
                background: `linear-gradient(to right, #DF1934 0%, #DF1934 ${(rank / 100000) * 100}%, #f1f5f9 ${(rank / 100000) * 100}%, #f1f5f9 100%)`
              }}
            />
          </div>
        </div>

        {/* Toggles */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-3 uppercase tracking-wider">İndirimler</label>
          <div className="grid grid-cols-2 gap-2">
            <Switch checked={isAdmission50} onChange={setIsAdmission50} label="%50 Giriş Bursu" />
            <Switch checked={isFirstChoice} onChange={setIsFirstChoice} label="İlk 3 Tercih" subtext="+%25 İndirim" />
            <Switch checked={isSports} onChange={setIsSports} label="Milli Sporcu" subtext="%50'ye varan" />
            <Switch checked={isIB} onChange={setIsIB} label="IB / Abitur" subtext="+%15 İndirim" />
            <Switch checked={isFiba} onChange={setIsFiba} label="FİBA Çalışanı" subtext="+%25 İndirim" />
            <Switch checked={isOzuStaff} onChange={setIsOzuStaff} label="ÖzÜ Çalışanı" subtext="+%50 İndirim" />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-auto bg-slate-50 p-6 border-t border-slate-100">
        <AnimatePresence mode="wait">
          <motion.div 
            key={results.rateText}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className={`relative overflow-hidden rounded-[1.5rem] p-6 ${results.isFull ? 'bg-gradient-to-br from-emerald-500 to-teal-700 text-white' : 'bg-gradient-to-br from-slate-900 to-[#1B365D] text-white'} shadow-xl`}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-3 ${results.isFull ? 'bg-white/20 text-white' : 'bg-[#DF1934] text-white'}`}>
                {results.rateText}
              </span>
              
              <h4 className="text-slate-300 font-medium text-xs uppercase tracking-widest mb-1">Yıllık Ücret</h4>
              <div className="text-3xl font-extrabold tracking-tight mb-1">
                ₺{results.tuition.toLocaleString("tr-TR")}
              </div>

              {results.rights.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/10 w-full flex flex-col items-center gap-1.5">
                  <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest mb-1">Ekstra Haklar</span>
                  {results.rights.map((right, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white w-full justify-center border border-white/5">
                      <Check size={14} className="text-emerald-400" />
                      {right.desc}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
