function colorize() {
    let rows = document.querySelectorAll("table tr");

    let index = 0;

    for (let row of rows) {
        index++;

        if (index % 2 === 0) {
            row.style.background = "teal";
        }

    }
}

// Change color of every even ROW of TABLE