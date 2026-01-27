// data_en.js - English Database

const medDB = {
    'ras': { level: 'g', title: '✅ Basic Defense (ACEi/ARB)', desc: 'Fundamental medication for kidney and heart protection. A slight eGFR dip initially is normal.' },
    'arni': { level: 'g', title: '🏆 Dual Protection (ARNI)', desc: 'Top choice for Heart Failure! Protects both heart and kidneys, significantly reducing hospitalization risk.' },
    'bb': { level: 'g', title: '❤️ Heart Shield (Beta-blocker)', desc: 'Reduces heart workload, making the heartbeat slower and stronger.' },
    'panadol': { level: 'g', title: '✅ Relatively Safe (Acetaminophen)', desc: 'Panadol ingredient. Safe for kidneys at recommended doses.' },
    'mycin': { level: 'r', title: '⚠️ High Risk (Aminoglycosides)', desc: 'Some antibiotics are nephrotoxic. Always inform doctors of your kidney status.' },
    'diuretic': { level: 'y', title: '🟡 Caution (Diuretics)', desc: 'Helps with edema, but must be paused during dehydration (Sick Day Rules).' },
    'glp1': { level: 'g', title: '✅ Glucose & Heart (GLP-1 RA)', desc: 'Triple benefit: Blood sugar control, weight loss, and heart/kidney protection.' },
    'metformin': { level: 'y', title: '🟡 Dose Adjustment (Metformin)', desc: 'Stop if eGFR < 30; Reduce dose if eGFR 30-45.' },
    'nsaid': { level: 'r', title: '🛑 AVOID (NSAIDs)', desc: 'Strong painkillers. A major kidney killer! Can cause acute kidney injury.' },
    'mra_old': { level: 'g', title: '🧤 Classic MRA (Spironolactone)', desc: 'Standard Heart Failure therapy (GDMT). Watch for potassium levels and gynecomastia.' },
    'ns_mra': { level: 'g', title: '💍 Novel ns-MRA (Finerenone)', desc: 'Designed for Diabetic Kidney Disease. Lower hyperkalemia risk than classic MRAs, anti-inflammatory.' },
    'sglt2': { level: 'g', title: '✅ Core Savior (SGLT2i)', desc: 'Key pillar for Heart Failure & CKD. Strongly recommended by KDIGO and Heart Guidelines.' },
    'statins': { level: 'g', title: '✅ Recommended (Statins)', desc: 'Lipid-lowering. Prevents stroke and cardiovascular events.' },
    'contrast': { level: 'r', title: '⚠️ High Risk (Contrast Media)', desc: 'Iodine-based contrast media can cause acute kidney injury.' },
    'enema': { level: 'y', title: '🟡 Inform Doctor (Enema)', desc: 'Sodium phosphate enemas can damage kidneys.' },
    'herbal': { level: 'r', title: '🛑 AVOID (Herbal Medicine)', desc: 'Unknown sources may contain heavy metals or aristolochic acid.' }
};

const foodDB = {
    // ==========================================
    // 🍚 I. Staples
    // ==========================================
    // --- 🟢 Green ---
    'rice': { n: 'White Rice', c: 'staple', t: '🟢 Green', tags: ['low_p'], d: 'Low Phosphorus/Potassium staple. (100g: Na 2/K 40/P 39 mg)' },
    'winter_noodle': { n: 'Glass Noodles (Dong Fen)', c: 'staple', t: '🟢 Green', tags: ['low_n'], d: '【Low-Nitrogen Starch】Very low protein, great for energy boost. (100g: Na 10/K 13/P 43 mg)' },
    'rice_noodle': { n: 'Rice Noodles (Mi Fen)', c: 'staple', t: '🟢 Green', tags: ['low_n'], d: 'Lower P/K than wheat noodles. (100g: Na 224/K 5/P 224 mg)' },
    'sago': { n: 'Sago / Tapioca Balls', c: 'staple', t: '🟢 Green', tags: ['low_n'], d: '【Low-Nitrogen Starch】Good for desserts to boost energy without uremic toxins.' },
    'lotus': { n: 'Lotus Root Powder / Starch', c: 'staple', t: '🟢 Green', tags: ['low_n'], d: '【Low-Nitrogen Starch】Use for thickening or drinks to increase calorie intake.' },
    'radish_cake': { n: 'Radish Cake', c: 'staple', t: '🟢 Green', tags: [], d: 'Relatively low P/K dim sum. Watch out for sodium in dipping sauces.' },

    // --- 🟡 Yellow ---
    'brown_rice': { n: 'Brown/Purple Rice', c: 'staple', t: '🟡 Yellow', tags: ['high_p'], d: 'Healthy but high in Phosphorus. Limit intake for late-stage CKD.' },
    'sweet_potato': { n: 'Sweet Potato/Taro/Potato', c: 'staple', t: '🟡 Yellow', tags: ['high_k'], d: 'High Potassium roots. Please dice and blanch to remove potassium.' },
    'corn': { n: 'Corn', c: 'staple', t: '🟡 Yellow', tags: [], d: 'Medium Phosphorus. Count as a staple portion.' },
    'toast': { n: 'White/Whole Wheat Toast', c: 'staple', t: '🟡 Yellow', tags: ['high_na', 'high_p'], d: 'Contains salt and phosphates.' },
    'noodle_white': { n: 'White Wheat Noodles', c: 'staple', t: '🟡 Yellow', tags: ['high_na'], d: 'Salt added during production.' },

    // --- 🔴 Red ---
    'noodle_chicken': { n: 'Chicken Noodles (Inst.)', c: 'staple', t: '🔴 Red', tags: ['high_na'], d: '❌ Extremely High Sodium! Avoid.' },
    'noodle_oil': { n: 'Oil Noodles', c: 'staple', t: '🔴 Red', tags: ['high_na'], d: 'Contains alkaline/soda. Burdens the kidneys.' },
    'noodle_instant': { n: 'Instant Noodles', c: 'staple', t: '🔴 Red', tags: ['high_na', 'high_p', 'high_oil'], d: 'High Oil, Sodium, Phosphorus. The soup is a major hazard.' },
    'oat_flake': { n: 'Oat Flakes', c: 'staple', t: '🔴 Red', tags: ['high_p'], d: 'High Phosphorus grain. Risk of Calcium-Phosphorus imbalance.' },
    'dumpling_meat': { n: 'Dumplings/Potstickers', c: 'staple', t: '🔴 Red', tags: ['high_na', 'high_p'], d: 'High-fat processed filling. Often eaten with salty sauces.' },
    'bun_meat': { n: 'Meat Buns', c: 'staple', t: '🔴 Red', tags: ['high_na', 'high_p'], d: 'Both dough and filling contain sodium.' },
    'bread_process': { n: 'Sweet Buns/Pastries', c: 'staple', t: '🔴 Red', tags: ['high_p', 'high_oil'], d: 'Processed with high sugar/oil/phosphates.' },

    // ==========================================
    // 🍖 II. Protein
    // ==========================================
    // --- 🟢 Green ---
    'egg_white': { n: 'Egg White', c: 'protein', t: '🟢 Green', tags: [], d: 'Best protein source. Extremely low Phosphorus.' },
    'pork_lean': { n: 'Lean Pork', c: 'protein', t: '🟢 Green', tags: [], d: 'High quality protein. Trim fat before cooking.' },
    'chicken': { n: 'Chicken', c: 'protein', t: '🟢 Green', tags: [], d: 'High quality protein.' },
    'fish_tilapia': { n: 'Fish (Tilapia etc.)', c: 'protein', t: '🟢 Green', tags: [], d: 'High quality protein.' },
    'clam': { n: 'Clams', c: 'protein', t: '🟢 Green', tags: [], d: 'High Zinc. Sodium slightly high, do not drink the soup.' },
    'tofu_trad': { n: 'Traditional/Silken Tofu', c: 'protein', t: '🟢 Green', tags: [], d: 'Plant-based high quality protein.' },
    'soy_milk': { n: 'Soy Milk', c: 'protein', t: '🟢 Green', tags: ['high_p'], d: 'Good protein, but liquid absorbs fast. Drink in moderation.' },

    // --- 🟡 Yellow ---
    'beef': { n: 'Beef', c: 'protein', t: '🟡 Yellow', tags: [], d: 'Iron-rich but higher P/K.' },
    'duck': { n: 'Duck', c: 'protein', t: '🟡 Yellow', tags: [], d: 'Higher Potassium content.' },
    'shrimp': { n: 'Shrimp/Prawns', c: 'protein', t: '🟡 Yellow', tags: ['high_chol'], d: 'Higher Cholesterol and Purine.' },
    'oyster': { n: 'Oysters', c: 'protein', t: '🟡 Yellow', tags: ['high_na'], d: 'Higher Sodium and Purine.' },

    // --- 🔴 Red ---
    'egg_yolk': { n: 'Egg Yolk', c: 'protein', t: '🔴 Red', tags: ['high_p'], d: '❌ Very high Phosphorus! (515mg/100g). Remove yolk.' },
    'organs': { n: 'Organs (Liver/Kidney)', c: 'protein', t: '🔴 Red', tags: ['high_p', 'high_chol'], d: 'High Phosphorus & Cholesterol. Absolute AVOID.' },
    'sausage': { n: 'Sausage/Hot Dog', c: 'protein', t: '🔴 Red', tags: ['high_na', 'high_p'], d: '❌ Sodium/Phosphorus bomb.' },
    'ham': { n: 'Ham/Bacon', c: 'protein', t: '🔴 Red', tags: ['high_na'], d: 'High Sodium processed meat.' },
    'meat_floss': { n: 'Meat Floss', c: 'protein', t: '🔴 Red', tags: ['high_na', 'high_sugar'], d: '❌ Hidden high sodium trap!' },
    'meatball': { n: 'Meatballs/Fishballs', c: 'protein', t: '🔴 Red', tags: ['high_na', 'high_p'], d: 'Processed paste contains phosphates.' },
    'tempura': { n: 'Tempura/Fish Cake', c: 'protein', t: '🔴 Red', tags: ['high_na'], d: 'Processed fish paste.' },
    'dairy': { n: 'Milk/Yogurt/Powder', c: 'protein', t: '🔴 Red', tags: ['high_p'], d: '❌ Very high Phosphorus. Avoid if P is high.' },
    'cheese': { n: 'Cheese', c: 'protein', t: '🔴 Red', tags: ['high_p', 'high_na'], d: 'Concentrated Phosphorus and Sodium.' },
    'tofu_processed': { n: 'Bai Ye Tofu (Processed)', c: 'protein', t: '🔴 Red', tags: ['high_oil', 'high_na'], d: 'Not real tofu! Mostly fat and starch. High calorie trap.' },
    'egg_iron': { n: 'Preserved Eggs', c: 'protein', t: '🔴 Red', tags: ['high_na'], d: 'Iron/Salted eggs are very high in Sodium.' },
    'fish_dried': { n: 'Dried Fish/Shrimp', c: 'protein', t: '🔴 Red', tags: ['high_p', 'high_na', 'gout'], d: '❌ Extremely high Calcium/Phosphorus/Sodium.' },

    // ==========================================
    // 🥦 III. Vegetables
    // ==========================================
    // --- 🟢 Green ---
    'cabbage': { n: 'Cabbage', c: 'veg', t: '🟢 Green', tags: [], d: 'Low Potassium. Safe to eat.' },
    'onion': { n: 'Onion', c: 'veg', t: '🟢 Green', tags: [], d: 'Low Potassium. Good for flavor.' },
    'loofah': { n: 'Loofah/Winter Melon', c: 'veg', t: '🟢 Green', tags: [], d: 'High water content, low Potassium.' },
    'cucumber': { n: 'Cucumber', c: 'veg', t: '🟢 Green', tags: [], d: 'Low Potassium and refreshing.' },
    'fungus': { n: 'Wood Ear Fungus', c: 'veg', t: '🟢 Green', tags: [], d: 'High fiber, medium Potassium.' },

    // --- 🟡 Yellow ---
    'spinach': { n: 'Spinach', c: 'veg', t: '🟡 Yellow', tags: ['high_k'], d: 'High Potassium. MUST cut and blanch before cooking.' },
    'amaranth': { n: 'Amaranth', c: 'veg', t: '🟡 Yellow', tags: ['high_k'], d: 'High Potassium vegetable.' },
    'water_spinach': { n: 'Water Spinach', c: 'veg', t: '🟡 Yellow', tags: ['high_k'], d: 'High Potassium vegetable.' },
    'broccoli': { n: 'Broccoli', c: 'veg', t: '🟡 Yellow', tags: ['high_k'], d: 'Medium-High Potassium.' },
    'mushroom': { n: 'Mushrooms', c: 'veg', t: '🟡 Yellow', tags: ['high_k'], d: 'Mushrooms are generally high in Potassium.' },
    'tomato_veg': { n: 'Tomato (Cooked)', c: 'veg', t: '🟡 Yellow', tags: ['high_k'], d: 'Both large and cherry tomatoes are high in Potassium.' },
    'bamboo': { n: 'Bamboo Shoots', c: 'veg', t: '🟡 Yellow', tags: ['high_k'], d: 'High Potassium.' },

    // --- 🔴 Red ---
    'veg_pickled': { n: 'Pickles/Sauerkraut', c: 'veg', t: '🔴 Red', tags: ['high_na'], d: '❌ Sodium Overload! Absolute avoid.' },
    'veg_soup': { n: 'Vegetable/Hotpot Soup', c: 'veg', t: '🔴 Red', tags: ['high_k'], d: 'Potassium dissolves in soup. Do NOT drink.' },
    'seaweed': { n: 'Seaweed/Kelp', c: 'veg', t: '🔴 Red', tags: ['high_p', 'high_k'], d: 'Dried seaweed is extremely high in K and P.' },

    // ==========================================
    // 🍎 IV. Fruits
    // ==========================================
    // --- 🟢 Green ---
    'apple': { n: 'Apple', c: 'fruit', t: '🟢 Green', tags: [], d: 'Low Potassium.' },
    'pineapple': { n: 'Pineapple', c: 'fruit', t: '🟢 Green', tags: [], d: 'Low Potassium.' },
    'grape': { n: 'Grapes', c: 'fruit', t: '🟢 Green', tags: [], d: 'Medium Potassium.' },
    'pear': { n: 'Asian Pear', c: 'fruit', t: '🟢 Green', tags: [], d: 'Low Potassium.' },
    'wax_apple': { n: 'Wax Apple', c: 'fruit', t: '🟢 Green', tags: [], d: 'Low Potassium.' },
    'watermelon': { n: 'Watermelon', c: 'fruit', t: '🟢 Green', tags: [], d: 'Low Potassium but high water. Watch fluid intake.' },

    // --- 🔴 Red ---
    'starfruit': { n: 'Starfruit', c: 'fruit', t: '🔴 Red', tags: ['toxin'], d: '❌ AVOID! Contains neurotoxin that CKD patients cannot filter.' },
    'banana': { n: 'Banana', c: 'fruit', t: '🔴 Red', tags: ['high_k'], d: 'High Potassium representative.' },
    'kiwi': { n: 'Kiwi', c: 'fruit', t: '🔴 Red', tags: ['high_k'], d: 'High Potassium.' },
    'durian': { n: 'Durian', c: 'fruit', t: '🔴 Red', tags: ['high_k'], d: 'Very High Potassium.' },
    'tomato_fruit': { n: 'Cherry Tomato', c: 'fruit', t: '🔴 Red', tags: ['high_k'], d: 'High Potassium.' },
    'guava': { n: 'Guava', c: 'fruit', t: '🔴 Red', tags: ['high_k'], d: 'Medium-High Potassium.' },
    'melon': { n: 'Melons', c: 'fruit', t: '🔴 Red', tags: ['high_k'], d: 'Melons are usually high in Potassium.' },
    'dried_fruit': { n: 'Dried Fruits/Raisins', c: 'fruit', t: '🔴 Red', tags: ['high_k'], d: 'Concentrated Potassium. Avoid.' },
    'fruit_juice': { n: 'Fruit Juice', c: 'fruit', t: '🔴 Red', tags: ['high_k'], d: 'Instant Potassium and sugar spike.' },

    // ==========================================
    // 🍦 V. Snacks/Seasoning
    // ==========================================
    // --- 🟢 Green ---
    'oil_plant': { n: 'Plant Oils (Olive/Tea)', c: 'snack', t: '🟢 Green', tags: [], d: '【Energy Boost】P/K free high quality calories.' },
    'sugar_candy': { n: 'Candy/Honey', c: 'snack', t: '🟢 Green', tags: [], d: '【Energy Boost】Protein-free calories. Diabetics caution.' },
    'spice_nat': { n: 'Garlic/Ginger/Chili', c: 'snack', t: '🟢 Green', tags: [], d: 'Natural spices. Low Na/K/P. Best substitute for salt.' },
    'vinegar': { n: 'Vinegar', c: 'snack', t: '🟢 Green', tags: [], d: 'Low sodium seasoning.' },

    // --- 🔴 Red ---
    'low_na_salt': { n: 'Low-Sodium Salt', c: 'snack', t: '🔴 Red', tags: ['high_k'], d: '❌ DANGER! Replaces Sodium with Potassium. Fatal risk for CKD.' },
    'salt': { n: 'Table Salt', c: 'snack', t: '🔴 Red', tags: ['high_na'], d: 'High Sodium. Limit strictly.' },
    'soy_sauce': { n: 'Soy Sauce', c: 'snack', t: '🔴 Red', tags: ['high_na'], d: 'High Sodium.' },
    'ketchup': { n: 'Ketchup', c: 'snack', t: '🔴 Red', tags: ['high_na'], d: 'High Sodium and Sugar.' },
    'chicken_essence': { n: 'Chicken Essence', c: 'snack', t: '🔴 Red', tags: ['high_na', 'high_k', 'high_p'], d: 'Concentrated Na/K/P and Purines.' },
    'nuts': { n: 'Nuts/Seeds', c: 'snack', t: '🔴 Red', tags: ['high_p'], d: 'High Phosphorus snack.' },
    'chocolate': { n: 'Chocolate', c: 'snack', t: '🔴 Red', tags: ['high_p', 'high_k'], d: 'High Phosphorus and Potassium.' },
    'coke': { n: 'Cola/Soda', c: 'snack', t: '🔴 Red', tags: ['high_p'], d: 'Contains Inorganic Phosphorus (100% absorption). Major risk.' },
    'yeast': { n: 'Yeast/Brewer\'s Yeast', c: 'snack', t: '🔴 Red', tags: ['high_p'], d: 'Very high Phosphorus.' },
    'chips': { n: 'Potato Chips', c: 'snack', t: '🔴 Red', tags: ['high_na', 'high_oil'], d: 'High salt/oil junk food.' }
};

const foodCategories = {
    'all': 'All', 'staple': '🍚 Staples', 'protein': '🍖 Protein', 
    'veg': '🥦 Veggies', 'fruit': '🍎 Fruits', 'snack': '🍦 Snacks'
};