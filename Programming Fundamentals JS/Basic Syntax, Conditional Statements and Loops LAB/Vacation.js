function vacation(people, group, day) {

    let totalPrice = 0;
    let price = 0;

    switch (group) {
        case "Students":
            if (day === "Friday") {
                price = 8.45;
            } else if (day === "Saturday") {
                price = 9.80;
            } else if (day === "Sunday") {
                price = 10.46;
            }

            totalPrice = people * price;
            if (people >= 30) {
                totalPrice *= 0.85;

            }
            break;

        case "Business":

            if (people >= 100) {
                people -= 10;
            }
            if (day === "Friday") {
                price = 10.90;
            } else if (day === "Saturday") {
                price = 15.60;
            } else if (day === "Sunday") {
                price = 16;
            }

            totalPrice = people * price;
            break;

        case "Regular":

            if (day === "Friday") {
                price = 15;
            } else if (day === "Saturday") {
                price = 20;
            } else if (day === "Sunday") {
                price = 22.50;
            }

            totalPrice = people * price;

            if (people >= 10 && people <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);


}


vacation(30, "Students", "Sunday")