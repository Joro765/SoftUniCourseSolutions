function partyTime(data) {

    let vipList = [];
    let regularList = [];

    let command = data.shift();

    while (command !== "PARTY") {
        let firstChar = command[0];

        if (firstChar % firstChar === 0) {
            vipList.push(command);
        } else {
            regularList.push(command);
        }

        command = data.shift();
    }

    let allGuests = vipList.concat(regularList);

    for (const guest of data) {
        if (allGuests.includes(guest)) {
            let index = allGuests.indexOf(guest);
            allGuests.splice(index, 1);
        }
    }

    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest));
}


partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])