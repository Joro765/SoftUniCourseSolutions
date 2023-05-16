function hotel(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let studio = 0;
    let apartment = 0;

    if (month === "May" || month === "October") {
        studio = nights * 50;
        apartment = nights * 65;
        if (nights > 7 && nights < 14) {
            studio *= .95;
        } else if (nights > 14) {
            apartment *= 0.9;
            studio *= 0.7;
        }
    } else if (month === "June" || month === "September") {
        studio = nights * 75.20;
        apartment = nights * 68.70;
        if (nights > 14) {
            studio *= 0.8;
            apartment *= 0.9;
        }
    } else if (month === "July" || month === "August") {
        studio = nights * 76;
        apartment = nights * 77;
        if (nights > 14) {
            apartment *= 0.9;
        }

    }
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}





hotel(["August", "20"]);
