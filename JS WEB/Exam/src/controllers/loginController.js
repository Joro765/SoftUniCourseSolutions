const express = require("express");
const router = express.Router();

const authService = require("../services/authService");
const getErrorMsg = require("../utils/errorUtil");
const { isGuest } = require("../middlewares/authMiddleware");



router.get("/login", isGuest, (req, res) => {
    res.render("login");
})


router.post("/login", isGuest, async (req, res) => {
    const loginData = req.body;

    try {
        const token = await authService.login(loginData);
        res.cookie("auth", token);
        res.redirect("/");
    } catch (error) {
        res.render("login", { ...loginData, error: getErrorMsg(error) });
    }
})


router.get("/logout", (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
})


module.exports = router;