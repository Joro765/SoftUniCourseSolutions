const express = require("express");
const router = express.Router();

const movieService = require("../services/movieService");
const castService = require("../services/castService");
const { isAuth } = require("../middlewares/authMiddleware");


router.get("/create", isAuth, (req, res) => {
    res.render("create");
})


router.post("/create", isAuth, async (req, res) => {
    const newMovie = req.body;
    newMovie.owner = req.user._id; // добавяме owner на филма при създаването на филм
    try {
        await movieService.createMovie(newMovie);
        res.redirect("/");
    } catch (error) {
        console.log(error.message);
        res.redirect("/create");
    }
})


// GET Available CASTS FOR MOVIE !!!

router.get("/movies/:movieId/attach", isAuth, async (req, res) => {
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


// EDIT MOVIE

router.get("/movies/:movieId/edit", isAuth, async (req, res) => {
    const movie = await movieService.getMovie(req.params.movieId).lean();
    res.render("movie-edit", { movie });
})


router.post("/movies/:movieId/edit", isAuth, async (req, res) => {
    const editedMovie = req.body;

    await movieService.edit(req.params.movieId, editedMovie); // подаваме променения филм
    res.redirect(`/movies/${req.params.movieId}`);
})


// DELETE MOVIE
router.get("/movies/:movieId/delete", isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    await movieService.deleteMovie(movieId);
    res.redirect("/");
})



module.exports = router;