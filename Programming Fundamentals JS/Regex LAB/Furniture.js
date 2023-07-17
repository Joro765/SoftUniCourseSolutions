function furnitureStore(data) {

    // Regex
    let pattern = />>(?<product>[A-Z|A-Za-z]+)<<(?<price>\d+[.]{0,1}\d+)!(?<quantity>[0-9]+)/gm;

    let index = 0;
    let command = data[index];

    let totalPrice = 0;
    let productsList = [];

    // Match from Regex exec
    let match = pattern.exec(data);


    while (command != "Purchase") {

        // If match store match in a object
        if (match) {
            let product = match.groups.product;
            let price = Number(match.groups.price);
            let quantity = Number(match.groups.quantity);


            productsList.push(product);
            totalPrice += price * quantity;

            // get new match
            match = pattern.exec(data)
        }

        // get new line from input
        index++;
        command = data[index];
    }


    if (productsList.length >= 1) {
        console.log("Bought furniture:");
        for (const item of productsList) {
            console.log(item);
        }
        console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
    } else {
        console.log(`Bought furniture:`);
        console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
    }

}




furnitureStore(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])