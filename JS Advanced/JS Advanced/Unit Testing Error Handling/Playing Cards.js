function solve(face, suit) {

    switch (suit) {
        case "S": suit = "\u2660"; break;
        case "H": suit = "\u2665"; break;
        case "D": suit = "\u2666"; break;
        case "C": suit = "\u2663"; break;
    }

    return {
        [face]: suit,
        toString: function () {
        }
    }



}


console.log(solve('10', 'H'))