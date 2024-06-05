const Cast = require("../models/Cast");


function createCast(castData) {
    const cast = Cast.create(castData);
    return cast;
}


module.exports = {
    createCast
}