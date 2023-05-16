function agencyProfit(input) {
    let companyName = input[0];
    let adultsCount = Number(input[1]);
    let childCount = Number(input[2]);
    let adultsTicketPrice = Number(input[3]);
    let taxPrice = Number(input[4]);



    let childTicketPrice = adultsTicketPrice - (adultsTicketPrice * 0.7) + taxPrice;
    let adultsPriceWithTax = adultsTicketPrice + taxPrice;

    let totalPrice = (adultsPriceWithTax * adultsCount) + (childTicketPrice * childCount);

    let income = totalPrice * 0.2;

    console.log(`The profit of your agency from ${companyName} tickets is ${income.toFixed(2)} lv.`);


}

agencyProfit(["WizzAir",
    "15",
    "5",
    "120",
    "40"])