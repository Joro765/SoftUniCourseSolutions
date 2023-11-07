import { authUpdate } from "./Auth.js";
const registerSection = document.querySelector(".register"); // Взимаме си секцията от ДОМ дървото
const registerForm = document.querySelector(".register form");

registerForm.addEventListener("click", async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");
    let rePass = formData.get("rePass");

    if ((!email || !password) || (password !== rePass)) {
        throw new Error("Error");
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
    } catch (error) {
        registerForm.reset();
        alert("WRONG CREDENTIALS")
        throw new Error(error);
    }
});








// Експортваме тази функция към роутер-а за да визуалириза регистър секцията когато е необходимо !!!
export function renderRegister() {
    registerSection.style.display = "block";
}



