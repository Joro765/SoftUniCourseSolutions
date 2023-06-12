function train(data) {
    let wagons = data[0].split(" ").map(Number); // Split прави от стринг - масив като разделя по спейс. Мап превръща елементите в числа.
    let wagonMaxCapacity = Number(data[1]);

    for (let index = 2; index < data.length; index++) { // Започваме цикъла с индекс 2
        let command = data[index].split(" ");   // Създаваме масив за всеки ред

        if (command[0] === "Add") { // Проверяваме дали всеки ред съдържа команда
            wagons.push(Number(command[1]));    // Ако съдържа обработваме стойността на идекс 1 
        } else {
            let passangers = Number(command[0]) // Ако не съдържа си взимаме едната стойност само.
            for (let i = 0; i < wagons.length; i++) {
                if (wagonMaxCapacity - wagons[i] >= passangers) {
                    wagons[i] += passangers;
                    break;      // Брейкваме за да не модифицираме и другите елементи.
                }
            }
        }
    }

    console.log(wagons.join(" "));
}



train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])