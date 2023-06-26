function printMovies(data) {

    // Array to store the movie objects
    let movies = [];

    let movie = {};


    for (let i = 0; i < data.length; i++) {
        let command = data[i];

        if (command.includes("addMovie")) {
            let name = command.split("addMovie ")[1];
            movies.push({ name });

        } else if (command.includes("directedBy")) {
            let [name, director] = command.split(" directedBy ");
            let movie = movies.find(m => m.name === name)

            if (movie) {
                movie.director = director;
            }

        } else if (command.includes("onDate")) {
            let [name, date] = command.split(" onDate ");
            let movie = movies.find(m => m.name === name)

            if (movie) {
                movie.date = date;
            }
        }
    }

    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })

}

printMovies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])