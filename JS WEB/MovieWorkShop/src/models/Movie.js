const mongoose = require("mongoose");


const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2030
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
        maxLength: 250
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\// // да започва с http или https 

    },
    casts: [{   // Добавяме рефенция към друг документ в базата. Актьори за всеки филм
        type: mongoose.Types.ObjectId,
        ref: "Cast"
    }]
})


const Movie = mongoose.model("Movie", movieSchema); // Първият аргумент Movie е името на модела. В базата ще се създаде колекция с име movies

module.exports = Movie;