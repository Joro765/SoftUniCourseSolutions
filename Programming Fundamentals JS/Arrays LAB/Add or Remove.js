function addOrRemove(arr) {

    let num = 1;
    let resultArray = [];

    for (let index = 0; index < arr.length; index++) {
        let command = arr[index];

        if (command === "add") {
            resultArray.push(num);
        } else if (command === "remove") {
            resultArray.pop();
        }

        num++;
    }

    if (resultArray.length < 1) {
        console.log("Empty");
    } else {
        console.log(resultArray.join(" "));
    }

}

addOrRemove(['add', 'add', 'remove', 'add', 'add'])