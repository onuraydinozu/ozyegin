"use client";

import { motion } from "framer-motion";
import { MapPin, MessageCircle, Download } from "lucide-react";

export default function FloatingActionBar() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="bg-white border border-gray-200 px-3 py-2.5 rounded-full flex items-center gap-2 md:gap-3 shadow-2xl shadow-black/10">
        
        {/* Sanal Kampüs Turu - Premium Button */}
        <a 
          href="https://360.ozyegin.edu.tr/sanal-tur/index.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-2.5 bg-white text-gray-700 border border-gray-100 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95 group"
        >
          <div className="bg-orange-100 group-hover:bg-white/20 p-1.5 rounded-full transition-colors">
            <MapPin size={16} className="text-orange-500 group-hover:text-white transition-colors" />
          </div>
          <span className="hidden md:inline font-bold text-sm tracking-wide">Sanal Kampüs</span>
        </a>
        
        {/* Divider */}
        <div className="w-px h-6 bg-gray-200/50 hidden md:block" />
        
        {/* WhatsApp - Premium Button */}
        <a 
          href="https://wa.me/902165649000?text=Merhaba,%20Özyeğin%20Üniversitesi%20tercih%20dönemi%20hakkında%20bilgi%20almak%20istiyorum." 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-2.5 bg-white text-gray-700 border border-gray-100 hover:bg-green-500 hover:text-white hover:border-green-500 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 active:scale-95 group"
        >
          <div className="bg-green-100 group-hover:bg-white/20 p-1.5 rounded-full transition-colors">
            <MessageCircle size={16} className="text-green-600 group-hover:text-white transition-colors" />
          </div>
          <span className="hidden md:inline font-bold text-sm tracking-wide">WhatsApp</span>
        </a>
        
        {/* Divider */}
        <div className="w-px h-6 bg-gray-200/50 hidden md:block" />
        
        {/* Broşür İndir - Premium Button */}
        <a 
          href="https://catalog.ozyegin.edu.tr/3d-flip-book/2026-2027-tercih-donemi-bilgilendirme-brosuru/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-2.5 bg-white text-gray-700 border border-gray-100 hover:bg-ozu-dark hover:text-white hover:border-ozu-dark rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-black/20 active:scale-95 group"
        >
          <div className="bg-gray-100 group-hover:bg-white/20 p-1.5 rounded-full transition-colors">
            <Download size={16} className="text-ozu-dark group-hover:text-white transition-colors" />
          </div>
          <span className="hidden md:inline font-bold text-sm tracking-wide">Broşür İndir</span>
        </a>

      </div>
    </motion.div>
  );
}
