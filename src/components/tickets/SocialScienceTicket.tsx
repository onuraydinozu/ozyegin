"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe2, Download, Fingerprint, BookOpen, BrainCircuit } from "lucide-react";
import html2canvas from "html2canvas";

export default function SocialScienceTicket() {
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
    }, 600);
  };

  const handleDownload = async () => {
    if (!ticketRef.current) return;
    const canvas = await html2canvas(ticketRef.current, { backgroundColor: null, scale: 2 });
    const link = document.createElement("a");
    link.download = `OZU_SosyalBilimler_Pasaport_${name.replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="w-full bg-[#fdfaf6] py-24 flex flex-col items-center justify-center border-t border-[#e5dcd3]">
      <div className="max-w-2xl w-full px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4a1c22] text-amber-200 rounded-full font-bold text-sm mb-6 uppercase tracking-widest shadow-md">
          <BookOpen className="w-4 h-4" /> Kampüs Ziyaret Kartı
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-[#4a1c22] mb-6 font-serif">Diplomatik Lab Pasaportu</h2>
        <p className="text-[#8b6369] mb-12">
          Geleceğin araştırmacısı, bilişsel laboratuvarlarımıza diplomatik giriş vizenizi (Research Visa) onaylayın.
        </p>

        <AnimatePresence mode="wait">
          {!isGenerated ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-[#e5dcd3]"
            >
              <div className="text-left mb-6 border-b border-[#e5dcd3] pb-4">
                <h3 className="text-xl font-bold text-[#4a1c22]">Kampüs Ziyaret Formu</h3>
                <p className="text-sm text-[#8b6369]">Adınızı, ziyaret tarihinizi ve saat aralığını seçerek araştırma vizenizi oluşturun.</p>
              </div>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Araştırmacı Adı"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-6 py-4 rounded-xl border-2 border-[#e5dcd3] focus:border-[#4a1c22] focus:ring-0 outline-none w-full text-[#4a1c22] font-medium"
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="px-6 py-4 rounded-xl border-2 border-[#e5dcd3] focus:border-[#4a1c22] focus:ring-0 outline-none w-full text-[#4a1c22] font-medium"
                  />
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="px-6 py-4 rounded-xl border-2 border-[#e5dcd3] focus:border-[#4a1c22] focus:ring-0 outline-none w-full text-[#4a1c22] font-medium"
                  >
                    <option value="">Saat Seçin</option>
                    <option value="Sabah 09:00 - 12:00">Sabah 09:00 - 12:00</option>
                    <option value="Öğleden Sonra 13:00 - 16:00">Öğleden Sonra 13:00 - 16:00</option>
                  </select>
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={!name.trim() || !date || !timeSlot}
                  className="mt-2 w-full py-4 bg-[#4a1c22] hover:bg-[#3d161c] text-amber-100 font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Pasaportu Onayla
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
                className="relative w-full max-w-sm bg-gradient-to-b from-[#fdfaf6] to-[#f4ebe1] rounded-lg border-x-4 border-y border-[#4a1c22] p-8 shadow-2xl overflow-hidden font-serif"
              >
                {/* Leather texture simulation on edges & subtle background */}
                <div 
                  className="absolute inset-0 opacity-[0.04] pointer-events-none" 
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%234a1c22\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}
                ></div>

                {/* Left/Right Red Passport Binding */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#311116] border-r border-[#1a080b]"></div>
                
                {/* Header (Emblem) */}
                <div className="flex flex-col items-center justify-center border-b-2 border-dotted border-[#4a1c22]/30 pb-6 mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-[#4a1c22] flex items-center justify-center mb-3 bg-[#fdfaf6]">
                    <Globe2 className="w-10 h-10 text-[#4a1c22]" />
                  </div>
                  <h3 className="text-xl font-black text-[#4a1c22] uppercase tracking-widest text-center leading-tight">
                    Diplomatic<br/>Research Visa
                  </h3>
                  <div className="text-[9px] text-[#4a1c22]/60 tracking-[0.3em] mt-2">SOCIAL SCIENCES FACULTY</div>
                </div>

                {/* Passport Details */}
                <div className="space-y-4 relative z-10">
                  <div className="flex gap-4">
                    <div className="w-1/3 text-right text-[10px] text-[#4a1c22]/70 uppercase tracking-widest font-bold">Diplomat / Araştırmacı</div>
                    <div className="w-2/3 text-lg font-black text-[#2e1014] uppercase tracking-wide border-b border-[#4a1c22]/20">{name}</div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-1/3 text-right text-[10px] text-[#4a1c22]/70 uppercase tracking-widest font-bold">Görev Alanı</div>
                    <div className="w-2/3 text-sm font-semibold text-[#4a1c22]">Özyeğin Çekmeköy Kampüsü - Bilişsel Psikoloji & Nörobilim Labı</div>
                  </div>
                  
                  <div className="flex gap-4 border-t border-[#4a1c22]/10 pt-2 mt-2">
                    <div className="w-1/3 text-right text-[10px] text-[#4a1c22]/70 uppercase tracking-widest font-bold">Giriş Tarihi & Saati</div>
                    <div className="w-2/3 text-sm font-bold text-[#4a1c22]">{date} | {timeSlot}</div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1/3 text-right text-[10px] text-[#4a1c22]/70 uppercase tracking-widest font-bold">Geçerlilik</div>
                    <div className="w-2/3 text-sm font-bold text-amber-700 bg-amber-100 inline-block px-2 rounded">2026-2030 Lisans Dönemi</div>
                  </div>
                </div>

                {/* Fingerprint / MRZ code */}
                <div className="mt-10 border-t border-[#4a1c22]/20 pt-4 flex items-center justify-between relative z-10">
                  <Fingerprint className="w-12 h-12 text-[#4a1c22]/20" />
                  <div className="text-[10px] font-mono text-[#4a1c22]/40 text-right leading-relaxed">
                    P&lt;OZU&lt;&lt;{name.replace(/\s+/g, "<").toUpperCase()}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br/>
                    4928173491&lt;2608092F2010156&lt;&lt;&lt;&lt;&lt;
                  </div>
                </div>

                {/* UV Visa Stamp Animation */}
                <AnimatePresence>
                  {isStamping && (
                    <motion.div
                      initial={{ scale: 2, opacity: 0, rotate: 20 }}
                      animate={{ scale: 1, opacity: 0.9, rotate: -5 }}
                      transition={{ type: "spring", damping: 10, stiffness: 200 }}
                      className="absolute bottom-10 right-4 z-20 pointer-events-none mix-blend-multiply"
                    >
                      <div className="border-[3px] border-purple-600/80 rounded-full w-40 h-40 flex flex-col items-center justify-center p-2 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                        <BrainCircuit className="w-8 h-8 text-purple-600/80 mb-1" />
                        <span className="text-purple-600/90 font-black text-[10px] uppercase tracking-widest text-center border-t border-purple-600/40 pt-1 mt-1">
                          ENTRY PERMITTED<br/>
                          <span className="text-[8px]">ÇEKMEKÖY CAMPUS</span>
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-[#4a1c22] hover:bg-[#311116] text-amber-100 font-bold rounded-full transition-all shadow-lg hover:shadow-[#4a1c22]/30"
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
