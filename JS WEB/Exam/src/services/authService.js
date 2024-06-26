const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");
const { SECRET } = require("../config/config");


async function register(userData) {

    if (userData.password !== userData.rePassword) {
        throw new Error("Password missmatch");
    }

    const user = await User.findOne({ email: userData.email });

    if (user) {
        throw new Error("User already exists!");
    }

    const createdUser = await User.create(userData);

    const token = await generateToken(createdUser);
    return token;
}



async function login(loginData) {
    const email = loginData.email;
    const password = loginData.password;

    if (!email) {
        throw new Error("Email is required");
    }

    if (!password) {
        throw new Error("Password is required");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Email or password is invalid");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error("Email or password is invalid");
    }

    const token = await generateToken(user);
    return token;


}


async function generateToken(user) {

    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email
    }

    return jwt.sign(payload, SECRET, { expiresIn: "2h" });


}


module.exports = {
    register,
    login
}