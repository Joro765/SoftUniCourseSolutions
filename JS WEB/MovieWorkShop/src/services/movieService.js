const Movie = require("../models/Movie");



function createMovie(movieData) {
    const movies = Movie.create(movieData);
    return movies;
}


function getAll() {
    const result = Movie.find();
    return result;
}


function getMovie(movieId) {
    const movie = Movie.findById(movieId);
    return movie;
}


// Search
async function search(title, genre, year) {
    let result = await Movie.find().lean();

    if (title) {
        result = result.filter(movie => movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
    }

    if (genre) {
        result = result.filter(movie => movie.genre.toLocaleLowerCase() === genre.toLocaleLowerCase());
    }

    if (year) {
        result = result.filter(movie => movie.year === year);
    }

    return result;

}

module.exports = {
    createMovie,
    getAll,
    getMovie,
    search
}