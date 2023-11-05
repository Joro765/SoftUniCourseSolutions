document.querySelector("form").addEventListener("submit", onSubmit);
const url = 'http://localhost:3030/users/register';


async function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");
    let rePass = formData.get("rePass");

    // Проверка за мейл и парола
    if ((email.length < 1 && email.includes(" ")) && (password.length < 1 && password.includes(" ")) && password !== rePass) {
        throw new Error("Invalid data");
    }

    // Създаване на информация за ПОСТ заявка
    let data = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password })
    }


    // Изпращане на ПОСТ заявка
    // Добавяне на информация в SESSION STORAGE за логнатия юзер
    try {
        let response = await fetch(url, data);
        if (response.status !== 200) { // Ще върне различен код от 200 ако има вече такъв потребител в базата
            throw new Error("Error");
        }
        let userData = await response.json();
        sessionStorage.setItem("email", userData.email);
        sessionStorage.setItem("userID", userData._id);
        sessionStorage.setItem("accessToken", userData.accessToken);
        window.location.href = "./index.html"; // преместваме в друга страница от сайта след регистър или логин
    } catch (error) {
        throw new Error(error);
    }


}