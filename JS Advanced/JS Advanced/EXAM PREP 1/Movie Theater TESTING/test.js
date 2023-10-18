const { movieTheater } = require("./app.js"); // Добавям си функциите, които ще тествам
const expect = require("chai").expect // добавям библиотека chai




describe("ageRestrictions", function () {
    it("return correct message depending on movieRating", function () {
        expect(movieTheater.ageRestrictions("G")).to.equal("All ages admitted to watch the movie");
    })
    it("return correct message depending on movieRating", function () {
        expect(movieTheater.ageRestrictions("PG")).to.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers");
    })
    it("return correct message depending on movieRating", function () {
        expect(movieTheater.ageRestrictions("R")).to.equal("Restricted! Under 17 requires accompanying parent or adult guardian");
    })
    it("return correct message depending on movieRating", function () {
        expect(movieTheater.ageRestrictions("NC-17")).to.equal("No one under 17 admitted to watch the movie");
    })
    it("return correct message depending on movieRating", function () {
        expect(movieTheater.ageRestrictions("TEST")).to.equal("There are no age restrictions for this movie");
    })
})


describe("moneySpent wrong", function () {
    it("return error if all three inputs", function () {
        expect(() => movieTheater.moneySpent("TEST", 2, false)).to.throw("Invalid input"); // TEST ERROR TROW !!!!!
    })
    it("return error if two inputs wrong", function () {
        expect(() => movieTheater.moneySpent(2, ["Nachos"], 3)).to.throw("Invalid input"); // TEST ERROR TROW !!!!!
    })
    it("return error if one input wrong", function () {
        expect(() => movieTheater.moneySpent(true, ["Nachos"], ["Soda"])).to.throw("Invalid input"); // TEST ERROR TROW !!!!!
    })
})

describe("moneySpent correct", function () {
    it("return price without discount", function () {
        expect(movieTheater.moneySpent(2, ["Nachos"], ["Soda"])).to.equal("The total cost for the purchase is 38.50");
    })
    it("return price with discount", function () {
        expect(movieTheater.moneySpent(3, ["Nachos", "Nachos", "Popcorn"], ["Soda", "Soda"])).to.equal("The total cost for the purchase with applied discount is 53.20");
    })

})

describe("reservation correct", function () {
    it("return correct row", function () {
        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 5)).to.equal(2);
    })
    it("return price with discount", function () {
        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 3 }, { rowNumber: 2, freeSeats: 5 }, { rowNumber: 3, freeSeats: 18 }], 5)).to.equal(3);
    })
})

describe("reservation wrong", function () {
    it("return error if passed wrong params", function () {
        expect(() => movieTheater.reservation(true, "A")).to.throw("Invalid input");
    })
    it("return error if passed wrong params", function () {
        expect(() => movieTheater.reservation(1, {})).to.throw("Invalid input");
    })
})
