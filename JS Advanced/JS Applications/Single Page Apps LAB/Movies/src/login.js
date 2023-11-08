import { authUpdate } from "./auth.js";
import { showHome } from "./home.js";

const main = document.querySelector("main");
const loginSection = document.getElementById("form-login");
const navSection = document.getElementsByClassName("navbar navbar-expand-lg navbar-dark bg-dark")[0];


export function showLogin() {
    main.replaceChildren(navSection, loginSection);
}



const loginForm = loginSection.querySelector("form");
loginForm.addEventListener("click", async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");

    if (!email || !password) {
        throw new Error("Error");
    }

    try {
        let response = await fetch('http://localhost:3030/users/login', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (response.status !== 200) {
            throw new Error("LOGIN FAILED!");
        }
        let userData = await response.json();
        sessionStorage.setItem("email", userData.email);
        sessionStorage.setItem("userID", userData._id);
        sessionStorage.setItem("accessToken", userData.accessToken);
        alert("SUCCESFUL LOGIN")
        loginForm.reset();
        authUpdate();   // Update STATE AFTER LOGIN
        showHome()
    } catch (error) {
        loginForm.reset();
        alert("WRONG CREDENTIALS")
        throw new Error(error);
    }
})
