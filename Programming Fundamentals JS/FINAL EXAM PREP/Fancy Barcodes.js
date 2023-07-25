function fancyBarcodes(data) {

    // Regex to check if a BarCode is valid or not
    let validBarcode = /([@][#]+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])/;

    // Regex to check for numbers
    let numbersCheck = /\d+/gm;

    let barcodesCount = Number(data.shift());


    for (const barcode of data) {
        let match = validBarcode.exec(barcode);

        if (match) {
            let group = "";
            let isValid = false;
            let match2 = numbersCheck.exec(barcode);

            while (match2) {
                group += match2[0];
                isValid = true;
                match2 = numbersCheck.exec(barcode);
            }

            if (isValid === false) {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${group}`);
            }

        } else {
            console.log(`Invalid barcode`);
        }

        match = validBarcode.exec(barcode);


    }
}


fancyBarcodes((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]))

