function gradpaStavri(input) {
    let days = Number(input[0]);

    let totalLiters = 0;
    let totalDegrees = 0;

    for (i = 1; i < input.length; i += 2) {
        let currentLiters = Number(input[i]);
        let currentDegrees = Number(input[i + 1]);
        let degreePerLiter = 0;

        totalLiters += currentLiters;

        degreePerLiter = currentLiters * currentDegrees;
        totalDegrees += degreePerLiter;

    }

    let avgDegrees = totalDegrees / totalLiters;

    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${avgDegrees.toFixed(2)}`);

    if (avgDegrees < 38) {
        console.log(`Not good, you should baking!`);
    } else if (avgDegrees >= 38 && avgDegrees <= 42) {
        console.log(`Super!`);
    } else if (avgDegrees > 42) {
        console.log(`Dilution with distilled water!`);
    }



}


gradpaStavri(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"])