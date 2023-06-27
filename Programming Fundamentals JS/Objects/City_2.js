function cityPrint(city) {

    for (const key of Object.keys(city)) {
        {
            console.log(`${key} -> ${city[key]}`);
        }

    }


}


cityPrint({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})