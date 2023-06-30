// Създаваме обект
let zone = {}

// Добавяме стойности в Обекта
zone["B"] = 134;
zone["A"] = 72;
zone["E"] = 90;
zone["C"] = 27;
zone["M"] = 12;
zone["L"] = 14;


// Създаваме масив и му подаваме key-value на обекта сортирани
let sortedArray = Object.entries(zone).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

// Създаваме масив и му подаваме key-value. Филтрираме по ключ
let filteredArray = Object.entries(zone).filter(([key, value]) => key === "A" || key === "B" || key === "C")


// Итерираме през сортирания масив по ключ и го подаваме на обекта за да вземем value
for (const [key, value] of sortedArray) {
    console.log(`${key}: ${value}`);

}


for (const [key, value] of filteredArray) {
    console.log(`${key} -> ${value}`);

}