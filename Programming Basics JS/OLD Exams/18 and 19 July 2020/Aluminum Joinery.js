function aluminium(input) {
    let count = Number(input[0]);
    let type = input[1];
    let deliveryType = input[2];
    let deliveryPrice = 60;
    let price = 0;
    totalPrice = 0;



    switch (type) {
        case "90X130":
            price = count * 110;
            if (count > 30 && count <= 60) {
                price = count * (110 * 0.95);
            } else if (count > 60) {
                price = count * (110 * 0.92);
            }
            break;
        case "100X150":
            price = count * 140;
            if (count > 40 && count <= 80) {
                price = count * (140 * 0.94);
            } else if (count > 80) {
                price = count * (140 * 0.9);
            }
            break;
        case "130X180":
            price = count * 190;
            if (count > 20 && count <= 50) {
                price = count * (190 * 0.93);
            } else if (count > 50) {
                price = count * (190 * 0.88);
            }
            break;
        case "200X300":
            price = count * 250;
            if (count > 25 && count <= 50) {
                price = count * (250 * 0.91);
            } else if (count > 50) {
                price = count * (250 * 0.86);
            }
            break
    }

    totalPrice = price;
    if (deliveryType === "With delivery") {
        totalPrice = price + deliveryPrice;
    }

    if (count > 99) {
        totalPrice = totalPrice * 0.96;
    }

    if (count > 10) {
        console.log(`${totalPrice.toFixed(2)} BGN`);
    } else {
        console.log("Invalid order");
    }

}

aluminium(["1",
    "90X130",
    "Without delivery"])

aluminium(["1",
    "90X130",
    "Without delivery"])