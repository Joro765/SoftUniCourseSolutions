function addBags(input) {
    let priceAbove20KG = Number(input[0]);
    let luggageWeight = Number(input[1]);
    let daysCount = Number(input[2]);
    let luggageCount = Number(input[3]);
    let pricePerBag = 0;


    if (luggageWeight < 10) {
        pricePerBag = priceAbove20KG * 0.2;
    } else if (luggageWeight >= 10 && luggageWeight <= 20) {
        pricePerBag = priceAbove20KG * 0.5;
    } else {
        pricePerBag = priceAbove20KG;
    }


    if (daysCount < 7) {
        pricePerBag = pricePerBag + (pricePerBag * 0.4);
    } else if (daysCount >= 7 && daysCount <= 30) {
        pricePerBag = pricePerBag + (pricePerBag * 0.15)
    } else {
        pricePerBag = pricePerBag + (pricePerBag * 0.1)
    }

    console.log(`The total price of bags is: ${(pricePerBag * luggageCount).toFixed(2)} lv.`);


}

addBags(["30",
    "18",
    "15",
    "2"])