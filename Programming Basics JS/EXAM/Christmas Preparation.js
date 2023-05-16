function christmas(input) {
    let paperRollsCount = Number(input[0]);
    let fabricRollsCount = Number(input[1]);
    let glueLiters = Number(input[2]);
    let discountPercent = Number(input[3]);

    let paperRollsPrice = paperRollsCount * 5.80;
    let fabricRollsPrice = fabricRollsCount * 7.20;
    let gluePrice = glueLiters * 1.20;

    let totalPrice = paperRollsPrice + fabricRollsPrice + gluePrice;
    let totalPriceDiscounted = totalPrice - ((totalPrice * discountPercent) / 100);

    console.log(totalPriceDiscounted.toFixed(3));



}


christmas(["2",
    "3",
    "2.5",
    "25"])
