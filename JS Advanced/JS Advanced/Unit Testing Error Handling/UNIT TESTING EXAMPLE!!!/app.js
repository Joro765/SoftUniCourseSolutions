function sum(a, b) {
    if ((typeof a === "string") || (typeof b === "string")) {
        return undefined
    }
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

module.exports = {
    sum,
    multiply,
    divide
}