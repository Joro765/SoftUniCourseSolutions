const jwt = require("jsonwebtoken");


// Превръщаме билд ин функцията sign на jwt в такава, която работи с промиси
function sign(payload, secret, options = {}) {
    const promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secret, options, (err, token) => {
            if (err) {
                return reject(err)
            }

            resolve(token);
        })

    });

    return promise;
}


module.exports = {
    sign
}