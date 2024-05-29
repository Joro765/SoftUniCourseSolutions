const express = require("express");
const router = express.Router();

const movieService = require("../services/movieService");


router.get("/create", (req, res) => {
    res.render("create");
})


router.post("/create", (req, res) => {
    const newMovie = req.body; // Обект с данните от формата
    movieService.createMovie(newMovie);
    res.send("created movie!");
})


module.exports = router;