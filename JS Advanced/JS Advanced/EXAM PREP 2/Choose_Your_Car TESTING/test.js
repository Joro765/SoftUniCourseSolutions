const { chooseYourCar } = require("./chooseYourCar.js"); // Добавям си функциите, които ще тествам
const expect = require("chai").expect // добавям библиотека chai




describe("choosingType", function () {
    it("return invalid year if year is year < 1900", function () {
        expect(() => chooseYourCar.choosingType("Sedan", "red", 1800)).to.throw("Invalid Year!");
    })
    it("return invalid year if year is  > 2022", function () {
        expect(() => chooseYourCar.choosingType("Sedan", "red", 2025)).to.throw("Invalid Year!");
    })
    it("return invalid type if type is not Sedan", function () {
        expect(() => chooseYourCar.choosingType("Wagon", "red", 2020)).to.throw("This type of car is not what you are looking for.");
    })

    it("return correct msg if requirements are met", function () {
        expect(chooseYourCar.choosingType("Sedan", "red", 2020)).to.equal("This red Sedan meets the requirements, that you have.");
    })
    it("return correct msg if requirements are met", function () {
        expect(chooseYourCar.choosingType("Sedan", "red", 2010)).to.equal("This red Sedan meets the requirements, that you have.");
    })
    it("return correct msg if car is old but requirements are met", function () {
        expect(chooseYourCar.choosingType("Sedan", "red", 2008)).to.equal("This Sedan is too old for you, especially with that red color.");
    })
})


describe("brandName", function () {
    it("return error if brand is not an Array", function () {
        expect(() => chooseYourCar.brandName("Test", 2)).to.throw("Invalid Information!");
    })
    it("return error if second param is not an Number", function () {
        expect(() => chooseYourCar.brandName(["Audi", "BMW", "Ford", "Opel"], false)).to.throw("Invalid Information!");
    })
    it("return error if both params are invalid", function () {
        expect(() => chooseYourCar.brandName({}, false)).to.throw("Invalid Information!");
    })
    it("return error if second param is negative number", function () {
        expect(() => chooseYourCar.brandName(["Audi", "BMW", "Ford", "Opel"], -2)).to.throw("Invalid Information!")
    })
    it("return error if second param is index outside of arr range", function () {
        expect(() => chooseYourCar.brandName(["Audi", "BMW", "Ford", "Opel"], 15)).to.throw("Invalid Information!")
    })
    it("return error if second param is index outside of arr range", function () {
        expect(() => chooseYourCar.brandName([], 0)).to.throw("Invalid Information!")
    })

    it("return correct output if params are correct", function () {
        expect(chooseYourCar.brandName(["Audi", "BMW", "Ford", "Opel"], 2)).to.equal("Audi, BMW, Opel")
    })
    it("return correct output if params are correct", function () {
        expect(chooseYourCar.brandName(["Audi", "BMW", "Ford", "Opel", "Porsche", "Mercedes", "Peugeot"], 5)).to.equal("Audi, BMW, Ford, Opel, Porsche, Peugeot")
    })
    it("return correct output if params are correct", function () {
        expect(chooseYourCar.brandName(["Audi"], 0)).to.equal("")
    })
})


describe("carFuelConsumption", function () {
    it("throw error if first param is not a number", function () {
        expect(() => chooseYourCar.carFuelConsumption("Test", 100)).to.throw("Invalid Information!");
    })
    it("throw error if second param is not a number", function () {
        expect(() => chooseYourCar.carFuelConsumption(100, "Test")).to.throw("Invalid Information!");
    })
    it("throw error if both params are not numbers", function () {
        expect(() => chooseYourCar.carFuelConsumption("TEST", "Test")).to.throw("Invalid Information!");
    })
    it("throw error if first param is a negative numbers", function () {
        expect(() => chooseYourCar.carFuelConsumption(-100, 200)).to.throw("Invalid Information!");
    })
    it("throw error if second param is a negative numbers", function () {
        expect(() => chooseYourCar.carFuelConsumption(100, -200)).to.throw("Invalid Information!");
    })
    it("throw error if both params are negative numbers", function () {
        expect(() => chooseYourCar.carFuelConsumption(-100, -200)).to.throw("Invalid Information!");
    })


    it("return correct output if car is efficient", function () {
        expect(chooseYourCar.carFuelConsumption(200, 10)).to.equal("The car is efficient enough, it burns 5.00 liters/100 km.");
    })
    it("return correct output if car is not efficient", function () {
        expect(chooseYourCar.carFuelConsumption(200, 50)).to.equal("The car burns too much fuel - 25.00 liters!");
    })
    it("return correct output if car is not efficient", function () {
        expect(chooseYourCar.carFuelConsumption(50, 50)).to.equal("The car burns too much fuel - 100.00 liters!");
    })
    it("return correct output if car is not efficient", function () {
        expect(chooseYourCar.carFuelConsumption(1000, 70)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
    })

    it("return correct output if car is not efficient", function () {
        expect(() => chooseYourCar.carFuelConsumption(0, 0)).to.throw("Invalid Information!");
    })

    it("return correct output if car is not efficient", function () {
        expect(() => chooseYourCar.carFuelConsumption(0, 50)).to.throw("Invalid Information!");
    })

    it("return correct output if car is not efficient", function () {
        expect(() => chooseYourCar.carFuelConsumption(50, 0)).to.throw("Invalid Information!");
    })
})


