import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { getAllMovies } from "../services/movieService.js";

const root = document.getElementById("root");


const movieTemplate = (movie) => {
    return html`<div class="card movie-card">
    <img src="${movie.posterUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${movie.title}</h5>
      <p class="card-text">${movie.plot}</p>
      <a href="/details/${movie._id}" class="btn btn-primary">Details</a>
    </div>
  </div>`
}

const homeTemplate = (movies) => {
    return html`<h1>Movie List</h1>
    <div class="movie-list">
        ${movies.map(movie => movieTemplate(movie))}
</div>`
}


export async function homeView(ctx) {
    let data = await getAllMovies();
    render(homeTemplate(Object.values(data)), root);
}