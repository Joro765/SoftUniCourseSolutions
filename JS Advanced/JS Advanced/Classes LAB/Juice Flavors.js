function juiceProducer(data) {
    let juiceBottles = {};
    let juice = {};


    for (let line of data) {
        let [product, quantity] = line.split(" => ");
        let bottles;

        if (!juice.hasOwnProperty(product)) {
            if (quantity >= 1000) {
                bottles = Math.floor(quantity / 1000);
                quantity = quantity - bottles * 1000;
                juice[product] = quantity;
                juiceBottles[product] = bottles;
            } else {
                juice[product] = Number(quantity);
            }
        } else {
            juice[product] += Number(quantity);
            if (juice[product] >= 1000) {
                bottles = Math.floor(juice[product] / 1000);
                quantity = juice[product] - bottles * 1000;
                juice[product] = quantity;
                if (juiceBottles.hasOwnProperty(product)) {
                    juiceBottles[product] += bottles;
                } else {
                    juiceBottles[product] = bottles;
                }
            } else {
                juice[product] += Number(quantity);
            }
        }
    }
    for (let [key, value] of Object.entries(juiceBottles)) {
        console.log(`${key} => ${value}`);
    }
}


juiceProducer(['Kiwi => 234',

    'Pear => 2345',

    'Watermelon => 3456',

    'Kiwi => 4567',

    'Pear => 5678',

    'Watermelon => 6789'])