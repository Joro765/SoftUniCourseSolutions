import { homePage } from "./home.js";
import { updateNav } from "./utils.js"


export function logout() {
    alert("LOGGING OUT!")
    sessionStorage.clear();
    updateNav();
    homePage();
}
