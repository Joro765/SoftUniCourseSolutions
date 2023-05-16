function deliverFood(input) {
    let пилешки = Number(input[0]);
    let рибни = Number(input[1]);
    let веган = Number(input[2]);

    let пилеЦена = 10.35;
    let рибаЦена = 12.40;
    let веганЦена = 8.15;

    let deliveryPrice = 2.50;
    let orderPrice = (пилешки * пилеЦена) + (рибни * рибаЦена) + (веган * веганЦена);
    let dessert = orderPrice * (20 / 100);
    let finalPrice = orderPrice + deliveryPrice + dessert;
    console.log(finalPrice);
}


deliverFood(["2", "4", "3"]);