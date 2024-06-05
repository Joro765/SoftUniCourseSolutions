const express = require("express");
const router = express.Router();

const castService = require("../services/castService");


router.get("/cast/create", (req, res) => {
    res.render("cast-create");
});


router.post("/cast/create", async (req, res) => {
    const data = req.body;

    try {
        const cast = await castService.createCast(data);
        res.redirect("/");
    } catch (error) {
        console.log(error.message);
        res.redirect("/cast/create");
    }
})


module.exports = router;