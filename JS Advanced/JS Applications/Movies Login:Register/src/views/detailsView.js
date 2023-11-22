import { html, render } from "../../node_modules/lit-html/lit-html.js"

const root = document.getElementById("root");


const detailsTemplate = (id) => {
    return html`<h1>DETAILS PAGE for ${id}</h1>`
}


export const detailsView = (ctx) => {
    let id = ctx.params.id;
    render(detailsTemplate(id), root);
}