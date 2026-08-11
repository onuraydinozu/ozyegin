"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Download, Ticket, BarChart3, ArrowUpRight } from "lucide-react";
import html2canvas from "html2canvas";

export default function BusinessTicket() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);

  const handleGenerate = () => {
    if (!name.trim() || !date || !timeSlot) return;
    setIsGenerated(true);
  };

  const handleDownload = async () => {
    if (!ticketRef.current) return;
    const canvas = await html2canvas(ticketRef.current, { backgroundColor: null, scale: 2 });
    const link = document.createElement("a");
    link.download = `OZU_Isletme_VIP_Karti_${name.replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="w-full bg-slate-50 py-24 flex flex-col items-center justify-center border-t border-slate-200">
      <div className="max-w-2xl w-full px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full font-bold text-sm mb-6 uppercase tracking-widest shadow-sm border border-emerald-200">
          <TrendingUp className="w-4 h-4" /> VIP Yatırımcı Kartı
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Wall Street Borsa Pass</h2>
        <p className="text-slate-600 mb-12">
          Geleceğin CEO'su, yatırımcı kartınızı oluşturarak işletme fakültemizin borsa ve girişim laboratuvarlarına VIP erişim sağlayın.
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
                <p className="text-sm text-slate-500">Adınızı, ziyaret tarihinizi ve saat aralığını seçerek VIP kartınızı oluşturun.</p>
              </div>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Yatırımcı Adı ve Soyadı"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-0 outline-none w-full text-slate-800 font-medium"
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-0 outline-none w-full text-slate-800 font-medium"
                  />
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-0 outline-none w-full text-slate-800 font-medium"
                  >
                    <option value="">Saat Seçin</option>
                    <option value="Sabah 09:00 - 12:00">Sabah 09:00 - 12:00</option>
                    <option value="Öğleden Sonra 13:00 - 16:00">Öğleden Sonra 13:00 - 16:00</option>
                  </select>
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={!name.trim() || !date || !timeSlot}
                  className="mt-2 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Kartı Al
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
                className="relative w-full max-w-lg bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 rounded-2xl border-4 border-emerald-500/30 p-1 shadow-[0_0_50px_rgba(16,185,129,0.2)] overflow-hidden"
              >
                {/* Holographic Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent w-[200%] animate-[spin_4s_linear_infinite] pointer-events-none"></div>

                <div className="relative z-10 bg-slate-950/90 backdrop-blur-md rounded-xl p-8 h-full border border-emerald-500/20">
                  
                  {/* Bull Run Graph Background Animation */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden rounded-xl">
                    <motion.svg
                      viewBox="0 0 100 50"
                      className="w-full h-full preserve-3d"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    >
                      <path
                        d="M0,50 L20,40 L35,45 L50,25 L65,30 L85,10 L100,5"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                      />
                    </motion.svg>
                  </div>

                  {/* Header */}
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/40">
                        <BarChart3 className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white tracking-tight">VIP STOCK PASS</h3>
                        <p className="text-emerald-400 text-xs font-mono tracking-widest uppercase">NASDAQ: OZUBIZ</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded">
                        <ArrowUpRight className="w-3 h-3" /> +94.2%
                      </div>
                    </div>
                  </div>

                  {/* Ticket Body */}
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-left relative z-10 mb-8">
                    <div className="col-span-2">
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-mono">Yatırımcı / Aday</div>
                      <div className="text-2xl font-black text-white uppercase tracking-wide border-b border-slate-700 pb-2">{name}</div>
                    </div>
                    
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-mono">Hisse / Portföy</div>
                      <div className="font-bold text-sm text-emerald-300">Geleceğin CEO'su (Future Executive)</div>
                    </div>
                    
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-mono">Piyasa Değeri</div>
                      <div className="font-bold text-sm text-emerald-300">UNLIMITED POTENTIAL</div>
                    </div>

                    <div className="col-span-2 flex justify-between items-center border-t border-slate-700/50 pt-2 mt-2">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-mono">İşlem Lokasyonu</div>
                        <div className="font-bold text-sm text-slate-200">Özyeğin Çekmeköy Kampüsü - Borsa/Finans Laboratuvarı</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-mono">İşlem Tarihi & Saati</div>
                        <div className="font-bold text-sm text-slate-200">{date} | {timeSlot}</div>
                      </div>
                    </div>
                  </div>

                  {/* Barcode Footer */}
                  <div className="flex justify-between items-end border-t border-slate-800 pt-4 relative z-10">
                    <div className="w-48 h-10 flex opacity-60">
                      {/* Fake Barcode */}
                      {[...Array(30)].map((_, i) => (
                        <div key={i} className="h-full bg-white" style={{ width: Math.random() * 4 + 1 + 'px', marginRight: Math.random() * 3 + 'px' }}></div>
                      ))}
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] text-slate-500 font-mono tracking-widest">SERİ NO</div>
                      <div className="text-sm font-mono text-slate-300">0xOZU-847291</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-full transition-all shadow-lg hover:shadow-emerald-500/40"
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
