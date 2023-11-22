let baseURL = "http://localhost:3030/";


// get all movies
export async function getAllMovies() {
    const response = await fetch(`${baseURL}jsonstore/movies`);
    const data = await response.json();
    return data;
}