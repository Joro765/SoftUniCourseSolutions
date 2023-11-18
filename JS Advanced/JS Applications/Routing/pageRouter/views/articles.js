import { html, render } from "../../node_modules/lit-html/lit-html.js";
const root = document.getElementById("root");


const articlesTemplate = (articles) => {
    return html`<h1>ARTICLES</h1>
         ${articles.map(article => html`<article>
            <h3>${article.title}</h3>
            <footer>
                <p>Author: ${article.author}</p>
                <a href="/articles/${article.id}">read more...</a>
            </footer>
        </article>`)}
    `
}

async function getArtiles() {
    const response = await fetch("http://localhost:3030/jsonstore/articles");
    const data = await response.json();
    return Object.values(data);
}


// Функция, която зарежда артикълс
export const articlesView = async (ctx) => {
    let articles = await getArtiles();
    let section = articlesTemplate(articles);
    render(section, root);
}