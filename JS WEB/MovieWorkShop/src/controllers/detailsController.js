const express = require("express");
const router = express.Router();

const movieService = require("../services/movieService");


router.get("/movies/:movieId", async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getMovie(movieId).lean();

    movie.starsRating = new Array(Number(movie.rating)).fill(1); // render stars
    res.render("details", { movie });
})


module.exports = router;