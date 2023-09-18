function solve(data) {

    let number = 1;
    let result = [];

    let command = data.shift();

    while (command) {

        if (command === "add") {
            result.push(number);
        } else {
            result.pop();
        }

        number++;



        command = data.shift()
    }

    if (result.length > 0) {
        for (let el of result) {
            console.log(el);
        }
    } else {
        console.log("Empty");
    }


}


solve(['remove', 'remove', 'remove'])