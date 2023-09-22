function heroRegister(heroes) {

    let heroesResult = [];

    for (const hero of heroes) {
        let [name, level, items] = hero.split(" / ");
        let heroObj = {
            name: name,
            level: Number(level)
        }

        itemsArray = items.split(", ");

        if (items.length > 0) {
            heroObj.items = itemsArray;
        } else {
            heroObj.items = [];
        }

        heroesResult.push(heroObj);
    }

    return JSON.stringify(heroesResult)

}



heroRegister(['Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'])