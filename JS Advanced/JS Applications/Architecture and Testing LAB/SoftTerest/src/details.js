import { showDashboard } from "./dashboard.js"

const main = document.getElementById("main");
const section = document.querySelector("detailsPage");


export async function showDetails(id) {
    main.replaceChildren(await loadDetails(id));
    document.querySelector("delBtn").addEventListener("click", onDelete);
}


async function loadDetails(id) {
    let response = await fetch(`http://localhost:3030/data/ideas/${id}`);
    let data = await response.json();

    let div = document.createElement("div");
    div.classList = "container home some";

    if (localStorage.getItem("userID") == data._ownerId) {
        div.innerHTML = `<img class="det-img" src="${data.img}" />
        <div class="desc">
        <h2 class="display-5">${data.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${data.description}</p>
        </div>
        <div class="text-center">
        <a id="delBtn" data-id="${data._id}" class="btn detb" href="">Delete</a>
        </div>`;
    } else {
        div.innerHTML = `<img class="det-img" src="${data.img}" />
        <div class="desc">
        <h2 class="display-5">${data.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${data.description}</p>
        </div>`
    }
    return div;

}

async function onDelete(e) {
    e.preventDefault();
    let id = e.target.dataset.id;
    debugger
    let response = await fetch(`http://localhost:3030/data/ideas/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            "X-Authorization": localStorage.getItem("accessToken")
        }
    });
    let data = await response.json();
    showDashboard();
}

