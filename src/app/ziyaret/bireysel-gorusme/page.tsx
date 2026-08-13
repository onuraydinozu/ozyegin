"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, Send, User, Mail, Calendar, Clock, ArrowRight, Video, Users } from "lucide-react";
import Header from "@/components/layout/Header";

export default function BireyselGorusme() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [meetingType, setMeetingType] = useState("online");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-[88px] flex">
        {/* Left Side: HD Photo */}
        <div className="hidden lg:block w-[45%] xl:w-[50%] relative">
          <Image 
            src="/ozu_mukemmellik_merkezi.jpg" 
            alt="Özyeğin Üniversitesi Mükemmellik Merkezi" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <h2 className="text-4xl font-bold mb-4 tracking-tight leading-tight">Yolunuzu Birlikte <br/>Çizelim.</h2>
            <p className="text-lg text-white/90 font-light max-w-md">
              Eğitim uzmanlarımız ve akademisyenlerimizle birebir görüşerek kariyer hedeflerinize en uygun programları keşfedin.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-[55%] xl:w-[50%] bg-slate-50 relative overflow-y-auto min-h-[calc(100vh-88px)]">
          <div className="max-w-2xl mx-auto px-6 lg:px-12 py-16 xl:py-24">
            
            <div className="mb-12">
              <span className="text-[#DF1934] font-bold text-sm tracking-widest uppercase mb-3 block">Danışmanlık</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Bireysel Görüşme
              </h1>
              <p className="text-slate-600 leading-relaxed text-lg">
                Sizin için en uygun tarihi ve saati seçerek eğitim danışmanlarımızla online veya yüz yüze bireysel görüşme randevunuzu oluşturun.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-xl border border-slate-100">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Randevunuz Alındı!</h2>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Görüşme talebiniz başarıyla alınmıştır. Randevu detayları ve onay bilgisi e-posta adresinize gönderilecektir.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-all flex items-center gap-2 mx-auto"
                >
                  Yeni Randevu Oluştur
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Görüşme Tipi */}
                <div className="space-y-4">
                  <label className="text-base font-bold text-slate-900">Görüşme Tipi *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="cursor-pointer group">
                      <input type="radio" name="meetingType" value="online" checked={meetingType === "online"} onChange={(e) => setMeetingType(e.target.value)} className="peer sr-only" required />
                      <div className="flex flex-col items-center justify-center p-6 border border-slate-200 bg-white rounded-xl peer-checked:border-[#DF1934] peer-checked:bg-[#DF1934]/5 peer-checked:text-[#DF1934] font-medium text-slate-600 transition-all hover:border-slate-300 shadow-sm h-full">
                        <Video className="w-8 h-8 mb-3 text-slate-400 group-hover:text-slate-600 peer-checked:text-[#DF1934]" strokeWidth={1.5} />
                        <span className="text-base font-bold">Online Görüşme</span>
                        <span className="text-xs text-slate-500 mt-1 font-normal">Zoom veya Teams Üzerinden</span>
                      </div>
                    </label>
                    <label className="cursor-pointer group">
                      <input type="radio" name="meetingType" value="yuzyuze" checked={meetingType === "yuzyuze"} onChange={(e) => setMeetingType(e.target.value)} className="peer sr-only" required />
                      <div className="flex flex-col items-center justify-center p-6 border border-slate-200 bg-white rounded-xl peer-checked:border-[#DF1934] peer-checked:bg-[#DF1934]/5 peer-checked:text-[#DF1934] font-medium text-slate-600 transition-all hover:border-slate-300 shadow-sm h-full">
                        <Users className="w-8 h-8 mb-3 text-slate-400 group-hover:text-slate-600 peer-checked:text-[#DF1934]" strokeWidth={1.5} />
                        <span className="text-base font-bold">Yüz Yüze Görüşme</span>
                        <span className="text-xs text-slate-500 mt-1 font-normal">Kampüste Birebir</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                    <User className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    Kişisel Bilgiler
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Adınız *</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#DF1934]/20 focus:border-[#DF1934] transition-all bg-white shadow-sm" 
                        placeholder="Adınızı giriniz" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Soyadınız *</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#DF1934]/20 focus:border-[#DF1934] transition-all bg-white shadow-sm" 
                        placeholder="Soyadınızı giriniz" 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    İletişim Bilgileri
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Email Adresiniz *</label>
                      <input 
                        required 
                        type="email" 
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#DF1934]/20 focus:border-[#DF1934] transition-all bg-white shadow-sm" 
                        placeholder="ornek@email.com" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Cep Telefonunuz *</label>
                      <div className="flex">
                        <span className="flex items-center justify-center px-4 border border-r-0 border-slate-200 bg-slate-100 text-slate-500 font-medium rounded-l-xl">
                          +90
                        </span>
                        <input 
                          required 
                          type="tel" 
                          className="w-full px-4 py-3.5 rounded-r-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#DF1934]/20 focus:border-[#DF1934] transition-all bg-white shadow-sm" 
                          placeholder="5XX XXX XX XX" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    Randevu Zamanı
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Tercih Edilen Tarih *</label>
                      <input 
                        required 
                        type="date" 
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#DF1934]/20 focus:border-[#DF1934] transition-all bg-white shadow-sm" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Tercih Edilen Saat *</label>
                      <div className="relative">
                        <select 
                          required 
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#DF1934]/20 focus:border-[#DF1934] transition-all bg-white shadow-sm appearance-none cursor-pointer" 
                        >
                          <option value="" disabled selected hidden>Saat Seçiniz</option>
                          <option value="09:00">09:00 - 10:00</option>
                          <option value="10:30">10:30 - 11:30</option>
                          <option value="13:30">13:30 - 14:30</option>
                          <option value="15:00">15:00 - 16:00</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <Clock className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 pb-12">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#DF1934] hover:bg-[#c4152d] text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
                  >
                    Randevu Talebi Gönder
                    <Send className="w-5 h-5" strokeWidth={2} />
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    Kişisel verileriniz KVKK kapsamında korunmaktadır.
                  </p>
                </div>

              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
