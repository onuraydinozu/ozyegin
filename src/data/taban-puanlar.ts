export interface ProgramData {
  name: string;
  puanTuru: string;
  burs: string;
  kont2025: string;
  kont2026: string;
  sehit: string;
  puanDusuk: string;
  puanYuksek: string;
  siraDusuk: string;
  sira80: string;
  siraYuksek: string;
}

export interface FacultyData {
  faculty: string;
  programs: ProgramData[];
}

export const tabanPuanlarData: FacultyData[] = [
  {
    faculty: "Havacılık ve Uzay Bilimleri Fakültesi",
    programs: [
      { name: "Havacılık Yönetimi (İngilizce)", puanTuru: "EA", burs: "Tam Burslu", kont2025: "6", kont2026: "8*", sehit: "1", puanDusuk: "460,67311", puanYuksek: "485,63224", siraDusuk: "2.336", sira80: "2.199", siraYuksek: "904" },
      { name: "Havacılık Yönetimi (İngilizce)", puanTuru: "EA", burs: "50% Burslu", kont2025: "29", kont2026: "35*", sehit: "0", puanDusuk: "291,80198", puanYuksek: "449,16603", siraDusuk: "405.458", sira80: "364.898", siraYuksek: "3.536" },
      { name: "Havacılık Yönetimi (İngilizce)", puanTuru: "EA", burs: "Ücretli", kont2025: "13", kont2026: "18*", sehit: "0", puanDusuk: "269,3908", puanYuksek: "289,8798", siraDusuk: "598.794", sira80: "552.041", siraYuksek: "419.843" },
      { name: "Pilotaj (İngilizce)", puanTuru: "SAY", burs: "Tam Burslu", kont2025: "7", kont2026: "7", sehit: "1", puanDusuk: "531,7610", puanYuksek: "540,2751", siraDusuk: "1.657", sira80: "1.283", siraYuksek: "553" },
      { name: "Pilotaj (İngilizce)", puanTuru: "SAY", burs: "Ücretli", kont2025: "48", kont2026: "48", sehit: "0", puanDusuk: "300,9520", puanYuksek: "463,5778", siraDusuk: "305.269", sira80: "263.449", siraYuksek: "34.440" },
    ]
  },
  {
    faculty: "Hukuk Fakültesi",
    programs: [
      { name: "Hukuk (Türkçe)", puanTuru: "EA", burs: "Tam Burslu", kont2025: "13", kont2026: "10", sehit: "1", puanDusuk: "478,6566", puanYuksek: "500,8379", siraDusuk: "1.181", sira80: "1.103", siraYuksek: "455" },
      { name: "Hukuk (Türkçe)", puanTuru: "EA", burs: "50% Burslu", kont2025: "83", kont2026: "63", sehit: "0", puanDusuk: "370,6090", puanYuksek: "458,6136", siraDusuk: "75.680", sira80: "57.858", siraYuksek: "2.509" },
    ]
  },
  {
    faculty: "İşletme Fakültesi",
    programs: [
      { name: "Ekonomi (İngilizce)", puanTuru: "EA", burs: "Tam Burslu", kont2025: "9", kont2026: "9", sehit: "1", puanDusuk: "484,3939", puanYuksek: "501,5867", siraDusuk: "964", sira80: "893", siraYuksek: "437" },
      { name: "Ekonomi (İngilizce)", puanTuru: "EA", burs: "50% Burslu", kont2025: "22", kont2026: "25*", sehit: "0", puanDusuk: "341,8899", puanYuksek: "478,5192", siraDusuk: "149.935", sira80: "142.814", siraYuksek: "1.185" },
      { name: "Ekonomi (İngilizce)", puanTuru: "EA", burs: "Ücretli", kont2025: "23", kont2026: "23", sehit: "0", puanDusuk: "279,9110", puanYuksek: "309,9124", siraDusuk: "501.651", sira80: "472.047", siraYuksek: "288.111" },
      { name: "İşletme (İngilizce)", puanTuru: "EA", burs: "Tam Burslu", kont2025: "11", kont2026: "12*", sehit: "2", puanDusuk: "480,0285", puanYuksek: "488,0588", siraDusuk: "1.115", sira80: "1.078", siraYuksek: "817" },
      { name: "İşletme (İngilizce)", puanTuru: "EA", burs: "50% Burslu", kont2025: "50", kont2026: "50", sehit: "0", puanDusuk: "347,8107", puanYuksek: "454,9568", siraDusuk: "131.665", sira80: "123.176", siraYuksek: "2.881" },
      { name: "İşletme (İngilizce)", puanTuru: "EA", burs: "Ücretli", kont2025: "24", kont2026: "29*", sehit: "0", puanDusuk: "289,9278", puanYuksek: "337,7154", siraDusuk: "419.499", sira80: "392.899", siraYuksek: "164.233" },
      { name: "Uluslararası Finans (İngilizce)", puanTuru: "EA", burs: "Tam Burslu", kont2025: "6", kont2026: "6", sehit: "1", puanDusuk: "469,5384", puanYuksek: "475,6081", siraDusuk: "1.655", sira80: "1.654", siraYuksek: "1.314" },
      { name: "Uluslararası Finans (İngilizce)", puanTuru: "EA", burs: "50% Burslu", kont2025: "23", kont2026: "29*", sehit: "0", puanDusuk: "312,5277", puanYuksek: "339,0720", siraDusuk: "273.741", sira80: "261.902", siraYuksek: "159.460" },
      { name: "Uluslararası Finans (İngilizce)", puanTuru: "EA", burs: "Ücretli", kont2025: "8", kont2026: "8", sehit: "0", puanDusuk: "271,2094", puanYuksek: "453,3282", siraDusuk: "581.118", sira80: "541.406", siraYuksek: "3.043" },
      { name: "Uluslararası Ticaret ve İşletmecilik (İngilizce)", puanTuru: "EA", burs: "Tam Burslu", kont2025: "14", kont2026: "13", sehit: "2", puanDusuk: "470,2178", puanYuksek: "478,9917", siraDusuk: "1.618", sira80: "1.577", siraYuksek: "1.167" },
      { name: "Uluslararası Ticaret ve İşletmecilik (İngilizce)", puanTuru: "EA", burs: "50% Burslu", kont2025: "61", kont2026: "68*", sehit: "0", puanDusuk: "322,5540", puanYuksek: "429,9027", siraDusuk: "224.465", sira80: "208.495", siraYuksek: "8.181" },
      { name: "Uluslararası Ticaret ve İşletmecilik (İngilizce)", puanTuru: "EA", burs: "Ücretli", kont2025: "23", kont2026: "20", sehit: "0", puanDusuk: "284,3046", puanYuksek: "318,2423", siraDusuk: "464.246", sira80: "407.668", siraYuksek: "244.576" },
      { name: "Yönetim Bilişim Sistemleri (İngilizce)", puanTuru: "EA", burs: "Tam Burslu", kont2025: "7", kont2026: "7", sehit: "1", puanDusuk: "485,7162", puanYuksek: "491,5400", siraDusuk: "898", sira80: "886", siraYuksek: "685" },
      { name: "Yönetim Bilişim Sistemleri (İngilizce)", puanTuru: "EA", burs: "50% Burslu", kont2025: "38", kont2026: "38", sehit: "0", puanDusuk: "336,7547", puanYuksek: "438,5896", siraDusuk: "167.538", sira80: "154.533", siraYuksek: "5.424" },
      { name: "Yönetim Bilişim Sistemleri (İngilizce)", puanTuru: "EA", burs: "Ücretli", kont2025: "3", kont2026: "10", sehit: "0", puanDusuk: "313,8507", puanYuksek: "331,4441", siraDusuk: "266.774", sira80: "266.774", siraYuksek: "187.191" },
    ]
  },
  {
    faculty: "Sosyal Bilimler Fakültesi",
    programs: [
      { name: "Psikoloji (İngilizce)", puanTuru: "EA", burs: "Tam Burslu", kont2025: "11", kont2026: "11", sehit: "1", puanDusuk: "460,7186", puanYuksek: "482,6084", siraDusuk: "2.329", sira80: "2.203", siraYuksek: "1.020" },
      { name: "Psikoloji (İngilizce)", puanTuru: "EA", burs: "50% Burslu", kont2025: "38", kont2026: "38", sehit: "0", puanDusuk: "337,8521", puanYuksek: "458,2657", siraDusuk: "163.752", sira80: "150.886", siraYuksek: "2.545" },
      { name: "Psikoloji (İngilizce)", puanTuru: "EA", burs: "Ücretli", kont2025: "21", kont2026: "14", sehit: "0", puanDusuk: "288,4165", puanYuksek: "330,4309", siraDusuk: "431.049", sira80: "368.383", siraYuksek: "191.210" },
      { name: "Uluslararası İlişkiler (İngilizce)", puanTuru: "EA", burs: "Tam Burslu", kont2025: "8", kont2026: "7", sehit: "1", puanDusuk: "463,9942", puanYuksek: "475,4459", siraDusuk: "2.069", sira80: "1.956", siraYuksek: "1.327" },
      { name: "Uluslararası İlişkiler (İngilizce)", puanTuru: "EA", burs: "50% Burslu", kont2025: "41", kont2026: "46*", sehit: "0", puanDusuk: "296,0851", puanYuksek: "356,3882", siraDusuk: "374.766", sira80: "342.617", siraYuksek: "108.112" },
      { name: "Uluslararası İlişkiler (İngilizce)", puanTuru: "EA", burs: "Ücretli", kont2025: "2", kont2026: "2", sehit: "0", puanDusuk: "286,8154", puanYuksek: "294,0884", siraDusuk: "443.806", sira80: "443.806", siraYuksek: "388.875" },
      { name: "Antropoloji (İngilizce)", puanTuru: "EA", burs: "Tam Burslu", kont2025: "10", kont2026: "10", sehit: "0", puanDusuk: "374,7534", puanYuksek: "419,0597", siraDusuk: "67.606", sira80: "53.020", siraYuksek: "13.806" },
      { name: "Antropoloji (İngilizce)", puanTuru: "EA", burs: "50% Burslu", kont2025: "7", kont2026: "5", sehit: "0", puanDusuk: "210,0563", puanYuksek: "282,2756", siraDusuk: "1.261.964", sira80: "1.211.666", siraYuksek: "481.274" },
    ]
  },
  {
    faculty: "Mimarlık ve Tasarım Fakültesi",
    programs: [
      { name: "Endüstriyel Tasarım (İngilizce)", puanTuru: "SAY", burs: "Tam Burslu", kont2025: "6", kont2026: "5", sehit: "1", puanDusuk: "448,1507", puanYuksek: "451,9328", siraDusuk: "47.828", sira80: "47.745", siraYuksek: "44.361" },
      { name: "Endüstriyel Tasarım (İngilizce)", puanTuru: "SAY", burs: "50% Burslu", kont2025: "26", kont2026: "25", sehit: "0", puanDusuk: "301,0737", puanYuksek: "435,9179", siraDusuk: "304.836", sira80: "268.793", siraYuksek: "59.445" },
      { name: "Endüstriyel Tasarım (İngilizce)", puanTuru: "SAY", burs: "Ücretli", kont2025: "16", kont2026: "12", sehit: "0", puanDusuk: "266,1087", puanYuksek: "300,2742", siraDusuk: "474.153", sira80: "430.387", siraYuksek: "307.704" },
      { name: "İç Mimarlık ve Çevre Tasarımı (İngilizce)", puanTuru: "EA", burs: "Tam Burslu", kont2025: "5", kont2026: "5", sehit: "1", puanDusuk: "421,7122", puanYuksek: "454,4382", siraDusuk: "12.206", sira80: "5.928", siraYuksek: "2.934" },
      { name: "İç Mimarlık ve Çevre Tasarımı (İngilizce)", puanTuru: "EA", burs: "50% Burslu", kont2025: "27", kont2026: "24", sehit: "0", puanDusuk: "308,0907", puanYuksek: "355,5702", siraDusuk: "298.292", sira80: "274.286", siraYuksek: "110.208" },
      { name: "İç Mimarlık ve Çevre Tasarımı (İngilizce)", puanTuru: "EA", burs: "Ücretli", kont2025: "7", kont2026: "6", sehit: "0", puanDusuk: "293,3177", puanYuksek: "312,1639", siraDusuk: "394.381", sira80: "390.643", siraYuksek: "275.749" },
      { name: "İletişim ve Tasarımı (İngilizce)", puanTuru: "SÖZ", burs: "Tam Burslu", kont2025: "6", kont2026: "5", sehit: "1", puanDusuk: "458,6956", puanYuksek: "476,6168", siraDusuk: "484", sira80: "456", siraYuksek: "180" },
      { name: "İletişim ve Tasarımı (İngilizce)", puanTuru: "SÖZ", burs: "50% Burslu", kont2025: "35", kont2026: "36*", sehit: "0", puanDusuk: "294,4460", puanYuksek: "454,1522", siraDusuk: "279.948", sira80: "220.514", siraYuksek: "604" },
      { name: "Mimarlık (İngilizce)", puanTuru: "SAY", burs: "Tam Burslu", kont2025: "11", kont2026: "10", sehit: "2", puanDusuk: "433,0256", puanYuksek: "452,7308", siraDusuk: "62.341", sira80: "59.344", siraYuksek: "43.659" },
      { name: "Mimarlık (İngilizce)", puanTuru: "SAY", burs: "50% Burslu", kont2025: "76", kont2026: "68*", sehit: "0", puanDusuk: "329,2562", puanYuksek: "413,7157", siraDusuk: "219.574", sira80: "206.248", siraYuksek: "83.050" },
    ]
  },
  {
    faculty: "Mühendislik Fakültesi",
    programs: [
      { name: "Bilgisayar Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "Tam Burslu", kont2025: "10", kont2026: "10", sehit: "1", puanDusuk: "526,4310", puanYuksek: "532,8623", siraDusuk: "2.615", sira80: "2.289", siraYuksek: "1.495" },
      { name: "Bilgisayar Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "50% Burslu", kont2025: "34", kont2026: "41*", sehit: "0", puanDusuk: "429,4239", puanYuksek: "531,8669", siraDusuk: "66.045", sira80: "59.588", siraYuksek: "1.638" },
      { name: "Bilgisayar Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "Ücretli", kont2025: "20", kont2026: "7", sehit: "0", puanDusuk: "305,9344", puanYuksek: "389,4689", siraDusuk: "287.727", sira80: "268.916", siraYuksek: "112.179" },
      { name: "Elektrik-Elektronik Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "Tam Burslu", kont2025: "11", kont2026: "11", sehit: "1", puanDusuk: "511,1215", puanYuksek: "531,9779", siraDusuk: "6.715", sira80: "6.267", siraYuksek: "1.614" },
      { name: "Elektrik-Elektronik Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "50% Burslu", kont2025: "50", kont2026: "53*", sehit: "0", puanDusuk: "400,4434", puanYuksek: "503,8838", siraDusuk: "98.448", sira80: "93.381", siraYuksek: "9.414" },
      { name: "Elektrik-Elektronik Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "Ücretli", kont2025: "9", kont2026: "6", sehit: "0", puanDusuk: "317,0482", puanYuksek: "399,5317", siraDusuk: "252.581", sira80: "241.157", siraYuksek: "99.561" },
      { name: "Endüstri Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "Tam Burslu", kont2025: "14", kont2026: "14", sehit: "2", puanDusuk: "506,2608", puanYuksek: "518,7630", siraDusuk: "8.463", sira80: "7.911", siraYuksek: "4.423" },
      { name: "Endüstri Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "50% Burslu", kont2025: "49", kont2026: "58*", sehit: "0", puanDusuk: "414,9631", puanYuksek: "507,3215", siraDusuk: "81.692", sira80: "77.454", siraYuksek: "8.055" },
      { name: "Endüstri Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "Ücretli", kont2025: "41", kont2026: "32", sehit: "0", puanDusuk: "324,0863", puanYuksek: "402,9875", siraDusuk: "233.036", sira80: "223.071", siraYuksek: "95.276" },
      { name: "İnşaat Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "Tam Burslu", kont2025: "6", kont2026: "6", sehit: "1", puanDusuk: "450,4888", puanYuksek: "465,8276", siraDusuk: "45.698", sira80: "43.764", siraYuksek: "32.649" },
      { name: "İnşaat Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "50% Burslu", kont2025: "42", kont2026: "42", sehit: "0", puanDusuk: "317,9402", puanYuksek: "443,1217", siraDusuk: "250.032", sira80: "211.244", siraYuksek: "52.532" },
      { name: "Makina Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "Tam Burslu", kont2025: "10", kont2026: "10", sehit: "1", puanDusuk: "501,8735", puanYuksek: "512,9554", siraDusuk: "10.287", sira80: "9.415", siraYuksek: "6.129" },
      { name: "Makina Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "50% Burslu", kont2025: "51", kont2026: "54*", sehit: "0", puanDusuk: "382,9378", puanYuksek: "465,4447", siraDusuk: "120.992", sira80: "114.697", siraYuksek: "32.961" },
      { name: "Makina Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "Ücretli", kont2025: "8", kont2026: "5", sehit: "0", puanDusuk: "333,3226", puanYuksek: "377,9416", siraDusuk: "209.878", sira80: "203.449", siraYuksek: "127.937" },
      { name: "Yapay Zeka ve Veri Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "Tam Burslu", kont2025: "6", kont2026: "6", sehit: "1", puanDusuk: "517,5897", puanYuksek: "530,1513", siraDusuk: "4.778", sira80: "4.654", siraYuksek: "1.902" },
      { name: "Yapay Zeka ve Veri Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "50% Burslu", kont2025: "34", kont2026: "36*", sehit: "0", puanDusuk: "395,9662", puanYuksek: "460,1958", siraDusuk: "103.821", sira80: "99.635", siraYuksek: "37.220" },
      { name: "Yapay Zeka ve Veri Mühendisliği (İngilizce)", puanTuru: "SAY", burs: "Ücretli", kont2025: "5", kont2026: "3", sehit: "0", puanDusuk: "313,6137", puanYuksek: "340,7883", siraDusuk: "262.928", sira80: "255.469", siraYuksek: "193.017" },
    ]
  },
  {
    faculty: "Uygulamalı Bilimler Fakültesi",
    programs: [
      { name: "Gastronomi ve Mutfak Sanatları (İngilizce)", puanTuru: "SÖZ", burs: "Tam Burslu", kont2025: "8", kont2026: "9*", sehit: "1", puanDusuk: "464,6334", puanYuksek: "479,8879", siraDusuk: "351", sira80: "344", siraYuksek: "148" },
      { name: "Gastronomi ve Mutfak Sanatları (İngilizce)", puanTuru: "SÖZ", burs: "50% Burslu", kont2025: "29", kont2026: "35*", sehit: "0", puanDusuk: "334,6149", puanYuksek: "421,6583", siraDusuk: "94.858", sira80: "88.641", siraYuksek: "2.827" },
      { name: "Gastronomi ve Mutfak Sanatları (İngilizce)", puanTuru: "SÖZ", burs: "Ücretli", kont2025: "25", kont2026: "24", sehit: "0", puanDusuk: "233,6740", puanYuksek: "328,2720", siraDusuk: "816.058", sira80: "577.623", siraYuksek: "114.667" },
      { name: "Otel Yöneticiliği (İngilizce)", puanTuru: "EA", burs: "Tam Burslu", kont2025: "4", kont2026: "6*", sehit: "1", puanDusuk: "443,9850", puanYuksek: "474,5835", siraDusuk: "4.292", sira80: "4.292", siraYuksek: "1.377" },
      { name: "Otel Yöneticiliği (İngilizce)", puanTuru: "EA", burs: "50% Burslu", kont2025: "31", kont2026: "42*", sehit: "0", puanDusuk: "249,3306", puanYuksek: "345,1768", siraDusuk: "814.461", sira80: "761.804", siraYuksek: "139.560" },
    ]
  }
];
