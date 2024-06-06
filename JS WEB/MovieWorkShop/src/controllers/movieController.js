const express = require("express");
const router = express.Router();

const movieService = require("../services/movieService");
const castService = require("../services/castService");


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


// GET Available CASTS FOR MOVIE !!!

router.get("/movies/:movieId/attach", async (req, res) => {
    const movie = await movieService.getMovie(req.params.movieId).lean();
    const casts = await castService.getCasts().lean();
    res.render("cast-attach", { movie, casts });
})


// ATTACH CAST TO A MOVIE IN THE DB - RELATION !!!

router.post("/movies/:movieId/attach", async (req, res) => {
    const castId = req.body.castId; // взимаме cast ид
    try {
        await movieService.attach(req.params.movieId, castId);  // подаваме филма и актьора на функцията
        res.redirect(`/movies/${req.params.movieId}`);
    } catch (error) {
        console.log(error.message);
        res.redirect("/");
    }
})



module.exports = router;