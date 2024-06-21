// Middleware за проверка на jwt токен. Проверява дали сме логнати
const jwt = require("../util/jwt");
const { SECRET } = require("../config/config");

async function auth(req, res, next) {
    // get token
    const token = req.cookies["auth"];

    if (!token) {
        return next()  // guest
    }

    // valite token

    try {
        const decodedToken = await jwt.verify(token, SECRET);  // Ако не е валиден токена - логин
        req.user = decodedToken; // про последващи заявки да знаят, че юзера и уторизиран
        res.locals.isAuthenticated = true; // Глобална променлива за целия апп с която да променяме навигацията за юзер и гест

        next()
    } catch {
        res.clearCookie("auth");
        res.redirect("/login");
    }

}


function isAuth(req, res, next) {
    if (!req.user) {
        return res.redirect("/login");
    }

    next();
}

module.exports = {
    auth,
    isAuth
}