function storeProvision(inStock, inOrder) {

    // In Stock
    let obj = {

    }

    // In Stock add to object
    for (let i = 0; i < inStock.length; i += 2) {
        let product = inStock[i];
        let amount = Number(inStock[i + 1]);

        obj[product] = amount; // Add product and amount to obj
    }


    // Loop through the orders
    for (let x = 0; x < inOrder.length; x += 2) {
        let product = inOrder[x];
        let amount = Number(inOrder[x + 1]);

        // Check if key exists in obj if yes add amount if no add key and amount
        if (obj.hasOwnProperty(product)) {
            obj[product] += amount;
        } else {
            obj[product] = amount;
        }
    }


    // Print keys and values from obj
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]} `);
    }


}


storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ])