function replaceRepeatingChars(text) {

    // Създаваме нов масив и сравняваме последния елемент с всеки нов Ако го няма добавяме ако го има пропускаме
    let textArray = text.split("");
    let result = [];


    for (const element of textArray) {
        if (result[result.length - 1] !== element) {
            result.push(element)
        }
    }

    console.log(result.join(""));


}


replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')