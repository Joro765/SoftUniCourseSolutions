function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let sum = 0;

    let shieldBrokenCount = 0;
    let isHelmetBroken = false;
    let isSwordBroken = false;

    for (let index = 1; index <= lostFights; index++) {

        if (index % 2 === 0) {
            isHelmetBroken = true;
            sum += helmetPrice;

        }

        if (index % 3 === 0) {
            isSwordBroken = true;
            sum += swordPrice;
        }

        if (isHelmetBroken === true && isSwordBroken === true) {
            shieldBrokenCount++;
            sum += shieldPrice;
        }

        if (shieldBrokenCount > 0) {
            if (shieldBrokenCount % 2 === 0) {
                sum += armorPrice;
                shieldBrokenCount = 0;
            }
        }

        isHelmetBroken = false;
        isSwordBroken = false;
    }

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);

}


gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200)