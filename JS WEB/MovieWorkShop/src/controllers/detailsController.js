const express = require("express");
const router = express.Router();

const movieService = require("../services/movieService");


router.get("/movies/:movieId", (req, res) => {
    const movieId = req.params.movieId;
    const movie = movieService.getMovie(movieId);

    movie.starsRating = new Array(Number(movie.rating)).fill(1); // render stars
    res.render("details", { movie });
})


module.exports = router;