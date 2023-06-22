function convertObject(data) {
    let person = JSON.parse(data);

    for (let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }

}

convertObject('{"name": "George", "age": 40, "town": "Sofia"}')