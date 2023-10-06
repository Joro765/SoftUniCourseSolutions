const { isOddOrEven } = require("./app.js"); // Добавям си функциите, които ще тествам
const expect = require("chai").expect // добавям библиотека chai


describe("isOddOrEven", function () {
    it("return undefined if passed arg is not a string", function () {
        expect(isOddOrEven(5)).to.equal(undefined);
        expect(isOddOrEven([1, 2, "s", "a"])).to.equal(undefined);
    })
    it("return even if passed string.length is an even num", function () {
        expect(isOddOrEven("Joro")).to.equal("even");
        expect(isOddOrEven("Vasi")).to.equal("even");
    })
    it("return odd if passed string.length is an odd num", function () {
        expect(isOddOrEven("Hey")).to.equal("odd");
        expect(isOddOrEven("Softuni")).to.equal("odd");
    })
})