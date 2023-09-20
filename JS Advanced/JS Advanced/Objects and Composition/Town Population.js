function solve(data) {


    let obj = {};

    for (let entry of data) {
        let [city, population] = entry.split(" <-> ");


        // Aко градът го има вече добавяме стойността към старата и презаписваме
        if (obj.hasOwnProperty(city)) {
            let currentPopulation = Number(obj[city]);
            currentPopulation += Number(population)
            obj[city] = currentPopulation;
        } else {

            obj[city] = population;
        }


    }

    for (let key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }

}


solve(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000'])