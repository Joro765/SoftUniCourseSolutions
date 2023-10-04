function calculator() {
    let selector1;
    let selector2;
    let resultSelector;



    return {

        init: function (selectorA, selectorB, result) {
            selector1 = document.querySelector(selectorA);
            selector2 = document.querySelector(selectorB);
            resultSelector = document.querySelector(result)

        },

        add: function () {
            let num1 = Number(selector1.value);
            let num2 = Number(selector2.value);
            resultSelector.value = num1 + num2;
        },
        subtract: function () {
            let num1 = Number(selector1.value);
            let num2 = Number(selector2.value);
            resultSelector.value = num1 - num2;
        }
    }
}



const calculating = calculator();

calculating.init('#num1', '#num2', '#result');




