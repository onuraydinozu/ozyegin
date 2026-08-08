"use client";

import { motion } from "framer-motion";
import { Leaf, Droplets, Award, Globe, Wind, Zap } from "lucide-react";

const awards = [
  {
    icon: <Award className="w-8 h-8 text-emerald-400" />,
    title: "LEED Gold Sertifikası",
    description: "Türkiye'de LEED Gold sertifikasını alan ilk üniversite binaları (AB1, AB2 ve ScOLa).",
    delay: 0.1
  },
  {
    icon: <Globe className="w-8 h-8 text-teal-400" />,
    title: "UI GreenMetric",
    description: "Vakıf üniversiteleri arasında yıllardır Türkiye 1.'si ve dünyanın en çevreci kampüslerinden biri.",
    delay: 0.2
  },
  {
    icon: <Droplets className="w-8 h-8 text-blue-400" />,
    title: "Mavi Su Verimliliği",
    description: "Türkiye'de ISO 46001 ve Mavi Su Verimliliği Belgesi'ni alan ilk yükseköğretim kurumu.",
    delay: 0.3
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Sürdürülebilir Enerji",
    description: "Kampüsümüzdeki enerji ihtiyacının önemli bir kısmı yenilenebilir kaynaklardan sağlanmaktadır.",
    delay: 0.4
  }
];

export default function SustainabilitySection() {
  return (
    <section className="relative w-full py-32 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#06402B] via-[#0A5C36] to-[#04281A] text-white">
      {/* Smooth transition from the white section above */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

      {/* Organic Background Shapes & Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-500/10 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-green-400/10 blur-[150px]"></div>
        
        {/* Subtle Leaf Overlays (Using CSS radial gradients as organic shapes) */}
        <div className="absolute top-1/4 left-1/4 w-[200px] h-[300px] bg-emerald-400/5 rounded-full blur-3xl rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-lime-400/5 rounded-full blur-3xl -rotate-12"></div>
        {/* Ultra-Optimized Wind Reveal (Zero Lag) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          {[
            { id: 1, type: "🌿", x: "-10%", y: "10%", size: "15rem", windX: 100, windY: -50, rotate: 180, delay: 0 },
            { id: 2, type: "🍃", x: "40%", y: "30%", size: "22rem", windX: -100, windY: 80, rotate: -270, delay: 0.1 },
            { id: 3, type: "🍂", x: "60%", y: "60%", size: "18rem", windX: 100, windY: 100, rotate: 360, delay: 0.2 },
            { id: 4, type: "🌿", x: "5%", y: "60%", size: "12rem", windX: -100, windY: 50, rotate: -180, delay: 0.15 },
          ].map((leaf) => (
            <motion.div
              key={leaf.id}
              className="absolute drop-shadow-2xl will-change-transform"
              style={{ left: leaf.x, top: leaf.y, fontSize: leaf.size }}
              initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              whileInView={{ 
                opacity: 0,
                x: `${leaf.windX}vw`, 
                y: `${leaf.windY}vh`,
                rotate: leaf.rotate,
                scale: 0.2
              }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: leaf.delay }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {leaf.type}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-900/50 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg"
          >
            <Leaf className="w-4 h-4" />
            Doğa ile İç İçe Kampüs
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight drop-shadow-lg"
          >
            Geleceği Korumak,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-lime-300">
              Özümüzde Var.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-emerald-100/80 max-w-3xl mx-auto leading-relaxed"
          >
            Özyeğin Üniversitesi olarak, sürdürülebilirliği bir zorunluluk değil, bir yaşam biçimi olarak görüyoruz. Dünyamızı koruyan öncü uygulamalarımızla sayısız uluslararası sertifika ve ödülün gururunu yaşıyoruz.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: award.delay, duration: 0.7 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/5 group-hover:to-emerald-600/5 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-black/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {award.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{award.title}</h3>
                <p className="text-emerald-100/70 text-sm leading-relaxed">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://sustainability.ozyegin.edu.tr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-full transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1"
          >
            Sürdürülebilirlik Raporumuzu İnceleyin
            <Leaf className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
