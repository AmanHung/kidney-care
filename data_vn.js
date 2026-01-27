// data_vn.js - Vietnamese Database (Fixed)

const medDB = {
    'ras': { level: 'g', title: '✅ Bảo vệ cơ bản (ACEi/ARB)', desc: 'Thuốc cơ bản bảo vệ thận và tim. eGFR giảm nhẹ lúc đầu là bình thường.' },
    'arni': { level: 'g', title: '🏆 Bảo vệ kép (ARNI)', desc: 'Lựa chọn hàng đầu cho Suy tim! Bảo vệ cả tim và thận, giảm đáng kể nguy cơ nhập viện.' },
    'bb': { level: 'g', title: '❤️ Bảo vệ tim (Beta-blocker)', desc: 'Giảm gánh nặng cho tim, giúp tim đập chậm hơn và khỏe hơn.' },
    'panadol': { level: 'g', title: '✅ Tương đối an toàn (Acetaminophen)', desc: 'Thành phần Panadol. An toàn cho thận ở liều khuyến cáo.' },
    'mycin': { level: 'r', title: '⚠️ Nguy cơ cao (Aminoglycosides)', desc: 'Một số thuốc kháng sinh gây độc cho thận. Luôn thông báo tình trạng thận cho bác sĩ.' },
    'diuretic': { level: 'y', title: '🟡 Chú ý (Thuốc lợi tiểu)', desc: 'Giúp giảm phù nề, nhưng phải tạm dừng khi mất nước (Quy tắc ngày ốm).' },
    'glp1': { level: 'g', title: '✅ Đường & Tim (GLP-1 RA)', desc: 'Lợi ích gấp ba: Kiểm soát đường huyết, giảm cân và bảo vệ tim/thận.' },
    'metformin': { level: 'y', title: '🟡 Điều chỉnh liều (Metformin)', desc: 'Ngưng nếu eGFR < 30; Giảm liều nếu eGFR 30-45.' },
    'nsaid': { level: 'r', title: '🛑 TRÁNH (NSAIDs)', desc: 'Thuốc giảm đau mạnh. Kẻ giết thận! Có thể gây tổn thương thận cấp tính.' },
    'mra_old': { level: 'g', title: '🧤 MRA cổ điển (Spironolactone)', desc: 'Điều trị suy tim chuẩn. Theo dõi nồng độ kali.' },
    'ns_mra': { level: 'g', title: '💍 ns-MRA mới (Finerenone)', desc: 'Dành cho Bệnh thận đái tháo đường. Nguy cơ tăng kali thấp hơn, kháng viêm.' },
    'sglt2': { level: 'g', title: '✅ Cứu tinh (SGLT2i)', desc: 'Trụ cột chính cho Suy tim & CKD. Được khuyến nghị mạnh mẽ bởi các hướng dẫn quốc tế.' },
    'statins': { level: 'g', title: '✅ Khuyến nghị (Statins)', desc: 'Hạ mỡ máu. Ngăn ngừa đột quỵ và biến cố tim mạch.' },
    'contrast': { level: 'r', title: '⚠️ Nguy cơ cao (Thuốc cản quang)', desc: 'Thuốc cản quang chứa i-ốt có thể gây tổn thương thận cấp tính.' },
    'enema': { level: 'y', title: '🟡 Thông báo Bác sĩ (Thụt tháo)', desc: 'Thuốc thụt natri photphat có thể gây hại cho thận.' },
    'herbal': { level: 'r', title: '🛑 TRÁNH (Thuốc thảo dược)', desc: 'Nguồn gốc không rõ ràng có thể chứa kim loại nặng hoặc axit aristolochic.' }
};

const foodDB = {
    // I. Tinh bột
    'rice': { n: 'Cơm trắng', c: 'staple', t: '🟢 Xanh', tags: ['low_p'], d: 'Ít Phốt pho/Kali.' },
    'winter_noodle': { n: 'Miến (Dong Fen)', c: 'staple', t: '🟢 Xanh', tags: ['low_n'], d: 'Tinh bột ít đạm. Rất tốt để bổ sung năng lượng.' },
    'rice_noodle': { n: 'Bún / Phở', c: 'staple', t: '🟢 Xanh', tags: ['low_n'], d: 'Ít P/K hơn mì lúa mì.' },
    'sago': { n: 'Bột sago / Trân châu', c: 'staple', t: '🟢 Xanh', tags: ['low_n'], d: 'Tốt cho món tráng miệng để tăng calo.' },
    
    // Vàng
    'brown_rice': { n: 'Gạo lứt', c: 'staple', t: '🟡 Vàng', tags: ['high_p'], d: 'Tốt nhưng nhiều Phốt pho. Hạn chế ở giai đoạn cuối CKD.' },
    'sweet_potato': { n: 'Khoai lang/Khoai môn', c: 'staple', t: '🟡 Vàng', tags: ['high_k'], d: 'Củ nhiều Kali. Cắt nhỏ và luộc kỹ để loại bỏ kali.' },
    'toast': { n: 'Bánh mì sandwich', c: 'staple', t: '🟡 Vàng', tags: ['high_na', 'high_p'], d: 'Chứa muối và phốt phát.' },
    'noodle_instant': { n: 'Mì ăn liền', c: 'staple', t: '🔴 Đỏ', tags: ['high_na', 'high_p', 'high_oil'], d: 'Nhiều Dầu, Natri, Phốt pho. Nước súp rất nguy hiểm.' },

    // II. Đạm
    'egg_white': { n: 'Lòng trắng trứng', c: 'protein', t: '🟢 Xanh', tags: [], d: 'Nguồn đạm tốt nhất. Rất ít Phốt pho.' },
    'chicken': { n: 'Thịt gà', c: 'protein', t: '🟢 Xanh', tags: [], d: 'Đạm chất lượng cao.' },
    'fish_tilapia': { n: 'Cá', c: 'protein', t: '🟢 Xanh', tags: [], d: 'Đạm chất lượng cao.' },
    'tofu_trad': { n: 'Đậu phụ', c: 'protein', t: '🟢 Xanh', tags: [], d: 'Đạm thực vật chất lượng.' },
    'organs': { n: 'Nội tạng (Gan/Thận)', c: 'protein', t: '🔴 Đỏ', tags: ['high_p', 'high_chol'], d: 'Nhiều Phốt pho & Cholesterol. TUYỆT ĐỐI TRÁNH.' },
    'sausage': { n: 'Xúc xích', c: 'protein', t: '🔴 Đỏ', tags: ['high_na', 'high_p'], d: 'Bom Natri/Phốt pho.' },

    // III. Rau quả
    'cabbage': { n: 'Bắp cải', c: 'veg', t: '🟢 Xanh', tags: [], d: 'Ít Kali. An toàn.' },
    'cucumber': { n: 'Dưa chuột', c: 'veg', t: '🟢 Xanh', tags: [], d: 'Ít Kali và thanh mát.' },
    'spinach': { n: 'Rau chân vịt', c: 'veg', t: '🟡 Vàng', tags: ['high_k'], d: 'Nhiều Kali. PHẢI cắt nhỏ và luộc bỏ nước.' },
    'banana': { n: 'Chuối', c: 'fruit', t: '🔴 Đỏ', tags: ['high_k'], d: 'Đại diện tiêu biểu nhiều Kali.' },
    'starfruit': { n: 'Khế', c: 'fruit', t: '🔴 Đỏ', tags: ['toxin'], d: 'TRÁNH! Chứa độc tố thần kinh.' },
    
    // IV. Khác
    'salt': { n: 'Muối tinh', c: 'snack', t: '🔴 Đỏ', tags: ['high_na'], d: 'Nhiều Natri. Hạn chế nghiêm ngặt.' },
    'low_na_salt': { n: 'Muối giảm Natri', c: 'snack', t: '🔴 Đỏ', tags: ['high_k'], d: 'NGUY HIỂM! Thay thế Natri bằng Kali.' }
};

const foodCategories = {
    'all': 'Tất cả', 'staple': '🍚 Tinh bột', 'protein': '🍖 Đạm', 
    'veg': '🥦 Rau', 'fruit': '🍎 Quả', 'snack': '🍦 Ăn vặt'
};
