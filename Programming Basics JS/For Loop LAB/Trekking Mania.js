function trekking(input) {
    let groupCount = Number(input[0]);
    let Musala = 0;
    let Mondbland = 0;
    let Kilimandjaro = 0;
    let K2 = 0;
    let Everest = 0;
    let allPeople = 0;

    for (i = 1; i < input.length; i++) {
        let people = Number(input[i]);
        if (people <= 5) {
            allPeople += people;
            Musala += people;
        } else if (people <= 12) {
            allPeople += people;
            Mondbland += people;
        } else if (people <= 25) {
            allPeople += people;
            Kilimandjaro += people;
        } else if (people <= 40) {
            allPeople += people;
            K2 += people;
        } else if (people >= 41) {
            allPeople += people;
            Everest += people;
        }
    }




    let musalaPercent = (Musala / allPeople) * 100;
    let mondblandPercent = (Mondbland / allPeople) * 100;
    let kilimandjaroPercent = (Kilimandjaro / allPeople) * 100;
    let k2Percent = (K2 / allPeople) * 100;
    let everestPercent = (Everest / allPeople) * 100;



    console.log(`${musalaPercent.toFixed(2)}%`)
    console.log(`${mondblandPercent.toFixed(2)}%`)
    console.log(`${kilimandjaroPercent.toFixed(2)}%`)
    console.log(`${k2Percent.toFixed(2)}%`)
    console.log(`${everestPercent.toFixed(2)}%`)

}

trekking(["5", "25", "41", "31", "250", "6"]);