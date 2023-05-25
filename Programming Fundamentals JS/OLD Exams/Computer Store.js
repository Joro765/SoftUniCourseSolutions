function ComputerStore(input) {
    let index = 0;
    let command = input[index];
    index++;
    let total = 0;
    let taxes = 0;

    while (command !== "special" && command !== "regular") {
        let partPrice = Number(command);
        if (partPrice < 0) {
            console.log("Invalid price!");
            command = input[index];
            index++;
            continue;
        } else {
            total += partPrice;
            taxes += partPrice * 0.20;
        }

        command = input[index];
        index++;
    }

    let totalPrice = total + taxes;
    let type = input[index - 1];

    if (type === "special") {
        totalPrice *= 0.9;
    }

    if (totalPrice === 0) {
        console.log("Invalid order!");
    }

    if (totalPrice > 0) {
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${total.toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${totalPrice.toFixed(2)}$
        `);
    }

}

ComputerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]))