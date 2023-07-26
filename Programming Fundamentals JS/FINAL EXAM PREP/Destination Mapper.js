function destinationMapper(data) {

    // Regex
    let pattern = /([=|/])(?<destination>[A-Z][A-Za-z]{2,})(\1)/gm;

    // Array to hold destinations
    let destinations = [];

    // Match REGEX - returns array with all matches
    let match = data.match(pattern);

    // Travel Points
    let travelPoints = 0;

    // If there is atleast one match
    if (match) {
        // For every match do something
        for (let element of match) {

            // Remove symbols from current match
            element = element.substring(1, element.length - 1);

            // Add travel points
            travelPoints += element.length;


            // Add match to array
            destinations.push(element)
        }



        console.log(`Destinations: ${destinations.join(", ")}`);
        console.log(`Travel Points: ${travelPoints}`);

    } else {
        // If there aren't any matches
        console.log(`Destinations:`);
        console.log(`Travel Points: 0`);
    }
}


destinationMapper("=dasdasasdad")