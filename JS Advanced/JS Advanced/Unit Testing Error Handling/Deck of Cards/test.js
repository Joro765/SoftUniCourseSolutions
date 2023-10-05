const { printDeckOfCards } = require("./cardDeck"); // Добавям си функциите, които ще тествам
const expect = require("chai").expect // добавям библиотека chai


describe("printDeckOfCards", function () {
    it("should print cards", function () {
        expect(printDeckOfCards(['AS', '10D', 'KH', '2C'])).to.equal("A♠ 10♦ K♥ 2♣")
    })
    it("should print an error", function () {
        expect(printDeckOfCards(['5S', '3D', 'QD', '1C'])).to.equal("Invalid card: 1C")
    })
})