function plantDiscovery(data) {

    // Number of plants to add to object
    let plantsCount = Number(data.shift());

    // Object to store plants
    let plants = {};

    // Add plants to Object
    for (let i = 0; i < plantsCount; i++) {
        let plantInfo = data.shift();
        let [plant, rarity] = plantInfo.split("<->");

        plants[plant] = {
            rarity: rarity,
            ratings: []
        };
    }

    let command = data.shift();




    while (command !== "Exhibition") {
        // TOKENS FOR COMMAND
        let tokens = command.split(": ");
        let task = tokens[0];


        // TOKENS FOR INFO
        let tokens2 = tokens.pop();
        tokens2 = tokens2.split(" - ");

        // PlantName and Plant Rating
        let plantName = tokens2[0];
        let plantRating = tokens2[1]




        switch (task) {
            case "Rate":
                if (plants.hasOwnProperty(plantName)) {
                    plants[plantName].ratings.push(plantRating)
                } else {
                    console.log(`error`);
                }
                break;



            case "Update":
                if (plants.hasOwnProperty(plantName)) {
                    plants[plantName].rarity = plantRating
                } else {
                    console.log(`error`);
                }
                break;


            case "Reset":
                if (plants.hasOwnProperty(plantName)) {
                    plants[plantName].ratings = [];
                } else {
                    console.log(`error`);
                }

                break;
        }

        command = data.shift();
    }



    console.log(`Plants for the exhibition:`);
    for (const element of Object.entries(plants)) {
        let finalRating = 0;
        let count = 0;

        let ratingArray = element[1].ratings;
        let rarityPrint = Number(element[1].rarity);

        if (ratingArray.length > 0) {
            for (const rate of element[1].ratings) {
                count++;
                finalRating += Number(rate);
            }

            finalRating = finalRating / count;
        } else {
            finalRating = 0;
        }

        console.log(`- ${element[0]}; Rarity: ${rarityPrint}; Rating: ${finalRating.toFixed(2)}`);
    }

}


plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])