import { showHome } from "./home.js";
import { links } from "./router.js";
import { updateAuth } from "./utils.js";


// ATTACHING EVENT LISTENERS TO BUTTON IN NAVIGATION
document.querySelector("nav").addEventListener("click", (e) => {
    if (e.target.tagName == "A" || e.target.tagName == "IMG") {
        e.preventDefault();
        let url;
        if (e.target.href) {
            url = new URL(e.target.href);
        } else {
            url = new URL(e.target.parentElement.href);
        }
        const view = links[url.pathname];
        view();
    }
})


// APP ENTRY POINT - REMOVE ALL SECTIONS AND LOAD ONLY HOME SECTION
updateAuth()
document.getElementById("sections").remove();
showHome();
