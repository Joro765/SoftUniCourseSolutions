function countStrings(str, word) {

    let count = 0;

    // Разбиваме думата на масив от елементи
    str = str.split(" ");


    // Сравняваме всеки елемент на масива с думата, която търсим
    for (const element of str) {
        if (element === word) {
            count++;
        }
    }

    console.log(count);

}

countStrings('This is a word and it also is a sentence',
    'is')