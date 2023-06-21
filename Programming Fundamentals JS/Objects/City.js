function printCity(obj) {

    for (const key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }

}

printCity({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})