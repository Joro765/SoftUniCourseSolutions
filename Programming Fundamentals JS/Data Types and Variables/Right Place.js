function rightPlace(data1, char, data2) {

    let result = data1.replace("_", char);

    if (result === data2) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}


rightPlace('Str_ng', 'o', 'Strong')