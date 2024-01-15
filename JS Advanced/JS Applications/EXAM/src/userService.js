import { post, get } from "./api.js"
import { updateNav, userData } from "./userDataHelper.js";
import page from "../node_modules/page/page.mjs";


const userLinks = {
    register: "users/register",
    login: "users/login",
    logout: "users/logout"
}


async function register(email, password) {
    const data = await post(userLinks.register, { email, password });
    userData.setUserData(data);
    updateNav();
}

async function login(email, password) {
    const data = await post(userLinks.login, { email, password });
    userData.setUserData(data);
    updateNav();
}


async function logout() {
    await get(userLinks.logout);
    userData.clearUserData();
    page.redirect("/");
    updateNav();
}

export const userService = {
    register,
    login,
    logout
}
