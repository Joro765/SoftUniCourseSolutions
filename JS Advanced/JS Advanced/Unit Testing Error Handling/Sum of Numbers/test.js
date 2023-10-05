const { sum } = require("./app.js"); // Добавям си функциите, които ще тествам
const expect = require("chai").expect // добавям библиотека chai


describe("sum", function () {
    it("should sum element of array", function () {
        expect(sum([1, 2, 3, 4])).to.equal(10)
    })
})