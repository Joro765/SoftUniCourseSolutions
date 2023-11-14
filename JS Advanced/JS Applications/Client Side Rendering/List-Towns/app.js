import { render, html } from "../node_modules/lit-html/lit-html.js";
const root = document.querySelector("#root");
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);


function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputData = Object.fromEntries(formData);
    const towns = inputData.towns.split(", ");

    // Създаване на UL елемент, като в него за всеки град създаваме LI елемент
    const ul = html`<ul>${towns.map(town => CreateTemplate(town))}</ul>`;

    // Добавяне на UL елементът в ROOT
    render(ul, root);

}



// Пресъздаване на всеки един град като LI елемент
function CreateTemplate(data) {
    return html`<li>${data}</li>`
}
