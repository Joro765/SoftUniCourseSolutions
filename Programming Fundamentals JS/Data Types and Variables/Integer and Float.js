function integerAndFloat(a, b, c) {

    let result = a + b + c;
    let type = "";

    if (result % 1 === 0) {
        type = "Integer";
    } else {
        type = "Float";
    }

    console.log(`${result} - ${type}`);

}


integerAndFloat(9, 100, 1.1)