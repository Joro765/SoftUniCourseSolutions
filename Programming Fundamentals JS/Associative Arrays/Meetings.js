function bookMeeting(data) {

    // Създаване на обект
    let meeting = {};

    // Итериране през входните данни
    for (const info of data) {
        let [day, person] = info.split(" "); // Деструктуирано взимане на входните данни за всеки ред

        // Проверка дали съществува конкретен ден в обекта
        if (!meeting.hasOwnProperty(day)) {
            console.log(`Scheduled for ${day}`);
            meeting[day] = person;
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    // Итериране през обекта 
    for (const key in meeting) {
        console.log(`${key} -> ${meeting[key]}`);

    }

}


bookMeeting(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])