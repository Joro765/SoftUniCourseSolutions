const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minLength: [2, "Title should be at least 2 characters long!"]
    },
    ingredients: {
        type: String,
        required: [true, "Ingredients are required!"],
        minLength: [10, "Ingredients should be at least 10 characters long!"],
        maxLength: [200, "Ingredients cannot be more than 200 characters long!"],
    },
    instructions: {
        type: String,
        required: [true, "Instructions are required!"],
        minLength: [10, "Instructions should be at least 10 characters long!"],
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [10, "Description should be at least 10 characters long!"],
        maxLength: [100, "Description cannot be more than 100 characters long!"],
    },
    image: {
        type: String,
        required: [true, "Image is required!"],
        match: [/^https?:\/\//, "Incorrect format for image!"]
    },
    recommendList: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }

})


const Recipe = mongoose.model("Recipe", recipeSchema);


module.exports = Recipe;

