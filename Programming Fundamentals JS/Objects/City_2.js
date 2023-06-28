function cityPrint(city) {

    for (const [key, value] of Object.entries(city)) {
        console.log(`${key} -> ${value}`);

    }

}


cityPrint({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})