function extract(content) {
    // Взимаме параграф по ид
    let text = document.getElementById("content").textContent;

    // Регекс
    let pattern = /[(](?<word>[A-Z a-z]+)[)]/g;

    let resultArr = [];

    // Търсим в параграфа за матч
    let match = pattern.exec(text);

    // Докато имаме матч добавяме в масива
    while (match) {
        resultArr.push(match.groups.word);

        // Взимаме нов матч
        match = pattern.exec(text);
    }


    // Връщаме резултатите разделени със запетая
    return resultArr.join(", ");
}