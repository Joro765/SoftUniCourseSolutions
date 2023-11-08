import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import { logout } from "./logout.js";
import { addMovie } from "./addMovie.js";




// Спрямо pathname на url-ла правим видими или невидими дадени секции/страници на сайта
export function router(path) {

    if (path == "/") {
        showHome();
    } else if (path == "/login") {
        showLogin();
    } else if (path == "/register") {
        showRegister();
    } else if (path == "/logout") {
        logout();
    } else if (path == "/addMovie") {
        debugger
        addMovie();
    }
}
