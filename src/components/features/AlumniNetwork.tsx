"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, MessageCircle } from "lucide-react";

const alumni = [
  {
    name: "Sena Karagöl",
    department: "Gastronomi ve Mutfak Sanatları",
    role: "Executive Chef",
    location: "Paris, Fransa",
    email: "sena.karagol@ozu.edu.tr",
    initials: "SK",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Hasan Onur Aydın",
    department: "Havacılık Yönetimi",
    role: "Hava Sahası Yöneticisi",
    location: "İstanbul, Türkiye",
    email: "hasan.aydin@ozu.edu.tr",
    initials: "HA",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Ayşe Aday",
    department: "Havacılık Yönetimi",
    role: "Hava Trafik Kontrolörü",
    location: "Frankfurt, Almanya",
    email: "ayse.aday@ozu.edu.tr",
    initials: "AA",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Seda Nur Yıldız",
    department: "İletişim Tasarımı",
    role: "Kıdemli UX Tasarımcısı",
    location: "Londra, İngiltere",
    email: "sedanur.yildiz@ozu.edu.tr",
    initials: "SY",
    color: "from-purple-500 to-indigo-500",
  }
];

export default function AlumniNetwork() {
  return (
    <section className="py-24 px-4 md:px-8 w-full max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-4xl max-h-4xl bg-gradient-to-tr from-[#0066FF]/5 to-ozu-red/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-sm border border-blue-100"
        >
          <MessageCircle className="w-4 h-4" />
          Mezun İletişim Platformu
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight"
        >
          Mezunlarımızla Tanışın
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Kariyer yolculuklarını doğrudan onlardan dinleyin. Aklınızdaki soruları sorun, global ÖzÜ ağının bir parçası olun.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {alumni.map((person, index) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
          >
            {/* Avatar */}
            <div className={`w-20 h-20 rounded-2xl mb-6 flex items-center justify-center text-2xl font-black text-white shadow-lg bg-gradient-to-br ${person.color} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
              {person.initials}
            </div>

            {/* Info */}
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{person.name}</h3>
            <p className="text-ozu-red font-semibold text-sm mb-3">{person.department}</p>
            
            <div className="mt-auto pt-4 flex flex-col gap-2 border-t border-gray-100">
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">{person.role}</p>
              <p className="text-gray-400 text-xs">{person.location}</p>
            </div>

            {/* Action Button */}
            <a 
              href={`mailto:${person.email}`}
              className="mt-6 flex items-center justify-between w-full px-5 py-3 bg-gray-50 hover:bg-gray-900 text-gray-700 hover:text-white rounded-xl font-semibold transition-colors duration-300 group/btn"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                İletişime Geç
              </span>
              <ArrowRight className="w-4 h-4 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
