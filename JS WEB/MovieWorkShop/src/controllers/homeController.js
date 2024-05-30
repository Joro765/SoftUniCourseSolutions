const express = require("express");
const router = express.Router();

const movieService = require("../services/movieService");



router.get("/", (req, res) => {
    const movies = movieService.getAll();
    res.render("home", { movies })
});


router.get("/search", (req, res) => {
    const { title, genre, year } = req.query;

    const movies = movieService.search(title, genre, year);
    res.render("search", { movies })
});



module.exports = router;