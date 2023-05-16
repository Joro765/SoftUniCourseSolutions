function building(input) {
    let floor = Number(input[0]);
    let room = Number(input[1]);

    for (f = floor; f > 0; f--) {
        let buff = "";
        for (r = 0; r < room; r++) {

            if (f === floor) {
                buff += `L${f}${r} `
            } else if (f % 2 === 0) {
                buff += `O${f}${r} `
            } else if (f % 2 != 0) {
                buff += `A${f}${r} `
            }
        }
        console.log(buff);
    }
}

building(["6", "4"]);


// BUFFER - когато искаме да печатаме многократно на различен ред в цикъл