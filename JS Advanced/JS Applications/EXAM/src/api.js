import { userData } from "./userDataHelper.js";

const host = "http://localhost:3030/"; // base URL


async function requester(method, url, data) {
    const option = {
        method,
        headers: {}
    }

    if (data) {
        option.headers["Content-type"] = "application/json";
        option.body = JSON.stringify(data);
    }

    const userInfo = userData.getUserData(); // Взимаме юзера ако има такъв извиква се userDataHelper

    // Ако има юзер добавяме му токена в хедърите на рекуестите!
    if (userInfo) {
        option.headers["x-authorization"] = userInfo.accessToken;
    }

    try {
        const reponse = await fetch(host + url, option);

        if (reponse.ok === false) {
            const error = await reponse.json();
            throw new Error(error.message);
        }

        if (reponse.status === 204) {
            return reponse;
        }

        const data = await reponse.json();
        return data;

    } catch (error) {
        alert(error);
        throw error;
    }
}




export function get(url) {
    return requester("GET", url);
}


export function post(url, data) {
    return requester("POST", url, data);
}


export function put(url, data) {
    return requester("PUT", url, data);
}


export function del(url) {
    return requester("DELETE", url);
}