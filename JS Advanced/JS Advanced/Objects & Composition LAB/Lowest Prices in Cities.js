function solve(data) {
    let res = {};


    for (let line of data) {
        let [town, product, price] = line.split(" | ");
        price = Number(price);

        // Ако продуктът го няма го добавяме като обект в обекта с цена и град за стойности
        if (!res.hasOwnProperty(product)) {
            res[product] = { town, price };
        }

        // Проверяваме ако новата цена е по-малка
        if (res[product]["price"] > price) {
            res[product]["town"] = town;
            res[product]["price"] = price;
        }

    }

    // Обхождаме обект в обекта
    for (let product in res) {
        console.log(`${product} -> ${res[product].price} (${res[product].town})`);
    }
}


solve(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 800',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 1',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10'])