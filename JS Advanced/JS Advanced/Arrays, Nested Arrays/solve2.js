let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


matrix.forEach(row => {
    let buff = "";
    row.forEach(element => {
        buff += `${element} `;
    })
    console.log(buff);
})