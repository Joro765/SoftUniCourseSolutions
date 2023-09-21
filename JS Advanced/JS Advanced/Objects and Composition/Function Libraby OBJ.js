function solve(operations) {

    let number = 12;


    let calculate = {
        add: (a) => a + 1,
        remove: (a) => a - 1
    }


    for (const operation of operations) {
        number = calculate[operation](number);
        console.log(number);
    }

}


solve(["add", "add", "add", "remove", "add", "remove"])
