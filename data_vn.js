// data_vn.js - Vietnamese Database (Complete & Synced)

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
    // ==========================================
    // 🍚 I. Tinh bột (Staples)
    // ==========================================
    // --- 🟢 Xanh ---
    'rice': { n: 'Cơm trắng', c: 'staple', t: '🟢 Xanh', tags: ['low_p'], d: 'Ít Phốt pho/Kali. Món ăn chính hàng ngày.' },
    'winter_noodle': { n: 'Miến (Dong Fen)', c: 'staple', t: '🟢 Xanh', tags: ['low_n'], d: '【Tinh bột ít đạm】Năng lượng sạch, không sinh độc tố urê.' },
    'rice_noodle': { n: 'Bún / Phở', c: 'staple', t: '🟢 Xanh', tags: ['low_n'], d: 'Ít P/K hơn mì trứng/mì gói.' },
    'sago': { n: 'Bột sago / Trân châu', c: 'staple', t: '🟢 Xanh', tags: ['low_n'], d: 'Tốt cho món tráng miệng bổ sung năng lượng.' },
    'lotus': { n: 'Bột củ sen', c: 'staple', t: '🟢 Xanh', tags: ['low_n'], d: 'Tinh bột ít đạm, tốt để bổ sung calo.' },
    'radish_cake': { n: 'Bánh củ cải', c: 'staple', t: '🟢 Xanh', tags: [], d: 'Điểm tâm ít P/K. Chú ý nước chấm mặn.' },

    // --- 🟡 Vàng ---
    'brown_rice': { n: 'Gạo lứt', c: 'staple', t: '🟡 Vàng', tags: ['high_p'], d: 'Tốt nhưng nhiều Phốt pho. Hạn chế nếu CKD giai đoạn cuối.' },
    'sweet_potato': { n: 'Khoai lang/Khoai môn', c: 'staple', t: '🟡 Vàng', tags: ['high_k'], d: 'Củ nhiều Kali. Cắt nhỏ và luộc kỹ để loại bỏ kali.' },
    'corn': { n: 'Ngô (Bắp)', c: 'staple', t: '🟡 Vàng', tags: [], d: 'Chứa lượng Phốt pho trung bình. Tính vào khẩu phần tinh bột.' },
    'toast': { n: 'Bánh mì sandwich', c: 'staple', t: '🟡 Vàng', tags: ['high_na', 'high_p'], d: 'Chứa muối và phốt phát.' },
    'noodle_white': { n: 'Mì sợi trắng', c: 'staple', t: '🟡 Vàng', tags: ['high_na'], d: 'Thường thêm muối khi làm mì.' },

    // --- 🔴 Đỏ ---
    'noodle_instant': { n: 'Mì gói (Mì tôm)', c: 'staple', t: '🔴 Đỏ', tags: ['high_na', 'high_p', 'high_oil'], d: 'Nhiều Muối & Chất bảo quản. Nước súp là "thuốc độc" cho thận.' },
    'oat_flake': { n: 'Yến mạch', c: 'staple', t: '🔴 Đỏ', tags: ['high_p'], d: 'Ngũ cốc nhiều Phốt pho. Dễ gây rối loạn Canxi-Phốt pho.' },
    'dumpling_meat': { n: 'Bánh bao/Sủi cảo', c: 'staple', t: '🔴 Đỏ', tags: ['high_na', 'high_p'], d: 'Nhân thịt chế biến nhiều muối và mỡ.' },
    'bread_process': { n: 'Bánh ngọt/Bánh kem', c: 'staple', t: '🔴 Đỏ', tags: ['high_p', 'high_oil'], d: 'Nhiều đường, bơ và bột nở chứa phốt pho.' },

    // ==========================================
    // 🍖 II. Đạm (Protein)
    // ==========================================
    // --- 🟢 Xanh ---
    'egg_white': { n: 'Lòng trắng trứng', c: 'protein', t: '🟢 Xanh', tags: [], d: 'Đạm tốt nhất (Albumin). Không cholesterol & phốt pho.' },
    'pork_lean': { n: 'Thịt heo nạc', c: 'protein', t: '🟢 Xanh', tags: [], d: 'Đạm chất lượng cao. Lọc bỏ mỡ.' },
    'chicken': { n: 'Ức gà', c: 'protein', t: '🟢 Xanh', tags: [], d: 'Chọn thịt nạc bỏ da.' },
    'fish_tilapia': { n: 'Cá (Rô phi/Lóc)', c: 'protein', t: '🟢 Xanh', tags: [], d: 'Đạm động vật tốt.' },
    'clam': { n: 'Nghêu/Sò', c: 'protein', t: '🟢 Xanh', tags: [], d: 'Giàu Kẽm. Không uống nước luộc (mặn).' },
    'tofu_trad': { n: 'Đậu phụ', c: 'protein', t: '🟢 Xanh', tags: [], d: 'Đạm thực vật an toàn.' },
    'soy_milk': { n: 'Sữa đậu nành', c: 'protein', t: '🟢 Xanh', tags: ['high_p'], d: 'Tốt nhưng chứa nước và phốt pho. Uống vừa phải.' },

    // --- 🟡 Vàng ---
    'beef': { n: 'Thịt bò', c: 'protein', t: '🟡 Vàng', tags: [], d: 'Giàu sắt nhưng P/K cao hơn thịt trắng.' },
    'duck': { n: 'Thịt vịt', c: 'protein', t: '🟡 Vàng', tags: [], d: 'Hàm lượng Kali cao hơn gà.' },
    'shrimp': { n: 'Tôm', c: 'protein', t: '🟡 Vàng', tags: ['high_chol'], d: 'Cholesterol và Purin khá cao.' },

    // --- 🔴 Đỏ ---
    'egg_yolk': { n: 'Lòng đỏ trứng', c: 'protein', t: '🔴 Đỏ', tags: ['high_p'], d: '❌ Rất nhiều Phốt pho! (515mg/100g). Nên bỏ lòng đỏ.' },
    'organs': { n: 'Nội tạng (Gan/Lòng)', c: 'protein', t: '🔴 Đỏ', tags: ['high_p', 'high_chol'], d: 'Rất nhiều Phốt pho & Axit Uric. TUYỆT ĐỐI TRÁNH.' },
    'sausage': { n: 'Xúc xích', c: 'protein', t: '🔴 Đỏ', tags: ['high_na', 'high_p'], d: 'Bom Natri/Phốt pho.' },
    'ham': { n: 'Thịt nguội/Jambon', c: 'protein', t: '🔴 Đỏ', tags: ['high_na'], d: 'Thịt chế biến mặn.' },
    'meat_floss': { n: 'Ruốc (Chà bông)', c: 'protein', t: '🔴 Đỏ', tags: ['high_na', 'high_sugar'], d: '❌ Bẫy muối ngầm! Rất mặn.' },
    'meatball': { n: 'Mọc/Chả viên', c: 'protein', t: '🔴 Đỏ', tags: ['high_na', 'high_p'], d: 'Chứa hàn the và phốt phát.' },
    'dairy': { n: 'Sữa bò/Sữa bột', c: 'protein', t: '🔴 Đỏ', tags: ['high_p'], d: '❌ Rất nhiều Phốt pho. Tránh nếu P máu cao.' },
    'processed_meat': { n: 'Thịt hộp', c: 'protein', t: '🔴 Đỏ', tags: ['high_na', 'high_p'], d: 'Chứa Phốt pho vô cơ (hấp thu 100%). Rất hại.' },

    // ==========================================
    // 🥦 III. Rau củ (Vegetables)
    // ==========================================
    // --- 🟢 Xanh ---
    'cabbage': { n: 'Bắp cải', c: 'veg', t: '🟢 Xanh', tags: [], d: 'Ít Kali.' },
    'onion': { n: 'Hành tây', c: 'veg', t: '🟢 Xanh', tags: [], d: 'Ít Kali, tăng hương vị.' },
    'loofah': { n: 'Mướp/Bí đao', c: 'veg', t: '🟢 Xanh', tags: [], d: 'Nhiều nước, ít Kali.' },
    'cucumber': { n: 'Dưa chuột', c: 'veg', t: '🟢 Xanh', tags: [], d: 'Ít Kali, thanh nhiệt.' },
    'fungus': { n: 'Mộc nhĩ', c: 'veg', t: '🟢 Xanh', tags: [], d: 'Nhiều chất xơ, Kali trung bình.' },

    // --- 🟡 Vàng ---
    'spinach': { n: 'Rau chân vịt', c: 'veg', t: '🟡 Vàng', tags: ['high_k'], d: 'Nhiều Kali. PHẢI cắt nhỏ, luộc kỹ & bỏ nước.' },
    'amaranth': { n: 'Rau dền', c: 'veg', t: '🟡 Vàng', tags: ['high_k'], d: 'Rau có hàm lượng Kali cao.' },
    'water_spinach': { n: 'Rau muống', c: 'veg', t: '🟡 Vàng', tags: ['high_k'], d: 'Rau có hàm lượng Kali cao.' },
    'broccoli': { n: 'Súp lơ xanh', c: 'veg', t: '🟡 Vàng', tags: ['high_k'], d: 'Kali trung bình-cao.' },
    'mushroom': { n: 'Nấm', c: 'veg', t: '🟡 Vàng', tags: ['high_k'], d: 'Nấm thường chứa nhiều Kali.' },
    'tomato_veg': { n: 'Cà chua', c: 'veg', t: '🟡 Vàng', tags: ['high_k'], d: 'Nhiều Kali. Hạn chế sốt cà chua.' },

    // --- 🔴 Đỏ ---
    'veg_pickled': { n: 'Dưa muối/Cà muối', c: 'veg', t: '🔴 Đỏ', tags: ['high_na'], d: '❌ Quá mặn! Tuyệt đối tránh.' },
    'veg_soup': { n: 'Nước canh/Nước lẩu', c: 'veg', t: '🔴 Đỏ', tags: ['high_k'], d: 'Kali tan trong nước. KHÔNG uống nước canh.' },
    'seaweed': { n: 'Rong biển', c: 'veg', t: '🔴 Đỏ', tags: ['high_p', 'high_k'], d: 'Rong biển khô cực nhiều Kali và Phốt pho.' },

    // ==========================================
    // 🍎 IV. Trái cây (Fruits)
    // ==========================================
    // --- 🟢 Xanh ---
    'apple': { n: 'Táo', c: 'fruit', t: '🟢 Xanh', tags: [], d: 'Ít Kali.' },
    'pineapple': { n: 'Dứa (Thơm)', c: 'fruit', t: '🟢 Xanh', tags: [], d: 'Ít Kali, kháng viêm.' },
    'grape': { n: 'Nho', c: 'fruit', t: '🟢 Xanh', tags: [], d: 'Kali trung bình.' },
    'pear': { n: 'Lê', c: 'fruit', t: '🟢 Xanh', tags: [], d: 'Ít Kali.' },
    'watermelon': { n: 'Dưa hấu', c: 'fruit', t: '🟢 Xanh', tags: [], d: 'Ít Kali nhưng nhiều nước. Chú ý lượng nước.' },

    // --- 🔴 Đỏ ---
    'starfruit': { n: 'Khế', c: 'fruit', t: '🔴 Đỏ', tags: ['toxin'], d: 'ĐỘC TỐ thần kinh. Gây co giật/hôn mê cho người bệnh thận.' },
    'banana': { n: 'Chuối', c: 'fruit', t: '🔴 Đỏ', tags: ['high_k'], d: 'Rất nhiều Kali. Tránh nếu Kali máu cao.' },
    'kiwi': { n: 'Kiwi', c: 'fruit', t: '🔴 Đỏ', tags: ['high_k'], d: 'Nhiều Kali.' },
    'durian': { n: 'Sầu riêng', c: 'fruit', t: '🔴 Đỏ', tags: ['high_k'], d: 'Rất nhiều Kali.' },
    'dried_fruit': { n: 'Trái cây sấy', c: 'fruit', t: '🔴 Đỏ', tags: ['high_k'], d: 'Kali cô đặc. Tránh ăn.' },
    'fruit_juice': { n: 'Nước ép quả', c: 'fruit', t: '🔴 Đỏ', tags: ['high_k'], d: 'Đường và Kali hấp thu quá nhanh.' },

    // ==========================================
    // 🍦 V. Ăn vặt / Gia vị
    // ==========================================
    // --- 🟢 Xanh ---
    'oil_plant': { n: 'Dầu thực vật', c: 'snack', t: '🟢 Xanh', tags: [], d: '【Năng lượng】Calo sạch không P/K (Dầu Oliu, Hạt cải).' },
    'sugar_candy': { n: 'Kẹo cứng/Mật ong', c: 'snack', t: '🟢 Xanh', tags: [], d: '【Năng lượng】Calo không đạm. Tiểu đường cần hạn chế.' },
    'spice_nat': { n: 'Gừng/Tỏi/Ớt', c: 'snack', t: '🟢 Xanh', tags: [], d: 'Gia vị tự nhiên, ít muối, thay thế muối rất tốt.' },

    // --- 🔴 Đỏ ---
    'low_na_salt': { n: 'Muối giảm Natri', c: 'snack', t: '🔴 Đỏ', tags: ['high_k'], d: 'NGUY HIỂM! Chứa Kali Clorua. Gây ngưng tim.' },
    'salt': { n: 'Muối ăn', c: 'snack', t: '🔴 Đỏ', tags: ['high_na'], d: 'Nhiều Natri. Hạn chế 1 thìa cafe/ngày.' },
    'soy_sauce': { n: 'Nước tương/Xì dầu', c: 'snack', t: '🔴 Đỏ', tags: ['high_na'], d: 'Rất mặn.' },
    'chicken_essence': { n: 'Nước cốt gà', c: 'snack', t: '🔴 Đỏ', tags: ['high_na', 'high_k', 'high_p'], d: 'Cô đặc Natri/Kali/Phốt pho và Purin.' },
    'nuts': { n: 'Các loại hạt', c: 'snack', t: '🔴 Đỏ', tags: ['high_p'], d: 'Nhiều Phốt pho.' },
    'chocolate': { n: 'Sô-cô-la', c: 'snack', t: '🔴 Đỏ', tags: ['high_p', 'high_k'], d: 'Nhiều Phốt pho và Kali.' },
    'coke': { n: 'Nước ngọt có gas', c: 'snack', t: '🔴 Đỏ', tags: ['high_p'], d: 'Chứa Phốt pho vô cơ (Hấp thu 100%). Rất hại xương.' }
};

const foodCategories = {
    'all': 'Tất cả', 'staple': '🍚 Tinh bột', 'protein': '🍖 Đạm', 
    'veg': '🥦 Rau', 'fruit': '🍎 Quả', 'snack': '🍦 Khác'
};
