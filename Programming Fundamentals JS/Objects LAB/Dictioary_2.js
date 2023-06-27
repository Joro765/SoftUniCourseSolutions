function dictionaryPrint(data) {

    let dict = {};
    let result = [];

    for (const line of data) {
        let obj = JSON.parse(line);
        let key = Object.keys(obj);
        let value = String(Object.values(obj));
        dict[key] = value;
    }

    for (const key in dict) {
        result.push({ [key]: dict[key] })
    }

    result.sort((a, b) => a.key - b.key);

    for (const obj of result) {
        let key = Object.keys(obj);
        let value = obj[key];
        console.log(`Term: ${key} => Definition: ${obj[key]}`);

    }


}


dictionaryPrint(([
    '{"Coffee":"A hot drink made from the roasted and ground seeds(coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]))