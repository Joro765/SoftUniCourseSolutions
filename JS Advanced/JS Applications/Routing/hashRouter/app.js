import { html, render } from "../node_modules/lit-html/lit-html.js"

const root = document.getElementById("root");


function homePage() {
    return html`<h1>HOME PAGE</h1>
         <p>This is the home page!!!</p>`
}

function articlesPage() {
    return html`<h1>ARTICLES PAGE</h1>
         <p>This is the articles page!!!</p>
         <p>Article 1</p>
         <p>Article 2</p>
         <p>Article 3</p>`
}

function aboutPage() {
    return html`<h1>ABOUT PAGE</h1>
         <p>This is the about page!!!</p>
         <p>Contact us on email: jorogeorgiev@abv.bg</p>`
}

const routes = {
    "#home": homePage,
    "#articles": articlesPage,
    "#about": aboutPage
}




// Слагаме евент, който следи за промяна на хеш-а горе в линка на страницата и спрямо него променяме изгледа
window.addEventListener("hashchange", (e) => {
    let element = routes[location.hash]();
    render(element, root)
})