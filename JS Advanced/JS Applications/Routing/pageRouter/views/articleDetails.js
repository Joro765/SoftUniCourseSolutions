import { html, render } from "../../node_modules/lit-html/lit-html.js";
const root = document.getElementById("root");

// темплейт за артикъл
const articleTemplate = (article) => {
    return html`<article>
        <h1>${article.title}</h1>
        <section>${article.content}</section>
        <footer>
            <p>Author: ${article.author}</p>
        </footer>
    </article>`
}

// Връща инфо за кокретен артикъл по ид-то от базата
async function loadArticle(articleID) { // articleID идва от app.js от линка, който е натиснат пренася в контекста ид-то.
    const response = await fetch(`http://localhost:3030/jsonstore/articles/${articleID}`);
    const data = await response.json();
    return data;
}


export const articleDetailsView = async (ctx) => {  // Извикваме параметъра през контекста в app.js МНОГО МНОГО МНОГО ВАЖНО !!!!
    let article = await loadArticle(ctx.params.articleID - 1); // Изчакаваме инфото от сървъра
    let section = articleTemplate(article);  // създаваме елемента по темплейта
    render(section, root); // рендерираме
}





