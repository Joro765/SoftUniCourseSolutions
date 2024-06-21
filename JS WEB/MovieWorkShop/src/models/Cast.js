const mongoose = require("mongoose");


const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    age: {
        type: Number,
        required: true,
        max: 120,
        min: 1
    },
    born: {
        type: String,
        required: true,
        minLength: 10
    },
    nameInMovie: {
        type: String,
        required: true,
        minLength: 5
    },
    castImage: {
        type: String,
        required: true,
        match: /^https?:\/\// // да започва с http или https 
    }
});



const Cast = mongoose.model("Cast", castSchema);

module.exports = Cast;
