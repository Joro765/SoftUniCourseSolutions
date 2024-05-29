const movies = [];



function createMovie(movieData) {
    movies.push(movieData);
}


function getAll() {
    return movies.slice();  // Връщаме копие на масива
}


module.exports = {
    createMovie,
    getAll
}