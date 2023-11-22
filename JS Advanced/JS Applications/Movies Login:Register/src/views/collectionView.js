import { html, render } from "../../node_modules/lit-html/lit-html.js"

const root = document.getElementById("root");


const collectionTemplate = () => {
    return html`<h1>COLLECTION PAGE :)</h1>`
}


export const collectionView = (ctx) => {
    render(collectionTemplate(), root);
}