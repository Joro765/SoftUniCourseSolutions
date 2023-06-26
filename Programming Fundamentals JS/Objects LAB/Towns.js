function printTowns(data) {
    let cities = [];


    for (const townInfo of data) {
        let [townName, latitude, longitude] = townInfo.split(" | ");
        let currentTown = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        cities.push(currentTown)
    }

    for (const town of cities) {
        console.log(town);

    }

}


printTowns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])