const User = require("../models/User");


// добавяне на потребител в базата
function register(userData) {
    User.create(userData);
}


module.exports = {
    register
}