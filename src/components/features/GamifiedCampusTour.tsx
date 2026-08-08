"use client";

export default function GamifiedCampusTour() {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl glass-card relative h-[600px] border border-border">
      {/* 360 Virtual Tour Embedded */}
      <iframe 
        src="https://360.ozyegin.edu.tr/sanal-tur/index.html?sound=false&audio=0&mute=1" 
        className="w-full h-full border-0"
        allow="fullscreen; accelerometer; gyroscope; magnetometer; vr"
        title="Özyeğin Üniversitesi Sanal Kampüs Turu"
      ></iframe>
      
      {/* Overlay controls or badges can be placed here if needed */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold pointer-events-none flex items-center gap-2 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        Canlı 360° Tur
      </div>
    </div>
  );
}
