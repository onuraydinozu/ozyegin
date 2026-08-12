export const sportsCenterData = {
  hero: {
    title: "ÖzÜ'de Spor",
    subtitle: "Akademik ve Sosyal Gelişimin Bütünleyici Gücü",
    description: "Üniversitemizde Beden Eğitimi ve Spor Faaliyetleri; öğrencilerimizin yoğun öğretim süreci içerisinde, fiziksel ve sosyal gelişimlerini tamamlayıcı önemli bir değer olarak görülür, akademik öğretim ve sosyal etkinliklerle bütünlük içerisinde sürdürülür.",
    description2: "Amacımız; öğrencilerimize sağlıklı yaşam ve spor yapma alışkanlığı edinmiş, takım ruhu kazanmış, temsil yetenekleri, tecrübe ve özgüvenleri gelişmiş, profesyonel mesleklerini en iyi şekilde yapabilecek, yaşamlarını sağlıklı ve sosyal bir şekilde sürdürebilecek sportif beceri ve yetenek kazanabilecekleri eğitim/öğretim ve imkanları sunmaktır.",
    image: "https://www.ozyegin.edu.tr/sites/default/files/styles/gallery/public/1._sayfa_fitness_fotografi_0.jpg?itok=KwC5ZJGN"
  },

  teams: {
    title: "Spor Takımları",
    categories: [
      {
        id: "salon",
        label: "Salon & Saha",
        branches: ["Erkek Basketbol", "Kadın Basketbol", "Kadın Voleybol", "Erkek Voleybol", "Hentbol", "Futbol", "Korumalı Futbol (Amerikan Futbolu)", "Flag Futbol"]
      },
      {
        id: "su",
        label: "Su & Plaj",
        branches: ["Yüzme", "Sutopu", "Yat/Yelken", "Kürek", "Plaj Voleybolu", "Plaj Hentbolu"]
      },
      {
        id: "raket",
        label: "Raket & Bireysel",
        branches: ["Tenis", "Masa Tenisi", "Badminton", "Eskrim", "Kayak/Snowboard", "Karate"]
      },
      {
        id: "zeka",
        label: "Zeka & Diğer",
        branches: ["Satranç", "Bilardo", "Dans", "Frizbi"]
      }
    ]
  },

  academicCourses: {
    title: "Kredili Spor Dersleri",
    description: "Öğrencilerimize her öğretim yılında 14 hafta üzerinden 2 kredili seçmeli ders olarak verilir. Amaç, seçilen branşlarda temel teknik ve eğitim sunmaktır.",
    courses: [
      { name: "Yüzme", desc: "Yüzme sporu genel kuramsal bilgilerinin aktarımı, suya uyum çalışmaları, serbest, sırtüstü, kurbağalama ve kelebek yüzme temel beceri ve tekniklerinin öğretimi. Nefes kontrolü, vücut pozisyonu, ayak vuruşu çalışmaları." },
      { name: "Yelken", desc: "Yelken ve rüzgar kavramı ve tanımları, yelkenli tekne ve sınıfları, yelken ve donanım bilgisi, denizcilik kuralları, seyir tipleri, manevralar, deniz öncesi hazırlıklar, düğüm bilgisi, rüzgar yönleri ve bofor cetveli incelemesi, çalışma yöntemlerinin tanıtımının kuramsal ve uygulamaları." },
      { name: "Bilardo", desc: "Bilardo sporunun temel teknikleri ve oyun kuralları, ıstaka, tutuş ve vuruş bilgileri, yöntemler, stiller, pozisyon hakimiyeti ve planlaması, strateji belirleme, savunma oyunu ve falsolu sayılarla ilgili uygulama ve tartışmalar." },
      { name: "Tenis", desc: "Bireysel tenis öğrenimine yönelik vücut pozisyonu, raket tutuş, topla buluşma, forehand / backhand vuruşları, servis atışları, hücum ve savunma teknikleri." },
      { name: "Suda Hayat Kurtarma", desc: "Cankurtarma ve ilk yardım eğitimi ile ilgili temel teknikleri kazandırmaya odaklanmaktadır. Eğitimde cankurtarma ve ilk yardım teknikleri öğretilip pratikte uygulama fırsatları sunularak bu bilgilerin pekiştirilmesi sağlanır." },
      { name: "Satranç", desc: "Satrançta oyun kuralları ve hamleler, temel kavramlar, düşünme, karar verme, zaman kullanma, taktikler, hücum ve savunma esasları." },
      { name: "AKUT", desc: "Teorik temel arama kurtarma eğitimi dersidir. Arama kurtarma ile ilgili temel kavramlar ve afet müdahale teknikleri ile ilgili teorik bilgi kazanımını amaçlar." },
      { name: "Briç", desc: "Briç çok yönlü düşünme kabiliyetinin gelişmesine yardımcı olur, planlı olma alışkanlığı kazandırır ve sosyal gelişime katkıda bulunur." },
      { name: "Masa Tenisi", desc: "Öğrencilere temel masa tenisi eğitimini pratik ve teorik olarak sunmayı hedefler." },
      { name: "Temel Fitness Eğitimi", desc: "Fitness branşına özgü temel terimler, fitness ekipmanları ve antrenman yöntemleri ile ilgili teorik ve pratik kazanımlar sunmayı hedefler." },
      { name: "Hakemlik", desc: "Temel teknik hentbol bilgilerinin aktarımı, karar alma ve kriz yönetimi becerilerinin gelişimi hedeflenir. Dersi başarılı bir şekilde tamamlayan öğrenciler aday hakemlik belgesi almaya hak kazanır." },
      { name: "Bireysel Savunma", desc: "Temel bireysel savunma tekniklerinin öğretimi, karar verme becerisi, sorumluluk alma, disiplin ve özgüven gelişimi hedeflenir." }
    ]
  },

  tournaments: {
    title: "Kampüs İçi Spor Turnuvaları",
    subtitle: "Herkes İçin Spor!",
    description: "Spor takımları dışında kalan tüm öğrenci ve çalışanlarımıza açık olarak, her yarı dönemde çeşitli branşlarda bireysel ve takım turnuvaları düzenlenir. Branşlar, tarihler ve kayıt esasları dönem başlarında ayrıca duyurulur.",
    items: [
      "Futbol", "Basketbol", "Voleybol", "Yüzme", "Kros", "Satranç", "Bilardo", "Tenis", "Masa Tenisi"
    ]
  },

  staff: [
    {
      name: "Metin AÇIKALIN",
      title: "Spor Merkezi Müdürü",
      email: "metin.acikalin@ozyegin.edu.tr",
      phone: "+90 216 564 9429",
      photo: "https://www.ozyegin.edu.tr/sites/default/files/upload/spormerkezi/metin_acikalin.jpeg",
      bio: "Lisans eğitimini Marmara Üniversitesi Spor Yüksekokulu'nda tamamlamış, uzun yıllar profesyonel basketbol kariyerine başarıyla devam etmiştir. Ülker Spor, Ankara TED Koleji, İstanbul Spor, Samsun Spor, Antalya BB ve Yeşilyurt Spor Kulübü'nde forma giymiştir. Milli takımla Avrupa ve Dünya Şampiyonalarında ülkemizi temsil etmiş; Dünya ikinciliği ve Türkiye şampiyonlukları elde etmiştir. 2011'den beri ÖzÜ bünyesinde görev yapmaktadır."
    },
    {
      name: "Seçkin ALAY",
      title: "Fitness Alanları Ekip Yöneticisi",
      email: "seckin.alay@ozyegin.edu.tr",
      phone: "+90 216 559 9109",
      photo: "https://www.ozyegin.edu.tr/sites/default/files/upload/spormerkezi/seckin_alay_1.jpg",
      bio: "Trakya Üni. BESYO mezunudur. Yönetim ve Organizasyon Yüksek Lisansı tamamlamıştır. Basketbol, Yüzme ve Fitness alanlarında uzmanlaşmış olup 2. Kademe Fitness ve Pilates eğitmenliği sertifikalarına sahiptir."
    },
    {
      name: "Güneş VİTER",
      title: "Spor Merkezi Ekip Yöneticisi",
      email: "gunes.viter@ozyegin.edu.tr",
      phone: "+90 216 564 9769",
      photo: "https://www.ozyegin.edu.tr/sites/default/files/upload/spormerkezi/gunes_viter_0.jpg",
      bio: "Anadolu Üni. BESYO lisans, Gedik Üni. Spor Sosyolojisi Yüksek Lisans mezunudur. 17 yıl profesyonel Hentbol oynamış; 5 Türkiye Şampiyonluğu, 8 Türkiye Kupası, 4 Balkan Şampiyonluğu yaşamıştır. Brezilya Dünya Kupası'nda \"En İyi Savunma Oyuncusu\", Fransa'da \"En Değerli Oyuncu\" ödüllerini almıştır."
    },
    {
      name: "Doğucan BİLGETÜRK",
      title: "Spor Uzmanı",
      email: "dogucan.bilgeturk@ozyegin.edu.tr",
      phone: "+90 216 564 9114",
      photo: "https://www.ozyegin.edu.tr/sites/default/files/upload/spormerkezi/dogucan_bilgeturk.jpg",
      bio: "Okan Üni. Spor Bilimleri lisans ve Spor Yönetimi Yüksek Lisans mezunudur. 12 yılı aşkın süre Triatlon milli sporcusu olarak ülkemizi temsil etmiştir. Yüzme, Kayak, Binicilik, Hentbol, Korfball, Dalış ve Dövüş Sporları eğitmenidir."
    },
    {
      name: "Feyzanur AKSOY",
      title: "Spor Uzmanı",
      email: "feyzanur.aksoy@ozyegin.edu.tr",
      phone: "+90 216 564 9784",
      photo: "https://www.ozyegin.edu.tr/sites/default/files/upload/spormerkezi/feyzanur_aksoy_1.jpg",
      bio: "Marmara Üni. BESYO mezunu, Egzersiz ve Spor Psikolojisi Yüksek Lisanslıdır. Taekwondo branşında uzun yıllar müsabıklık yapmış olup Taekwondo ve Yüzme uzmanıdır."
    },
    {
      name: "Gizem NURBAY",
      title: "Fitness Uzmanı",
      email: "gizem.nurbay@ozyegin.edu.tr",
      phone: "+90 216 564 9158",
      photo: "https://www.ozyegin.edu.tr/sites/default/files/upload/spormerkezi/gizem_nurbay.jpg",
      bio: "Marmara Üni. Antrenörlük bölümü mezunudur. 15 yıl yüzme ve paletli yüzme performans sporculuğu yapmış, milli sporcu olarak ülkemizi temsil etmiştir. Pilates, Yoga, Fitness ve Dalış eğitmenidir."
    },
    {
      name: "Merthan SELEN",
      title: "Spor Uzmanı",
      email: "merthan.selen@ozyegin.edu.tr",
      phone: "+90 216 564 9882",
      photo: "https://www.ozyegin.edu.tr/sites/default/files/upload/spormerkezi/merthan_1.jpeg",
      bio: "Marmara Üni. Spor Bilimleri mezunu, İstanbul Gelişim Üni. Yüksek Lisans öğrencisidir. 3. Kademe Kıdemli Paletli Yüzme Antrenörü, 2 Yıldız Dalış Eğitmenidir. 10 yıldır yüzme ve kulüp koordinatörlüğü görevlerini yürütmektedir."
    },
    {
      name: "Emir Berke YAS",
      title: "Cankurtaran",
      email: "emir.yas@ozyegin.edu.tr",
      phone: "+90 216 564 9961",
      photo: "https://www.ozyegin.edu.tr/sites/default/files/upload/spormerkezi/emir2_1.jpeg",
      bio: "İstanbul Rumeli Üni. Rekreasyon mezunu, Marmara Üni. Pedagojik Formasyon sahibidir. 2. Kademe Fitness ve 1. Kademe Yüzme antrenörüdür."
    },
    {
      name: "Hüseyin AYDIN",
      title: "Spor Merkezi Destek Elemanı",
      email: "huseyin.aydin@ozyegin.edu.tr",
      phone: "+90 216 564 9581",
      photo: "https://www.ozyegin.edu.tr/sites/default/files/upload/spormerkezi/huseyin_aydin.jpg",
      bio: "Spor Merkezi destek elemanı olarak Özyeğin Üniversitesi bünyesinde hizmet vermektedir."
    }
  ],

  gallery: [
    "https://www.ozyegin.edu.tr/sites/default/files/futbol-1.jpg",
    "https://www.ozyegin.edu.tr/sites/default/files/1._sayfa_fitness_fotografi_0.jpg",
    "https://www.ozyegin.edu.tr/sites/default/files/havuz.jpg",
    "https://www.ozyegin.edu.tr/sites/default/files/_bom9910_final.jpg",
    "https://www.ozyegin.edu.tr/sites/default/files/spor_salonu_1.jpg",
    "https://www.ozyegin.edu.tr/sites/default/files/tenis_kordu-1.jpg",
    "https://www.ozyegin.edu.tr/sites/default/files/yuzme_havuzu.jpg",
    "https://www.ozyegin.edu.tr/sites/default/files/ozu_wings_dans_takimi-turkiye_2.jpg",
    "https://www.ozyegin.edu.tr/sites/default/files/erkek_basketbol.jpeg",
    "https://www.ozyegin.edu.tr/sites/default/files/basketbol_kadin.jpeg",
    "https://www.ozyegin.edu.tr/sites/default/files/erkek_voleybol.jpg",
    "https://www.ozyegin.edu.tr/sites/default/files/kadin_voleybol.jpg",
    "https://www.ozyegin.edu.tr/sites/default/files/hentbol_kadin.jpeg",
    "https://www.ozyegin.edu.tr/sites/default/files/eskrim.jpeg",
    "https://www.ozyegin.edu.tr/sites/default/files/masa_tenisi.jpeg"
  ]
};

