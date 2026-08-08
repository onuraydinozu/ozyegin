"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portalConfig } from "@/data/portalConfig";
import { Bot, X, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([
    { role: "bot", content: "Merhaba! Ben ÖzÜ Aday Asistanı. Size nasıl yardımcı olabilirim?" }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    
    // Check FAQ
    let response = "Bu harika bir soru! Daha fazla detay için web sitemizi inceleyebilir veya iletişim merkezimize ulaşabilirsiniz.";
    
    const lowerText = text.toLowerCase();
    for (const [key, answer] of Object.entries(portalConfig.chatbot.faqs)) {
      if (lowerText.includes(key)) {
        response = answer;
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", content: response }]);
    }, 800);
  };

  return (
    <>
      <div className="fixed bottom-[80px] md:bottom-6 right-4 md:right-6 z-[80]">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                size="icon"
                onClick={() => setIsOpen(true)}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-ozu-red to-ozu-dark text-white shadow-[0_10px_30px_rgba(163,31,52,0.4)] flex items-center justify-center hover:-translate-y-2 transition-all duration-300"
              >
                <Bot size={28} />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-0 right-0 w-[calc(100vw-2rem)] sm:w-[350px] bg-white/90 backdrop-blur-3xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden flex flex-col h-[500px] max-h-[75vh]"
            >
              <div className="bg-gradient-to-r from-ozu-red to-ozu-dark p-4 flex items-center justify-between text-white shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-inner">
                    <Bot size={22} className="text-white" />
                  </div>
                  <div>
                    <span className="font-extrabold block text-sm tracking-wide">ÖzÜ Asistan</span>
                    <span className="text-[10px] text-white/80 font-medium tracking-widest uppercase">Yapay Zeka Destekli</span>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 bg-gray-50/50">
                {messages.map((msg, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={i}
                    className={`max-w-[85%] rounded-2xl p-3.5 text-[13px] leading-relaxed shadow-sm ${
                      msg.role === "bot"
                        ? "bg-white border border-gray-100 text-gray-700 self-start rounded-tl-sm"
                        : "bg-ozu-red text-white self-end rounded-tr-sm shadow-md shadow-ozu-red/20"
                    }`}
                  >
                    {msg.content}
                  </motion.div>
                ))}
              </div>

              <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex flex-wrap gap-2 mb-3">
                  {portalConfig.chatbot.quickChips.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="text-[11px] bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors font-medium border border-gray-200/50"
                    >
                      {q}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Merak ettiğini sor..."
                    className="w-full bg-gray-100 border border-transparent rounded-full pl-5 pr-12 py-3.5 text-sm text-gray-800 focus:outline-none focus:bg-white focus:border-ozu-red/30 focus:ring-4 focus:ring-ozu-red/10 transition-all placeholder:text-gray-400"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.currentTarget.value) {
                        handleSend(e.currentTarget.value);
                      }
                    }}
                  />
                  <button 
                    onClick={() => {
                      if (inputRef.current?.value) {
                        handleSend(inputRef.current.value);
                      }
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-ozu-red text-white hover:bg-ozu-dark hover:scale-105 transition-all shadow-md shadow-ozu-red/30"
                  >
                    <Send size={15} className="-ml-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
