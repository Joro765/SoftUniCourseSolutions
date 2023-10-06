const { mathEnforcer } = require("./app.js"); // Добавям си функциите, които ще тествам
const expect = require("chai").expect // добавям библиотека chai


describe("mathEnforcer", function () {
    it("return undefined if passed param that is not a number", function () {
        expect(mathEnforcer.addFive("Joro")).to.equal(undefined);
        expect(mathEnforcer.addFive([])).to.equal(undefined);
        expect(mathEnforcer.addFive("2")).to.equal(undefined);
        expect(mathEnforcer.addFive({})).to.equal(undefined);

    })
    describe("subtractTen", function () {
        it("return undefined if passed param that is not a number", function () {
            expect(mathEnforcer.addFive("Vasi")).to.equal(undefined);
            expect(mathEnforcer.addFive([])).to.equal(undefined);
            expect(mathEnforcer.addFive("2")).to.equal(undefined);
            expect(mathEnforcer.addFive({})).to.equal(undefined);
        })
    })
    describe("sum", function () {
        it("return undefined if passed param that is not a number", function () {
            expect(mathEnforcer.addFive("Vasi")).to.equal(undefined);
            expect(mathEnforcer.addFive([])).to.equal(undefined);
            expect(mathEnforcer.addFive("2")).to.equal(undefined);
            expect(mathEnforcer.addFive({})).to.equal(undefined);
        })
    })
    describe("sum, subtractTen, addFive", function () {
        it("return undefined if passed param that is not a number", function () {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(1.6)).to.equal(6.6);
            expect(mathEnforcer.sum(5, 10)).to.equal(15);
            expect(mathEnforcer.sum(5, 2.5)).to.equal(7.5);
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
            expect(mathEnforcer.subtractTen(-4)).to.equal(-14);
            expect(mathEnforcer.subtractTen(1.5)).to.equal(-8.5);
            expect(mathEnforcer.subtractTen()).to.equal(undefined);
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
            expect(mathEnforcer.addFive(-100)).to.equal(-95);
            expect(mathEnforcer.addFive(222.2222222)).to.equal(227.2222222);
            expect(mathEnforcer.sum(222.2222222, 333.333333)).to.equal(555.5555552);
            expect(mathEnforcer.subtractTen(222.2222222)).to.equal(212.2222222);
            expect(mathEnforcer.subtractTen(10.00001)).to.equal(0.000009999999999621423);
            expect(mathEnforcer.sum(10.0001, 20.0001)).to.equal(30.0002);
            expect(mathEnforcer.addFive(10.0001)).to.equal(15.0001);
        })
    })


})




