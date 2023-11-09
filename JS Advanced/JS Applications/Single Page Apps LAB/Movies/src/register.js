import { showView } from "./utils.js";
import { homePage } from "./home.js";
import { updateNav } from "./utils.js";

const registerSection = document.querySelector("#form-sign-up");
const form = registerSection.querySelector("form");
form.addEventListener("submit", onSubmit);


export function registerPage() {
    showView(registerSection);
}


async function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");
    let repeatPassword = formData.get("repeatPassword");

    if (!email || !password || !repeatPassword || (password !== repeatPassword) || (password.length < 6)) {
        alert("Invalid input");
        throw new Error("Invalid input");
    }


    try {
        const response = await fetch("http://localhost:3030/users/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message)
        }
        // При успешен логин
        let userData = await response.json();
        sessionStorage.setItem("email", userData.email);
        sessionStorage.setItem("userID", userData._id);
        sessionStorage.setItem("accessToken", userData.accessToken);
        alert("Successful register")
        form.reset();
        updateNav();
        homePage();
    } catch (err) {
        alert(err.message)
        form.reset();
    }
}