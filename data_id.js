// data_id.js - Indonesian Database (Fixed)

const medDB = {
    'ras': { level: 'g', title: '✅ Perlindungan Dasar (ACEi/ARB)', desc: 'Obat dasar untuk perlindungan ginjal dan jantung. Sedikit penurunan eGFR di awal adalah normal.' },
    'arni': { level: 'g', title: '🏆 Perlindungan Ganda (ARNI)', desc: 'Pilihan utama untuk Gagal Jantung! Melindungi jantung dan ginjal, mengurangi risiko rawat inap.' },
    'bb': { level: 'g', title: '❤️ Pelindung Jantung (Beta-blocker)', desc: 'Mengurangi beban kerja jantung, membuat detak jantung lebih lambat dan kuat.' },
    'panadol': { level: 'g', title: '✅ Relatif Aman (Acetaminophen)', desc: 'Kandungan Panadol. Aman untuk ginjal pada dosis yang dianjurkan.' },
    'mycin': { level: 'r', title: '⚠️ Risiko Tinggi (Aminoglikosida)', desc: 'Beberapa antibiotik bersifat nefrotoksik. Selalu informasikan kondisi ginjal Anda kepada dokter.' },
    'diuretic': { level: 'y', title: '🟡 Perhatian (Diuretik)', desc: 'Membantu mengatasi edema, tetapi harus dihentikan saat dehidrasi (Aturan Saat Sakit).' },
    'glp1': { level: 'g', title: '✅ Gula & Jantung (GLP-1 RA)', desc: 'Manfaat rangkap tiga: Kontrol gula darah, penurunan berat badan, dan perlindungan jantung/ginjal.' },
    'metformin': { level: 'y', title: '🟡 Penyesuaian Dosis (Metformin)', desc: 'Hentikan jika eGFR < 30; Kurangi dosis jika eGFR 30-45.' },
    'nsaid': { level: 'r', title: '🛑 HINDARI (NSAID)', desc: 'Obat pereda nyeri kuat. Pembunuh ginjal utama! Dapat menyebabkan cedera ginjal akut.' },
    'mra_old': { level: 'g', title: '🧤 MRA Klasik (Spironolactone)', desc: 'Terapi standar Gagal Jantung. Perhatikan kadar kalium.' },
    'ns_mra': { level: 'g', title: '💍 ns-MRA Baru (Finerenone)', desc: 'Dirancang untuk Penyakit Ginjal Diabetik. Risiko hiperkalemia lebih rendah, anti-inflamasi.' },
    'sglt2': { level: 'g', title: '✅ Penyelamat Utama (SGLT2i)', desc: 'Pilar utama untuk Gagal Jantung & CKD. Sangat direkomendasikan oleh pedoman internasional.' },
    'statins': { level: 'g', title: '✅ Disarankan (Statin)', desc: 'Penurun lemak darah. Mencegah stroke dan kejadian kardiovaskular.' },
    'contrast': { level: 'r', title: '⚠️ Risiko Tinggi (Media Kontras)', desc: 'Media kontras berbasis yodium dapat menyebabkan cedera ginjal akut.' },
    'enema': { level: 'y', title: '🟡 Beritahu Dokter (Enema)', desc: 'Enema natrium fosfat dapat merusak ginjal.' },
    'herbal': { level: 'r', title: '🛑 HINDARI (Obat Herbal)', desc: 'Sumber yang tidak diketahui mungkin mengandung logam berat atau asam aristolochic.' }
};

const foodDB = {
    // I. Makanan Pokok
    'rice': { n: 'Nasi Putih', c: 'staple', t: '🟢 Hijau', tags: ['low_p'], d: 'Rendah Fosfor/Kalium.' },
    'winter_noodle': { n: 'Sohun (Dong Fen)', c: 'staple', t: '🟢 Hijau', tags: ['low_n'], d: 'Pati Rendah Nitrogen. Sangat rendah protein, bagus untuk energi.' },
    'rice_noodle': { n: 'Bihun', c: 'staple', t: '🟢 Hijau', tags: ['low_n'], d: 'Rendah P/K dibanding mie gandum.' },
    'sago': { n: 'Sagu / Mutiara', c: 'staple', t: '🟢 Hijau', tags: ['low_n'], d: 'Bagus untuk makanan penutup guna menambah kalori.' },
    
    // Kuning
    'brown_rice': { n: 'Nasi Merah/Coklat', c: 'staple', t: '🟡 Kuning', tags: ['high_p'], d: 'Sehat tapi tinggi Fosfor. Batasi untuk CKD tahap lanjut.' },
    'sweet_potato': { n: 'Ubi/Talas/Kentang', c: 'staple', t: '🟡 Kuning', tags: ['high_k'], d: 'Umbi tinggi Kalium. Potong dadu dan rebus untuk membuang kalium.' },
    'toast': { n: 'Roti Tawar', c: 'staple', t: '🟡 Kuning', tags: ['high_na', 'high_p'], d: 'Mengandung garam dan fosfat.' },
    'noodle_instant': { n: 'Mie Instan', c: 'staple', t: '🔴 Merah', tags: ['high_na', 'high_p', 'high_oil'], d: 'Tinggi Minyak, Natrium, Fosfor. Kuahnya sangat berbahaya.' },

    // II. Protein
    'egg_white': { n: 'Putih Telur', c: 'protein', t: '🟢 Hijau', tags: [], d: 'Sumber protein terbaik. Sangat rendah Fosfor.' },
    'chicken': { n: 'Ayam', c: 'protein', t: '🟢 Hijau', tags: [], d: 'Protein berkualitas tinggi.' },
    'fish_tilapia': { n: 'Ikan', c: 'protein', t: '🟢 Hijau', tags: [], d: 'Protein berkualitas tinggi.' },
    'tofu_trad': { n: 'Tahu', c: 'protein', t: '🟢 Hijau', tags: [], d: 'Protein nabati berkualitas.' },
    'organs': { n: 'Jeroan (Hati/Ginjal)', c: 'protein', t: '🔴 Merah', tags: ['high_p', 'high_chol'], d: 'Tinggi Fosfor & Kolesterol. HINDARI mutlak.' },
    'sausage': { n: 'Sosis', c: 'protein', t: '🔴 Merah', tags: ['high_na', 'high_p'], d: 'Bom Natrium/Fosfor.' },

    // III. Sayuran
    'cabbage': { n: 'Kubis/Kol', c: 'veg', t: '🟢 Hijau', tags: [], d: 'Rendah Kalium. Aman dimakan.' },
    'cucumber': { n: 'Timun', c: 'veg', t: '🟢 Hijau', tags: [], d: 'Rendah Kalium dan menyegarkan.' },
    'spinach': { n: 'Bayam', c: 'veg', t: '🟡 Kuning', tags: ['high_k'], d: 'Tinggi Kalium. HARUS dipotong dan direbus buang airnya.' },
    'banana': { n: 'Pisang', c: 'fruit', t: '🔴 Merah', tags: ['high_k'], d: 'Perwakilan Tinggi Kalium.' },
    'starfruit': { n: 'Belimbing', c: 'fruit', t: '🔴 Merah', tags: ['toxin'], d: 'HINDARI! Mengandung neurotoksin.' },
    
    // IV. Lainnya
    'salt': { n: 'Garam Meja', c: 'snack', t: '🔴 Merah', tags: ['high_na'], d: 'Tinggi Natrium. Batasi dengan ketat.' },
    'low_na_salt': { n: 'Garam Rendah Natrium', c: 'snack', t: '🔴 Merah', tags: ['high_k'], d: 'BAHAYA! Mengganti Natrium dengan Kalium.' }
};

const foodCategories = {
    'all': 'Semua', 'staple': '🍚 Pokok', 'protein': '🍖 Protein', 
    'veg': '🥦 Sayur', 'fruit': '🍎 Buah', 'snack': '🍦 Camilan'
};
