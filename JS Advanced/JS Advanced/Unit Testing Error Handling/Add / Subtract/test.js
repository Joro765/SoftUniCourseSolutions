const { createCalculator } = require("./app.js"); // Добавям си функциите, които ще тествам
const expect = require("chai").expect // добавям библиотека chai


describe("createCalculator", function () {
    it("should return object", function () {
        expect(createCalculator()).to.be.an('object')
    });
    it("should return add func", function () {
        expect(createCalculator()).to.have.own.property('add')
    });
    it("should return subtract func", function () {
        expect(createCalculator()).to.have.own.property('subtract')
    });
    it("should return get func", function () {
        expect(createCalculator()).to.have.own.property('get')
    });


    it("should return 0", function () {
        expect(createCalculator().get()).to.be.equal(0)
    });

    it("should return undefined", function () {
        expect(createCalculator().add(5)).to.be.equal(undefined)
    });


    it("should return right numbers", function () {
        let commander = createCalculator();
        expect(commander.add(5)).to.be.equal(undefined)
        expect(commander.get()).to.be.equal(5)
    });

    it("should return right numbers", function () {
        let commander = createCalculator();
        expect(commander.add(5)).to.be.equal(undefined)
        expect(commander.subtract(2)).to.be.equal(undefined)
        expect(commander.get()).to.be.equal(3)
    });


    it("should return right numbers", function () {
        let commander = createCalculator();
        expect(commander.add("5")).to.be.equal(undefined)
        expect(commander.subtract("2")).to.be.equal(undefined)
        expect(commander.get()).to.be.equal(3)
    });









})