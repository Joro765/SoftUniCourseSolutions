import { links } from "./router.js";

const main = document.getElementById("main");
const section = document.getElementById("homePage");
const startBtn = section.querySelector("a");

startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let url;
    if (e.target.href) {
        url = new URL(e.target.href);
    }
    const view = links[url.pathname];
    view();
})


export function showHome() {
    main.replaceChildren(section)
}