"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Download, Terminal, Fingerprint, Lock, Unlock } from "lucide-react";
import html2canvas from "html2canvas";

export default function EngineeringTicket() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [clearanceText, setClearanceText] = useState("");
  const ticketRef = useRef<HTMLDivElement>(null);

  const handleGenerate = () => {
    if (!name.trim() || !date || !timeSlot) return;
    setIsGenerated(true);
  };

  useEffect(() => {
    if (isGenerated) {
      const texts = [
        "INITIALIZING SECURE CONNECTION...",
        "BYPASSING FIREWALL [OK]",
        "VERIFYING BIOMETRICS...",
        "FINGERPRINT MATCH: 99.9%",
        "ACCESS GRANTED."
      ];
      let currentIdx = 0;
      setClearanceText(texts[0]);
      
      const interval = setInterval(() => {
        currentIdx++;
        if (currentIdx < texts.length) {
          setClearanceText(prev => prev + "\n" + texts[currentIdx]);
        } else {
          clearInterval(interval);
        }
      }, 400);

      return () => clearInterval(interval);
    }
  }, [isGenerated]);

  const handleDownload = async () => {
    if (!ticketRef.current) return;
    const canvas = await html2canvas(ticketRef.current, { backgroundColor: null, scale: 2 });
    const link = document.createElement("a");
    link.download = `OZU_Muh_Security_Pass_${name.replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="w-full bg-slate-950 py-24 flex flex-col items-center justify-center border-t border-slate-800">
      <div className="max-w-2xl w-full px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-950/50 text-cyan-400 rounded-full font-bold text-sm mb-6 uppercase tracking-widest shadow-sm border border-cyan-800/50">
          <Terminal className="w-4 h-4" /> Kampüs Ziyaret Kartı
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Cyberpunk RFID Clearance</h2>
        <p className="text-slate-400 mb-12">
          Geleceğin mühendisi, laboratuvarlara erişim yetkinizi (Security Clearance) başlatın ve terminal kodunuzu alın.
        </p>

        <AnimatePresence mode="wait">
          {!isGenerated ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-700"
            >
              <div className="text-left mb-6 border-b border-slate-800 pb-4">
                <h3 className="text-xl font-bold text-white">Kampüs Ziyaret Formu</h3>
                <p className="text-sm text-slate-400">Adınızı, ziyaret tarihinizi ve saati seçerek giriş kodunuzu oluşturun.</p>
              </div>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Geliştirici / Aday Adı"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-6 py-4 rounded-xl border-2 border-slate-700 bg-slate-800 text-slate-200 focus:border-cyan-500 focus:ring-0 outline-none w-full font-mono"
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="px-6 py-4 rounded-xl border-2 border-slate-700 bg-slate-800 text-slate-200 focus:border-cyan-500 focus:ring-0 outline-none w-full font-mono"
                  />
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="px-6 py-4 rounded-xl border-2 border-slate-700 bg-slate-800 text-slate-200 focus:border-cyan-500 focus:ring-0 outline-none w-full font-mono"
                  >
                    <option value="">Saat Seçin</option>
                    <option value="Sabah 09:00 - 12:00">Sabah 09:00 - 12:00</option>
                    <option value="Öğleden Sonra 13:00 - 16:00">Öğleden Sonra 13:00 - 16:00</option>
                  </select>
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={!name.trim() || !date || !timeSlot}
                  className="mt-2 w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-black rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Bileti Oluştur
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
                className="relative w-full max-w-sm md:max-w-md bg-[#050505] rounded-3xl border border-slate-800 p-6 shadow-[0_0_40px_rgba(6,182,212,0.15)] overflow-hidden font-mono"
              >
                {/* Circuit Grid Background */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                  style={{ backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                ></div>

                {/* RFID Chip Illustration */}
                <div className="absolute top-8 right-6 flex items-center justify-center w-12 h-16 rounded border-2 border-amber-500/80 bg-amber-900/20 opacity-80">
                   <div className="w-8 h-12 border border-amber-500/50 rounded-sm grid grid-cols-2 gap-1 p-1">
                     {[...Array(6)].map((_, i) => <div key={i} className="bg-amber-500/40 rounded-sm"></div>)}
                   </div>
                </div>

                {/* Top Section */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Fingerprint className="w-8 h-8 text-cyan-500" />
                    <span className="text-cyan-500 font-bold tracking-widest text-lg">ÖZÜ LABS</span>
                  </div>
                  <div className="text-[10px] text-slate-500 tracking-[0.3em]">SECURE ACCESS KEYCARD</div>
                </div>

                {/* User Info */}
                <div className="space-y-6 relative z-10">
                  <div>
                    <div className="text-[10px] text-cyan-800 uppercase tracking-widest mb-1">Geliştirici / Aday</div>
                    <div className="text-xl font-bold text-white uppercase tracking-wider">{name}</div>
                  </div>
                  
                  <div>
                    <div className="text-[10px] text-cyan-800 uppercase tracking-widest mb-1">Yetki Seviyesi</div>
                    <div className="text-sm font-bold text-emerald-400 bg-emerald-950/30 inline-block px-2 py-1 border border-emerald-900/50 rounded">LEVEL_5_R&D_ENGINEER</div>
                  </div>

                  <div className="flex justify-between items-end border-t border-slate-800/50 pt-2 mt-2">
                    <div>
                      <div className="text-[10px] text-cyan-800 uppercase tracking-widest mb-1">Erişim Laboratuvarı</div>
                      <div className="text-sm text-slate-300">Özyeğin Çekmeköy Kampüsü - Robotics & AI Lab / Cleanroom</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-cyan-800 uppercase tracking-widest mb-1">Erişim Tarihi & Saati</div>
                      <div className="text-sm text-slate-300">{date} | {timeSlot}</div>
                    </div>
                  </div>
                </div>

                {/* Terminal Stream Animation */}
                <div className="mt-8 bg-black border border-slate-800 rounded-lg p-3 min-h-[100px] relative">
                  <div className="absolute top-2 right-2 flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="text-[10px] text-cyan-500/80 whitespace-pre-line leading-relaxed">
                    {clearanceText}
                    <motion.span 
                      animate={{ opacity: [1, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.8 }}
                    >_</motion.span>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-cyan-800 tracking-widest mb-1 uppercase font-bold">Sistem Kodu</span>
                    <div className="flex items-center gap-2">
                      {clearanceText.includes("GRANTED") ? (
                        <Unlock className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Lock className="w-4 h-4 text-red-500" />
                      )}
                      <span className="text-[10px] text-slate-400 tracking-widest font-bold">
                        0x84F9_ACCESS_GRANTED
                      </span>
                    </div>
                  </div>
                  <div className="text-[9px] text-slate-600">ID: {Math.random().toString(36).substr(2, 8).toUpperCase()}</div>
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold rounded-full transition-all shadow-lg hover:shadow-cyan-500/30"
              >
                <Download className="w-5 h-5" /> Dosyayı İndir
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
