"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, Download, UtensilsCrossed, CheckCircle2, Hotel } from "lucide-react";
import html2canvas from "html2canvas";

export default function AppliedScienceTicket() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [isServing, setIsServing] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);

  const handleGenerate = () => {
    if (!name.trim() || !date || !timeSlot) return;
    setIsGenerated(true);
    setTimeout(() => {
      setIsServing(true);
    }, 400);
  };

  const handleDownload = async () => {
    if (!ticketRef.current) return;
    const canvas = await html2canvas(ticketRef.current, { backgroundColor: null, scale: 2 });
    const link = document.createElement("a");
    link.download = `OZU_UygulamaliBilimler_Pass_${name.replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="w-full bg-[#f8f9fa] py-24 flex flex-col items-center justify-center border-t border-slate-200">
      <div className="max-w-2xl w-full px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full font-bold text-sm mb-6 uppercase tracking-widest shadow-sm border border-emerald-200">
          <ChefHat className="w-4 h-4" /> Kampüs Ziyaret Formu
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 font-serif">Le Cordon Bleu & Hospitality Pass</h2>
        <p className="text-slate-600 mb-12">
          Geleceğin şefi veya yönetici adayı, L&apos;Atelier Bleu ve Mükemmellik Merkezi&apos;ne özel girişinizi onaylayın.
        </p>

        <AnimatePresence mode="wait">
          {!isGenerated ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200"
            >
              <div className="text-left mb-6 border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold text-slate-800">Kampüs Ziyaret Formu</h3>
                <p className="text-sm text-slate-500">Adınızı, ziyaret tarihinizi ve saat aralığını seçerek VIP girişinizi oluşturun.</p>
              </div>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Şef / Yönetici Adayı"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:ring-0 outline-none w-full text-slate-800 font-medium"
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:ring-0 outline-none w-full text-slate-800 font-medium"
                  />
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:ring-0 outline-none w-full text-slate-800 font-medium"
                  >
                    <option value="">Saat Seçin</option>
                    <option value="Sabah 09:00 - 12:00">Sabah 09:00 - 12:00</option>
                    <option value="Öğleden Sonra 13:00 - 16:00">Öğleden Sonra 13:00 - 16:00</option>
                  </select>
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={!name.trim() || !date || !timeSlot}
                  className="mt-2 w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Giriş Kodunu Oluştur
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="ticket"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="flex flex-col items-center gap-8"
            >
              {/* Ticket Container */}
              <div
                ref={ticketRef}
                className="relative w-full max-w-lg bg-white p-8 shadow-2xl rounded-sm border border-slate-200 font-serif overflow-hidden"
              >
                {/* Elegant gold borders */}
                <div className="absolute inset-2 border border-amber-300/60 pointer-events-none rounded-sm"></div>
                <div className="absolute inset-3 border border-amber-200/30 pointer-events-none rounded-sm"></div>

                {/* Subtle damask / classic pattern bg */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h18v-2h-18v-2h18v-2h-18v-2h18V8h-18V6h18V4h-18V2h18V0H22v20.5zM0 22h20v2H0v-2zm0 4h20v2H0v-2zm0 4h20v2H0v-2zm0 4h20v2H0v-2zm0 4h20v2H0v-2zm22-20h18v2h-18v-2zm0 4h18v2h-18v-2zm0 4h18v2h-18v-2zm0 4h18v2h-18v-2zm0 4h18v2h-18v-2z\' fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}
                ></div>

                {/* Header */}
                <div className="flex flex-col items-center justify-center border-b border-amber-200 pb-6 mb-6 relative z-10">
                  <div className="flex items-center gap-4 text-emerald-800 mb-3">
                    <UtensilsCrossed className="w-8 h-8" />
                    <Hotel className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 uppercase tracking-widest text-center leading-tight">
                    HOSPITALITY & CULINARY<br/>EXCELLENCE PASS
                  </h3>
                  <div className="text-[9px] text-amber-600 tracking-[0.3em] mt-3">ÖZYEĞİN ÜNİVERSİTESİ YÖNETİM & MUTFAK SANATLARI</div>
                </div>

                {/* Details */}
                <div className="space-y-6 relative z-10">
                  <div className="text-center">
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-sans mb-1">Şef / Yönetici Adayı</div>
                    <div className="text-2xl font-bold text-slate-900 capitalize border-b border-slate-100 pb-3">{name}</div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-slate-50 p-4 border border-slate-100">
                    <div className="w-1/3 text-left text-[10px] text-slate-500 uppercase tracking-widest font-sans">Eğitim Standardı</div>
                    <div className="w-2/3 text-sm font-semibold text-slate-800 text-right">Le Cordon Bleu & ACPHA Accredited</div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-slate-50 p-4 border border-slate-100">
                    <div className="w-1/3 text-left text-[10px] text-slate-500 uppercase tracking-widest font-sans">Ziyaret Konumu</div>
                    <div className="w-2/3 text-sm font-semibold text-slate-800 text-right">Özyeğin Çekmeköy Kampüsü - L&apos;Atelier Bleu & Mükemmellik Merkezi</div>
                  </div>

                  <div className="flex justify-between items-center bg-emerald-50 p-4 border border-emerald-100">
                    <div className="text-left text-[10px] text-emerald-700 uppercase tracking-widest font-sans">Ziyaret Tarihi & Saati</div>
                    <div className="text-sm font-bold text-emerald-800 text-right">{date} | {timeSlot}</div>
                  </div>
                </div>

                {/* "Plated" Animation Overlay */}
                <AnimatePresence>
                  {isServing && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", damping: 15, stiffness: 100 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                    >
                      <div className="w-48 h-48 bg-white/90 backdrop-blur-sm rounded-full border-4 border-amber-300 shadow-[0_0_40px_rgba(252,211,77,0.4)] flex flex-col items-center justify-center">
                        <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-2" />
                        <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest font-sans text-center">
                          TABLE RESERVED<br/>ENTRY GRANTED
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all shadow-lg"
              >
                <Download className="w-5 h-5" /> Görsel Olarak İndir
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
