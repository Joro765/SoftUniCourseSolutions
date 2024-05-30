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
    movieData._id = movies[movies.length - 1]._id + 1; // Взимаме ид-то на последния филм и го инкрементираме с 1 за да създадем ид за нов филм
    movies.push(movieData);
}


function getAll() {
    return movies.slice();  // Връщаме копие на масива
}


function getMovie(movieId) {
    return movies.find(movie => movie._id == movieId);
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