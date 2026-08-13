"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, Send, User, Mail, Map, BookOpen, ArrowRight, MapPin } from "lucide-react";
import Header from "@/components/layout/Header";

const PROVINCES = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", 
  "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", 
  "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", 
  "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Iğdır", "Isparta", "İstanbul", 
  "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kırıkkale", "Kırklareli", "Kırşehir", 
  "Kilis", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş", 
  "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", 
  "Şanlıurfa", "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak", "DIŞ ÜLKELER", "K.K.T.C"
];

export default function BrosurTalepFormu() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("dijital");

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
            src="/ozu_havacilik_hedef.jpg" 
            alt="Özyeğin Üniversitesi Broşür" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <h2 className="text-4xl font-bold mb-4 tracking-tight leading-tight">Geleceğini <br/>Tasarlamaya Başla.</h2>
            <p className="text-lg text-white/90 font-light max-w-md">
              Özyeğin Üniversitesi'nin güncel tanıtım materyallerini ve fakülte broşürlerini dijital veya basılı olarak talep edebilirsiniz.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-[55%] xl:w-[50%] bg-slate-50 relative overflow-y-auto min-h-[calc(100vh-88px)]">
          <div className="max-w-2xl mx-auto px-6 lg:px-12 py-16 xl:py-24">
            
            <div className="mb-12">
              <span className="text-[#DF1934] font-bold text-sm tracking-widest uppercase mb-3 block">Materyal Talep</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Broşür Talep Et
              </h1>
              <p className="text-slate-600 leading-relaxed text-lg">
                Fakültelerimiz ve bölümlerimiz hakkında detaylı bilgi edinmek için broşürlerimizi talep edebilirsiniz.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-xl border border-slate-100">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Talebiniz Alındı!</h2>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Broşür talebiniz alınmıştır. Seçtiğiniz iletim yöntemine göre materyalleriniz en kısa sürede size ulaştırılacaktır.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-all flex items-center gap-2 mx-auto"
                >
                  Yeni Talep Oluştur
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Kişisel Bilgiler */}
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

                {/* İletişim */}
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

                {/* İletim Yöntemi */}
                <div className="space-y-4 pt-2">
                  <label className="text-base font-bold text-slate-900">Broşür İletim Yöntemi *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="cursor-pointer group">
                      <input type="radio" name="delivery" value="dijital" checked={deliveryMethod === "dijital"} onChange={(e) => setDeliveryMethod(e.target.value)} className="peer sr-only" required />
                      <div className="flex flex-col items-center justify-center p-6 border border-slate-200 bg-white rounded-xl peer-checked:border-[#DF1934] peer-checked:bg-[#DF1934]/5 peer-checked:text-[#DF1934] font-medium text-slate-600 transition-all hover:border-slate-300 shadow-sm">
                        <BookOpen className="w-8 h-8 mb-3 text-slate-400 group-hover:text-slate-600 peer-checked:text-[#DF1934]" strokeWidth={1.5} />
                        <span className="text-base font-bold">Dijital (E-posta)</span>
                      </div>
                    </label>
                    <label className="cursor-pointer group">
                      <input type="radio" name="delivery" value="basili" checked={deliveryMethod === "basili"} onChange={(e) => setDeliveryMethod(e.target.value)} className="peer sr-only" required />
                      <div className="flex flex-col items-center justify-center p-6 border border-slate-200 bg-white rounded-xl peer-checked:border-[#DF1934] peer-checked:bg-[#DF1934]/5 peer-checked:text-[#DF1934] font-medium text-slate-600 transition-all hover:border-slate-300 shadow-sm">
                        <MapPin className="w-8 h-8 mb-3 text-slate-400 group-hover:text-slate-600 peer-checked:text-[#DF1934]" strokeWidth={1.5} />
                        <span className="text-base font-bold">Basılı (Kargo)</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Adres Bilgileri */}
                {deliveryMethod === "basili" && (
                  <div className="space-y-6 pt-6 border-t border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                      <Map className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                      Adres Bilgileri
                    </h3>
                    <div className="grid grid-cols-1 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">İl *</label>
                        <div className="relative">
                          <select required className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#DF1934]/20 focus:border-[#DF1934] transition-all bg-white shadow-sm appearance-none cursor-pointer">
                            <option value="" disabled selected hidden>İl Seçiniz</option>
                            {PROVINCES.map(city => (
                              <option key={city} value={city}>{city}</option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Açık Adres *</label>
                        <textarea 
                          required 
                          rows={4}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#DF1934]/20 focus:border-[#DF1934] transition-all bg-white shadow-sm resize-none" 
                          placeholder="Mahalle, sokak, bina ve daire no giriniz..." 
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-4 pb-12">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#DF1934] hover:bg-[#c4152d] text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
                  >
                    Talebi Gönder
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
