import { registerPage } from "./register.js"
import { logout } from "./logout.js"
import { createPage } from "./create.js"
import { homePage } from "./home.js"
import { loginPage } from "./login.js"
import { updateNav } from "./utils.js"

// ROUTES for different pages/views
const routes = {
    "/": homePage,
    "/login": loginPage,
    "/register": registerPage,
    "/logout": logout,
    "/create": createPage
}


document.querySelector("nav").addEventListener("click", onNavigate) // nav buttons
document.querySelector("#add-movie-button a").addEventListener("click", onNavigate) // add movie button


// Function to add event listeners to anchor tags
function onNavigate(e) {
    if (e.target.tagName == "A" && e.target.href) {
        e.preventDefault();
        let url = new URL(e.target.href);

        const view = routes[url.pathname];
        if (typeof view == "function") {
            view();
        }
    }
}



// Application start - showing home page
updateNav();
homePage();