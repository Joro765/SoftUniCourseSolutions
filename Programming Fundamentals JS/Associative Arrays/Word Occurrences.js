function wordOccurrences(data) {

    let result = new Map();

    for (const words of data) {
        let word = words.split(", "); // Взима всяка дума
        word = String(word);
        if (result.has(word)) {
            result.set(word, result.get(word) + 1)  // Ако думата я има +1
        } else {
            result.set(word, 1) // Ако думата я няма я добавя
        }
    }

    // Сортиране на MAP 
    let sortedArray = new Map([...result.entries()].sort((a, b) => b[1] - a[1]));

    // Обхождане на MAP
    for (const [key, value] of sortedArray.entries()) {
        console.log(`${key} -> ${value} times`);

    }

}

wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"])