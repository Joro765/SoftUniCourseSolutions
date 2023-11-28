import { api } from "./api.js";
import { userHelper } from "./userHelper.js";

// Помощни функции за регистриране, логване и логаутване на юзер

const userEndpoints = {
    login: "users/login",
    register: "users/register",
    logout: "users/logout"
}


async function register(email, username, password) {
    const data = await api.post(userEndpoints.register, { email, username, password });
    userHelper.setUserData(data);
}


async function login(email, password) {
    const data = await api.post(userEndpoints.login, { email, password });
    userHelper.setUserData(data);
}


async function logout() {
    let userData = userHelper.getUserData();

    if (userData) {
        const data = await api.get(userEndpoints.logout);
        userHelper.clearUserData();
    }
}


export const userService = {
    register,
    login,
    logout
}