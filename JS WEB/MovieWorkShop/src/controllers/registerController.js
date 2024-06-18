const express = require("express");
const router = express.Router();

const userService = require("../services/authService");


router.get("/register", (req, res) => {
    res.render("register");
})

router.post("/register", async (req, res) => {
    const userData = req.body;

    try {
        await userService.register(userData); // заявка за добавяне на потребител в базата
        res.redirect("/login");
    } catch (error) {
        console.log(error.message);
    }

    res.end();
})


module.exports = router;