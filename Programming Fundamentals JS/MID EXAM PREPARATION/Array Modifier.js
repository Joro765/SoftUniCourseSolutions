function arrayModifier(data) {

    let arr = data[0].split(" "); // Creating initial array with numbers
    data.shift(arr) // Deleting the array from data

    arr = arr.map(Number); // Converting to numbers

    let index = 0;
    let command = data[index] // Taking the first command for the while loop

    while (command !== "end") {
        let tokens = command.split(" "); // Converting the command to array
        let task = tokens[0];  // Taking the command (swap, multiply, decrease)

        switch (task) {
            case "swap":
                let firstElementIndex = Number(tokens[1]); // index of first element to switch
                let secondElementIndex = Number(tokens[2]); // index of second element to switch

                let newFirstElement = arr[secondElementIndex]; // taking the second element 
                let newSecondElement = arr[firstElementIndex]; // taking the firts element

                arr.splice(firstElementIndex, 1, newFirstElement); // switch first element
                arr.splice(secondElementIndex, 1, newSecondElement); // swith second element
                break;


            case "multiply":
                let firstElIndex = Number(tokens[1]); // index of first element
                let secondElIndex = Number(tokens[2]); // index of second element

                let result = arr[firstElIndex] * arr[secondElIndex]; // multiply first el by second el

                arr.splice(firstElIndex, 1, result); // switch el at first index with result.

                break;
            case "decrease":

                for (let i = 0; i < arr.length; i++) {
                    arr[i] -= 1;
                }

                break;
        }

        index++;
        command = data[index];
    }

    console.log(arr.join(", "));
}

arrayModifier(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])