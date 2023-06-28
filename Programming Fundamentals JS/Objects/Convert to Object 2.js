function convert(data) {

    let obj = JSON.parse(data);

    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${obj[key]}`);

    }
}



convert('{"name": "George", "age": 40, "town": "Sofia"}')