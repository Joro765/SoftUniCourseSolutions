const express = require("express");
const router = express.Router();

const movieService = require("../services/movieService");



router.get("/", async (req, res) => {
    const movies = await movieService.getAll().lean(); // lean се изпълнява върху документа за да върне обекти, иначе си връща документ
    res.render("home", { movies })
});




router.get("/search", async (req, res) => {
    const { title, genre, year } = req.query;

    const movies = await movieService.search(title, genre, year);
    res.render("search", { movies })
});



module.exports = router;