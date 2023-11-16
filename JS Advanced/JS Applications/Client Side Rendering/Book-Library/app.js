import { html, render } from "../node_modules/lit-html/lit-html.js";

const root = document.querySelector("body");


render(createTemplate(), root);

function createTemplate() {
    return html`<button id="loadBooks" @click = ${loadBooks}>LOAD ALL BOOKS</button>`
}



// Create the table
function createTable(data) {
    return html`<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        ${data.map(x => createTableRow(x))} <!-- FOR EACH ENTRY CALL TABLEROW FUNCTION -->
    </tbody>
</table>`
}


// Create row for each entry
function createTableRow(data) {
    return html`<tr>
    <td>${data.author}</td>
    <td>${data.title}</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
</tr>`
}




async function loadBooks() {
    const response = await fetch("http://localhost:3030/jsonstore/collections/books");
    const data = await response.json();
    render(createTable(Object.values(data)), root);
}

