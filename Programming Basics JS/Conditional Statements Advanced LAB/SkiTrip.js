function skiTrip(input) {
    let numDays = Number(input[0]) - 1;
    let roomType = input[1];
    let review = input[2];
    let finalPrice = 0;

    if (numDays < 10) {
        switch (roomType) {
            case "room for one person": finalPrice = numDays * 18; break;
            case "apartment": finalPrice = numDays * 25; finalPrice = finalPrice * 0.7; break;
            case "president apartment": finalPrice = numDays * 35; finalPrice = finalPrice * 0.9; break;
        }
    } else if (numDays >= 10 && numDays <= 15) {
        switch (roomType) {
            case "room for one person": finalPrice = numDays * 18; break;
            case "apartment": finalPrice = numDays * 25; finalPrice = finalPrice * 0.65; break;
            case "president apartment": finalPrice = numDays * 35; finalPrice = finalPrice * 0.85; break;
        }
    } else if (numDays > 15) {
        switch (roomType) {
            case "room for one person": finalPrice = numDays * 18; break;
            case "apartment": finalPrice = numDays * 25; finalPrice = finalPrice * 0.5; break;
            case "president apartment": finalPrice = numDays * 35; finalPrice = finalPrice * 0.8; break;
        }

    }

    if (review === "positive") {
        finalPrice += finalPrice * 0.25;
    } else {
        finalPrice -= finalPrice * 0.1;
    }

    console.log(finalPrice.toFixed(2));


}


skiTrip(["14", "apartment", "positive"]);