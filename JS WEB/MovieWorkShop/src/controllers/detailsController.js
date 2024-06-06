const express = require("express");
const router = express.Router();

const movieService = require("../services/movieService");


router.get("/movies/:movieId", async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getMovie(movieId).lean();
    const casts = movie.casts; // можем да вземем актьорите от филма, понеже сме ползвали populate в заявката към базата.

    movie.starsRating = new Array(Number(movie.rating)).fill(1); // render stars
    res.render("details", { movie, casts });
})


module.exports = router;