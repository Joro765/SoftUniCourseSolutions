function solve(num, operation1, operation2, operation3, operation4, operation5) {

    let arr = [num, operation1, operation2, operation3, operation4, operation5];
    let number = Number(arr.shift())
    let task = arr.shift();

    while (task) {
        switch (task) {
            case "chop":
                number = number / 2;
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number += 1;
                console.log(number);
                break;
            case "bake":
                number *= 3;
                console.log(number);
                break;
            case "fillet":
                number = number - (number * 0.2);
                console.log(number);
                break;
        }
        task = arr.shift();
    }

}


solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')