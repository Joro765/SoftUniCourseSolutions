function solve(data) {

    let products = {};

    for (let line of data) {
        let [product, price] = line.split(" : ");

        products[product] = Number(price);

    }


    let sortedProducts = Object.entries(products).sort((a, b) => a[0].localeCompare(b[0]));


    let currentLetter = sortedProducts[0][0][0];
    console.log(currentLetter);


    for (let product of sortedProducts) {
        if (product[0].startsWith(currentLetter)) {
            console.log(`  ${product[0]}: ${product[1]}`);
        } else {
            currentLetter = product[0][0][0]
            console.log(currentLetter);
            console.log(`  ${product[0]}: ${product[1]}`);
        }

    }



}


solve(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])