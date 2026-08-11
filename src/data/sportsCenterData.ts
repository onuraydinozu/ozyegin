export const sportsCenterData = {
  hero: {
    title: "SPOR MERKEZİ",
    subtitle: "ÖZÜ WOLVES & SPOR YAŞAMI",
    tagline: "13.000 m² Kapalı Alan, Yarı Olimpik Havuz, Profesyonel Altyapı ve Sınırsız Enerji.",
    description: "Özyeğin Üniversitesi Spor Merkezi, öğrencilerimizin akademik gelişimlerinin yanı sıra fiziksel, zihinsel ve sosyal gelişimlerini desteklemek amacıyla Çekmeköy Kampüsü'nün kalbinde hizmet vermektedir. Ders dışı spor faaliyetlerinden ulusal lig takımlarına, kredili spor derslerinden spor burslarına kadar geniş bir yelpazede spor kültürü sunar.",
    stats: [
      { value: 13000, suffix: " m²", label: "Toplam Kapalı Alan" },
      { value: 1500, suffix: "", label: "Tribün Kapasitesi" },
      { value: 20, suffix: "+", label: "Aktif Spor Takımı" },
      { value: 7, suffix: "/24", label: "Sağlık & Güvenlik Desteği" }
    ]
  },

  facilities: [
    {
      id: "pool",
      title: "Yarı Olimpik Kapalı Yüzme Havuzu",
      category: "pool",
      status: "Aktif / Kullanım Programı Mevcut",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
      specs: [
        "25 Metre Boyunda, 5 Kulvarlı Yarı Olimpik Havuz",
        "Ozon & UV Otomatik Hijyen Temizlik Sistemleri",
        "Dört Mevsim 28°C İklimlendirilmiş Su Sıcaklığı",
        "Serbest Yüzme & Öğrenci Yüzme Kursları"
      ],
      hours: "Haftalık Kullanım Programı",
      linkText: "Yüzme Havuzu Kullanım Programı"
    },
    {
      id: "fitness",
      title: "Fitness & Kondisyon Merkezi",
      category: "fitness",
      status: "Aktif / Eğitmen Desteği",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      specs: [
        "2 Farklı Kat Alanında En Güncel Kardiyo ve Serbest Ağırlıklar",
        "Technogym & Eleiko Profesyonel Ekipman Parkuru",
        "InBody Vücut Analiz Cihazı ve Kişisel Ölçüm",
        "Uzman Spor Antrenörleri Desteği"
      ],
      hours: "07:00 - 23:00",
      linkText: "Fitness Alanı Kullanım Programı"
    },
    {
      id: "arena",
      title: "Çok Amaçlı Kapalı Spor Salonu (Ana Arena)",
      category: "arena",
      status: "Aktif / Müsabaka & Antrenman",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
      specs: [
        "FIBA Standartlarında Akçaağaç Parke Zemin",
        "1.500 Koltuk Seyirci Kapasiteli Tribünler",
        "Basketbol, Voleybol ve Hentbol Müsabakaları",
        "ÖzÜ Wolves Ev Sahibi Karşılaşmaları"
      ],
      hours: "Spor Salonu Kullanım Programı",
      linkText: "Spor Salonu Kullanım Programı"
    },
    {
      id: "outdoor",
      title: "Açık Spor Alanları & Tesisler",
      category: "outdoor",
      status: "Aktif / Serbest & Turnuva",
      image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80",
      specs: [
        "FIFA Onaylı Sentetik Çim Futbol Sahası",
        "Açık Basketbol & Voleybol Sahaları",
        "1.2 km Tartan Koşu & Yürüyüş Parkuru",
        "Aydınlatmalı Gece Kullanımı İmkânı"
      ],
      hours: "Açık Tesis Kullanım Programı",
      linkText: "Açık Spor Alanları Kullanım Programı"
    },
    {
      id: "studios",
      title: "Grup Egzersiz Stüdyoları",
      category: "studios",
      status: "Ders & Stüdyo Programı",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      specs: [
        "4 Bağımsız Özel Aynalı Stüdyo Alanı",
        "Pilates, Yoga, Spinning ve Zumba Dersleri",
        "Özel Ses ve Şok Emici Yaylı Zemin Sistemleri",
        "Bahar ve Güz Dönemi Stüdyo Takvimi"
      ],
      hours: "Dönemsel Program",
      linkText: "Stüdyo Ders Programı"
    },
    {
      id: "squash",
      title: "Squash & Tenis Kortları",
      category: "outdoor",
      status: "Randevulu Kullanım",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=80",
      specs: [
        "WSF Standartlarında 2 Adet Kapalı Squash Salonu",
        "Açık / Üstü Kapanabilir Tenis Kortu",
        "Öğrenci & Personel Online Randevu Sistemi",
        "Tenis Kliniği & Turnuva Organizasyonları"
      ],
      hours: "08:00 - 22:00",
      linkText: "Kort Randevu Sistemi"
    }
  ],

  scholarships: {
    title: "Özyeğin Üniversitesi Spor Bursları",
    description: "Özyeğin Üniversitesi, ulusal ve uluslararası alanda başarılı sporcuları ve milli takımlarda ülkemizi temsil eden öğrencilerini Spor Bursları ile desteklemektedir.",
    benefits: [
      "Milli Sporcu Burs Kapsamı ve Öğrenim Ücreti Muafiyeti",
      "Üniversite Takımında Yer Alan Başarılı Sporculara Özel Destek",
      "Spor Malzemesi, Tesis Kullanım Önceliği ve Deplasman Desteği",
      "Akademik & Sportif Çift Kariyer Danışmanlığı"
    ]
  },

  academicCourses: {
    title: "Kredili Spor Dersleri",
    description: "Özyeğin Üniversitesi akademik müfredatında öğrencilerin seçmeli ders olarak alabildikleri kredili spor dersleri sunulmaktadır.",
    courses: [
      "SEC 101 - Üniversite Yaşamına Giriş Spor Seminerleri",
      "Yüzme ve Su Sporları Seçmeli Dersleri",
      "Tenis ve Raket Sporları",
      "Fitness, Sağlıklı Yaşam ve Pilates",
      "Basketbol ve Voleybol Oyun Kuralları & Uygulama"
    ]
  },

  teams: {
    title: "ÖZÜ WOLVES: Takım Ruhu & Branşlarımız",
    description: "Özyeğin Üniversitesi takımları 'ÖzÜ Wolves' adı altında Türkiye Üniversite Sporları Federasyonu (TÜSF) liglerinde ve uluslararası üniversitelerarası turnuvalarda kampüsümüzü temsil etmektedir.",
    branches: [
      "Amerikan Futbolu", "Basketbol (Erkek/Kadın)", "Voleybol (Erkek/Kadın)",
      "Yüzme", "Tenis", "Masa Tenisi", "Su Topu",
      "Kürek", "Satranç", "Okçuluk", "Dövüş Sanatları (Taekwondo, Karate)",
      "Frizbi (Ultimate)", "E-Spor", "Badminton", "Yelken", "Eskrim"
    ]
  },

  tournaments: {
    title: "Spor Organizasyonları & Turnuvalar",
    description: "Kampüs içi ve dışı gelenekselleşmiş spor organizasyonları ile öğrencilerimiz aktif spor yaşamının parçası olmaktadır.",
    items: [
      { name: "ÖzÜ CUP", desc: "Üniversitelerarası geleneksel spor turnuvası." },
      { name: "FİBA Spor Oyunları", desc: "Grup şirketleri ve üniversite birlikteliği spor oyunları." },
      { name: "Kampüs İçi Turnuvalar", desc: "Fakülteler arası 3x3 Basketbol, Halı Saha ve Bilardo turnuvaları." },
      { name: "Ulusal Kamp & Faaliyetler", desc: "TÜSF Türkiye Şampiyonaları ve Üniversiteler Ligi." }
    ]
  }
};
