"use client";

import { useState } from "react";
import { portalConfig } from "@/data/portalConfig";
import { Button } from "@/components/ui/Button";
import { MessageCircle, X, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function MentorMatch() {
  const [activeMentor, setActiveMentor] = useState<string | null>(null);

  const selectedMentor = portalConfig.mentors.find((m) => m.id === activeMentor);

  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-ozu-dark mb-4">Öğrencilerimizle Tanış</h2>
        <p className="text-muted-foreground text-lg">Aklındaki soruları doğrudan ÖzÜ öğrencilerine sor.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portalConfig.mentors.map((mentor) => (
          <div key={mentor.id} className="glass-card rounded-3xl overflow-hidden anti-gravity relative">
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded-full">
              <span className={`w-2 h-2 rounded-full ${mentor.isActive ? "bg-green-400 animate-pulse" : "bg-gray-400"}`} />
              {mentor.isActive ? "Şu an aktif" : "Çevrimdışı"}
            </div>
            <div className="h-48 overflow-hidden relative">
              <Image src={mentor.avatar} alt={mentor.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold">{mentor.name}</h4>
                <p className="text-sm opacity-90">{mentor.department} - {mentor.year}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">Uzmanlık Alanları</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {mentor.expertises.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <Button className="w-full gap-2" onClick={() => setActiveMentor(mentor.id)}>
                <MessageCircle size={18} />
                Anonim Chat Başlat
              </Button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeMentor && selectedMentor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-end p-4 md:pr-12 bg-black/20 backdrop-blur-sm"
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              className="bg-background w-full max-w-[380px] h-[550px] rounded-3xl overflow-hidden shadow-2xl border flex flex-col"
            >
              <div className="bg-ozu-dark p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image src={selectedMentor.avatar} alt={selectedMentor.name} fill className="rounded-full object-cover" />
                    <span className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-ozu-dark rounded-full ${selectedMentor.isActive ? "bg-green-400" : "bg-gray-400"}`} />
                  </div>
                  <div>
                    <h5 className="font-bold">{selectedMentor.name}</h5>
                    <p className="text-xs text-white/70">Sen (Anonim Aday) ile sohbette</p>
                  </div>
                </div>
                <button onClick={() => setActiveMentor(null)} className="p-2 hover:bg-white/10 rounded-full transition">
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 p-4 bg-secondary/30 overflow-y-auto">
                <div className="bg-white p-3 rounded-2xl rounded-tl-sm w-[80%] shadow-sm text-sm border mb-4">
                  Merhaba! Ben {selectedMentor.name}, {selectedMentor.department} bölümünde okuyorum. Kampüs, dersler veya yurt hayatı hakkında sormak istediğin ne varsa buradayım!
                </div>
              </div>
              
              <div className="p-4 border-t bg-background flex gap-2">
                <input
                  type="text"
                  placeholder="Mesaj yaz..."
                  className="flex-1 bg-secondary text-foreground rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button size="icon" className="rounded-full shrink-0">
                  <Send size={18} />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
