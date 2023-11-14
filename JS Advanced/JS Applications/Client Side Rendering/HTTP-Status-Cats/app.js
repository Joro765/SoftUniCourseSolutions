import { cats } from "./catSeeder.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";

const root = document.querySelector("#allCats");


const ul = html`<ul>${cats.map(cat => createCard(cat))}</ul>`;
render(ul, root);




// TEMPLATE FOR CAT
function createCard(data) {
    return html`<li>
    <img src="images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
         <button @click = ${showMore} class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="100">
                <h4>Status Code: ${data.statusCode}</h4>
                <p>${data.statusMessage}</p>
            </div>
     </div>
    </li>`
}

// BUTTON
function showMore(e) {
    let btn = e.target;
    let currentDiv = e.target.parentElement.querySelector("div");
    if (btn.textContent == "Show status code") {
        currentDiv.style.display = "block";
        btn.textContent = "Hide status code";
    } else {
        currentDiv.style.display = "none";
        btn.textContent = "Show status code";
    }
}

