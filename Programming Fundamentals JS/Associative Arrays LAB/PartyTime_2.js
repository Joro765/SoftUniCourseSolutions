function party(data) {


    let vipGuests = [];
    let regularGuests = [];

    let index = 0;
    let command = data[index];


    while (command != "PARTY") {
        let firstChar = command[0];

        if (firstChar % firstChar === 0) {
            vipGuests.push(command);
        } else {
            regularGuests.push(command);
        }


        index++;
        command = data[index];
    }

    let newData = data.splice(data.indexOf("PARTY") + 1)
    let guestsList = vipGuests.concat(regularGuests);

    for (const guest of newData) {
        if (guestsList.includes(guest)) {
            guestsList.splice(guestsList.indexOf(guest), 1);
        }
    }

    console.log(guestsList.length);
    guestsList.forEach(guest => console.log(guest));


}



party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])