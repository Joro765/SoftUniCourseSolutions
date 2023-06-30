function addressBook(data) {
    // Create a object
    let obj = {};

    // Iterate data 
    for (const info of data) {
        let [name, address] = info.split(":");

        // Add to object
        if (obj.hasOwnProperty(name)) {
            obj[name] = address;
        } else {
            obj[name] = address;
        }

    }


    // Convert object to an array and sort the array
    let sortedArray = Object.entries(obj).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB))


    // Iterate the sorted array
    for (const [key, value] of sortedArray) {
        console.log(`${key} -> ${value}`);

    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])