import { post, get } from "./api.js"
import { updateNav, userData } from "./userDataHelper.js";


const userEndpoints = {
    register: "users/register",
    login: "users/login",
    logout: "users/logout"
}


async function register(email, password) {
    const data = await post(userEndpoints.register, { email, password });
    userData.setUserData(data);
    updateNav();
}

async function login(email, password) {
    const data = await post(userEndpoints.login, { email, password });
    userData.setUserData(data);
    updateNav();
}


async function logout() {
    await get(userEndpoints.logout);
    userData.clearUserData();
    updateNav();
}

export const userService = {
    register,
    login,
    logout
}
