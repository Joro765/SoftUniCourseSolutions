const express = require("express");
const router = express.Router();

const { isAuth } = require("../middlewares/authMiddleware");
const recipeService = require("../services/recipeService");
const getErrorMsg = require("../utils/errorUtil");



router.get("/recipes", async (req, res) => {
    const recipes = await recipeService.getAllRecipes().lean();

    res.render("catalog", { recipes });
});


router.get("/recipes/:recipeId", async (req, res) => {
    const recipeId = req.params.recipeId;

    const recipe = await recipeService.getRecipeDetails(recipeId).lean();

    const isOwner = req.user?._id == recipe.owner;
    const hasRecommended = recipe.recommendList.some(user => user._id == req.user?._id);

    res.render("details", { recipe, isOwner, hasRecommended })
});



router.get("/recipes/:recipeId/recommend", isAuth, async (req, res) => {
    const recipeId = req.params.recipeId;
    const userId = req.user?._id;

    await recipeService.recommendRecipe(recipeId, userId);
    res.redirect(`/recipes/${recipeId}`);
});


router.get("/recipes/:recipeId/edit", isAuth, isRecipeOwner, async (req, res) => {
    const recipe = await recipeService.getRecipeDetails(req.params.recipeId).lean();
    res.render("edit", { ...recipe });
});

router.post("/recipes/:recipeId/edit", isAuth, isRecipeOwner, async (req, res) => {
    const editedRecipe = req.body;
    try {
        await recipeService.editRecipe(req.params.recipeId, editedRecipe);
        res.redirect(`/recipes/${req.params.recipeId}`);
    } catch (error) {
        res.render(`edit`, { ...editedRecipe, error: getErrorMsg(error) });
    }

});

router.get("/recipes/:recipeId/delete", isAuth, isRecipeOwner, async (req, res) => {
    await recipeService.deleteRecipe(req.params.recipeId);
    res.redirect("/recipes");
});





router.get("/create", isAuth, (req, res) => {
    res.render("create");
});


router.post("/create", isAuth, async (req, res) => {
    const newRecipe = req.body;
    newRecipe.owner = req.user._id;

    try {
        await recipeService.createRecipe(newRecipe);
        res.redirect("/recipes");
    } catch (error) {
        res.render("create", { ...newRecipe, error: getErrorMsg(error) });
    }


})


async function isRecipeOwner(req, res, next) {
    const recipe = await recipeService.getRecipeDetails(req.params.recipeId);

    if (recipe.owner != req.user?._id) {
        return res.redirect("/");
    }

    next();
}


module.exports = router;


