function fruitShop(fruit, quantity) {

    let sum = 0;


    // Select fruit and calculate price per one
    function fruitPrice(value) {
        switch (value) {
            case "apple": price = 1.40; break;
            case "orange": price = 1.60; break;
            case "banana": price = 0.80; break;
            case "kiwi": price = 0.45; break;
            default:
                console.log("No such fruit in stock, sorry!");
        }
        return price;
    }



    // Prints price
    function printPrice(a) {
        console.log(`You have bought fruits for ${a} dollars.`);
    }


    // Invoke functions
    sum = fruitPrice(fruit) * quantity;
    printPrice(sum);

}

fruitShop("banana", 2)