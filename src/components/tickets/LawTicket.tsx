"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Download, CheckCircle2, Ticket } from "lucide-react";
import html2canvas from "html2canvas";

export default function LawTicket() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [isStamping, setIsStamping] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);

  const handleGenerate = () => {
    if (!name.trim() || !date || !timeSlot) return;
    setIsGenerated(true);
    setTimeout(() => {
      setIsStamping(true);
    }, 500); // Delay stamp for dramatic effect
  };

  const handleDownload = async () => {
    if (!ticketRef.current) return;
    const canvas = await html2canvas(ticketRef.current, { backgroundColor: null, scale: 2 });
    const link = document.createElement("a");
    link.download = `OZU_Hukuk_Durusma_Karti_${name.replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="w-full bg-slate-100 py-24 flex flex-col items-center justify-center border-t border-slate-300">
      <div className="max-w-2xl w-full px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-amber-500 rounded-full font-bold text-sm mb-6 uppercase tracking-widest shadow-md">
          <Ticket className="w-4 h-4" /> Kampüs Ziyaret Kartı
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 font-serif">Kurgusal Duruşma Çağrısı</h2>
        <p className="text-slate-600 mb-12">
          Geleceğin hukukçusu, davanıza atanmış duruşma kartınızı oluşturun ve Moot Court salonumuzdaki yerinizi ayırtın.
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
                <p className="text-sm text-slate-500">Adınızı, ziyaret tarihinizi ve saat aralığını seçerek resmi davetiyenizi oluşturun.</p>
              </div>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Davacı / Aday Adı"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-amber-500 focus:ring-0 outline-none w-full text-slate-800 font-medium"
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-amber-500 focus:ring-0 outline-none w-full text-slate-800 font-medium"
                  />
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-amber-500 focus:ring-0 outline-none w-full text-slate-800 font-medium"
                  >
                    <option value="">Saat Seçin</option>
                    <option value="Sabah 09:00 - 12:00">Sabah 09:00 - 12:00</option>
                    <option value="Öğleden Sonra 13:00 - 16:00">Öğleden Sonra 13:00 - 16:00</option>
                  </select>
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={!name.trim() || !date || !timeSlot}
                  className="mt-2 w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Resmi Çağrıyı Onayla
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
                className="relative w-full max-w-lg bg-[#0a1128] rounded-md border-8 border-double border-amber-600/60 p-8 shadow-2xl overflow-hidden font-serif text-amber-50"
              >
                {/* Watermark/Filigree */}
                <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                  <Scale className="w-96 h-96 text-amber-500" />
                </div>
                
                {/* Ticket Header */}
                <div className="flex justify-between items-start border-b-2 border-amber-500/30 pb-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-amber-500 uppercase tracking-widest mb-1">Yüksek Mahkeme Çağrısı</h3>
                    <p className="text-amber-200/60 text-xs tracking-[0.2em]">ÖZÜ HUKUK FAKÜLTESİ</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-amber-200/50 mb-1">DOSYA NO</div>
                    <div className="font-mono text-sm tracking-widest text-amber-400">ÖZÜ-HKK-2026/01</div>
                  </div>
                </div>

                {/* Ticket Body */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-left relative z-10">
                  <div className="bg-slate-900/50 p-4 rounded border border-amber-500/20 col-span-2">
                    <div className="text-[10px] text-amber-400/70 uppercase tracking-widest mb-1">Makam / Konum</div>
                    <div className="font-bold text-sm">Özyeğin Çekmeköy Kampüsü - Kurgusal Duruşma Salonu (Moot Court)</div>
                  </div>
                  
                  <div className="bg-slate-900/50 p-4 rounded border border-amber-500/20">
                    <div className="text-[10px] text-amber-400/70 uppercase tracking-widest mb-1">Celse Tarihi</div>
                    <div className="font-bold text-sm">{date}</div>
                  </div>
                  
                  <div className="bg-slate-900/50 p-4 rounded border border-amber-500/20">
                    <div className="text-[10px] text-amber-400/70 uppercase tracking-widest mb-1">Saat</div>
                    <div className="font-bold text-sm">{timeSlot}</div>
                  </div>
                </div>

                {/* The Stamp */}
                <AnimatePresence>
                  {isStamping && (
                    <motion.div
                      initial={{ scale: 3, opacity: 0, rotate: -15 }}
                      animate={{ scale: 1, opacity: 1, rotate: -5 }}
                      transition={{ type: "spring", damping: 12, stiffness: 200 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                    >
                      <div className="border-[6px] border-red-600 rounded-full w-56 h-56 flex flex-col items-center justify-center bg-[#0a1128]/80 backdrop-blur-sm shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                        <div className="border-4 border-red-600 rounded-full w-48 h-48 flex items-center justify-center px-4 text-center">
                          <span className="text-red-600 font-black text-4xl uppercase tracking-[0.2em] transform -rotate-12 border-y-4 border-red-600 py-1">
                            ONAYLANDI
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Signature area */}
                <div className="mt-12 flex flex-col gap-2 border-t border-amber-500/30 pt-4">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-amber-400/70 uppercase tracking-widest mb-1">Durum</span>
                      <div className="flex items-center gap-2 text-amber-500/80">
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="text-xs uppercase tracking-widest font-bold">GİRİŞ İZNİ VERİLDİ / VERDICT: APPROVED</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-signature text-2xl text-amber-400 opacity-80 -mb-2">ÖzÜ</div>
                      <div className="text-[9px] text-amber-200/50 tracking-widest">HUKUK FAKÜLTESİ</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-full transition-all shadow-lg hover:shadow-amber-500/40"
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
