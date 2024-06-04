const Movie = require("../models/Movie");


const movies = [
    {
        _id: 1,
        title: "Jungle Cruise",
        genre: "Adventure",
        director: "Spilberg",
        date: "2019",
        imageUrl: "/img/jungle-cruise.jpeg",
        rating: 5,
        description: "Dreaming about saving countless lives and having yet another adventure in the jungle..."
    }
];



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
function search(title, genre, year) {
    let result = movies.slice();

    if (title) {
        result = result.filter(movie => movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
    }

    if (genre) {
        result = result.filter(movie => movie.genre.toLocaleLowerCase() === genre.toLocaleLowerCase());
    }

    if (year) {
        result = result.filter(movie => movie.date === year);
    }

    return result;

}

module.exports = {
    createMovie,
    getAll,
    getMovie,
    search
}