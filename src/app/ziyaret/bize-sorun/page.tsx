"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, Send, MessageSquare, User, Mail, HelpCircle, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";

export default function BizeSorun() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
            src="https://www.ozyegin.edu.tr/sites/default/files/yuzme_havuzu.jpg" 
            alt="Özyeğin Üniversitesi Akademik Kadro" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <h2 className="text-4xl font-bold mb-4 tracking-tight leading-tight">Sorularınız İçin <br/>Buradayız.</h2>
            <p className="text-lg text-white/90 font-light max-w-md">
              Kariyer yolculuğunuzda size rehberlik etmek için her zaman yanınızdayız. 
              Eğitim modelimiz, kampüs yaşamı veya bölümler hakkında merak ettiğiniz her şeyi bize sorabilirsiniz.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-[55%] xl:w-[50%] bg-slate-50 relative overflow-y-auto min-h-[calc(100vh-88px)]">
          <div className="max-w-2xl mx-auto px-6 lg:px-12 py-16 xl:py-24">
            
            <div className="mb-12">
              <span className="text-[#DF1934] font-bold text-sm tracking-widest uppercase mb-3 block">İletişim</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Bize Sorun
              </h1>
              <p className="text-slate-600 leading-relaxed text-lg">
                Uzman ekibimize tüm sorularınızı iletebilirsiniz. En kısa sürede sizinle e-posta üzerinden iletişime geçeceğiz.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-xl border border-slate-100">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Mesajınız Alındı!</h2>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Sorunuz eğitim danışmanlarımıza başarıyla ulaştı. En kısa sürede size dönüş yapacağız.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-all flex items-center gap-2 mx-auto"
                >
                  Yeni Soru Sor
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <User className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
                      Adınız *
                    </label>
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

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
                    Email Adresiniz *
                  </label>
                  <input 
                    required 
                    type="email" 
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#DF1934]/20 focus:border-[#DF1934] transition-all bg-white shadow-sm" 
                    placeholder="ornek@email.com" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
                    Konu *
                  </label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#DF1934]/20 focus:border-[#DF1934] transition-all bg-white shadow-sm" 
                    placeholder="Mesajınızın konusu" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
                    Mesajınız *
                  </label>
                  <textarea 
                    required 
                    rows={6}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#DF1934]/20 focus:border-[#DF1934] transition-all bg-white shadow-sm resize-none" 
                    placeholder="Lütfen sorunuzu detaylı bir şekilde yazınız..." 
                  />
                </div>

                <div className="pt-4 pb-12">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#DF1934] hover:bg-[#c4152d] text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
                  >
                    Mesajı Gönder
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
