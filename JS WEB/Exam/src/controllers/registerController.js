const express = require("express");
const router = express.Router();

const authService = require("../services/authService");
const getErrorMsg = require("../utils/errorUtil");
const { isGuest } = require("../middlewares/authMiddleware");


router.get("/register", isGuest, (req, res) => {
    res.render("register");
})

router.post("/register", isGuest, async (req, res) => {
    const userData = req.body;

    try {
        const token = await authService.register(userData);
        res.cookie("auth", token);
        res.redirect("/");
    } catch (error) {
        res.render("register", { ...userData, error: getErrorMsg(error) });
    }

})


module.exports = router;