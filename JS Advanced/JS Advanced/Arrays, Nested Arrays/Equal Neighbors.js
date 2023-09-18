function solve(matrix) {

    let newArray = [];

    matrix.forEach(row => {
        row.forEach(element => {
            let currentElement = element;
            newArray.push(currentElement);
        })
    });

    let count = 0;

    for (let i = 0; i < newArray.length; i++) {
        let currentElement = newArray[i];
        let currentIndex = i;

        if (newArray.includes(currentElement, currentIndex + 1)) {
            count++;
        }

    }


    console.log(count);


}


solve([['2', '3', '4', '7', '0'],

['4', '0', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']])