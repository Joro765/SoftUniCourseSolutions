const mongoose = require("mongoose");


const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 5
    },
    genre: {
        type: String,
        required: true,
        minLength: 5
    },
    director: {
        type: String,
        required: true,
        minLength: 5
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2024
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    description: {
        type: String,
        required: true,
        minLength: 20
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\// // да започва с http или https 

    },
    casts: [{   // Добавяме рефенция към друг документ в базата. Актьори за всеки филм
        type: mongoose.Types.ObjectId,
        ref: "Cast"
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})


const Movie = mongoose.model("Movie", movieSchema); // Първият аргумент Movie е името на модела. В базата ще се създаде колекция с име movies

module.exports = Movie;