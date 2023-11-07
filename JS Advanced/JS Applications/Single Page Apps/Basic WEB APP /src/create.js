const createSection = document.querySelector(".create"); // Взимаме си секцията от ДОМ дървото
const createForm = createSection.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let name = formData.get("name");
    let img = formData.get("img");
    let ingredients = formData.get("ingredients").split("\n");
    let steps = formData.get("steps").split("\n");

    let data = {
        name,
        img,
        ingredients,
        steps
    }

    fetch("http://localhost:3030/data/recipes", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-authorization": sessionStorage.getItem("accessToken")
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data));

    alert("ADDED A NEW RECIPE!")
    createSection.querySelector("form").reset();
});


// Експортваме тази функция към роутер-а за да визуалириза регистър секцията когато е необходимо !!!
export function renderCreate() {
    createSection.style.display = "block";
}