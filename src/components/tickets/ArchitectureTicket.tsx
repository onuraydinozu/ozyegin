"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DraftingCompass, Download, Ruler, CheckSquare } from "lucide-react";
import html2canvas from "html2canvas";

export default function ArchitectureTicket() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);

  const handleGenerate = () => {
    if (!name.trim() || !date || !timeSlot) return;
    setIsGenerated(true);
    setTimeout(() => {
      setIsDrawing(true);
    }, 400);
  };

  const handleDownload = async () => {
    if (!ticketRef.current) return;
    const canvas = await html2canvas(ticketRef.current, { backgroundColor: null, scale: 2 });
    const link = document.createElement("a");
    link.download = `OZU_Mimarlik_Blueprint_${name.replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="w-full bg-[#001f3f] py-24 flex flex-col items-center justify-center border-t border-[#003366]">
      <div className="max-w-2xl w-full px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#003366] text-blue-200 rounded-full font-bold text-sm mb-6 uppercase tracking-widest shadow-md">
          <DraftingCompass className="w-4 h-4" /> Kampüs Ziyaret Kartı
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-mono tracking-tight">Ozan Blueprint Badge</h2>
        <p className="text-blue-200/80 mb-12">
          Geleceğin mimarı, kendi teknik çiziminizi onaylayın ve FabLab stüdyolarımıza giriş kodunuzu alın.
        </p>

        <AnimatePresence mode="wait">
          {!isGenerated ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#002b5e] p-8 rounded-3xl shadow-xl border border-[#004080]"
            >
              <div className="text-left mb-6 border-b border-[#004080] pb-4">
                <h3 className="text-xl font-bold text-white">Kampüs Ziyaret Formu</h3>
                <p className="text-sm text-blue-200">Adınızı, ziyaret tarihinizi ve saat aralığını seçerek FabLab girişinizi onaylayın.</p>
              </div>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Mimar / Tasarımcı Adı"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-6 py-4 rounded-xl border-2 border-[#004080] bg-[#001f3f] text-blue-100 placeholder-blue-300/50 focus:border-blue-400 focus:ring-0 outline-none w-full font-mono"
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="px-6 py-4 rounded-xl border-2 border-[#004080] bg-[#001f3f] text-blue-100 placeholder-blue-300/50 focus:border-blue-400 focus:ring-0 outline-none w-full font-mono"
                  />
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="px-6 py-4 rounded-xl border-2 border-[#004080] bg-[#001f3f] text-blue-100 placeholder-blue-300/50 focus:border-blue-400 focus:ring-0 outline-none w-full font-mono"
                  >
                    <option value="">Saat Seçin</option>
                    <option value="Sabah 09:00 - 12:00">Sabah 09:00 - 12:00</option>
                    <option value="Öğleden Sonra 13:00 - 16:00">Öğleden Sonra 13:00 - 16:00</option>
                  </select>
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={!name.trim() || !date || !timeSlot}
                  className="mt-2 w-full py-4 bg-blue-500 hover:bg-blue-400 text-[#001f3f] font-black rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Projeyi Onayla
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
                className="relative w-full max-w-lg bg-[#003366] p-8 shadow-2xl font-mono text-blue-100 overflow-hidden"
              >
                {/* Isometric Grid Background */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none" 
                  style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '15px 15px' }}
                ></div>

                {/* Crop Marks / Crosshairs */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/40"></div>
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/40"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/40"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/40"></div>

                {/* Technical Drawing Animation (Lines drawing in) */}
                <AnimatePresence>
                  {isDrawing && (
                    <div className="absolute top-10 right-10 w-32 h-32 opacity-30 pointer-events-none">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <motion.rect 
                          x="10" y="10" width="80" height="80" 
                          fill="none" stroke="white" strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.line 
                          x1="10" y1="50" x2="90" y2="50" 
                          stroke="white" strokeWidth="1" strokeDasharray="4 2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 1 }}
                        />
                        <motion.line 
                          x1="50" y1="10" x2="50" y2="90" 
                          stroke="white" strokeWidth="1" strokeDasharray="4 2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 1.2 }}
                        />
                      </svg>
                    </div>
                  )}
                </AnimatePresence>

                {/* Header */}
                <div className="flex items-center gap-4 border-2 border-white/20 p-4 mb-8 bg-[#002244]/50 backdrop-blur-sm relative z-10">
                  <div className="w-12 h-12 border border-white/30 flex items-center justify-center bg-white/5">
                    <Ruler className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-[0.2em] mb-1 text-white">FABLAB STUDIO BADGE</h3>
                    <p className="text-[10px] tracking-[0.3em] text-blue-300">ÖZYEĞİN ÜNİVERSİTESİ - FAD</p>
                  </div>
                </div>

                {/* Project Details Box */}
                <div className="border border-white/20 relative z-10 bg-[#003366]/80 backdrop-blur-sm">
                  <div className="flex border-b border-white/20">
                    <div className="w-1/3 p-3 border-r border-white/20 text-[10px] text-blue-300 uppercase tracking-widest bg-white/5 flex items-center">
                      Mimar / Tasarımcı
                    </div>
                    <div className="w-2/3 p-3 font-bold text-lg text-white uppercase">{name}</div>
                  </div>
                  
                  <div className="flex border-b border-white/20">
                    <div className="w-1/3 p-3 border-r border-white/20 text-[10px] text-blue-300 uppercase tracking-widest bg-white/5 flex items-center">
                      Proje Adı
                    </div>
                    <div className="w-2/3 p-3 text-sm font-semibold text-white">ÖzÜ Kampüs Keşif Stüdyosu</div>
                  </div>

                  <div className="flex border-b border-white/20">
                    <div className="w-1/3 p-3 border-r border-white/20 text-[10px] text-blue-300 uppercase tracking-widest bg-white/5 flex items-center">
                      Ölçek
                    </div>
                    <div className="w-2/3 p-3 text-sm font-bold text-blue-200">SCALE 1:1 (GERÇEK ZAMANLI)</div>
                  </div>

                  <div className="flex">
                    <div className="w-1/3 p-3 border-r border-white/20 text-[10px] text-blue-300 uppercase tracking-widest bg-white/5 flex items-center">
                      Atölye Erişim
                    </div>
                    <div className="w-2/3 p-3 text-sm font-bold text-emerald-400 flex flex-col gap-1">
                      <div className="flex items-center gap-2"><CheckSquare className="w-4 h-4" /> Özyeğin Çekmeköy Kampüsü</div>
                      <div className="text-blue-200">FabLab & VR Spatial Lab</div>
                    </div>
                  </div>
                </div>

                {/* Footer Signature */}
                <div className="mt-8 flex justify-between items-end relative z-10">
                  <div>
                    <div className="text-[8px] tracking-[0.4em] text-blue-400 mb-1">DATE / TARIH & SAAT</div>
                    <div className="text-sm">{date} | {timeSlot}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[8px] tracking-[0.4em] text-blue-400 mb-1">APPROVAL</div>
                    <div className="w-32 h-6 border-b border-white/30 border-dashed"></div>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-blue-50 text-[#001f3f] font-bold rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
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
