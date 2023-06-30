function addressBook(data) {
    let obj = {};

    for (const info of data) {
        let [name, address] = info.split(":");

        if (obj.hasOwnProperty(name)) {
            obj[name] = address;
        } else {
            obj[name] = address;
        }

    }

    let sortedArray = Object.entries(obj).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB))



    for (const [key, value] of sortedArray) {
        console.log(`${key} -> ${value}`);

    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])