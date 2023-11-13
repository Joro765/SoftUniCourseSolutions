import { links } from "./router.js";
import { showHome } from "./home.js";
import { updateAuth } from "./utils.js";

const main = document.getElementById("main");
const section = document.getElementById("registerPage");
const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

const redirect = section.querySelector("a");
redirect.addEventListener("click", (e) => {
    e.preventDefault();
    let url;
    if (e.target.href) {
        url = new URL(e.target.href);
    }
    const view = links[url.pathname];
    view();
})


export function showRegister() {
    main.replaceChildren(section)

}

async function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const repeatPassword = formData.get("repeatPassword");

    if (email.length < 3 || password.length < 3 || password !== repeatPassword) {
        form.reset();
        throw new Error("Incorrect input!");
    }


    try {
        const response = await fetch("http://localhost:3030/users/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        if (!response.ok) {
            form.reset();
            throw new Error("ERROR FROM SERVER");
        }
        const data = await response.json();
        localStorage.setItem("email", data.email);
        localStorage.setItem("userID", data._id);
        localStorage.setItem("accessToken", data.accessToken);
        form.reset();
        updateAuth();
        showHome();
    } catch (error) {
        console.log(error.message);
    }
}

