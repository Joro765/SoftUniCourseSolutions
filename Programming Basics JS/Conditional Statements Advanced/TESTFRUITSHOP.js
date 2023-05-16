function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let isWeek = (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday");
    let isWeekend = (day === "Saturday" || day === "Sunday");
    let price = 0;
    let isValid = true;

    if (isWeek) {
        if (fruit === "banana") {
            price = quantity * 2.50;
        } else if (fruit === "apple") {
            price = quantity * 1.20;
        } else if (fruit === "orange") {
            price = quantity * 0.85;
        } else if (fruit === "grapefruit") {
            price = quantity * 1.45;
        } else if (fruit === "kiwi") {
            price = quantity * 2.70;
        } else if (fruit === "pineapple") {
            price = quantity * 5.50;
        } else if (fruit === "grapes") {
            price = quantity * 3.85;
        } else {
            console.log("error");
            isValid = false;
        }

    } else if (isWeekend) {
        if (fruit === "banana") {
            price = quantity * 2.70;
        } else if (fruit === "apple") {
            price = quantity * 1.25;
        } else if (fruit === "orange") {
            price = quantity * 0.90;
        } else if (fruit === "grapefruit") {
            price = quantity * 1.60;
        } else if (fruit === "kiwi") {
            price = quantity * 3.00;
        } else if (fruit === "pineapple") {
            price = quantity * 5.60;
        } else if (fruit === "grapes") {
            price = quantity * 4.20;
        } else {
            console.log("error");
            isValid = false;
        }
    } else {
        console.log("error");
        isValid = false;
    }
    if (isValid === true) {
        console.log(price.toFixed(2));
    }
}


fruitShop(["apple", "Monday", "2"]);

