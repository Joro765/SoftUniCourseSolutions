function oddOccurrences(input) {

    // Create an object
    let obj = {};

    // Split the array by Space
    let data = input.split(" ");

    // Iterate the array
    for (const element of data) {
        // Проверка за число    
        if (Number(element) % Number(element) === 0) {
            if (obj.hasOwnProperty(element)) {
                obj[element] += 1;
            } else {
                obj[element] = 1;
            }
            // Значи е текст
        } else {
            // Конвертираме към lowercase за да сравним
            let text = element.toLowerCase();
            if (obj.hasOwnProperty(text)) {
                obj[text] += 1;
            } else {
                obj[text] = 1;
            }
        }
    }

    // Filter values of object - print odd values
    let filteredArray = Object.entries(obj).filter(a => a[1] % 2 != 0);

    // Buffer да държи изходните данни
    let buffer = ``;

    // Цикъл за пълнене на буфера
    for (const [key, value] of filteredArray) {
        buffer += `${key} `
    }

    console.log(buffer);

}


oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')