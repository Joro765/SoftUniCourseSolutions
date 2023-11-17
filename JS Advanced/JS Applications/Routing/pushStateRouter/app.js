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
    "/home": homePage,
    "/articles": articlesPage,
    "/about": aboutPage
}



// Слагаме евент на всички линкове в бодито
document.body.addEventListener("click", (e) => {
    if (e.target.tagName == "A") {
        e.preventDefault();

        let url = new URL(e.target.href); // взимаме url
        history.pushState({}, "", url.pathname) // заменяме тука линка горе с разширението примерно /home
        let element = routes[url.pathname](); // изпълняваме функцията за дадения линк
        render(element, root) // добавяме в бодито контента на страницата
    }
})

