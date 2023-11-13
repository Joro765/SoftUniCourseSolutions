import { showDashboard } from "./dashboard.js";

const main = document.getElementById("main");
const section = document.getElementById("createPage");
const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);


export function showCreate() {
    main.replaceChildren(section)

}


async function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let title = formData.get("title");
    let description = formData.get("description");
    let img = formData.get("imageURL");

    if (title.length < 6 || description.length < 10 || img.length < 5) {
        form.reset();
        throw new Error("Incorrect input!");
    }

    const response = await fetch("http://localhost:3030/data/ideas", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "X-Authorization": localStorage.getItem("accessToken")
        },
        body: JSON.stringify({ title, description, img })
    })
    showDashboard();

}