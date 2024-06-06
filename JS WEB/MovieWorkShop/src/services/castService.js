const Cast = require("../models/Cast");


function createCast(castData) {
    const cast = Cast.create(castData);
    return cast;
}

function getCasts() {
    const casts = Cast.find();
    return casts;
}


module.exports = {
    createCast,
    getCasts
}