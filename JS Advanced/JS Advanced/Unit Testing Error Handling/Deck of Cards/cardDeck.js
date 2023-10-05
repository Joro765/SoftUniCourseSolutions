function printDeckOfCards(cards) {
    let isValid = true;
    let errorMsg = ""
    function createCard(face, suit) {

        let possibleFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        try {
            if (!possibleFaces.includes(face)) {
                isValid = false;
                throw new Error(`Invalid card: ${face}${suit}`)

            }
        } catch (error) {
            errorMsg = error.message;
            return
        }

        switch (suit) {
            case "S": suit = "\u2660"; break;
            case "H": suit = "\u2665"; break;
            case "D": suit = "\u2666"; break;
            case "C": suit = "\u2663"; break;
        }

        return {
            face: face,
            suit: suit,
            toString: function () {
                return this.face + this.suit
            }
        }

    }



    let resultArray = [];
    for (const card of cards) {
        let suit = card.substring(card.length - 1)
        let face = card.substring(0, card.length - 1);

        let newCard = createCard(face, suit);
        if (isValid === false) {
            return errorMsg
        }
        resultArray.push(newCard.toString());
    }
    return resultArray.join(" ");
}


console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']))


module.exports = {
    printDeckOfCards
}