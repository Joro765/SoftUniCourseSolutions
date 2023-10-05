const { sum, multiply, divide } = require("./app");
const expect = require("chai").expect


describe("sum", function () {
    it("should sum two numbers", function () {
        // Arrange
        const numberOne = 2;
        const numberTwo = 5;

        // Act
        const result = sum(numberOne, numberTwo);

        // Assert
        expect(result).to.be.equal(7)
    })
})


