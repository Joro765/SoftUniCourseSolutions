const jwt = require("jsonwebtoken");
const util = require("util");


// Превръщаме билд ин функцията sign на jwt в такава, която работи с промиси
const sign = util.promisify(jwt.sign);


// Проверява съществуващ токен дали е активен 
const verify = util.promisify(jwt.verify);


module.exports = {
    sign,
    verify
}