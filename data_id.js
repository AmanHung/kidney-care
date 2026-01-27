// data_id.js - Indonesian Database (Fixed & Synced)

const medDB = {
    // === Hijau: Aman / Disarankan ===
    'ras': { level: 'g', title: '✅ Perlindungan Dasar (ACEi/ARB)', desc: 'Obat dasar pelindung ginjal & jantung. Sedikit penurunan eGFR di awal adalah normal.' },
    'arni': { level: 'g', title: '🏆 Perlindungan Ganda (ARNI)', desc: 'Pilihan utama Gagal Jantung! Melindungi jantung & ginjal, mengurangi risiko rawat inap.' },
    'bb': { level: 'g', title: '❤️ Pelindung Jantung (Beta-blocker)', desc: 'Mengurangi beban kerja jantung, membuat detak lebih stabil.' },
    'sglt2': { level: 'g', title: '✅ Penyelamat Utama (SGLT2i)', desc: 'Pilar utama Jantung & Ginjal. Membuang gula & garam, menurunkan tekanan glomerulus.' },
    'statins': { level: 'g', title: '✅ Statin (Penurun Lemak)', desc: 'Menstabilkan plak pembuluh darah, mencegah stroke.' },
    'glp1': { level: 'g', title: '✅ GLP-1 RA (Suntik Gula)', desc: 'Kontrol gula + Turun berat badan + Lindungi jantung/ginjal.' },
    'ns_mra': { level: 'g', title: '💍 ns-MRA (Finerenone)', desc: 'Spesifik untuk Ginjal Diabetik. Anti-radang & anti-fibrosis.' },
    'panadol': { level: 'g', title: '✅ Aman (Acetaminophen)', desc: 'Aman untuk ginjal pada dosis standar. Pilihan utama pereda nyeri.' },

    // === Kuning: Hati-hati ===
    'diuretic': { level: 'y', title: '🟡 Diuretik (Peluruh Air)', desc: 'Wajib untuk gejala bengkak/sesak. Tunda jika dehidrasi (Diare/Muntah).' },
    'metformin': { level: 'y', title: '🟡 Metformin', desc: 'Aman jika eGFR > 30. Hentikan jika eGFR < 30 (Risiko Asidosis).' },
    'enema': { level: 'y', title: '🟡 Hati-hati (Enema)', desc: 'Enema fosfat bisa memicu gagal ginjal akut pada lansia/CKD.' },

    // === Merah: Bahaya / Hindari ===
    'nsaid': { level: 'r', title: '🛑 BAHAYA (NSAID)', desc: 'Anti-nyeri kuat (Ponstan, Voltaren, Ibuprofen). Merusak ginjal & memicu gagal jantung!' },
    'mycin': { level: 'r', title: '⚠️ Antibiotik (Aminoglikosida)', desc: 'Berisiko nefrotoksik. Wajib info dokter jika fungsi ginjal menurun.' },
    'contrast': { level: 'r', title: '⚠️ Zat Kontras', desc: 'Kontras Iodium bisa memicu cedera ginjal akut. Perlu hidrasi cukup.' },
    'herbal': { level: 'r', title: '🛑 Jamu / Herbal', desc: 'Bahan tidak jelas bisa mengandung logam berat atau asam aristolochic.' }
};

const foodDB = {
    // I. Pokok
    'rice': { n: 'Nasi Putih', c: 'staple', t: '🟢 Hijau', tags: ['low_p'], d: 'Rendah Fosfor/Kalium.' },
    'winter_noodle': { n: 'Sohun (Dong Fen)', c: 'staple', t: '🟢 Hijau', tags: ['low_n'], d: '【Pati Rendah Nitrogen】Bebas limbah protein, sumber energi bersih.' },
    'rice_noodle': { n: 'Bihun / Kwetiau', c: 'staple', t: '🟢 Hijau', tags: ['low_n'], d: 'Lebih rendah P/K daripada mie kuning.' },
    'sago': { n: 'Sagu / Mutiara', c: 'staple', t: '🟢 Hijau', tags: ['low_n'], d: 'Bagus untuk selingan penambah energi.' },
    'brown_rice': { n: 'Nasi Merah/Coklat', c: 'staple', t: '🟡 Kuning', tags: ['high_p'], d: 'Sehat tapi tinggi Fosfor. Batasi jika CKD tahap lanjut.' },
    'noodle_instant': { n: 'Mie Instan', c: 'staple', t: '🔴 Merah', tags: ['high_na', 'high_p'], d: 'Tinggi Garam & Pengawet. Kuahnya racun bagi ginjal.' },

    // II. Protein
    'egg_white': { n: 'Putih Telur', c: 'protein', t: '🟢 Hijau', tags: [], d: 'Protein terbaik (Albumin). Bebas kolesterol & fosfor.' },
    'fish_tilapia': { n: 'Ikan', c: 'protein', t: '🟢 Hijau', tags: [], d: 'Protein hewani yang baik.' },
    'chicken': { n: 'Dada Ayam', c: 'protein', t: '🟢 Hijau', tags: [], d: 'Pilih daging tanpa kulit.' },
    'tofu_trad': { n: 'Tahu', c: 'protein', t: '🟢 Hijau', tags: [], d: 'Protein nabati yang aman.' },
    'organs': { n: 'Jeroan (Hati/Usus)', c: 'protein', t: '🔴 Merah', tags: ['high_p', 'high_chol'], d: 'Sangat tinggi Fosfor & Asam Urat. HINDARI.' },
    'processed_meat': { n: 'Sosis/Kornet', c: 'protein', t: '🔴 Merah', tags: ['high_na', 'high_p'], d: 'Mengandung Fosfor anorganik (diserap 100%). Sangat buruk.' },

    // III. Sayur & Buah
    'cabbage': { n: 'Kol / Kubis', c: 'veg', t: '🟢 Hijau', tags: [], d: 'Rendah Kalium.' },
    'cucumber': { n: 'Timun', c: 'veg', t: '🟢 Hijau', tags: [], d: 'Rendah Kalium.' },
    'apple': { n: 'Apel', c: 'fruit', t: '🟢 Hijau', tags: [], d: 'Rendah Kalium.' },
    'pineapple': { n: 'Nanas', c: 'fruit', t: '🟢 Hijau', tags: [], d: 'Rendah Kalium, anti-radang.' },
    'banana': { n: 'Pisang', c: 'fruit', t: '🔴 Merah', tags: ['high_k'], d: 'Sangat tinggi Kalium. Hindari jika K+ tinggi.' },
    'starfruit': { n: 'Belimbing', c: 'fruit', t: '🔴 Merah', tags: ['toxin'], d: 'RACUN untuk ginjal (Neurotoksin). Bisa kejang/koma.' },
    'spinach': { n: 'Bayam', c: 'veg', t: '🟡 Kuning', tags: ['high_k'], d: 'Tinggi Kalium. Wajib rebus & buang airnya.' },

    // IV. Lainnya
    'salt': { n: 'Garam Dapur', c: 'snack', t: '🔴 Merah', tags: ['high_na'], d: 'Batasi 1 sdt/hari.' },
    'low_na_salt': { n: 'Garam Rendah Natrium', c: 'snack', t: '🔴 Merah', tags: ['high_k'], d: 'BAHAYA! Isinya Kalium Klorida. Bisa memicu henti jantung.' }
};

const foodCategories = {
    'all': 'Semua', 'staple': '🍚 Pokok', 'protein': '🍖 Protein', 
    'veg': '🥦 Sayur', 'fruit': '🍎 Buah', 'snack': '🍦 Lainnya'
};
