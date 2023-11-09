import { showView } from "./utils.js";
import { homePage } from "./home.js";
import { updateNav } from "./utils.js";

const loginSection = document.querySelector("#form-login");
const form = loginSection.querySelector("form");
form.addEventListener("submit", onSubmit);

export function loginPage() {
    showView(loginSection);
}


async function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");

    if (!email || !password) {
        alert("Fields cannot be empty!")
        throw new Error("Fields cannnot be empty!")
    }

    try {
        const response = await fetch("http://localhost:3030/users/login", {
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
        alert("Successful login")
        form.reset();
        updateNav();
        homePage();
    } catch (err) {
        alert(err.message)
        form.reset();
    }
}