const main = document.querySelector("main");
const homeSection = document.getElementById("home");


export function showHome() {
    main.replaceChildren(homeSection);
}