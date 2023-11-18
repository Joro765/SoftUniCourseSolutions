import { html, render } from "../../node_modules/lit-html/lit-html.js";

const homeTemplate = () => {
    return html`<h1>HOME PAGE</h1>
         <p>This is the home page! Welcome!</p>`
}

const root = document.getElementById("root");

// Функция, която зарежда хоум
export const homeView = (ctx) => {
    let section = homeTemplate();
    render(section, root);
}