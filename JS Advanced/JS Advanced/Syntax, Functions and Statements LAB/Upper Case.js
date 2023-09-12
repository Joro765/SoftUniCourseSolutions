function solve(input) {

    let pattern = /\w+/g;

    console.log(input.match(pattern).join(", ").toUpperCase());



}

solve('HEllo, hi, are, you okay')