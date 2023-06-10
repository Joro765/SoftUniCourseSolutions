function manipulateArray(data) {

    // Take the first index and turn it into an array.
    // Shift - cuts the first element
    // Split - turns it into an array
    // Map - turns it into an array of numbers
    let arr = data.shift().split(" ").map(Number);


    // For Loop to go through the rest of the array.
    for (let i = 0; i < data.length; i++) {
        let [command, firstNum, secondNum] = data[i].split(" "); // Saving the command and the numbers into an array


        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        // Check for command and trigger an effect
        switch (command) {
            case "Add": add(arr, firstNum);
                break;

            case "Remove": arr = del(arr, firstNum);
                break;

            case "RemoveAt": delAt(arr, firstNum);
                break;

            case "Insert": addAt(arr, secondNum, firstNum);
                break;
        }
    }

    // Function to add number
    function add(arr, a) {
        arr.push(a);
    }

    // Function to delete a number
    function del(arr, a) {
        return arr = arr.filter(el => el !== a);
    }

    // Function to delete at an index
    function delAt(arr, a) {
        arr.splice(a, 1);
    }

    // Function to add number at an index
    function addAt(arr, a, b) {
        arr.splice(a, 0, b);
    }

    console.log(arr.join(" "));
}

manipulateArray(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])