const { onlineStore } = require("./onlineStore.js"); // Добавям си функциите, които ще тествам
const expect = require("chai").expect // добавям библиотека chai




describe("isProductAvailable", function () {
    it("throw error if invalid first param ", function () {
        expect(() => onlineStore.isProductAvailable(23, 2)).to.throw("Invalid input.");
    })
    it("throw error if invalid second param", function () {
        expect(() => onlineStore.isProductAvailable("PS5", [])).to.throw("Invalid input.");
    })
    it("throw error if both params are invalid", function () {
        expect(() => onlineStore.isProductAvailable(2, [])).to.throw("Invalid input.");
    })

    it("return out of stock if second param is = 0", function () {
        expect(onlineStore.isProductAvailable("PS5", 0)).to.equal("Sorry, PS5 is currently out of stock.");
    })
    it("return out of stock if second param is < 0", function () {
        expect(onlineStore.isProductAvailable("PS5", -2)).to.equal("Sorry, PS5 is currently out of stock.");
    })

    it("return in stock if second param is > 0", function () {
        expect(onlineStore.isProductAvailable("PS5", 2)).to.equal("Great! PS5 is available for purchase.");
    })
})

describe("canAffordProduct", function () {
    it("throw error if invalid first param ", function () {
        expect(() => onlineStore.canAffordProduct([], 200)).to.throw("Invalid input.");
    })
    it("throw error if invalid second param ", function () {
        expect(() => onlineStore.canAffordProduct(200, {})).to.throw("Invalid input.");
    })
    it("throw error if both params are invalid ", function () {
        expect(() => onlineStore.canAffordProduct("Test", "200")).to.throw("Invalid input.");
    })

    it("return product purchased if price - balance > 0", function () {
        expect(onlineStore.canAffordProduct(300, 350)).to.equal("Product purchased. Your remaining balance is $50.");
    })
    it("return product purchased if price - balance = 0", function () {
        expect(onlineStore.canAffordProduct(300, 300)).to.equal("Product purchased. Your remaining balance is $0.");
    })
    it("return not enought money if price > balance", function () {
        expect(onlineStore.canAffordProduct(350, 300)).to.equal("You don't have sufficient funds to buy this product.");
    })
})

describe("getRecommendedProducts", function () {
    it("throw error if invalid first param ", function () {
        expect(() => onlineStore.getRecommendedProducts("TEST", 2)).to.throw("Invalid input.");
    })
    it("throw error if invalid second param ", function () {
        expect(() => onlineStore.getRecommendedProducts([{ name: "PS5", category: "gaming" }, { name: "LG", category: "tv" }], 2)).to.throw("Invalid input.");
    })
    it("throw error if both params are invalid ", function () {
        expect(() => onlineStore.getRecommendedProducts({}, [])).to.throw("Invalid input.");
    })

    it("return sorry we don't have such a product ", function () {
        expect(onlineStore.getRecommendedProducts([{ name: "PS5", category: "gaming" }, { name: "LG", category: "tv" }], "photography")).to.equal(`Sorry, we currently have no recommended products in the photography category.`);
    })
    it("return correct products from category", function () {
        expect(onlineStore.getRecommendedProducts([{ name: "PS5", category: "gaming" }, { name: "xbox", category: "gaming" }], "gaming")).to.equal(`Recommended products in the gaming category: PS5, xbox`);
    })
})




