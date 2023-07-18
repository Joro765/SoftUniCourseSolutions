function race(data) {

    // Създавам си обект да държи инфото
    let people = {};

    // Масив от хората
    let namesArray = data.shift().split(", ");

    // Регекс за букви
    let patternName = /[A-Za-z]/g;

    // Регекс за цифри
    let patternDistance = /\d{1}/g;

    // Индекс 0 и взимане на команда за цикъла
    let index = 0;
    let command = data[index];

    // Взимане на резултати от регексите за първи ред - първа команда
    let matchName = patternName.exec(command);
    let matchDistance = patternDistance.exec(command);



    while (command != "end of race") {
        let name = "";
        let distance = 0;

        // Докато има мач попълвам буква по буква името
        while (matchName) {
            name += matchName[0];
            matchName = patternName.exec(command);
        }

        // Докато има мач попълвам цифра по цифра дистанцията
        while (matchDistance) {
            distance += Number(matchDistance[0]);
            matchDistance = patternDistance.exec(command);
        }

        // Ако човекът съществува в масива добавям в обект
        if (namesArray.includes(name)) {
            if (people.hasOwnProperty(name)) {
                people[name] += distance;
            } else {
                people[name] = distance;
            }
        }


        // Вдигам индекса и взимам следваща команда
        index++;
        command = data[index];

        // Изпълнявам регексите на новата команда за да мина през всички редове
        matchName = patternName.exec(command);
        matchDistance = patternDistance.exec(command);

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