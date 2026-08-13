"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function AdminPanel() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  // Güvenlik: Sadece geliştirme ortamında çalışsın
  if (process.env.NODE_ENV !== "development") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p>Aradığınız sayfa bulunamadı.</p>
          <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">Ana Sayfaya Dön</Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    fetch("http://localhost:3001/api/admin/data?file=portalConfig")
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setMessage("Veriler yüklenirken hata oluştu. admin-server.mjs'in çalıştığından emin olun.");
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("http://localhost:3001/api/admin/data?file=portalConfig", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data, null, 2)
      });
      if (res.ok) {
        setMessage("✅ Başarıyla kaydedildi! Şimdi terminalde 'npm run sync' yazarak GitHub'a gönderebilirsiniz.");
      } else {
        setMessage("❌ Kaydetme başarısız.");
      }
    } catch (err) {
      setMessage("❌ Sunucuya bağlanılamadı.");
    }
    setSaving(false);
  };

  const handleShortsChange = (index: number, field: string, value: any) => {
    const newData = { ...data };
    newData.shortsVideos[index][field] = value;
    setData(newData);
  };

  if (loading) return <div className="p-8 text-white">Yükleniyor...</div>;
  if (!data) return <div className="p-8 text-red-500">{message}</div>;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-700">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <ShieldAlert className="text-red-500" /> 
              Gizli Yönetim Paneli
            </h1>
            <p className="text-slate-400 mt-2">Sadece lokal bilgisayarda çalışır. Yaptığınız değişiklikler anında kaydedilir.</p>
          </div>
          <button 
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold transition-all disabled:opacity-50"
          >
            <Save size={20} />
            {saving ? "Kaydediliyor..." : "Tüm Değişiklikleri Kaydet"}
          </button>
        </div>

        {message && (
          <div className="bg-slate-800 border border-slate-600 p-4 rounded-lg mb-8 text-emerald-400 font-medium">
            {message}
          </div>
        )}

        <section className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-6">ÖzÜ Shorts Videoları (Ana Sayfa)</h2>
          
          <div className="space-y-6">
            {data.shortsVideos.map((video: any, index: number) => (
              <div key={video.id} className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Video Başlığı</label>
                    <input 
                      type="text" 
                      value={video.title} 
                      onChange={(e) => handleShortsChange(index, "title", e.target.value)}
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Kategori</label>
                    <input 
                      type="text" 
                      value={video.category} 
                      onChange={(e) => handleShortsChange(index, "category", e.target.value)}
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-400 mb-1">YouTube Embed URL</label>
                    <input 
                      type="text" 
                      value={video.videoUrl} 
                      onChange={(e) => handleShortsChange(index, "videoUrl", e.target.value)}
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 font-mono text-sm"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
