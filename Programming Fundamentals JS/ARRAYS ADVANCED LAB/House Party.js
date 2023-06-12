function houseParty(data) {

    let guests = [];

    for (let i = 0; i < data.length; i++) {
        let command = data[i].split(" ");
        let name = command[0];

        if (command.length < 4) {
            if (!guests.includes(command[0])) {
                guests.push(name)
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (!guests.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                for (let i = 0; i < guests.length; i++) {
                    if (guests[i] === name) {
                        guests.splice(i, 1)
                    }
                }
            }
        }
    }

    console.log(guests.join("\n"));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])