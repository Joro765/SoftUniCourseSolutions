function deckCards(data) {


    let cards = data.shift().split(", ") // Shift the original deck of cards
    let numOperations = data.shift(); // Shift the number of operations

    for (let i = 0; i < Number(numOperations); i++) {
        let command = data[i].split(", ");
        let operation = command[0];


        switch (operation) {
            case "Add":
                let cardToAdd = command[1];

                if (cards.includes(cardToAdd)) {
                    console.log("Card is already in the deck");
                } else {
                    cards.push(cardToAdd);
                    console.log("Card successfully added");
                }
                break;


            case "Remove":
                let cardToRemove = command[1];

                if (cards.includes(cardToRemove)) {
                    let index = cards.indexOf(cardToRemove);
                    cards.splice(index, 1);
                    console.log("Card successfully removed");
                } else {
                    console.log("Card not found");
                }
                break;


            case "Insert":
                let index = command[1];
                let cardToInsert = command[2];

                if (index < 0 || index >= cards.length) {
                    console.log("Index out of range");
                    break;
                }

                if (index >= 0 && index < cards.length) {
                    if (cards.includes(cardToInsert)) {
                        console.log("Card is already added");
                    } else {
                        cards.splice(index, 0, cardToInsert);
                        console.log("Card successfully added");
                    }
                }
                break;

            case "Remove At":
                let cardToRemoveAtIndex = command[1];

                if (cardToRemoveAtIndex < 0 || cardToRemoveAtIndex >= cards.length) {
                    console.log("Index out of range");
                } else {
                    cards.splice(cardToRemoveAtIndex, 1);
                    console.log("Card successfully removed");
                }
                break;
        }
    }

    console.log(cards.join(", "));


}


deckCards((["Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",

    "Add, King of Diamonds",

    "Insert, 2, Jack of Spades",

    "Remove, Ace of Diamonds"]))