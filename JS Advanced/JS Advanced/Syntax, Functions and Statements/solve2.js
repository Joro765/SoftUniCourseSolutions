function solve(input) {

    let area = 0;

    if ((typeof input) === "number") {
        area = input * input * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${(typeof input)}.`);
    }


}


solve('dsad')