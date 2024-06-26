const jwt = require("../utils/jwt");
const { SECRET } = require("../config/config");




async function auth(req, res, next) {
    const token = req.cookies["auth"];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = await jwt.verify(token, SECRET);
        req.user = decodedToken;
        res.locals.isAuthenticated = true;
        next();
    } catch (error) {
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




function isGuest(req, res, next) {
    if (req.user) {
        return res.redirect("/");
    }

    next();
}





module.exports = {
    auth,
    isAuth,
    isGuest
}