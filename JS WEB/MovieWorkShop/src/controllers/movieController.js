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


// ATTACH CAST TO MOVIE !!!

router.get("/movies/:movieId/attach", (req, res) => {
    res.render("cast-attach");
})


module.exports = router;