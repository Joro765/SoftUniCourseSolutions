const User = require("../models/User");


// добавяне на потребител в базата // паролата се хешира в модела !
function register(userData) {
    User.create(userData);
}


module.exports = {
    register
}