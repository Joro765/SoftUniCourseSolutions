import { showHome } from "./home.js";
import { links } from "./router.js";
import { updateAuth } from "./utils.js";

const main = document.getElementById("main");
const section = document.getElementById("loginPage");
const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

//redirect button to register page
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


// show login page
export function showLogin() {
    main.replaceChildren(section)
}


async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        form.reset();
        throw new Error("Fields cannot be empty!")
    }


    try {
        const response = await fetch("http://localhost:3030/users/login", {
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