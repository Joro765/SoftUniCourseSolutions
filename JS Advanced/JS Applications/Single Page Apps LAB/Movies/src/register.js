import { authUpdate } from "./auth.js";
import { showHome } from "./home.js";

const main = document.querySelector("main");
const registerSection = document.getElementById("form-sign-up");
const navSection = document.getElementsByClassName("navbar navbar-expand-lg navbar-dark bg-dark")[0];


export function showRegister() {
    main.replaceChildren(navSection, registerSection);
}


const registerForm = registerSection.querySelector("form")
registerForm.addEventListener("click", async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");
    let rePass = formData.get("repeatPassword");

    if ((!email || !password) || (password !== rePass)) {
        throw new Error("Missing Fields");
    }

    if (password.length < 6) {
        registerForm.reset();
        throw new Error("Short Password");
    }

    try {
        let response = await fetch('http://localhost:3030/users/register', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (response.status !== 200) {
            throw new Error("REGISTER FAILED!");
        }
        let userData = await response.json();
        sessionStorage.setItem("email", userData.email);
        sessionStorage.setItem("userID", userData._id);
        sessionStorage.setItem("accessToken", userData.accessToken);
        alert("SUCCESSFUL REGISTER!")
        registerForm.reset();
        authUpdate();   // Update STATE AFTER REGISTER
        showHome()
    } catch (error) {
        registerForm.reset();
        alert("WRONG CREDENTIALS")
        throw new Error(error);
    }
});

