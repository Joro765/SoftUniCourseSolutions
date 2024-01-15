import page from "../../node_modules/page/page.mjs";
import { get } from "./api.js";

// Функция, която взима цялото инфо за юзера от sessionStorage и го парсва
const userData = {
    getUserData: () => JSON.parse(sessionStorage.getItem("userData")), // взима данните от sessionStorage
    setUserData: (data) => sessionStorage.setItem("userData", JSON.stringify(data)), // запазва данните в sessionStorage
    getUserID: () => JSON.parse(sessionStorage.getItem("userData"))._id,
    clearUserData: () => sessionStorage.clear()
}

// Updates nav depending on user/guest
export function updateNav() {
    const userNav = Array.from(document.querySelectorAll(".user"));
    const guestNav = Array.from(document.querySelectorAll(".guest"));

    const userInfo = userData.getUserData();
    if (userInfo) {
        userNav.forEach(element => element.style.display = "inline");
        guestNav.forEach(element => element.style.display = "none");
    } else {
        guestNav.forEach(element => element.style.display = "inline");
        userNav.forEach(element => element.style.display = "none");
    }
}

// logout function
export async function logout() {
    let url = "users/logout";
    await get(url);
    userData.clearUserData();
    updateNav();
    page.redirect("/catalog");

}

export { userData }

