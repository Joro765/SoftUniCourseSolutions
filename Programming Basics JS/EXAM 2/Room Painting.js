function roomPainting(input) {
    let paintBoxCount = Number(input[0]);
    let rollsCount = Number(input[1]);
    let pricePerGloves = Number(input[2]);
    let pricePerBrush = Number(input[3]);

    let paintPrice = paintBoxCount * 21.50;
    let rollsPrice = rollsCount * 5.20;

    let glovesCount = rollsCount * 0.35;
    glovesCount = Math.ceil(glovesCount)
    let brushesCount = paintBoxCount * 0.48;
    brushesCount = Math.floor(brushesCount)


    let glovesPrice = pricePerGloves * glovesCount;
    let brushesPrice = pricePerBrush * brushesCount;

    let total = paintPrice + rollsPrice + glovesPrice + brushesPrice;

    let delivery = total / 15;

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);



}


roomPainting(["10",
    "8",
    "2.2",
    "5"])

