// i18n.js - 負責語言切換與文字對照

// 1. 目前語言狀態
let curLang = 'zh-TW'; // 預設中文

// 2. 翻譯字典 (Dictionary)
// 您可以在這裡慢慢補充食物或藥物的英文，沒寫到的就會自動顯示中文
const dict = {
    // --- 介面文字 (UI) ---
    "保腎護心助理": "Kidney Care Assistant",
    "心/腎/糖 智慧照護": "Heart / Kidney / Diabetes Care",
    "📊 風險評估與設定": "📊 Risk Assessment",
    "請輸入您的基本資料，系統將依據您的狀況 (慢性腎衰竭 / 糖尿病 / 心衰竭) 提供個人化的用藥與飲食建議。": "Please enter your profile. The system will provide personalized medication and diet advice based on your condition.",
    "🗑️ 清除紀錄 / 重設": "🗑️ Clear / Reset",
    "1. 年齡": "1. Age",
    "2. 性別": "2. Gender",
    "3. 腎絲球過濾率 (eGFR)": "3. eGFR",
    "4. 蛋白尿狀況 (UACR)": "4. Urine Protein (UACR)",
    "5. 是否有糖尿病 (DM)": "5. Diabetes (DM)",
    "6. 是否有心衰竭 (HF)": "6. Heart Failure (HF)",
    "7. 是否有心衰竭 (HF)": "7. Heart Failure (HF)", // 修正您原本可能的編號
    "請選擇年齡...": "Select Age...",
    "請選擇數值區間...": "Select Range...",
    "男": "Male", "女": "Female", "無": "No", "有": "Yes",
    "正常 (eGFR ≥ 90)": "Normal (≥ 90)",
    "第2期 (eGFR 60-89)": "Stage 2 (60-89)",
    "第3a期 (eGFR 45-59)": "Stage 3a (45-59)",
    "第3b期 (eGFR 30-44)": "Stage 3b (30-44)",
    "第4期 (eGFR 15-29)": "Stage 4 (15-29)",
    "第5期 (eGFR < 15)": "Stage 5 (< 15)",
    "👆 資料填寫完整後，結果將自動顯示": "👆 Fill in data to see results",
    "👇 您的專屬用藥與飲食建議已生成，<br>請點選下方選單切換查看。": "👇 Personalized advice ready. Check tabs below.",
    
    // --- 導航列 ---
    "首頁": "Home", "用藥": "Meds", "飲食": "Diet", "測驗": "Quiz", "諮詢": "Consult",
    
    // --- 食物/藥物類別與標籤 (範例) ---
    "🍚 主食": "🍚 Staple", "🍖 蛋豆魚肉": "🍖 Protein", 
    "🥦 蔬菜": "🥦 Veg", "🍎 水果": "🍎 Fruit", "🍦 點心/調味": "🍦 Snack",
    "🟢 綠燈": "🟢 Green", "🟡 黃燈": "🟡 Yellow", "🔴 紅燈": "🔴 Red",
    "全部": "All"
};

// 3. 核心翻譯函式 (t)
// 用法：t("中文內容") -> 如果是英文模式且字典有字，回傳英文；否則回傳原中文
function t(text) {
    if (curLang === 'en' && dict[text]) {
        return dict[text];
    }
    return text;
}

// 4. 切換語言函式
function changeLang(lang) {
    curLang = lang;
    
    // A. 更新純靜態文字 (尋找所有套用 data-t 屬性的元素)
    // 稍後我們要在 HTML 裡把想翻譯的字加上 data-t="原文"
    document.querySelectorAll('[data-t]').forEach(el => {
        const originalText = el.getAttribute('data-t');
        el.innerHTML = t(originalText); // 使用 innerHTML 支援 <br>
    });

    // B. 更新輸入框 Placeholder
    const foodInput = document.getElementById('food-search-input');
    if(foodInput) {
        foodInput.placeholder = (lang === 'en') ? "Search food..." : "輸入關鍵字 (如: 香蕉)...";
    }

    // C. 重新執行邏輯 (讓動態產生的建議也跟著翻譯)
    if (typeof updateAllRisks === 'function') updateAllRisks();
    if (typeof initFoodSearch === 'function') initFoodSearch();
}