function heroesOfCodeAndLogic(data) {

    let heroesCount = Number(data.shift());
    let heroes = {};

    // Add heroes to object
    for (let i = 0; i < heroesCount; i++) {
        let heroInfo = data.shift();
        let [hero, hp, mana] = heroInfo.split(" ");

        // Adding hero in object
        heroes[hero] = [hp, mana];
    }

    // Taking first line of input for while loop
    let command = data.shift();

    while (command !== "End") {
        let tokens = command.split(" - ");
        let task = tokens[0];
        let name = tokens[1];
        let amount;
        let currentHP;
        let currentMP;


        switch (task) {
            case "Heal":
                amount = Number(tokens[2]);
                currentHP = Number(heroes[name][0]);

                if ((currentHP + amount) > 100) {
                    heroes[name][0] = 100;
                    console.log(`${name} healed for ${100 - currentHP} HP!`);
                } else {
                    // Add additional HP
                    heroes[name][0] = currentHP + amount;
                    console.log(`${name} healed for ${amount} HP!`);
                }

                break;


            case "Recharge":
                amount = Number(tokens[2]);
                currentMP = Number(heroes[name][1]);

                if ((currentMP + amount) > 200) {
                    heroes[name][1] = 200;
                    console.log(`${name} recharged for ${200 - currentMP} MP!`);
                } else {
                    // Add additional MP
                    heroes[name][1] = currentMP + amount;
                    console.log(`${name} recharged for ${amount} MP!`);
                }
                break;



            case "TakeDamage":
                let damage = Number(tokens[2]);
                let attacker = tokens[3];
                currentHP = heroes[name][0];

                if (currentHP - damage <= 0) {
                    delete heroes[name];
                    console.log(`${name} has been killed by ${attacker}!`);
                } else {
                    heroes[name][0] = currentHP - damage;
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name][0]} HP left!`);
                }
                break;



            case "CastSpell":
                let neededMP = Number(tokens[2]);
                let spellName = tokens[3];
                currentMP = Number(heroes[name][1]);

                if (currentMP - neededMP >= 0) {
                    heroes[name][1] = currentMP - neededMP;
                    console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name][1]} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
                break;
        }

        // Take line from input for while loop
        command = data.shift();
    }


    for (const element of Object.entries(heroes)) {
        console.log(element[0]);
        console.log(`  HP: ${element[1][0]}`);
        console.log(`  MP: ${element[1][1]}`);

    }
}


heroesOfCodeAndLogic([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
])