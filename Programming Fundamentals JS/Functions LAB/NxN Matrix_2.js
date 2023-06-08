function generateMatrix(n) {


    function rowGenerator() {
        let row = "";

        for (let r = 1; r <= n; r++) {
            row += `${n} `;
        }
        return row;
    }

    for (let i = 1; i <= n; i++) {
        console.log(rowGenerator());
    }
}

generateMatrix(7)