"use client";

import { motion } from "framer-motion";
import { portalConfig } from "@/data/portalConfig";
import { Calendar as CalendarIcon, Download, ExternalLink, Clock } from "lucide-react";

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  description: string;
}

export default function CalendarSync() {
  const events = portalConfig.calendarEvents;

  const generateIcsFile = (event: CalendarEvent) => {
    const formatDate = (dateString: string) => {
      const d = new Date(dateString);
      return d.toISOString().replace(/-|:|\.\d+/g, "");
    };

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Ozu Portal//TR",
      "BEGIN:VEVENT",
      `UID:${event.id}@ozu.edu.tr`,
      `DTSTAMP:${formatDate(new Date().toISOString())}`,
      `DTSTART:${formatDate(event.date)}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${event.title.replace(/\s+/g, "_")}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getGoogleCalendarUrl = (event: CalendarEvent) => {
    const d = new Date(event.date);
    const start = d.toISOString().replace(/-|:|\.\d+/g, "");
    const endObj = new Date(d.getTime() + 60 * 60 * 1000); // +1 hr default
    const end = endObj.toISOString().replace(/-|:|\.\d+/g, "");
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${start}/${end}&details=${encodeURIComponent(event.description)}`;
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
            >
              Tercih Takvimi
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 max-w-2xl font-medium"
            >
              Kritik tarihleri kaçırma, tek tıkla cihazına senkronize et.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-[#DF1934] font-bold bg-[#DF1934]/10 px-5 py-3 rounded-2xl w-fit"
          >
            <Clock size={20} />
            <span>Yaklaşan {events.length} Etkinlik</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => {
            const dateObj = new Date(event.date);
            const day = dateObj.toLocaleDateString("tr-TR", { day: "numeric" });
            const month = dateObj.toLocaleDateString("tr-TR", { month: "short" }).replace('.', '');

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-[#DF1934]/10 hover:border-[#DF1934]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-[#DF1934]/5 text-[#DF1934] w-16 h-16 rounded-2xl flex flex-col items-center justify-center font-bold border border-[#DF1934]/10 group-hover:scale-110 group-hover:bg-[#DF1934] group-hover:text-white transition-all duration-300 shadow-sm">
                      <span className="text-2xl leading-none mb-1">{day}</span>
                      <span className="text-xs uppercase tracking-wider">{month}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#DF1934] group-hover:bg-[#DF1934]/10 transition-all">
                      <CalendarIcon size={20} />
                    </div>
                  </div>
                  
                  <h4 className="font-extrabold text-2xl text-slate-900 mb-3 line-clamp-2">{event.title}</h4>
                  <p className="text-base text-slate-600 mb-8 font-medium leading-relaxed">{event.description}</p>
                </div>
                
                <div className="flex items-center gap-3 mt-auto">
                  <button 
                    onClick={() => generateIcsFile(event)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-sm rounded-xl transition-colors border border-slate-200 hover:border-slate-300"
                    title="Apple / Outlook Takvimine Ekle"
                  >
                    <Download size={16} /> iCal
                  </button>
                  <button 
                    onClick={() => window.open(getGoogleCalendarUrl(event), '_blank')}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-sm rounded-xl transition-colors border border-blue-200 hover:border-blue-300"
                    title="Google Takvime Ekle"
                  >
                    <ExternalLink size={16} /> Google
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
