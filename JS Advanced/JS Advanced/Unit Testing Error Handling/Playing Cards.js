function solve(face, suit) {

    switch (suit) {
        case "S": suit = "\u2660"; break;
        case "H": suit = "\u2665"; break;
        case "D": suit = "\u2666"; break;
        case "C": suit = "\u2663"; break;
    }

    let possibleFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


    if (possibleFaces.includes(face)) {
        return {
            face: face,
            suit: suit,
            toString: function () {
                return this.face + this.suit
            }
        }
    } else {
        throw new Error("Error");
    }

}


console.log(solve('2', 'A').toString())