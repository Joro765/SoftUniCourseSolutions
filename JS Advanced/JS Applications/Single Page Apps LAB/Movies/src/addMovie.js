import { showHome } from "./home.js";

const main = document.querySelector("main");

const addMovieSection = document.getElementById("add-movie");
const navSection = document.getElementsByClassName("navbar navbar-expand-lg navbar-dark bg-dark")[0];


export function addMovie() {
    main.replaceChildren(navSection, addMovieSection);
}