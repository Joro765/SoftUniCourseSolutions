const { PaymentPackage } = require("./app");
const expect = require("chai").expect



describe("instantiate Class", function () {
    let paymentPackage;

    beforeEach(() => {
        paymentPackage = new PaymentPackage("HR", 1500) // Преди всеки тест инстанцираме нова инстанция от класа и тестваме
    })

    it("correct name", function () {
        expect(paymentPackage.name).to.be.equal("HR")
    })
    it("correct value", function () {
        expect(paymentPackage.value).to.be.equal(1500)
    })
    it("correct VAT", function () {
        expect(paymentPackage.VAT).to.be.equal(20)
    })
    it("correct active status", function () {
        expect(paymentPackage.active).to.be.equal(true)
    })
})


describe("get Accessors", function () {
    let paymentPackage;

    beforeEach(() => {
        paymentPackage = new PaymentPackage("Pesho", 30)
    })

    it("correct get and set name", function () {
        expect(paymentPackage.name).to.be.equal("Pesho")
        paymentPackage.name = "Joro";
        expect(paymentPackage.name).to.be.equal("Joro")
    })
    it("correct get and set value", function () {
        expect(paymentPackage.value).to.be.equal(30)
        paymentPackage.value = 40;
        expect(paymentPackage.value).to.be.equal(40)
    })
    it("correct get and set VAT", function () {
        expect(paymentPackage.VAT).to.be.equal(20)
        paymentPackage.VAT = 10;
        expect(paymentPackage.VAT).to.be.equal(10)
    })
    it("correct get and set active", function () {
        expect(paymentPackage.active).to.be.equal(true)
        paymentPackage.active = false;
        expect(paymentPackage.active).to.be.equal(false)
    })
})


// TAKA СЕ ТЕСТВАТ ХВЪРЛЯНИЯ НА ГРЕШКИ !!!!!
describe("incorrect parameters", function () {

    it("incorrect name", function () {
        expect(() => new PaymentPackage("", 20)).to.throw('Name must be a non-empty string');
    })
    it("incorrect value", function () {
        expect(() => new PaymentPackage("Joro", -5)).to.throw("Value must be a non-negative number");
    })
    it("incorrect name", function () {
        expect(() => new PaymentPackage("", "")).to.throw();
    })
    it("incorrect name", function () {
        expect(() => new PaymentPackage(20, 20)).to.throw();
    })


    it("incorrect VAT", function () {
        expect(() => new PaymentPackage("Joro", 20).VAT = -4).to.throw("VAT must be a non-negative number");
    })
    it("incorrect active status", function () {
        expect(() => new PaymentPackage("Joro", 20).active = 23).to.throw("Active status must be a boolean");
    })
    it("incorrect active status 2", function () {
        expect(() => new PaymentPackage("Joro", 20).active = "TEST").to.throw("Active status must be a boolean");
    })


})

describe("toString()", function () {
    let myPaymentPackage = new PaymentPackage("Test", 30)
    let result = ["Package: Test",
        "- Value (excl. VAT): 30",
        "- Value (VAT 20%): 36"].join("\n")

    it("with active", function () {
        expect(myPaymentPackage.toString()).to.be.equal(result)
    })
})

describe("toString()", function () {
    let myPaymentPackage = new PaymentPackage("Test", 30);
    myPaymentPackage.active = false;
    let result = ["Package: Test (inactive)",
        "- Value (excl. VAT): 30",
        "- Value (VAT 20%): 36"].join("\n")

    it("with inactive", function () {
        expect(myPaymentPackage.toString()).to.be.equal(result)
    })
})