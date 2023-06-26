function printTowns(data) {

    class Town {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }


    let cities = [];


    for (let i = 0; i < data.length; i++) {
        let cityInfo = data[i].split(" | ");
        let name = cityInfo[0];
        let lat = Number(cityInfo[1]).toFixed(2);
        let log = Number(cityInfo[2]).toFixed(2);

        let city = new Town(name, lat, log);
        cities.push(city);
    }

    for (const town of cities) {
        console.log(town);
    }
}


printTowns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])