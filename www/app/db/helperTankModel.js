var row, out, price, priceType, data, i;
data = [
    {data: [8, 0, "Hydrus", 1, 2, 1, 1, 250, 3, 48, 3, 550, 3, 115, 3, 1, 0, 5000, 0, 0, 0, 0, 6, 1, 0, 10, "Medium tank, sloped armour (for better protection) and carried a long-barreled 75 mm gun", "iv", "7.139", "3.335", "0, 0, -0.5", "0, 2.613, 5.584", "iv", "", "", 1, 7, 0, "", "", 1, 1, 0, 0.65, 0.2, 502, 0.6, 0.79]},
    {data: [10, 0, "Dorado", 2, 2, 2, 1, 350, 3.25, 55, 1.9, 600, 2.4, 125, 3, 2, 0, 20000, 0, 2, 0, 0, 8, 1, 0, 10, "Medium self-propelled" +
                                                                                                                   " artillery, fire within seconds and resume movement immediately, M126 155 mm Howitzer", "ft17", "8.487", "3.041", "0, 0, 1.09", "0, 2.6, 2.927", "ft17", "", "", 1, 7, 0, "", "", 1, 1, 0, 0.55, 0.29, 750, 0.62, 0.99]},
    {data: [4, 0, "Draco", 3, 2, 3, 1, 400, 3.25, 68, 3.65, 560, 3, 110, 1, 1, 20, 0, 0, 0, 0, 0, 10, 1, 0, 10, "Medium tank, fitted with the powerful British 17 pounder anti-tank gun", "m4", "7.442", "3.297", "0, 0, 0", "0, 2.533, 6.091", "m4", "", "", 1, 7, 0, "", "", 1.5, 1, 0, 0.4, 0.2, 815, 0.65, 0.98]},
    {data: [13, 0, "Ursa", 4, 3, 4, 1, 500, 3, 80, 3.25, 550, 2.25, 105, 1, 1, 0, 100000, 0, 2, 0, 0, 12, 2, 0, 20, "Heavy tank, laser defence system damage enemy tank's optics temporarily, modified autoloader, increased armor on the turret, cooled diesel engine", "t34", "7.611", "3.717", "0, 0, 0.842", "0, 2.561, 7.118", "t34", "", "", 1, 7, 0, "", "", 1, 1, 0, 0.4, 0.34, 943, 0.68, 0.99]},
    {data: [15, 0, "Taurus", 5, 3, 5, 1, 550, 3, 84, 2.5, 620, 1.25, 115, 1.25, 1, 0, 0, 0, 0, 0, 0, 12, 2, 0, 20, "", "tiger", "6.468", "3.498", "0, 0, 0", "0, 2.273, 6.024", "tiger", "", "", 1, 1, 64, "", "", 1, 1, 0, 0.4, 0.44, 1033, 0.72, 0.94]},
    {data: [2, 0, "Apus", 5, 3, 5, 1, 550, 3, 84, 2.5, 620, 1.25, 115, 1.25, 1, 0, 0, 0, 0, 0, 0, 12, 2, 0, 20, " ", "ii", "7.759", "3.621", "0, 0, 0.53", "0, 2.858, 5.715", "ii", " ", " ", 1, 6, 128, "", "", 1.2, 1, 0, 0.4, 0.44, 1033, 0.72, 0.94]},
    {data: [6, 0, "Sirius", 6, 4, 6, 1, 600, 3, 100, 4, 550, 2.25, 86, 1.15, 1, 85, 0, 0, 2, 0, 0, 15, 2, 0, 20, "Medium self-propelled artillery, fire within seconds and resume movement immediately, M126 155 mm Howitzer", "zx", "8.802", "3.724", "0, 0, -2.0", "0, 2.732, 9.48", "zx", "", "", 1, 7, 0, "", "", 1, 1, 0, 0.32, 0.4, 1140, 0.75, 1.18]},
    {data: [14, 0, "Aquila", 7, 5, 7, 1, 600, 3.2, 110, 3.2, 600, 2.25, 95, 1, 1, 0, 1000000, 0, 4, 0, 0, 17, 3, 0, 30, "Heavy tank, laser defence system damage enemy tank's optics temporarily, modified autoloader, increased armor on the turret, cooled diesel engine", "a6", "8.915", "3.907", "0, 0, 0.346", "0, 1.930, 6.601", "a6", "", "", 1, 7, 0, "", "", 1, 1, 0, 0.42, 0.5, 1183, 0.78, 1.02]},
    {data: [7, 0, "Lupus", 8, 5, 8, 1, 650, 3.25, 135, 3, 580, 3.25, 90, 1, 1, 375, 0, 0, 4, 0, 0, 19, 3, 0, 30, "Heavy main battle tank,rear-mounted Continental air-cooled radial engines and a front sprocket drive,fitted with 76 mm M1A1 gun", "tc", "8.969", "4.111", "0, 0, -1.0", "0, 2.524, 8.789", "tc", "", "", 1, 7, 0, "", "", 1, 1, 0, 0.42, 0.53, 1278, 0.83, 0.95]},
    {data: [11, 0, "Corvus", 9, 6, 9, 1, 700, 2.9, 140, 3, 620, 2, 95, 1, 1, 600, 0, 0, 4, 0, 0, 24, 3, 0, 30, "Heavy tank, laser defence system damage enemy tank's optics temporarily, modified autoloader, increased armor on the turret, cooled diesel engine", "m1a1", "8.018", "3.861", "0, 0, 0.446", "0, 1.910, 6.972", "m1a1", "", "", 1, 7, 0, "", "", 1, 1, 0, 0.42, 0.57, 1445, 0.86, 1]},
    {data: [1, 18, "Lynx", 10, 7, 10, 1, 800, 3, 150, 4, 620, 2, 92, 1, 1, 1000, 0, 0, 6, 0, 0, 27, 4, 0, 40, "Medium tank, steel and composite armour, capable of firing anti-tank guided missiles,featured explosive reactive armour", "t72", "9.106", "4.796", "0, 0, -0.048", "0, 2.541, 6.636", "t72", "", "", 1, 7, 0, "", "", 1, 1, 0, 0.44, 0.63, 1558, 0.96, 1.02]},
    {data: [16, 19, "Vulpecula", 11, 8, 11, 1, 800, 3.5, 130, 4.35, 600, 1.5, 95, 1, 1, 0, 5000000, 0, 6, 0, 0, 29, 4, 0, 40, "", "t90", "7.365", "3.754", "0, 0, 0", "0, 2.107, 5.353", "t90", "", "", 1, 7, 0, "", "", 1, 1, 0, 0.44, 0.6, 1468, 1.07, 1.05]},
    {data: [5, 20, "Lacerta", 12, 9, 12, 1, 1050, 3.5, 188, 3.5, 640, 1.2, 100, 1.5, 1, 2250, 0, 0, 6, 0, 0, 32, 4, 0, 40, "Heavy tank, rapid repair of battle damage,two machine guns for anti-infantry defense,60 mm mortar that can be loaded and fired internally", "merkava", "7.57", "4.005", "0, 0, -0.288", "0, 2.132, 5.698", "merkava", "", "", 1, 7, 0, "", "", 1, 1, 0, 0.44, 0.63, 2137, 1.08, 1.05]},
    {data: [18, 1, "Super_Lynx", 13, 12, 16, 1, 2250, 2.69, 366, 4.35, 650, 1.2, 95, 1, 1, 0, 0, 0, 0, 0, 0, 21, 4, 1, 41, "", "t72s", "9.106", "4.796", "0, 0, -0.048", "0, 2.541, 6.636", "t72s", "", "", 1, 7, 0, "", "", 1, 1, 172800, 0.65, 0.72, 3661, 1.69, 0.9]},
    {data: [19, 16, "Super_Vulpecula", 14, 12, 17, 1, 2150, 2.85, 345, 5, 670, 1.35, 96, 1, 1, 0, 0, 0, 0, 0, 0, 21, 4, 1, 41, "", "t90_s", "7.365", "3.754", "0, 0, 0", "0, 2.107, 5.353", "t90_s", "", "", 1, 7, 0, "", "", 1, 1, 172800, 0.65, 0.72, 3520, 1.85, 0.91]},
    {data: [20, 5, "Super_Lacerta", 15, 13, 18, 1, 2450, 3, 425, 4.85, 690, 1.2, 105, 1.5, 1, 0, 0, 0, 0, 0, 0, 21, 4, 1, 41, "", "merkava_s", "7.57", "4.005", "0, 0, -0.288", "0, 2.132, 5.698", "merkava_s", "", "", 1, 7, 0, "", "", 1, 1, 259200, 0.8, 0.85, 4402, 1.9, 0.88]},
    {data: [9, 21, "Scorpius", 16, 10, 13, 1, 1350, 3.88, 250, 5.5, 660, 1, 95, 1, 1, 4500, 0, 0, 9, 0, 0, 36, 5, 0, 50, "Heavy tank, laser defence system damage enemy tank's optics temporarily, modified autoloader, increased armor on the turret, cooled diesel engine", "t99", "8.508", "4.008", "0, 0, 0", "0, 2.195, 7.523", "t99", "", "", 1, 7, 0, "", "", 1, 1, 0, 0.45, 0.63, 2703, 1.35, 1.05]},
    {data: [17, 22, "Pavo", 17, 11, 14, 1, 1250, 3.35, 200, 3.5, 600, 1, 135, 1, 2, 4500, 0, 0, 9, 0, 0, 36, 5, 0, 50, "", "c1", "8.7747", "4.2592", "0, 0, 0.586", "0, 2.185, 7.973", "c1", "", "", 1, 7, 0, "", "", 1, 1, 0, 0.45, 0.63, 2643, 1.38, 0.92]},
    {data: [12, 23, "Monoceros", 18, 12, 15, 1, 1755, 4, 300, 5.8, 620, 1, 90, 1, 1, 4500, 0, 0, 0, 1, 1, 36, 5, 0, 50, "Heavy tank, laser defence system damage enemy tank's optics temporarily, modified autoloader, increased armor on the turret, cooled diesel engine", "t95", "8.526", "4.847", "0, 0, 0", "0, 2.242, 9.314", "t95", "", "", 1, 7, 0, "", "", 1, 1, 0, 0.45, 0.63, 3047, 1.6, 0.99]},
    {data: [21, 9, "Super_Scorpius", 19, 14, 19, 1, 2900, 3.2, 488, 5.5, 720, 1.2, 98, 1.45, 1, 0, 0, 0, 0, 0, 0, 24, 5, 1, 51, "", "t99_s", "8.508", "4.008", "0, 0, 0", "0, 2.195, 7.523", "t99_s", "", "", 1, 7, 0, "", "", 1, 1, 432000, 0.85, 1.3, 5045, 2.05, 0.93]},
    {data: [22, 17, "Super_Pavo", 20, 14, 20, 1, 2650, 2.95, 366, 4.3, 700, 1, 125, 1.25, 2, 0, 0, 0, 0, 0, 0, 24, 5, 1, 51, "", "c1_s", "8.7747", "4.2592", "0, 0, 0.586", "0, 2.185, 7.973", "c1_s", "", "", 1, 7, 0, "", "", 1.2, 1, 432000, 0.85, 1.3, 4728, 2.14, 0.92]},
    {data: [23, 12, "Super_Monoceros", 21, 15, 21, 1, 3600, 3.65, 566, 6.6, 670, 1, 95, 1.15, 1, 0, 0, 0, 0, 0, 0, 24, 5, 1, 51, "", "t95_s", "8.526", "4.847", "0, 0, 0", "0, 2.242, 9.314", "t95_s", "", "", 1, 7, 0, "", "", 1, 1, 432000, 0.85, 1.3, 6136, 2.3, 1]}
];
out = [];
for (i = 0; i < data.length; i += 1) {
    price = 0;
    priceType = '';row = data[i].data;
    out.push('{');
    out.push('modelName: "' + row[2] + '",');
    out.push("image: '',");
    out.push('modelId: ' + row[0] + ',');
    out.push('linkedModelId: ' + row[1] + ',');
    out.push('serialNumber: ' + row[3] + ',');
    if (row[16] != 0) {
        priceType = '(G)';
        price = row[16];
    } else {
        priceType = '($)';
        price = row[17];
    }

    out.push('price: ' + price + ',');
    out.push('priceType: "' + priceType + '",');
    out.push('rankRequired: ' + row[19] + ',');
    out.push('levels: ' + row[22] + ',');
    out.push('tier: ' + row[23] + ',');
    out.push('groupId: ' + row[25] + ',');
    out.push('combatEffectiveness: ' + row[45] + ',');
    out.push('baseStats: {');
    out.push('armor: ' + row[7] + ',');
    out.push('attack: ' + row[9] + ',');
    out.push('movement: ' + row[11] + ',');
    out.push('fireSpeed: ' + row[13]);
    out.push('},');
    out.push('calculations: {');
    out.push('armor: ' + row[8] + ',');
    out.push('attack: ' + row[10] + ',');
    out.push('movement: ' + row[12] + ',');
    out.push('fireSpeed: ' + row[14] + ',');
    out.push('upgradeTime: ' + row[43] + ',');
    out.push('upgradePrice: ' + row[44] + ',');
    out.push('combat: ' + row[46] + ',');
    out.push('fire: ' + row[47] + ',');
    out.push('isSuperTank: ' + row[24]);
    out.push('}');
    out.push('},');
}
console.log(out.join(''));