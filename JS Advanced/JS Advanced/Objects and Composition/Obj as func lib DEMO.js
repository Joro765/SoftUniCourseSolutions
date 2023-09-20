function solve(...commands) {

    let initial = commands.shift();

    let parser = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => x * 0.80
    };



    for (let command of commands) {
        initial = parser[command](initial);
        console.log(initial);
    }

}


solve(32, "chop", "chop", "chop", "chop", "chop")