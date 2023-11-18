import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs"; // импортваме библиотеката

const aboutTemplate = () => {
    return html`<h1>THIS IS ABOUT PAGE</h1>
         <p>CONTACT US ON EMAIL: jorogeorgiev765@abv.bg</p>
         <button @click=${redirectFun}>HOME</button>`
}


function redirectFun() {
    page.redirect("/home") // редирект до страницата, която подадем !!!
}

const root = document.getElementById("root");


// Функция, която зарежда абаут
export const aboutView = (ctx) => {
    let section = aboutTemplate();
    render(section, root);
}