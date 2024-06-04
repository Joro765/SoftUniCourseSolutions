const express = require("express");
const router = express.Router();

const movieService = require("../services/movieService");


router.get("/create", (req, res) => {
    res.render("create");
})


router.post("/create", async (req, res) => {
    const newMovie = req.body;

    try {
        await movieService.createMovie(newMovie);
        res.redirect("/");
    } catch (error) {
        console.log(error.message);
        res.redirect("/create");
    }
})


module.exports = router;