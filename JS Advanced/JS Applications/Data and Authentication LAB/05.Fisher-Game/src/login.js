document.querySelector("form").addEventListener("submit", onSubmit);
const url = 'http://localhost:3030/users/login';

// Същото като регистър-а
async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");

    if ((email.length < 1 || email.includes(" ")) || (password.length < 1 || password.includes(" "))) {
        throw new Error("Error");
    }

    let data = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password })
    }

    try {
        let response = await fetch(url, data);

        if (response.status !== 200) {
            throw new Error("Error");
        }
        let userData = await response.json();
        console.log(userData);
        sessionStorage.setItem("email", userData.email);
        sessionStorage.setItem("userID", userData._id);
        sessionStorage.setItem("accessToken", userData.accessToken);
        window.location.href = "./index.html"; // преместваме в друга страница от сайта след регистър или логин
    } catch (error) {
        throw new Error(error);
    }

}