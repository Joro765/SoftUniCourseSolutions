import { html, render } from "../node_modules/lit-html/lit-html.js";

const form = document.querySelector("form");
form.addEventListener("submit", addItem)
const div = document.querySelector("div");



// INITIAL LOAD
async function loadOptions() {
    const response = await fetch("http://localhost:3030/jsonstore/advanced/dropdown");
    const data = await response.json();
    const options = Object.values(data);
    const section = html`<select id="menu">${options.map(option => html`<option .value = ${option._id}>${option.text}</option>`)}</select>`
    render(section, div)
}



// ADD ITEM
async function addItem(e) {
    e.preventDefault();

    let textEl = document.getElementById("itemText")
    let text = textEl.value

    let response = await fetch("http://localhost:3030/jsonstore/advanced/dropdown", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ text })
    })
    let data = await response.json();
    textEl.value = "";
    loadOptions(); // RELOAD 

}



// Start APP
loadOptions()
