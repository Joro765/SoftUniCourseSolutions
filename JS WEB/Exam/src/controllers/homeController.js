const express = require("express");
const router = express.Router();

const recipeService = require("../services/recipeService");


router.get("/", async (req, res) => {
    const recipes = await recipeService.getAllRecipes().lean();
    const lastRecipes = recipes.slice(-3);
    res.render("home", { lastRecipes });
})


router.get("/search", (req, res) => {
    res.render("search")
});



module.exports = router;