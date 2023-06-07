function matrix(num) {

    for (let x = 1; x <= num; x++) {
        let row = "";
        for (let y = 1; y <= num; y++) {
            row += `${num} `;
        }
        console.log(row);
    }

}


matrix(3);