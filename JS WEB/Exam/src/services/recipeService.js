const { Mongoose } = require("mongoose");
const Recipe = require("../models/Recipe");

function createRecipe(recipeData) {
    return Recipe.create(recipeData);
}

function getAllRecipes() {
    return Recipe.find();
}

function getRecipeDetails(recipeId) {
    return Recipe.findById(recipeId);
}



function recommendRecipe(recipeId, userId) {
    return Recipe.findByIdAndUpdate(recipeId, { $push: { recommendList: userId } });
}


function deleteRecipe(recipeId) {
    return Recipe.findByIdAndDelete(recipeId);

}


function editRecipe(recipeId, editedRecipe) {
    return Recipe.findByIdAndUpdate(recipeId, editedRecipe, { runValidators: true });
}




module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeDetails,
    recommendRecipe,
    deleteRecipe,
    editRecipe,
}