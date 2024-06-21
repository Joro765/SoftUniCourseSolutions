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
    } catch (err) {         // подаваме и данните за да не се изгубят от полетата
        res.render("register", { userData, error: err.message }); // ако избие грешка рендерира страницата и подава грешката на view-то
    }

})


module.exports = router;