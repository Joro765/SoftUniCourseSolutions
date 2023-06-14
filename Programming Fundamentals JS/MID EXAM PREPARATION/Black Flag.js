function piratePlunder(data) {

    let days = Number(data[0]);
    let dailyPlunder = Number(data[1]);
    let targetPlunder = Number(data[2]);

    let total = 0;

    for (let d = 1; d <= days; d++) {

        total += dailyPlunder; // Add daily plunder

        if (d % 3 === 0) {  // Every third day add additional plunder to total
            let additionalPlunder = dailyPlunder * 0.5;
            total += additionalPlunder;
        }

        if (d % 5 === 0) {  // every fifth day remove lost plunder from total
            let lostPlunder = total * 0.3;
            total -= lostPlunder;
        }

    }

    if (total >= targetPlunder) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (total / targetPlunder) * 100; // calculate percentage collected from targer plunder
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

}


piratePlunder(["10",
    "20",
    "380"])