const { isSymmetric } = require("./app.js"); // Добавям си функциите, които ще тествам
const expect = require("chai").expect // добавям библиотека chai


describe("isSymmetric", function () {
    it("should return true", function () {
        expect(isSymmetric([5, 2, 2, 5])).to.equal(true)
    });
    it("should return false not equal", function () {
        expect(isSymmetric([1, 2, 3, 4])).to.equal(false)
    });
    it("should return false wrong type", function () {
        expect(isSymmetric('testing')).to.equal(false);
        expect(isSymmetric({ name: "Joro" })).to.equal(false)
    });
    it("should return false", function () {
        expect(isSymmetric(5)).to.equal(false)
    });
    it("should return false", function () {
        expect(isSymmetric([1, "z", 3, "a"])).to.equal(false)
    });
    it("should return true", function () {
        expect(isSymmetric([])).to.equal(true)
    });
    it("should return true", function () {
        expect(isSymmetric(["a", "b", "b", "a"])).to.equal(true)
    });

})