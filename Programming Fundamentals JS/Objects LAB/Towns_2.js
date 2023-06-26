function printTowns(data) {

    let obj = {
    }


    let cities = [];


    for (let i = 0; i < data.length; i++) {
        let cityInfo = data[i].split(" | ");
        obj.town = cityInfo[0];
        obj.latitude = Number(cityInfo[1]).toFixed(2);
        obj.longitude = Number(cityInfo[2]).toFixed(2);
        cities.push(obj);
    }

    console.log(cities);

}


printTowns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])