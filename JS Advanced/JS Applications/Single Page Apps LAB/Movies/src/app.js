import { showHome } from "./home.js";
import { authUpdate } from "./auth.js";
import { router } from "./router.js";
import { addMovie } from "./addMovie.js";




showHome();
authUpdate();

const navigationElement = document.getElementsByClassName('navbar navbar-expand-lg navbar-dark bg-dark')[0];
navigationElement.addEventListener("click", (e) => {
    e.preventDefault();

    // Ако елементът има tagName му взимаме href
    if (e.target.tagName == "A") { // 
        let url = new URL(e.target.href);

        router(url.pathname);
    }
})

const addMovieSection = document.getElementById("home-page");
const addBtn = addMovieSection.getElementsByTagName("a")[0].addEventListener("click", addMovie)


