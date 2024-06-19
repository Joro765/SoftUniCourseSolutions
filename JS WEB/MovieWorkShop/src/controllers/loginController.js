const express = require('express');
const router = express.Router();

const userService = require("../services/authService");


router.get("/login", (req, res) => {
    res.render("login");
})


router.post("/login", async (req, res) => {
    const loginData = req.body;
    const token = await userService.login(loginData); // връшаме jwt token
    console.log(token);
    res.redirect("/");
})




module.exports = router;