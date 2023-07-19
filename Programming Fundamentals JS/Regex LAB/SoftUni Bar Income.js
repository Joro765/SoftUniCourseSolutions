function barIncome(data) {

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[\d]+.?\d*)\$/;



    let currentLine = data.shift();

    let total = 0;

    while (currentLine !== "end of shift") {

        let validOrder = currentLine.match(pattern);

        if (validOrder) {
            let price = Number(validOrder.groups.count) * Number(validOrder.groups.price)
            console.log(`${validOrder.groups.customer}: ${validOrder.groups.product} - ${price.toFixed(2)}`);
            total += price;
        }


        currentLine = data.shift();
    }


    console.log(`Total income: ${total.toFixed(2)}`);

}


barIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])