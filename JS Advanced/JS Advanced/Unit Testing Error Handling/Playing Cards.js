function solve(face, suit) {

    switch (suit) {
        case "S": suit = "\u2660"; break;
        case "H": suit = "\u2665"; break;
        case "D": suit = "\u2666"; break;
        case "C": suit = "\u2663"; break;
    }

    let possibleFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


    // Хвърляме грешка ако картата е навалидна. Ако е валидна ще мине проверката и ще продължи  програмата
    if (!possibleFaces.includes(face)) {
        throw new Error(`${face} is not a valid face for a card!`)
    }


    // Ако проверката е минала и имам валидна карта ще върнем обекта
    return {
        face: face,
        suit: suit,
        toString: function () {
            return this.face + this.suit
        }
    }
}


console.log(solve('10', 'A').toString())