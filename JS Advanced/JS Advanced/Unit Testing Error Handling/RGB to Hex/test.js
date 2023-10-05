const { rgbToHexColor } = require("./app.js"); // Добавям си функциите, които ще тествам
const expect = require("chai").expect // добавям библиотека chai


describe("rgbToHexColor", function () {
    it("should return correct color when passed correct numbers", function () {
        expect(rgbToHexColor(20, 20, 20)).to.equal("#141414")
    });
    it("should return undefined passed invalid numbers", function () {
        expect(rgbToHexColor(300, -20, 450)).to.equal(undefined)
    });
    it("should return undefined passed invalid types", function () {
        expect(rgbToHexColor("AZ", true, [])).to.equal(undefined)
    });
    it("should return undefined passed invalid types", function () {
        expect(rgbToHexColor(5, true, 120)).to.equal(undefined)
    });
    it("should return undefined passed no input", function () {
        expect(rgbToHexColor()).to.equal(undefined)
    });
    it("should return undefined invalid first param", function () {
        expect(rgbToHexColor(-300, 120, 200)).to.equal(undefined)
    });
    it("should return undefined invalid second param", function () {
        expect(rgbToHexColor(120, 500, 50)).to.equal(undefined)
    });
    it("should return undefined invalid third param", function () {
        expect(rgbToHexColor(200, 133, -1)).to.equal(undefined)
    });
    it("should return undefined invalid third param", function () {
        expect(rgbToHexColor(-200, 133, -1)).to.equal(undefined)
    });
    it("should return undefined invalid third param", function () {
        expect(rgbToHexColor(200, -133, -1)).to.equal(undefined)
    });
    it("should return undefined invalid third param", function () {
        expect(rgbToHexColor(200)).to.equal(undefined)
    });
    it("should return undefined invalid third param", function () {
        expect(rgbToHexColor(200, -133)).to.equal(undefined)
    });
    it("should return undefined invalid third param", function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
    });
    it("should return undefined invalid third param", function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    });


})