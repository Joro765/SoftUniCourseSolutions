// Създаваме обект
let zone = {}

// Добавяме стойности в Обекта
zone["B"] = 134;
zone["A"] = 72;
zone["E"] = 90;
zone["C"] = 27;
zone["M"] = 12;
zone["L"] = 14;


// Създаваме масив и му подаваме ключовете на обекта сортирани
let sortedArray = Object.keys(zone).sort((a, b) => a.localeCompare(b));


// Итерираме през сортирания масив по ключ и го подаваме на обекта за да вземем value
for (const key of sortedArray) {
    console.log(`${key}: ${zone[key]}`);

}