function heroInventory(data) {

    let heroes = [];

    for (let i = 0; i < data.length; i++) {
        let [name, level, items] = data[i].split(" / ");
        let hero = {
            Hero: name,
            level: Number(level),
            items: items
        }

        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (const element of heroes) {
        console.log(`Hero: ${element.Hero}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items}`);

    }
}

heroInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])

