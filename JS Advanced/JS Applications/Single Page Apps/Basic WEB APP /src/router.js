import { renderHome } from "./home.js";
import { renderLogin } from "./login.js";
import { renderRegister } from "./register.js";
import { renderCreate } from "./create.js";
import { logout } from "./logout.js";




// Спрямо pathname на url-ла правим видими или невидими дадени секции/страници на сайта
export function router(path) {
    clearMain(); // зачистване мейн-а преди да рендерираме секция в него

    if (path == "/") {
        renderHome();
    } else if (path == "/login") {
        renderLogin();
    } else if (path == "/register") {
        renderRegister();
    } else if (path == "/create") {
        renderCreate();
    } else if (path == "/logout") {
        logout();
    }
}



function clearMain() {
    // Мейн Секцията
    const mainContent = document.querySelector('.main-content');

    // Взимаме всички деца демек секциите за да ги скрием преди да покажем САМО желаната
    for (const section of mainContent.children) {
        section.style.display = "none";
    }

}