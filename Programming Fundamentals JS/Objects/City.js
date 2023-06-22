function printCity(obj) {

    // for (const key of Object.keys(obj)) {
    //     console.log(`${key} -> ${obj[key]}`);
    // }

    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`);
    }

}

printCity({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})