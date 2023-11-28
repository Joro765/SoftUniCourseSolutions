import { userHelper } from "./userHelper.js";

const userLinks = document.querySelectorAll(".action.user");
const guestLinks = document.querySelectorAll(".action.guest");

export function updateNav() {
    const userData = userHelper.getUserData();

    if (userData) {
        userLinks.forEach(element => element.style.display = "inline");
        guestLinks.forEach(element => element.style.display = "none");
    } else {
        guestLinks.forEach(element => element.style.display = "inline");
        userLinks.forEach(element => element.style.display = "none");
    }
}