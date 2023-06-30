function bookMeeting(data) {

    // Създаване на MAP обект
    let meeting = new Map();

    // Итериране през входните данни
    for (const info of data) {
        let [day, person] = info.split(" "); // Деструктуирано взимане на входните данни за всеки ред

        // Проверка дали съществува конкретен ден в обекта
        if (!meeting.has(day)) {    // has вметсто HasOwnProperty
            console.log(`Scheduled for ${day}`);
            meeting.set(day, person);  // Друг начин за добавяне със set и подаване на key - value
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }


    // Итериране на МАП FOR OF - Можем да итерираме Map Обект все едно е масив с FOR OF
    for (const [key, value] of meeting) {
        console.log(`${key} -> ${value}`);

    }

    // Итериране на МАП с entries. Не е нужно да викаме Object - класа за да достъпим ентрититата
    for (const [key, value] of meeting.entries()) {
        console.log(`${key} -> ${value}`);

    }

}

bookMeeting(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])