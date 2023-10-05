const { sum, multiply, divide } = require("./app"); // Добавям си функциите, които ще тествам
const expect = require("chai").expect // добавям библиотека chai


// Дълъг вариант за описване на тест ако тестът е по-голям
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


// Кратък вариант за описване на малки тестове
describe("multiply", function () {
    it("should multiply two numbers", function () {
        expect(multiply(2, 3)).to.be.equal(6)
    })
})


