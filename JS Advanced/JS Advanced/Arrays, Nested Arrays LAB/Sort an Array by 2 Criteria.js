function solve(arr) {

    let sortedArray = arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    })

    return sortedArray.join("\n");

}


solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])