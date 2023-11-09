import { showView } from "./utils.js";
import { homePage } from "./home.js"

const createSection = document.querySelector("#add-movie");
const form = createSection.querySelector("form");
form.addEventListener("submit", onSubmit);


export function createPage() {
    showView(createSection)
}



async function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let title = formData.get("title");
    let description = formData.get("description");
    let img = formData.get("imageUrl");

    if (!title || !description || !imageUrl) {
        alert("Fields cannot be empty!");
        throw new Error("Fields cannot be empty!");
    }

    let response = await fetch("http://localhost:3030/data/movies", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-authorization": sessionStorage.getItem("accessToken")
        },
        body: JSON.stringify({ title, description, img })
    })
    let data = response.json();

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message)
    }
    alert("Added movie!")
    form.reset();
    homePage();

}