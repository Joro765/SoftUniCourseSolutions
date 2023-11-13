import { showDetails } from "./details.js";

const main = document.getElementById("main");
const section = document.getElementById("dashboard-holder");
section.addEventListener("click", onDetailsClick);

let msg = document.createElement("h1");
msg.textContent = `No ideas yet! Be the first one :)`;


export function showDashboard() {
    main.replaceChildren(section)
    buildIdeas();
}



async function getIdeas() {
    const response = await fetch("http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc");
    const data = await response.json();
    return data;
}



async function buildIdeas() {
    let ideas = await getIdeas();
    section.replaceChildren(msg);
    if (ideas.length > 0) {
        msg.remove();
        for (const idea of ideas) {
            let div = document.createElement("div");
            div.classList = "card overflow-hidden current-card details";
            div.setAttribute("style", "width: 20rem; height: 18rem;");
            div.innerHTML = `<div class="card-body">
            <p class="card-text">${idea.title}</p>
        </div>
        <img class="card-image" src="${idea.img}" alt="Card image cap">
        <a data-id="${idea._id}" class="btn" href="/details">Details</a>
    </div>`;

            section.appendChild(div);
        }
    } else {
        section.replaceChildren(msg)
    }
}


function onDetailsClick(e) {
    e.preventDefault();
    if (e.target.tagName == "A") {
        const id = e.target.dataset.id;
        if (id) {
            showDetails(id);
        }
    }
}