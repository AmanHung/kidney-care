<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Trợ lý Chăm sóc Thận</title>
    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
    <style>
        :root { --primary: #009045; --primary-dark: #007035; --accent: #F58220; --heart: #e91e63; --heart-light: #fce4ec; --bg: #fdfdfd; --white: #ffffff; --text: #222; --risk-g: #6bbd45; --risk-y: #ffd700; --risk-o: #f58220; --risk-r: #e03e2e; --nav-height: 85px; }
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; background: var(--bg); margin: 0; padding: 0; padding-bottom: calc(var(--nav-height) + 20px); color: var(--text); font-size: 19px; line-height: 1.5; user-select: none; }
        
        /* Header */
        header { background: var(--white); padding: 12px 15px; border-radius: 0 0 25px 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); position: sticky; top: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; }
        header::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 6px; background: linear-gradient(90deg, var(--primary) 30%, var(--heart) 70%); }
        .header-logo { height: 50px; width: auto; object-fit: contain; }
        .header-title-box { text-align: center; flex: 1; padding: 0 5px; }
        .header-title-box h1 { margin: 0; font-size: 1.6rem; color: #333; font-weight: 900; line-height: 1.1; }
        .header-title-box p { margin: 3px 0 0 0; color: #666; font-size: 0.8rem; font-weight: bold; }
        
        /* Layout */
        .container { padding: 15px; max-width: 600px; margin: 0 auto; }
        .section { display: none; animation: fadeIn 0.3s ease; }
        .section.active { display: block; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        .card { background: var(--white); border-radius: 20px; padding: 25px 20px; margin-bottom: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); text-align: center; border: 1px solid #eee; }
        .card h2 { margin-top: 0; color: var(--primary); font-size: 1.5rem; font-weight: 900; border-bottom: 3px solid #f0f4f8; padding-bottom: 15px; margin-bottom: 20px; }
        
        /* Input */
        .input-group { margin-bottom: 25px; text-align: left; }
        .input-group label { display: block; font-size: 1.1rem; color: #444; margin-bottom: 8px; font-weight: 900; }
        .select-wrapper { position: relative; width: 100%; }
        select { width: 100%; padding: 18px; border: 2px solid #ccc; border-radius: 15px; font-size: 1.2rem; background: #fff; outline: none; font-weight: bold; color: #222; -webkit-appearance: none; appearance: none; }
        .select-wrapper::after { content: '▼'; position: absolute; right: 20px; top: 50%; transform: translateY(-50%); color: #444; pointer-events: none; font-size: 1.2rem; }
        select:focus { border-color: var(--primary); background: #f9fff9; }
        .option-group { display: flex; gap: 10px; width: 100%; }
        .option-btn { flex: 1; padding: 15px 5px; border: 2px solid #ddd; border-radius: 15px; background: #fff; color: #666; font-size: 1.1rem; font-weight: 900; text-align: center; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; flex-direction: column; }
        .option-btn.active { border-color: var(--primary); background-color: #e8f5e9; color: var(--primary); box-shadow: 0 4px 10px rgba(0, 144, 69, 0.2); transform: scale(1.02); }
        
        /* Elements */
        .btn { background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: white; border: none; padding: 18px; width: 100%; border-radius: 18px; font-size: 1.3rem; font-weight: 900; cursor: pointer; box-shadow: 0 6px 15px rgba(0,144,69,0.3); display: flex; align-items: center; justify-content: center; text-decoration: none; margin-bottom: 15px; }
        .btn:active { transform: scale(0.97); }
        .btn-outline { background: #fff; border: 3px solid var(--primary); color: var(--primary); box-shadow: none; }
        .btn-refill { background: linear-gradient(135deg, var(--accent), #e07010); box-shadow: 0 6px 15px rgba(245,130,32,0.3); }
        
        /* Risk Matrix */
        .risk-matrix { display: grid; grid-template-columns: 60px 1fr 1fr 1fr; gap: 3px; margin: 25px auto; background: #fff; font-size: 0.9rem; }
        .matrix-cell { display: flex; align-items: center; justify-content: center; text-align: center; padding: 2px; border-radius: 6px; font-weight: bold; color: rgba(0,0,0,0.3); height: 55px; position: relative; }
        .matrix-header { background: #f4f4f4; color: #444; font-weight: 900; font-size: 0.85rem; padding: 5px 0; }
        .matrix-label { background: #f4f4f4; color: #444; font-weight: 900; font-size: 0.8rem; flex-direction: column; justify-content: center; display: flex; align-items: center; }
        .bg-g { background-color: var(--risk-g); } .bg-y { background-color: var(--risk-y); } .bg-o { background-color: var(--risk-o); } .bg-r { background-color: var(--risk-r); }
        .matrix-cell.active-cell { border: 4px solid #0044cc; box-shadow: 0 0 15px rgba(0,68,204,0.6); z-index: 10; transform: scale(1.1); }
        .risk-banner { padding: 20px; margin-top: 25px; border-radius: 15px; color: white; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        
        /* Result Box */
        .kfre-highlight-label { font-size: 1.1rem; color: #555; font-weight: 900; margin-bottom: 5px; display: block; }
        .kfre-highlight-value { font-size: 2.5rem; font-weight: 900; color: #0277bd; display: block; line-height: 1.2; text-shadow: 1px 1px 2px rgba(0,0,0,0.1); }

        /* Nav */
        .bottom-nav { position: fixed; bottom: 0; left: 0; width: 100%; height: var(--nav-height); background: white; display: flex; justify-content: space-around; align-items: center; border-top: 2px solid #ccc; z-index: 1000; }
        .nav-item { text-align: center; color: #999; font-size: 0.85rem; flex: 1; padding: 5px; cursor: pointer; font-weight: 900; }
        .nav-item.active { color: var(--primary); }
        .nav-icon { font-size: 1.8rem; display: block; margin-bottom: 4px; }
        
        /* Equip Slots */
        .equip-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin: 20px 0; }
        .equip-slot { background: #fff; border: 3px dashed #ccc; border-radius: 15px; padding: 15px 10px; text-align: center; cursor: pointer; min-height: 140px; display:flex; flex-direction:column; justify-content:center; align-items:center; position: relative; transition: all 0.2s; }
        .equip-slot:active { transform: scale(0.95); }
        .equip-slot.equipped { border-style: solid; border-width: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.15); background: #fff; }
        .slot-legendary { border-color: #FF8C00; background-color: #FFF8E1; }
        .slot-epic { border-color: #9C27B0; background-color: #F3E5F5; }
        .slot-rare { border-color: #2196F3; background-color: #E3F2FD; }
        .slot-uncommon { border-color: #4CAF50; background-color: #E8F5E9; }
        .slot-arcane { border-color: #00BCD4; background-color: #E0F7FA; }
        .slot-heart { border-color: var(--heart); background-color: var(--heart-light); }
        .equip-slot.equipped::after { content: 'Đã dùng'; position: absolute; top: -12px; right: -5px; color: white; font-size: 0.8rem; padding: 3px 8px; border-radius: 10px; font-weight: bold; box-shadow: 0 2px 5px rgba(0,0,0,0.2); background: #555; }
        .slot-legendary.equipped::after { background: #FF8C00; }
        .slot-epic.equipped::after { background: #9C27B0; }
        .slot-rare.equipped::after { background: #2196F3; }
        .slot-uncommon.equipped::after { background: #4CAF50; }
        .slot-arcane.equipped::after { background: #00BCD4; }
        .slot-heart.equipped::after { background: var(--heart); }
        .equip-name { font-size: 1.1rem; font-weight: 900; margin-top: 5px; display: block; }
        .equip-desc { font-size: 0.85rem; color: #666; display: block; margin-top: 2px; }
        .hidden-checkbox { display: none; }
        
        /* Status & Quiz */
        .status-panel { display: flex; align-items: center; padding: 20px; border-radius: 15px; margin-bottom: 30px; color: white; transition: all 0.5s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
        .status-novice { background: linear-gradient(135deg, #757F9A, #D7DDE8); color: #333; }
        .status-apprentice { background: linear-gradient(135deg, #11998e, #38ef7d); }
        .status-veteran { background: linear-gradient(135deg, #2193b0, #6dd5ed); }
        .status-elite { background: linear-gradient(135deg, #834d9b, #d04ed6); }
        .status-guardian { background: linear-gradient(135deg, #F2994A, #F2C94C); box-shadow: 0 0 20px #F2C94C; }
        .status-god { background: linear-gradient(135deg, #FF416C, #FF4B2B); box-shadow: 0 0 20px #FF4B2B; }
        .animate-pop { animation: pop-effect 0.4s ease-out; }
        @keyframes pop-effect { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }

        /* Others */
        .hidden { display: none !important; }
        .list-card { text-align: left; margin-bottom: 25px; border-radius: 15px; overflow: hidden; border: 2px solid #ddd; }
        .list-head { padding: 18px; font-weight: 900; color: white; font-size: 1.3rem; }
        .list-body { padding: 25px; font-size: 1.15rem; line-height: 1.6; background: #fff; }
        .list-item { margin-bottom: 15px; border-bottom: 2px dashed #ccc; padding-bottom: 15px; }
        .list-title { font-weight: 900; display: block; color: #000; font-size: 1.25rem; }
        .med-result-box { background: #e8f5e9; padding: 20px; border-radius: 15px; margin-top: 20px; text-align: left; border-left: 8px solid var(--primary); animation: fadeIn 0.3s ease; }
        .quiz-option { background: #fff; border: 3px solid #eee; border-radius: 15px; padding: 20px; margin-bottom: 15px; font-size: 1.2rem; font-weight: 900; color: #444; cursor: pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.05); position: relative; }
        .quiz-option.correct { border-color: #6bbd45; background: #f0fff4; color: #2e7d32; }
        .quiz-option.wrong { border-color: #e03e2e; background: #fff5f5; color: #c62828; }
        .progress-bar { width: 100%; height: 12px; background: #eee; border-radius: 6px; margin-bottom: 20px; overflow: hidden; }
        .progress-fill { height: 100%; background: var(--primary); width: 0%; transition: width 0.3s; }
        .qr-box { width: 220px; height: 220px; margin: 20px auto; border: 2px solid #eee; border-radius: 20px; }
        .qr-img { width: 100%; height: 100%; object-fit: contain; }
        #food-list-area { min-height: 200px; }
        #food-tags { display: flex; gap: 8px; overflow-x: auto; padding: 10px 0; -webkit-overflow-scrolling: touch; }
        .modal { display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); align-items: center; justify-content: center; }
        .modal-content { background-color: #fff; padding: 25px; width: 90%; max-width: 500px; border-radius: 15px; position: relative; animation: pop-effect 0.3s; max-height: 90vh; overflow-y: auto; }
        .close-modal { position: absolute; top: 10px; right: 15px; font-size: 2rem; color: #999; cursor: pointer; background: none; border: none; }
    </style>
    <script src="data_vn.js"></script>
</head>
<body>

<header>
    <img src="logo_left.png" alt="Hospital Logo" class="header-logo" onerror="this.style.opacity='0.2'">
    <div class="header-title-box">
        <h1 style="color:var(--primary);">Trợ lý Thận</h1>
        <p>Tim / Thận / Tiểu đường</p>
    </div>
    <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 5px;">
        <img src="logo_right_new.png" alt="Logo" class="header-logo" onerror="this.style.opacity='0.2'">
        <select onchange="if(this.value) location.href=this.value;" 
                style="padding: 2px 8px; border-radius: 12px; border: 1px solid #ccc; font-size: 0.8rem; background: #fff; font-weight: bold; cursor: pointer; color: #555;">
            <option value="" disabled>🌏 Ngôn ngữ</option>
            <option value="index.html">🇹🇼 Chinese</option>
            <option value="en.html">🇺🇸 English</option>
            <option value="id.html">🇮🇩 Indo</option>
            <option value="#" selected>🇻🇳 Tiếng Việt</option>
        </select>
    </div>
</header>

<div class="container">
    <div id="tab-home" class="section active">
        <div class="card" style="border-top: 5px solid #29b6f6;">
            <h2 style="color:#0277bd; border-bottom-color:#e1f5fe;">📊 Đánh giá Nguy cơ</h2>
            <p style="color:#666; font-size:0.95rem; margin-bottom:20px;">Vui lòng nhập thông tin để nhận tư vấn thuốc và chế độ ăn uống.</p>
            <div style="text-align:right; margin-bottom:10px;">
                <button onclick="clearUserData()" style="background:#f5f5f5; border:1px solid #ddd; color:#666; padding:6px 12px; border-radius:20px; font-weight:bold;">🗑️ Xóa dữ liệu</button>
            </div>

            <div class="input-group"><label>1. Tuổi</label><div class="select-wrapper">
                <select id="kfre-age" onchange="updateAllRisks()"><option value="" disabled selected>Chọn Tuổi...</option><option value="20">20-29</option><option value="30">30-39</option><option value="40">40-49</option><option value="50">50-59</option><option value="60">60-69</option><option value="70">70-79</option><option value="80">80-89</option><option value="90">90+</option></select>
            </div></div>

            <div class="input-group"><label>2. Giới tính</label>
                <div class="option-group" id="group-sex">
                    <div class="option-btn" onclick="setOption('kfre-sex', '1', this)">Nam</div>
                    <div class="option-btn" onclick="setOption('kfre-sex', '0', this)">Nữ</div>
                </div>
                <input type="hidden" id="kfre-sex" onchange="updateAllRisks()">
            </div>
            
            <div class="input-group"><label>3. eGFR (Chức năng thận)</label><div class="select-wrapper">
                <select id="kfre-egfr" onchange="updateAllRisks()">
                    <option value="" disabled selected>Chọn giá trị...</option>
                    <option value="90">Bình thường (≥ 90)</option><option value="75">Giai đoạn 2 (60-89)</option><option value="52">Giai đoạn 3a (45-59)</option><option value="37">Giai đoạn 3b (30-44)</option><option value="22">Giai đoạn 4 (15-29)</option><option value="10">Giai đoạn 5 (< 15)</option>
                </select>
            </div></div>

            <div class="input-group"><label>4. Protein niệu (UACR)</label>
                <div class="option-group" id="group-uacr">
                    <div class="option-btn active" onclick="setOption('kfre-uacr', '10', this)">Thường<br>&lt;30</div>
                    <div class="option-btn" onclick="setOption('kfre-uacr', '150', this)">Vi lượng<br>30-300</div>
                    <div class="option-btn" onclick="setOption('kfre-uacr', '500', this)">Đại lượng<br>&gt;300</div>
                </div>
                <input type="hidden" id="kfre-uacr" value="10" onchange="updateAllRisks()">
            </div>

            <div class="input-group"><label>5. Tiểu đường (DM)</label>
                <div class="option-group" id="group-dm">
                    <div class="option-btn" onclick="setOption('kfre-dm', '0', this)">Không</div>
                    <div class="option-btn" onclick="setOption('kfre-dm', '1', this)">Có</div>
                </div>
                <input type="hidden" id="kfre-dm" value="" onchange="updateAllRisks()">
            </div>

            <div class="input-group"><label>6. Suy tim (HF)</label>
                <div class="option-group" id="group-hf">
                    <div class="option-btn" onclick="setOption('kfre-hf', '0', this); checkHFSymptoms(false);">Không</div>
                    <div class="option-btn" onclick="setOption('kfre-hf', '1', this); checkHFSymptoms(true);">Có</div>
                </div>
                <input type="hidden" id="kfre-hf" value="" onchange="updateAllRisks()">
                
                <div id="hf-check-box" class="symptom-box hidden">
                    <p style="margin-top:0; color:#c2185b;">🔍 <strong>Kiểm tra triệu chứng:</strong></p>
                    <div class="sym-item"><input type="checkbox" class="sym-check" onchange="symAlert()"> Khó thở khi nằm</div>
                    <div class="sym-item"><input type="checkbox" class="sym-check" onchange="symAlert()"> Phù chân</div>
                    <div class="sym-item"><input type="checkbox" class="sym-check" onchange="symAlert()"> Khó thở khi hoạt động</div>
                    <div id="sym-alert" class="hidden" style="color: red; font-weight: 900; margin-top: 10px; background:white; padding:10px; border-radius:10px;">
                        🚨 Có thể là Suy tim. Vui lòng khám bác sĩ!
                        <div style="margin-top:8px; text-align:right;">
                            <a href="https://nreg.fyh.mohw.gov.tw/OReg/RegisterPage?viewparam=sect" target="_blank" style="text-decoration:underline; color:#b71c1c; font-weight:900; font-size:1rem;">➜ Đăng ký Khám ngay</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="unified-result" class="hidden">
                <div id="risk-banner" class="risk-banner" style="background:#ccc; margin-bottom:20px;">
                    <h3 id="risk-title">--</h3><p id="risk-desc">--</p>
                </div>
                
                <div class="risk-matrix">
                    <div class="matrix-header"></div><div class="matrix-header">Nrml</div><div class="matrix-header">Micr</div><div class="matrix-header">Macr</div>
                    <div class="matrix-label">G1</div><div class="matrix-cell bg-g" id="cell-1-1"></div><div class="matrix-cell bg-g" id="cell-1-2"></div><div class="matrix-cell bg-o" id="cell-1-3"></div>
                    <div class="matrix-label">G2</div><div class="matrix-cell bg-g" id="cell-2-1"></div><div class="matrix-cell bg-g" id="cell-2-2"></div><div class="matrix-cell bg-o" id="cell-2-3"></div>
                    <div class="matrix-label">G3a</div><div class="matrix-cell bg-y" id="cell-3a-1"></div><div class="matrix-cell bg-o" id="cell-3a-2"></div><div class="matrix-cell bg-r" id="cell-3a-3"></div>
                    <div class="matrix-label">G3b</div><div class="matrix-cell bg-o" id="cell-3b-1"></div><div class="matrix-cell bg-r" id="cell-3b-2"></div><div class="matrix-cell bg-r" id="cell-3b-3"></div>
                    <div class="matrix-label">G4</div><div class="matrix-cell bg-r" id="cell-4-1"></div><div class="matrix-cell bg-r" id="cell-4-2"></div><div class="matrix-cell bg-r" id="cell-4-3"></div>
                    <div class="matrix-label">G5</div><div class="matrix-cell bg-r" id="cell-5-1"></div><div class="matrix-cell bg-r" id="cell-5-2"></div><div class="matrix-cell bg-r" id="cell-5-3"></div>
                </div>

                <div id="kfre-result-box" style="background:#e1f5fe; border-radius:15px; padding:25px 15px; border:3px solid #b3e5fc; text-align:center; margin-top:25px; transition: all 0.3s;">
                    <h3 id="kfre-result-title" style="margin:0 0 20px 0; color:#01579b; font-size:1.5rem; font-weight:900;">📅 Dự đoán Nguy cơ Suy thận</h3>
                    <div style="display:flex; justify-content:space-around; margin-bottom:20px; align-items: flex-start;">
                        <div style="flex:1;"><span class="kfre-highlight-label">Rủi ro 2 Năm</span><span id="res-2yr" class="kfre-highlight-value">--%</span></div>
                        <div style="width:2px; background:#ccc; opacity:0.5; height:60px; margin-top:10px;"></div>
                        <div style="flex:1;"><span class="kfre-highlight-label">Rủi ro 5 Năm</span><span id="res-5yr" class="kfre-highlight-value">--%</span></div>
                    </div>
                    <div id="kfre-advice-box" style="background:white; padding:15px; border-radius:10px; text-align:left; font-size:1.1rem; line-height:1.6; border-left:6px solid #ccc; box-shadow:0 2px 5px rgba(0,0,0,0.05);">Đang tải...</div>
                </div>
                <p style="color:#d32f2f; font-weight:900; text-align:center; margin-top: 20px;">👇 Kết quả đã sẵn sàng.<br>Kiểm tra các tab bên dưới.</p>
            </div>
        </div>
    </div>

    <div id="tab-meds" class="section">
        <div class="card">
            <h2>💊 Tư vấn Thuốc</h2>
            <div id="med-placeholder" style="padding:40px 10px; color:#999;">Vui lòng điền dữ liệu tại "Trang chủ" trước.</div>
            <div id="med-content" class="hidden">
                <p style="background:#eee; padding:15px; border-radius:15px; color:#444; font-weight:bold;">Hồ sơ: eGFR <span id="med-egfr-val" style="color:var(--primary);">--</span> / <span id="med-cond-text">--</span></p>
                <div class="list-card" style="border-color: var(--risk-g);"><div class="list-head" style="background: var(--risk-g);">🟢 Điều trị chính</div><div class="list-body" id="list-med-g"></div></div>
                <div class="list-card" style="border-color: var(--risk-y);"><div class="list-head" style="background: var(--risk-y); color:#333;">🟡 Thận trọng</div><div class="list-body" id="list-med-y"></div></div>
                <div class="list-card" style="border-color: var(--risk-r);"><div class="list-head" style="background: var(--risk-r);">🔴 Tránh / Chống chỉ định</div><div class="list-body" id="list-med-r"></div></div>
            </div>
        </div>
        <div class="card">
            <h2>🚦 Đèn Giao Thông Thuốc</h2>
            <div class="select-wrapper">
                <select id="med-select" onchange="checkMed()">
                    <option value="">🔍 Chọn tên thuốc...</option>
                    <option value="ras">ACEi / ARB (Huyết áp)</option><option value="arni">ARNI (Suy tim)</option><option value="panadol">Panadol</option><option value="nsaid">NSAID (Giảm đau mạnh)</option><option value="sglt2">SGLT2i (Tiểu đường/Thận)</option>
                    <option value="metformin">Metformin (Tiểu đường)</option>
                    <option value="mycin">Kháng sinh (Aminoglycosides)</option>
                </select>
            </div>
            <div class="traffic-container">
                <div id="light-r" class="light" style="color: var(--risk-r); background: var(--risk-r);"></div><div id="light-y" class="light" style="color: var(--risk-y); background: var(--risk-y);"></div><div id="light-g" class="light" style="color: var(--risk-g); background: var(--risk-g);"></div>
            </div>
            <div id="med-result" class="med-result-box hidden"></div>
        </div>
        <div class="card" style="border: 3px solid #ff9800; background: #fff8e1;">
            <h2 style="color:#e65100;">🤢 Quy tắc Ngày Ốm</h2>
            <p style="font-weight:bold; color:#bf360c;">Nếu Tiêu chảy, Sốt, hoặc Mất nước, hỏi bác sĩ về việc tạm dừng:</p>
            <div class="quiz-option" style="color:#e65100; text-align:center; padding:15px;">SGLT2i, ACEi/ARB, Lợi tiểu, Metformin, NSAID</div>
            <a href="https://nreg.fyh.mohw.gov.tw/OReg/RegisterPage?viewparam=sect" target="_blank" class="btn" style="background:#d32f2f;">🏥 Đăng ký Khám ngay</a>
        </div>
        <div class="card">
            <h2>🔍 Ragu về thuốc?</h2>
            <div style="display:flex; gap:15px;">
                <button class="btn" style="margin:0; flex:1;" onclick="switchTab('consult')">💬 Tư vấn</button>
                <a href="https://amanhung.github.io/Formulary/" target="_blank" class="btn btn-outline" style="margin:0; flex:1; display:flex; align-items:center; justify-content:center;">🏥 Tra cứu</a>
            </div>
        </div>
    </div>

    <div id="tab-diet" class="section">
        <div class="card">
            <h2>🍽️ Chế độ ăn</h2>
            <div id="diet-placeholder" style="padding:40px 10px; color:#999;">Vui lòng điền dữ liệu tại "Trang chủ".</div>
            <div id="diet-content" class="hidden">
                <div class="list-card" style="border-color: var(--risk-g);">
                    <div class="list-head" style="background: var(--risk-g);">🟢 Khuyên dùng</div>
                    <div id="protein-guide-box" style="margin: 15px 0; padding: 15px; background-color: #f1f8e9; border: 2px dashed #558b2f; border-radius: 12px; display: none;">
                        <p style="margin: 0; font-size: 1.1rem; color: #33691e; font-weight: 900;">🥩 Đạm Hàng ngày</p>
                        <div style="display: flex; align-items: baseline; margin-top: 5px;">
                            <span id="protein-guide-val" style="font-size: 2.5rem; font-weight: 900; color: #2e7d32;">--</span>
                            <span style="margin-left: 8px; font-size: 1.1rem; font-weight:bold; color:#558b2f;">g / kg</span>
                        </div>
                    </div>
                    <div class="list-body" id="list-diet-g"></div>
                </div>
                
                <div class="list-card" style="border-color: #00bcd4;">
                    <div class="list-head" style="background: #00bcd4;">⚡ Tăng năng lượng</div>
                    <div class="list-body" style="font-size: 1rem;">
                        <p style="margin-top:0;"><strong>Tinh bột ít đạm:</strong> Tăng calo, không tăng urê.</p>
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:10px;">
                            <div class="option-btn" style="font-size:0.95rem; background:#e0f7fa; border:none; color:#006064;">🍜 Miến</div>
                            <div class="option-btn" style="font-size:0.95rem; background:#e0f7fa; border:none; color:#006064;">🍮 Bột Sago</div>
                        </div>
                    </div>
                </div>

                <div class="list-card" style="border-color: var(--risk-y);"><div class="list-head" style="background: var(--risk-y); color:#333;">🟡 Hạn chế</div><div class="list-body" id="list-diet-y"></div></div>
                <div class="list-card" style="border-color: var(--risk-r);"><div class="list-head" style="background: var(--risk-r);">🔴 Tránh</div><div class="list-body" id="list-diet-r"></div></div>
            </div>
            
            <hr style="margin: 20px 0;">
            <h3 style="color:var(--primary);">🔎 Đèn Giao Thông Thực Phẩm</h3>
            <div id="food-tags" style="display: flex; gap: 8px; overflow-x: auto; padding: 10px 0; -webkit-overflow-scrolling: touch; margin-bottom: 10px;"></div>
            <input type="text" id="food-search-input" placeholder="Tìm thức ăn (vd: Chuối)..." oninput="filterFood()" style="width: 100%; padding: 15px; border: 2px solid #ccc; border-radius: 30px; margin-bottom:10px;">
            <div id="food-list-area"></div>
            
            <div id="food-result-modal" class="hidden" onclick="closeFoodModal()" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 2000; display: flex; align-items: center; justify-content: center; animation: fadeIn 0.2s;">
                <div class="med-result-box" style="width: 90%; max-width: 400px; margin: 0; position: relative; animation: pop-effect 0.3s;" onclick="event.stopPropagation()">
                    <button onclick="closeFoodModal()" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 1.5rem; color: #666;">✕</button>
                    <div id="food-result-content"></div>
                </div>
            </div>
        </div>
    </div>

    <div id="tab-quiz" class="section">
        <div class="card" style="border: 3px solid #6bbd45; background: #fff;">
            <h2 style="color:#2e7d32; border-bottom-color:#a5d6a7;">🛡️ Khiên bảo vệ Thận</h2>
            <p style="text-align:center; color:#666; font-size:1.1rem; margin-bottom:15px;">Chọn các loại thuốc bạn đang dùng.</p>
            <div class="equip-grid">
                <div class="equip-slot slot-legendary" onclick="toggleEquip(this, 'drug-sglt2')">
                    <span class="equip-name">Cứu tinh</span><span class="equip-desc">SGLT2i</span>
                    <input type="checkbox" id="drug-sglt2" class="gear-checkbox hidden-checkbox">
                </div>
                <div class="equip-slot slot-epic" onclick="toggleEquip(this, 'drug-rasi')">
                    <span id="icon-rasi" style="display:none;"></span>
                    <span class="equip-name" id="name-rasi">Bảo vệ cơ bản</span><span class="equip-desc" id="desc-rasi">ACEi/ARB</span>
                    <input type="checkbox" id="drug-rasi" class="gear-checkbox hidden-checkbox">
                </div>
                <div id="slot-bb" class="equip-slot slot-heart" onclick="toggleEquip(this, 'drug-bb')" style="display:none;">
                    <span class="equip-name">Bảo vệ tim</span><span class="equip-desc">Beta-blocker</span>
                    <input type="checkbox" id="drug-bb" class="gear-checkbox hidden-checkbox">
                </div>
                <div id="slot-mra-old" class="equip-slot slot-rare" onclick="toggleEquip(this, 'drug-mra-old')" style="display:none;">
                    <span class="equip-name">Chặn thêm</span><span class="equip-desc">MRA</span>
                    <input type="checkbox" id="drug-mra-old" class="gear-checkbox hidden-checkbox">
                </div>
                <div id="slot-nsmra" class="equip-slot slot-arcane" onclick="toggleEquip(this, 'drug-nsmra')" style="display:none;">
                    <span class="equip-name">Bảo vệ mới</span><span class="equip-desc">ns-MRA</span>
                    <input type="checkbox" id="drug-nsmra" class="gear-checkbox hidden-checkbox">
                </div>
                <div class="equip-slot slot-uncommon" onclick="toggleEquip(this, 'drug-statin')">
                    <span class="equip-name">Mạch máu</span><span class="equip-desc">Statin</span>
                    <input type="checkbox" id="drug-statin" class="gear-checkbox hidden-checkbox">
                </div>
                <div id="slot-glp1" class="equip-slot slot-arcane" onclick="toggleEquip(this, 'drug-glp1')" style="display:none;">
                    <span class="equip-name">Kiểm soát đường</span><span class="equip-desc">GLP-1 RA</span>
                    <input type="checkbox" id="drug-glp1" class="gear-checkbox hidden-checkbox">
                </div>
            </div>
            
            <div id="status-panel" class="status-panel status-novice" style="margin-top:20px;">
                <div class="status-icon" id="status-icon">⚠️</div>
                <div class="status-info">
                    <div class="status-title" id="status-title">Chưa có bảo vệ</div>
                    <div class="status-msg" id="status-msg">Bạn đang gặp rủi ro. Hãy hỏi bác sĩ.</div>
                </div>
            </div>
            <div id="dynamic-advice" class="hidden" style="margin-top:15px; text-align:left; animation: fadeIn 0.5s;"></div>
        </div>

        <div class="card" style="margin-top: 20px;">
            <h2>🎓 Trắc nghiệm Sức khỏe</h2>
            <div class="progress-bar"><div id="quiz-progress" class="progress-fill"></div></div>
            <p id="quiz-counter" style="text-align:right; color:#666; font-weight:bold;">Q1/10</p>
            <div id="quiz-area"><h3 id="quiz-question" style="min-height:70px; font-size:1.3rem;">Đang tải...</h3><div id="quiz-options"></div></div>
            <div id="quiz-feedback" class="hidden" style="margin-top:25px;">
                <div id="quiz-res-text" style="font-size:1.6rem; font-weight:900; margin-bottom:15px;"></div><div id="quiz-exp" style="background:#fff; padding:20px; border-radius:15px; border:2px solid #ccc; color:#444; font-size:1.1rem;"></div><button class="btn btn-next" onclick="nextQ()">Tiếp theo ➜</button>
            </div>
            <div id="quiz-score" class="hidden"><h3 style="font-size:3rem; color:var(--primary);">Điểm: <span id="final-score">0</span></h3><button class="btn" onclick="initQuiz()">🔄 Thử lại</button></div>
        </div>
    </div>

    <div id="tab-consult" class="section">
        <div class="card">
            <h2>💬 Tư vấn</h2>
            <div style="background:#f9f9f9; padding:25px; border-radius:20px; border:3px solid #eee; margin-bottom:30px;">
                <h3 style="color:#06c755; margin-top:0;">LINE Official</h3>
                <div class="qr-box"><img src="line_qr.png" class="qr-img" onerror="this.style.display='none'"></div>
                <a href="https://lin.ee/sydupT8" target="_blank" class="btn btn-line" style="background:#06c755;">📲 Kết bạn</a>
            </div>
            <a href="https://nreg.fyh.mohw.gov.tw/OReg/RegisterPage?viewparam=sect" target="_blank" class="btn" style="background:#2196f3;">🏥 Đăng ký Online</a>
            <a href="https://nreg.fyh.mohw.gov.tw/OReg/HomePage?page=ChronicRegisterPage#" target="_blank" class="btn btn-refill">💊 Lấy thuốc định kỳ</a>
        </div>
    </div>
</div>

<nav class="bottom-nav">
    <div class="nav-item active" onclick="switchTab('home')"><span class="nav-icon">🏠</span>Trang chủ</div>
    <div class="nav-item" onclick="switchTab('meds')"><span class="nav-icon">💊</span>Thuốc</div>
    <div class="nav-item" onclick="switchTab('diet')"><span class="nav-icon">🥦</span>Ăn uống</div>
    <div class="nav-item" onclick="switchTab('quiz')"><span class="nav-icon">🎓</span>Kuis</div>
    <div class="nav-item" onclick="switchTab('consult')"><span class="nav-icon">💬</span>Tư vấn</div>
</nav>

<script>
    // --- Audio ---
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    function playSound(isCorrect) {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        if (isCorrect) {
            osc.type = 'sine'; osc.frequency.setValueAtTime(500, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1000, audioCtx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
            osc.start(); osc.stop(audioCtx.currentTime + 0.5);
        } else {
            osc.type = 'sawtooth'; osc.frequency.setValueAtTime(150, audioCtx.currentTime);
            osc.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.3);
            gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            osc.start(); osc.stop(audioCtx.currentTime + 0.3);
        }
    }

    // --- Basic Logic ---
    function switchTab(id) {
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.getElementById('tab-' + id).classList.add('active');
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        const idx = (id==='home')?0:(id==='meds')?1:(id==='diet')?2:(id==='quiz')?3:4;
        const navItem = document.querySelectorAll('.nav-item')[idx];
        if(navItem) navItem.classList.add('active');
        window.scrollTo(0,0);
        if (id === 'diet') initFoodSearch();
        if (id === 'quiz') initQuiz();
    }

    function setOption(inputId, value, btn) {
        document.getElementById(inputId).value = value;
        updateAllRisks();
        btn.parentElement.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    function checkHFSymptoms(show) {
        document.getElementById('hf-check-box').classList.toggle('hidden', !show);
    }
    
    function symAlert() {
        const cnt = document.querySelectorAll('.sym-check:checked').length;
        document.getElementById('sym-alert').classList.toggle('hidden', cnt === 0);
    }

    // --- Risk Logic (Complete KFRE & Matrix) ---
    function updateAllRisks() {
        const age = parseFloat(document.getElementById('kfre-age').value);
        const sex = document.getElementById('kfre-sex').value; // 1=Male, 0=Female
        const egfr = parseFloat(document.getElementById('kfre-egfr').value);
        const uacr = parseFloat(document.getElementById('kfre-uacr').value);
        const dm = document.getElementById('kfre-dm').value === '1';
        const hf = document.getElementById('kfre-hf').value === '1';
        
        if (isNaN(age) || isNaN(egfr) || isNaN(uacr) || sex === "") return;

        document.getElementById('unified-result').classList.remove('hidden');
        
        // Heatmap Logic
        document.querySelectorAll('.matrix-cell').forEach(c => c.classList.remove('active-cell'));
        let row = '5', stageText = 'G5';
        if (egfr >= 90) { row = '1'; stageText = 'G1'; }
        else if (egfr >= 60) { row = '2'; stageText = 'G2'; }
        else if (egfr >= 45) { row = '3a'; stageText = 'G3a'; }
        else if (egfr >= 30) { row = '3b'; stageText = 'G3b'; }
        else if (egfr >= 15) { row = '4'; stageText = 'G4'; }
        
        let col = '1', uacrText = 'Normal';
        if (uacr >= 300) { col = '3'; uacrText = 'Macro'; } 
        else if (uacr >= 300) { col = '2'; uacrText = 'Micro'; }
        
        const cellId = `cell-${row}-${col}`;
        const cell = document.getElementById(cellId);
        if(cell) cell.classList.add('active-cell');

        let text = "Nguy cơ Thấp (Theo dõi)";
        let color = "#6bbd45";
        let boxBg = "#f0fdf4", boxColor = "#1b5e20";

        if (cell.classList.contains('bg-r') || cell.classList.contains('bg-o')) { 
            text = "Nguy cơ Cao (Kiểm soát chặt)"; color = "#e03e2e"; 
            boxBg = "#fff5f5"; boxColor = "#b71c1c";
        } else if (cell.classList.contains('bg-y')) { 
            text = "Nguy cơ Trung bình (Thận trọng)"; color = "#ffd700"; 
            boxBg = "#fffde7"; boxColor = "#f57f17";
        }
        
        const banner = document.getElementById('risk-banner');
        banner.style.backgroundColor = color;
        banner.style.color = (color==="#ffd700")?"#333":"#fff";
        document.getElementById('risk-title').innerText = text;
        document.getElementById('risk-desc').innerText = `eGFR ${stageText} + UACR ${uacrText}`;

        // KFRE Logic
        const sexNum = parseFloat(sex);
        const logACR = Math.log(uacr);
        const sum = -0.2201 * (age/10 - 7.036) + 0.2467 * (sexNum - 0.5642) - 0.5567 * (egfr/5 - 7.222) + 0.4510 * (logACR - 5.137);
        const risk2 = 1 - Math.pow(0.9832, Math.exp(sum));
        const risk5 = 1 - Math.pow(0.9365, Math.exp(sum));
        
        document.getElementById('res-2yr').innerText = (risk2 * 100).toFixed(1) + "%";
        document.getElementById('res-5yr').innerText = (risk5 * 100).toFixed(1) + "%";

        const adviceBox = document.getElementById('kfre-advice-box');
        let adviceHTML = "";
        if (risk2 >= 0.4) adviceHTML = `Nguy cơ suy thận rất cao. Cần khám chuyên khoa Thận ngay.`;
        else if (risk2 >= 0.1) adviceHTML = `Cân nhắc tham gia chương trình quản lý bệnh thận mạn (CKD).`;
        else if (risk5 >= 0.03) adviceHTML = `Khuyến nghị chuyển tuyến chuyên khoa Thận.`;
        else adviceHTML = `Nguy cơ ngắn hạn thấp. Duy trì lối sống lành mạnh.`;
        
        if(hf) adviceHTML += "<br>❤️ <b>Suy tim:</b> Kiểm soát dịch nghiêm ngặt.";
        adviceBox.innerHTML = adviceHTML;

        updateMeds(egfr, dm, hf);
        updateDiet(egfr, dm, hf);
        updateArmorVisibility(dm, egfr, hf);
    }

    function updateMeds(egfr, dm, hf) {
        document.getElementById('med-placeholder').classList.add('hidden');
        document.getElementById('med-content').classList.remove('hidden');
        
        // Update Profile Text
        document.getElementById('med-egfr-val').innerText = egfr;
        let conds = ['CKD']; 
        if(dm) conds.push('Tiểu đường'); 
        if(hf) conds.push('Suy tim');
        document.getElementById('med-cond-text').innerText = conds.join(' + ');

        const g=document.getElementById('list-med-g'), y=document.getElementById('list-med-y'), r=document.getElementById('list-med-r');
        g.innerHTML=''; y.innerHTML=''; r.innerHTML='';
        const add = (l,t,d) => l.innerHTML += `<div class="list-item" style="border-bottom:1px dashed #ccc; padding:10px 0;"><strong style="display:block;">${t}</strong><small>${d}</small></div>`;

        // 1. SGLT2i
        if(egfr >= 20) add(g, "SGLT2i (Cứu tinh)", "Thuốc chính bảo vệ tim & thận.");
        else add(y, "SGLT2i", "Thận trọng nếu eGFR < 20. Tiếp tục nếu đang dùng.");
        
        // 2. RASi / ARNI
        if(hf) {
            add(g, "ARNI", "Lựa chọn hàng đầu cho Suy tim!");
            add(g, "Beta-blocker", "Bắt buộc để bảo vệ tim.");
            add(g, "MRA (Spironolactone)", "Trụ cột thứ 4 suy tim. Kiểm tra kali.");
        } else {
            add(g, "ACEi / ARB", "Bảo vệ thận cơ bản & chống đạm niệu.");
        }
        
        // 3. DM
        if(dm) {
             add(g, "GLP-1 RA", "Kiểm soát đường, cân nặng, tim mạch.");
             if(egfr >= 25 && !hf) add(g, "ns-MRA (Finerenone)", "Đặc trị bệnh thận tiểu đường.");
             
             if(egfr < 30) add(r, "Metformin", "CẤM DÙNG nếu eGFR < 30! Nguy cơ nhiễm toan.");
             else if(egfr < 45) add(y, "Metformin", "Giảm liều (tối đa 1000mg).");
        }

        add(g, "Statin", "Bảo vệ mạch máu.");
        add(r, "NSAID (Giảm đau)", "NGUY HIỂM! Hủy hoại thận & gây suy tim.");
    }

    function updateDiet(egfr, dm, hf) {
        document.getElementById('diet-placeholder').classList.add('hidden');
        document.getElementById('diet-content').classList.remove('hidden');
        
        // Protein Logic
        const pBox = document.getElementById('protein-guide-box');
        const pVal = document.getElementById('protein-guide-val');
        if(pBox) {
            pBox.style.display = 'block';
            if (egfr < 45) { pVal.innerText = "0.6 ~ 0.8"; pVal.style.color = "#d84315"; }
            else { pVal.innerText = "0.8 ~ 1.0"; pVal.style.color = "#2e7d32"; }
        }

        const g=document.getElementById('list-diet-g'), y=document.getElementById('list-diet-y'), r=document.getElementById('list-diet-r');
        g.innerHTML=''; y.innerHTML=''; r.innerHTML='';
        const add = (l,t,d) => l.innerHTML += `<div class="list-item" style="border-bottom:1px dashed #ccc; padding:10px 0;"><strong style="display:block;">${t}</strong><small>${d}</small></div>`;

        add(g, "Protein Chất lượng", "Lòng trắng trứng, Cá, Gà, Đậu phụ.");
        add(g, "Dầu thực vật", "Dầu Oliu, Dầu hạt cải.");

        if(hf) {
            add(r, "Nhiều Natri", "Dưa muối, Đồ hộp, Nước lẩu. Làm nặng thêm phù.");
            add(y, "Nước uống", "Cân mỗi ngày. Hạn chế nước nếu bị phù.");
        } else {
            add(g, "Đủ nước", "Uống đủ nếu không bị phù.");
        }

        if(dm) {
            add(r, "Đường tinh luyện", "Nước ngọt, Bánh ngọt.");
            add(g, "Chỉ số đường huyết thấp", "Rau xanh, Ngũ cốc nguyên hạt.");
        }

        if(egfr < 45) {
            add(g, "Tinh bột ít đạm", "Miến, Bột sago (Năng lượng sạch không độc tố).");
            add(y, "Gạo lứt", "Nhiều Phốt pho. Chuyển sang cơm trắng hoặc Miến.");
            add(y, "Rau xanh", "Nhiều Kali. Luộc kỹ & bỏ nước.");
            add(r, "Muối giảm Natri", "Chứa Kali Clorua. Nguy hiểm cho tim.");
        }
        
        add(r, "Khế", "Độc tố thần kinh cho thận.");
        add(r, "Thịt chế biến", "Xúc xích/Jambon chứa Phốt pho vô cơ.");
    }

    // --- Armor Logic (Fully Synced) ---
    function updateArmorVisibility(hasDM, egfr, hasHF) {
        const iconRasi = document.getElementById('icon-rasi');
        const nameRasi = document.getElementById('name-rasi');
        
        if(hasHF) { 
            nameRasi.innerText = "Bảo vệ Kép"; iconRasi.style.display='inline'; iconRasi.innerText="⛑️"; 
            document.getElementById('desc-rasi').innerText = "ARNI";
        } else { 
            nameRasi.innerText = "Bảo vệ Cơ bản"; iconRasi.style.display='inline'; iconRasi.innerText="🧥"; 
            document.getElementById('desc-rasi').innerText = "ACEi/ARB";
        }

        const slotBb = document.getElementById('slot-bb');
        const slotMraOld = document.getElementById('slot-mra-old');
        const slotNsMra = document.getElementById('slot-nsmra');
        const slotGlp1 = document.getElementById('slot-glp1');

        // HF Logic
        if(hasHF) { 
            slotBb.style.display='flex'; 
            slotMraOld.style.display='flex'; 
            slotNsMra.style.display='none'; 
            document.getElementById('drug-nsmra').checked = false; slotNsMra.classList.remove('equipped');
        } else { 
            slotBb.style.display='none'; 
            document.getElementById('drug-bb').checked = false; slotBb.classList.remove('equipped');
            slotMraOld.style.display='none'; 
            document.getElementById('drug-mra-old').checked = false; slotMraOld.classList.remove('equipped');
        }

        // DM Logic (ns-MRA vs GLP1)
        if(hasDM && egfr >= 25 && !hasHF) { slotNsMra.style.display='flex'; } 
        else { 
            slotNsMra.style.display='none'; 
            document.getElementById('drug-nsmra').checked = false; slotNsMra.classList.remove('equipped');
        }

        if(hasDM) slotGlp1.style.display='flex'; 
        else {
            slotGlp1.style.display='none';
            document.getElementById('drug-glp1').checked = false; slotGlp1.classList.remove('equipped');
        }
        
        updateStatusAndAdvice();
    }

    function toggleEquip(el, id) {
        const chk = document.getElementById(id);
        chk.checked = !chk.checked;
        el.classList.toggle('equipped', chk.checked);
        if(chk.checked) playSound(true);
        updateStatusAndAdvice();
    }

    const ranks = [
        { class: 'status-novice', title: 'Chưa có', icon: '⚠️', msg: 'Rủi ro cao. Hãy hỏi bác sĩ.' },
        { class: 'status-apprentice', title: 'Sơ cấp', icon: '🛡️', msg: 'Khởi đầu tốt.' },
        { class: 'status-veteran', title: 'Trung cấp', icon: '✨', msg: 'Bảo vệ khá vững chắc.' },
        { class: 'status-elite', title: 'Cao cấp', icon: '🏰', msg: 'Tuyệt vời! Bảo vệ đa mục tiêu.' },
        { class: 'status-guardian', title: 'Hộ vệ Thận', icon: '🏆', msg: 'Bảo vệ mạnh nhất cho tim & thận!' },
        { class: 'status-god', title: 'Hoàn hảo', icon: '👑', msg: 'Hoàn hảo! Hãy duy trì.' }
    ];

    function updateStatusAndAdvice() {
        const checkboxes = document.querySelectorAll('.gear-checkbox');
        let checkedCount = 0;
        checkboxes.forEach(box => { 
            if (box.parentElement.style.display !== 'none') {
                if (box.checked) checkedCount++; 
            }
        });
        
        let rankIndex = checkedCount; 
        if (rankIndex >= 5) rankIndex = 5; 
        
        const data = ranks[rankIndex];
        const statusPanel = document.getElementById('status-panel');
        document.getElementById('status-title').innerText = data.title;
        document.getElementById('status-icon').innerText = data.icon;
        document.getElementById('status-msg').innerText = data.msg;
        statusPanel.className = 'status-panel ' + data.class;
        statusPanel.classList.remove('animate-pop');
        void statusPanel.offsetWidth;
        statusPanel.classList.add('animate-pop');

        generateAdvice();
    }

    function generateAdvice() {
        const hfVal = document.getElementById('kfre-hf').value;
        const dmVal = document.getElementById('kfre-dm').value;
        const hasHF = hfVal === '1';
        let adviceHTML = "";
        
        // SGLT2i
        if(document.getElementById('drug-sglt2').checked) {
            adviceHTML += `<div style="background:#e8f5e9; padding:10px; border-left:5px solid green; margin-bottom:5px;">✅ <strong>SGLT2i:</strong> Tốt! Thuốc cứu tinh chính.</div>`;
        } else {
            adviceHTML += `<div style="background:#fffde7; padding:10px; border-left:5px solid orange; margin-bottom:5px;">⚠️ <strong>SGLT2i:</strong> Khuyên dùng. Giảm nguy cơ nhập viện.</div>`;
        }

        // RASi
        if(document.getElementById('drug-rasi').checked) {
            adviceHTML += `<div style="background:#e8f5e9; padding:10px; border-left:5px solid green; margin-bottom:5px;">✅ <strong>${hasHF?'ARNI':'ACEi/ARB'}:</strong> Bảo vệ cơ bản đã có.</div>`;
        } else {
            adviceHTML += `<div style="background:#fffde7; padding:10px; border-left:5px solid orange; margin-bottom:5px;">⚠️ <strong>Cơ bản:</strong> ACEi/ARB/ARNI rất quan trọng.</div>`;
        }

        const adviceDiv = document.getElementById('dynamic-advice');
        if (adviceHTML !== "") { adviceDiv.innerHTML = adviceHTML; adviceDiv.classList.remove('hidden'); } 
        else { adviceDiv.classList.add('hidden'); }
    }

    // --- Food Search (FIXED) ---
    let currentCategory = 'all';
    
    function initFoodSearch() { 
        const tagContainer = document.getElementById('food-tags');
        if(!tagContainer) return;
        tagContainer.innerHTML = '';
        
        Object.keys(foodCategories).forEach(key => {
            const btn = document.createElement('button');
            btn.innerText = foodCategories[key];
            btn.className = `option-btn ${key === 'all' ? 'active' : ''}`;
            btn.style.flex = '0 0 auto';
            btn.style.padding = '8px 15px';
            btn.onclick = () => {
                document.querySelectorAll('#food-tags .option-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = key;
                filterFood();
            };
            tagContainer.appendChild(btn);
        });
        
        filterFood(); 
    }
    
    function filterFood() {
        const inputEl = document.getElementById('food-search-input');
        if(!inputEl) return;
        const input = inputEl.value.toLowerCase().trim();
        const listArea = document.getElementById('food-list-area');
        listArea.innerHTML = '';
        
        let count = 0;
        Object.keys(foodDB).forEach(key => {
            const item = foodDB[key];
            const isGlobalSearch = input !== '';
            const catMatch = isGlobalSearch ? true : (currentCategory === 'all' || item.c === currentCategory);
            const keyMatch = input === '' || item.n.toLowerCase().includes(input) || key.includes(input);

            if (catMatch && keyMatch) {
                const div = document.createElement('div');
                div.className = 'quiz-option'; 
                div.style.padding = '10px';
                div.style.marginBottom = '8px';
                div.style.display = 'flex';
                div.style.justifyContent = 'space-between';
                div.style.alignItems = 'center';
                
                let dotColor = '#ddd';
                if(item.t.includes('Xanh')) dotColor = 'var(--risk-g)';
                if(item.t.includes('Vàng')) dotColor = 'var(--risk-y)';
                if(item.t.includes('Đỏ')) dotColor = 'var(--risk-r)';

                div.innerHTML = `
                    <div style="font-weight:bold; font-size:1.0rem;">
                        <span style="color:${dotColor}; margin-right:8px;">●</span>${item.n}
                    </div>
                    <span style="font-size:0.8rem; color:#888;">></span>
                `;
                div.onclick = () => showFoodDetail(item);
                listArea.appendChild(div);
                count++;
            }
        });
        
        if (count === 0) listArea.innerHTML = '<p style="text-align:center; color:#999; margin-top:20px;">Không tìm thấy.</p>';
    }
    
    function showFoodDetail(item) {
        const modal = document.getElementById('food-result-modal');
        const content = document.getElementById('food-result-content');
        
        let bg = '#fff', border = '#ccc';
        if(item.t.includes('Đỏ')) { bg='#fff5f5'; border='var(--risk-r)'; }
        else if(item.t.includes('Vàng')) { bg='#fffbe6'; border='var(--risk-y)'; }
        else { bg='#e8f5e9'; border='var(--risk-g)'; }

        content.parentElement.style.background = bg;
        content.parentElement.style.borderLeft = `8px solid ${border}`;
        
        content.innerHTML = `
            <h3 style="margin-top:0; color:#333; font-size:1.5rem;">${item.n}</h3>
            <div style="margin-bottom:15px;">${item.t}</div>
            <p style="font-size:1.1rem; line-height:1.6; color:#444;">${item.d}</p>
        `;
        
        modal.classList.remove('hidden');
    }

    function closeFoodModal() {
        document.getElementById('food-result-modal').classList.add('hidden');
    }
    
    function checkMed() {
        const val = document.getElementById('med-select').value;
        const box = document.getElementById('med-result');
        if(!val) { box.classList.add('hidden'); return; }
        const d = medDB[val];
        box.classList.remove('hidden');
        box.innerHTML = `<strong>${d.title}</strong><br>${d.desc}`;
        // Color logic
        if(d.level==='r') { box.style.background="#fff5f5"; box.style.borderColor="var(--risk-r)"; document.getElementById('light-r').classList.add('on'); }
        else if(d.level==='y') { box.style.background="#fffbe6"; box.style.borderColor="var(--risk-y)"; document.getElementById('light-y').classList.add('on'); }
        else { box.style.background="#e8f5e9"; box.style.borderColor="var(--risk-g)"; document.getElementById('light-g').classList.add('on'); }
    }
    
    // --- Data Persistence ---
    const STORAGE_KEY = 'kidney_care_data';
    function saveUserData() {
        const data = {
            age: document.getElementById('kfre-age').value,
            sex: document.getElementById('kfre-sex').value,
            egfr: document.getElementById('kfre-egfr').value,
            uacr: document.getElementById('kfre-uacr').value,
            dm: document.getElementById('kfre-dm').value,
            hf: document.getElementById('kfre-hf').value,
            meds: {
                'drug-sglt2': document.getElementById('drug-sglt2').checked,
                'drug-rasi': document.getElementById('drug-rasi').checked,
                'drug-bb': document.getElementById('drug-bb').checked,
                'drug-mra-old': document.getElementById('drug-mra-old').checked,
                'drug-nsmra': document.getElementById('drug-nsmra').checked,
                'drug-statin': document.getElementById('drug-statin').checked,
                'drug-glp1': document.getElementById('drug-glp1').checked
            }
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
    function loadUserData() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if(raw) {
            try {
                const data = JSON.parse(raw);
                if(data.age) document.getElementById('kfre-age').value = data.age;
                if(data.egfr) document.getElementById('kfre-egfr').value = data.egfr;
                setOption('kfre-sex', data.sex, document.querySelector(`#group-sex .option-btn:nth-child(${data.sex==='1'?1:2})`));
                setOption('kfre-uacr', data.uacr, document.querySelector(`#group-uacr .option-btn:nth-child(${data.uacr==='10'?1:data.uacr==='150'?2:3})`));
                setOption('kfre-dm', data.dm, document.querySelector(`#group-dm .option-btn:nth-child(${data.dm==='1'?2:1})`));
                setOption('kfre-hf', data.hf, document.querySelector(`#group-hf .option-btn:nth-child(${data.hf==='1'?2:1})`));
                
                updateAllRisks(); 
                
                if(data.meds) {
                    Object.keys(data.meds).forEach(key => {
                        const chk = document.getElementById(key);
                        if(chk && chk.parentElement.style.display !== 'none') {
                            chk.checked = data.meds[key];
                            if(chk.checked) chk.parentElement.classList.add('equipped');
                        }
                    });
                    updateStatusAndAdvice();
                }
            } catch(e) { console.error(e); }
        }
    }
    function clearUserData() { localStorage.removeItem(STORAGE_KEY); location.reload(); }
    
    const origUpdate = updateAllRisks;
    updateAllRisks = function() { origUpdate(); saveUserData(); }
    const origToggle = toggleEquip;
    toggleEquip = function(el, id) { origToggle(el, id); saveUserData(); }
    window.addEventListener('load', loadUserData);

    // Quiz Data
    const quizPool = [
        {q:"Có được ăn Khế không?", a:[{t:"Không",c:true},{t:"Được",c:false}], exp:"Khế chứa độc tố thần kinh."},
        {q:"Cân nặng mỗi ngày?", a:[{t:"Có, bắt buộc",c:true},{t:"Không cần",c:false}], exp:"Phát hiện phù nề suy tim sớm."}
    ];
    let qIdx=0, score=0;
    function initQuiz() { qIdx=0; score=0; document.getElementById('quiz-area').classList.remove('hidden'); document.getElementById('quiz-score').classList.add('hidden'); renderQ(); }
    function renderQ() {
        if(qIdx>=quizPool.length) { document.getElementById('quiz-area').classList.add('hidden'); document.getElementById('quiz-score').classList.remove('hidden'); document.getElementById('final-score').innerText=score; return; }
        const q=quizPool[qIdx];
        document.getElementById('quiz-question').innerText=q.q;
        const div=document.getElementById('quiz-options'); div.innerHTML='';
        q.a.forEach(opt=>{
            const b=document.createElement('div'); b.className='quiz-option'; b.innerText=opt.t;
            b.onclick=()=>{
                if(opt.c) { b.classList.add('correct'); score+=50; } else b.classList.add('wrong');
                setTimeout(nextQ, 1000);
            };
            div.appendChild(b);
        });
    }
    function nextQ() { qIdx++; renderQ(); }

</script>
</body>
</html>
