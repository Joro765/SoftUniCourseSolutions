function dictionaryPrint(data) {

    let dict = {};
    let result = [];

    for (const line of data) {
        let obj = JSON.parse(line); // Parse String to Object
        result.push(obj); // Add onject to an array

    }


    for (const object of result) { // Loop objects from array
        let key = Object.keys(object); // get key
        let value = Object.values(object) // het value
        console.log(`${key} -> ${value}`); // print

    }
}


dictionaryPrint(([
    '{"Coffee":"A hot drink made from the roasted and ground seeds(coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]))