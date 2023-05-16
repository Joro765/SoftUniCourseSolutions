function toyShop(input) {
    let екскурзияЦена = Number(input[0]);
    let бройПъзели = Number(input[1]);
    let бройКукли = Number(input[2]);
    let бройМечета = Number(input[3]);
    let бройМиньони = Number(input[4]);
    let бройКамиончета = Number(input[5]);
    let общаЦена = бройПъзели * 2.60 + бройКукли * 3 + бройМечета * 4.10 + бройМиньони * 8.20 + бройКамиончета * 2;
    let бройИграчки = бройПъзели + бройКукли + бройМечета + бройКамиончета + бройМиньони;
    let наем;
    let finalPrice;

    if (бройИграчки >= 50) {
        общаЦена -= общаЦена * (25 / 100);
    }
    наем = общаЦена * (10 / 100);
    finalPrice = общаЦена - наем;

    if (finalPrice >= екскурзияЦена) {
        console.log(`Yes! ${(finalPrice - екскурзияЦена).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(екскурзияЦена - finalPrice).toFixed(2)} lv needed.`);
    }

}


toyShop(["40.8",

    "20",

    "25",

    "30",

    "50",

    "10"]);
