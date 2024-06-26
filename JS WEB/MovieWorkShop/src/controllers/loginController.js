const express = require('express');
const router = express.Router();

const userService = require("../services/authService");


router.get("/login", (req, res) => {
    res.render("login");
})


router.post("/login", async (req, res) => {
    const loginData = req.body;
    const token = await userService.login(loginData); // връшаме jwt token

    res.cookie("auth", token); // изпраща куки с jwt токен-а.
    res.redirect("/");
})


router.get("/logout", (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
})



module.exports = router;