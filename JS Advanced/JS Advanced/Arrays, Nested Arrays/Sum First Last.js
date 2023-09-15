function solve(arr) {

    let firstNum = Number(arr.shift());
    let secondNum = Number(arr.pop());

    let result = firstNum + secondNum;

    return result;


}

solve(['20', '30', '40'])