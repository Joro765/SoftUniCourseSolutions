function race(data) {

    // Създавам си обект да държи инфото
    let people = {};

    // Масив от хората
    let namesArray = data.shift().split(", ");

    // Регекс за букви
    let patternName = /[A-Za-z]/g;
    // Регекс за цифри
    let patternDistance = /\d{1}/g;

    // Взимаме всеки ред с шифт за да не пишем индекс++
    let currentLine = data.shift();


    while (currentLine != "end of race") {

        // Взимане на регекс с мач - връща масив от резултaт и не е нужно да се ползва в цикъл
        let currentName = currentLine.match(patternName).join("");
        let distance = 0;

        // Взимане на регекс с мач - връща масив от резултaт и не е нужно да се ползва в цикъл
        let currentDistance = currentLine.match(patternDistance);
        currentDistance.map(d => distance += Number(d));


        if (namesArray.includes(currentName)) {
            if (people.hasOwnProperty(currentName)) {
                people[currentName] += distance
            } else {
                people[currentName] = distance
            }
        }

        // Взимаме си следващия ред както с индекс++
        currentLine = data.shift();

    }

    // Сортировка по дистанция
    let sortedArray = Object.entries(people).sort((a, b) => b[1] - a[1]);

    // Вадя последния човек от масива докато не останат 3ма
    while (sortedArray.length > 3) {
        sortedArray.pop();
    }


    // Принтиране на 3мата победители
    let count = 0;

    for (const element of sortedArray) {
        count++;

        if (count === 1) {
            console.log(`1st place: ${element[0]}`);
        } else if (count === 2) {
            console.log(`2nd place: ${element[0]}`);
        } else {
            console.log(`3rd place: ${element[0]}`);
        }
    }


}


race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])