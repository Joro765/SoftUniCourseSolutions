function solve(arr) {

    let buff = "";

    for (let i = 0; i < arr.length; i += 2) {
        buff += ` ${arr[i]}`;
    }

    console.log(buff);

}


solve(['20', '30', '40', '50', '60'])