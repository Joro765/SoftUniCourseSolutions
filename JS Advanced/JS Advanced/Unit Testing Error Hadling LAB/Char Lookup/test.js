const { lookupChar } = require("./app.js"); // Добавям си функциите, които ще тествам
const expect = require("chai").expect // добавям библиотека chai


describe("lookupChar", function () {
    it("return undefined if passed wrong param 1", function () {
        expect(lookupChar(true, 5)).to.equal(undefined);
        expect(lookupChar([], 5)).to.equal(undefined);
        expect(lookupChar({}, 5)).to.equal(undefined);
    })
    it("return undefined if passed wrong param 2", function () {
        expect(lookupChar("Joro", "")).to.equal(undefined);
        expect(lookupChar("Joro", [])).to.equal(undefined);
        expect(lookupChar("Joro", false)).to.equal(undefined);
        expect(lookupChar("Joro", 2.5)).to.equal(undefined);
    })
    it("return undefined if both passed params are wrong", function () {
        expect(lookupChar(3, "")).to.equal(undefined);
        expect(lookupChar(true, [])).to.equal(undefined);
        expect(lookupChar([], {})).to.equal(undefined);
    })
    it("return Incorrect index if wrong index is passed", function () {
        expect(lookupChar("Joro", 20)).to.equal("Incorrect index");
        expect(lookupChar("Joro", -15)).to.equal("Incorrect index");
    })
    it("return correct char if valid index is passed", function () {
        expect(lookupChar("Joro", 2)).to.equal("r");
        expect(lookupChar("Joro", 0)).to.equal("J");
        expect(lookupChar("Vasi", 0)).to.equal("V");
    })
})