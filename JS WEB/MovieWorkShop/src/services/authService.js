const User = require("../models/User");
const cookieparser = require("cookie-parser");
const bcrypt = require("bcrypt");

const jwt = require("../util/jwt.js");
const { SECRET } = require("../config/config");



// добавяне на потребител в базата // паролата се хешира в модела !
async function register(userData) {

    if (userData.password !== userData.rePassword) { // ако паролите не съвпадат !!!
        throw new Error("Password missmatch");
    }

    const user = await User.findOne({ email: userData.email });

    if (user) {
        throw new Error("Email already exists!");     // Проверяваме дали има такъв мейл преди да го регистрираме !!!
    }

    return User.create(userData);
}


async function login(userData) {
    const email = userData.email;
    const password = userData.password;

    // get user from db
    const user = await User.findOne({ email });

    // check if user exists
    if (!user) {
        throw new Error("Username or password is invalid");
    }

    // check if password is valid
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error("Username or password is invalid");
    }

    // generate JSON Web Token
    const payload = {
        _id: user._id,
        email: user.email
    }

    const token = await jwt.sign(payload, SECRET, { expiresIn: "2h" });
    return token;

}


module.exports = {
    register,
    login
}