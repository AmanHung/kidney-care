// data_vn.js - Vietnamese Database (Fixed & Synced)

const medDB = {
    // === Xanh: An toàn / Khuyên dùng ===
    'ras': { level: 'g', title: '✅ Bảo vệ cơ bản (ACEi/ARB)', desc: 'Thuốc nền tảng bảo vệ thận & tim. eGFR giảm nhẹ lúc đầu là bình thường.' },
    'arni': { level: 'g', title: '🏆 Bảo vệ kép (ARNI)', desc: 'Lựa chọn hàng đầu cho Suy tim! Bảo vệ cả tim & thận, giảm nguy cơ nhập viện.' },
    'bb': { level: 'g', title: '❤️ Bảo vệ tim (Beta-blocker)', desc: 'Giảm gánh nặng cho tim, giúp nhịp tim ổn định hơn.' },
    'sglt2': { level: 'g', title: '✅ Cứu tinh (SGLT2i)', desc: 'Trụ cột chính cho Tim & Thận. Thải đường & muối, giảm áp lực cầu thận.' },
    'statins': { level: 'g', title: '✅ Statin (Mỡ máu)', desc: 'Ổn định mảng bám mạch máu, phòng ngừa đột quỵ.' },
    'glp1': { level: 'g', title: '✅ GLP-1 RA (Tiêm)', desc: 'Kiểm soát đường + Giảm cân + Bảo vệ tim/thận.' },
    'ns_mra': { level: 'g', title: '💍 ns-MRA (Finerenone)', desc: 'Đặc trị cho Bệnh thận đái tháo đường. Kháng viêm & chống xơ hóa.' },
    'panadol': { level: 'g', title: '✅ An toàn (Acetaminophen)', desc: 'An toàn cho thận ở liều chuẩn. Lựa chọn giảm đau ưu tiên.' },

    // === Vàng: Thận trọng ===
    'diuretic': { level: 'y', title: '🟡 Lợi tiểu (Diuretics)', desc: 'Cần thiết để giảm phù. Tạm ngưng nếu mất nước (Tiêu chảy/Nôn).' },
    'metformin': { level: 'y', title: '🟡 Metformin', desc: 'An toàn nếu eGFR > 30. Ngưng nếu eGFR < 30 (Nguy cơ nhiễm toan).' },
    'enema': { level: 'y', title: '🟡 Thận trọng (Thụt tháo)', desc: 'Thuốc thụt Phốt phát có thể gây suy thận cấp ở người già/CKD.' },

    // === Đỏ: Nguy hiểm / Tránh ===
    'nsaid': { level: 'r', title: '🛑 NGUY HIỂM (NSAIDs)', desc: 'Giảm đau mạnh (Voltaren, Ibuprofen). Hủy hoại thận & gây suy tim!' },
    'mycin': { level: 'r', title: '⚠️ Kháng sinh (Aminoglycosides)', desc: 'Độc cho thận. Phải báo bác sĩ nếu chức năng thận yếu.' },
    'contrast': { level: 'r', title: '⚠️ Thuốc cản quang', desc: 'Cản quang I-ốt có thể gây tổn thương thận cấp. Cần bù nước đủ.' },
    'herbal': { level: 'r', title: '🛑 Thảo dược / Thuốc bắc', desc: 'Nguồn gốc không rõ có thể chứa kim loại nặng hoặc axit aristolochic.' }
};

const foodDB = {
    // I. Tinh bột
    'rice': { n: 'Cơm trắng', c: 'staple', t: '🟢 Xanh', tags: ['low_p'], d: 'Ít Phốt pho/Kali.' },
    'winter_noodle': { n: 'Miến (Dong Fen)', c: 'staple', t: '🟢 Xanh', tags: ['low_n'], d: '【Tinh bột ít đạm】Năng lượng sạch, không sinh độc tố urê.' },
    'rice_noodle': { n: 'Bún / Phở', c: 'staple', t: '🟢 Xanh', tags: ['low_n'], d: 'Ít P/K hơn mì trứng/mì gói.' },
    'sago': { n: 'Bột sago / Trân châu', c: 'staple', t: '🟢 Xanh', tags: ['low_n'], d: 'Tốt cho món tráng miệng bổ sung năng lượng.' },
    'brown_rice': { n: 'Gạo lứt', c: 'staple', t: '🟡 Vàng', tags: ['high_p'], d: 'Tốt nhưng nhiều Phốt pho. Hạn chế nếu CKD giai đoạn cuối.' },
    'noodle_instant': { n: 'Mì gói', c: 'staple', t: '🔴 Đỏ', tags: ['high_na', 'high_p'], d: 'Nhiều Muối & Chất bảo quản. Nước súp là "thuốc độc" cho thận.' },

    // II. Đạm
    'egg_white': { n: 'Lòng trắng trứng', c: 'protein', t: '🟢 Xanh', tags: [], d: 'Đạm tốt nhất (Albumin). Không cholesterol & phốt pho.' },
    'fish_tilapia': { n: 'Cá (Rô phi/Lóc)', c: 'protein', t: '🟢 Xanh', tags: [], d: 'Đạm động vật tốt.' },
    'chicken': { n: 'Ức gà', c: 'protein', t: '🟢 Xanh', tags: [], d: 'Chọn thịt nạc bỏ da.' },
    'tofu_trad': { n: 'Đậu phụ', c: 'protein', t: '🟢 Xanh', tags: [], d: 'Đạm thực vật an toàn.' },
    'organs': { n: 'Nội tạng (Gan/Lòng)', c: 'protein', t: '🔴 Đỏ', tags: ['high_p', 'high_chol'], d: 'Rất nhiều Phốt pho & Axit Uric. TUYỆT ĐỐI TRÁNH.' },
    'processed_meat': { n: 'Xúc xích/Thịt nguội', c: 'protein', t: '🔴 Đỏ', tags: ['high_na', 'high_p'], d: 'Chứa Phốt pho vô cơ (hấp thu 100%). Rất hại.' },

    // III. Rau quả
    'cabbage': { n: 'Bắp cải', c: 'veg', t: '🟢 Xanh', tags: [], d: 'Ít Kali.' },
    'cucumber': { n: 'Dưa chuột', c: 'veg', t: '🟢 Xanh', tags: [], d: 'Ít Kali, thanh nhiệt.' },
    'apple': { n: 'Táo', c: 'fruit', t: '🟢 Xanh', tags: [], d: 'Ít Kali.' },
    'pineapple': { n: 'Dứa (Thơm)', c: 'fruit', t: '🟢 Xanh', tags: [], d: 'Ít Kali, kháng viêm.' },
    'banana': { n: 'Chuối', c: 'fruit', t: '🔴 Đỏ', tags: ['high_k'], d: 'Rất nhiều Kali. Tránh nếu Kali máu cao.' },
    'starfruit': { n: 'Khế', c: 'fruit', t: '🔴 Đỏ', tags: ['toxin'], d: 'ĐỘC TỐ thần kinh. Gây co giật/hôn mê cho người bệnh thận.' },
    'spinach': { n: 'Rau chân vịt/Muống', c: 'veg', t: '🟡 Vàng', tags: ['high_k'], d: 'Nhiều Kali. Phải luộc kỹ & bỏ nước.' },

    // IV. Khác
    'salt': { n: 'Muối ăn', c: 'snack', t: '🔴 Đỏ', tags: ['high_na'], d: 'Hạn chế 1 thìa cafe/ngày.' },
    'low_na_salt': { n: 'Muối giảm Natri', c: 'snack', t: '🔴 Đỏ', tags: ['high_k'], d: 'NGUY HIỂM! Chứa Kali Clorua. Gây ngưng tim.' }
};

const foodCategories = {
    'all': 'Tất cả', 'staple': '🍚 Tinh bột', 'protein': '🍖 Đạm', 
    'veg': '🥦 Rau', 'fruit': '🍎 Quả', 'snack': '🍦 Khác'
};
