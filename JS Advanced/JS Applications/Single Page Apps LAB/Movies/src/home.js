import { showView, updateNav } from "./utils.js";


const homeSection = document.querySelector("#home-page");
const catalog = homeSection.querySelector("#movie .card-deck.d-flex.justify-content-center")

export function homePage() {
    showView(homeSection);
    displayMovies();
}


async function displayMovies() {
    catalog.innerHTML = "";
    const movies = await getMovies(); // изчаквам getMovies да вземе филмите от сървъра и след това ги обработваме
    for (const movie of movies) {
        const element = document.createElement("div");
        element.classList = "card mb-4";
        element.innerHTML = `<img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
                                <div class="card-body">
                                  <h4 class="card-title">${movie.title}</h4>
                                </div>
                                <div class="card-footer">
                                 <a data-id="${movie._id}" href="/details/${movie._id}">
                                  <button type="button" class="btn btn-info">Details</button>
                                 </a>
                                </div>`;

        catalog.appendChild(element)
    }

}



async function getMovies() {
    let response = await fetch(`http://localhost:3030/data/movies`);
    let movies = await response.json();

    return movies;
}