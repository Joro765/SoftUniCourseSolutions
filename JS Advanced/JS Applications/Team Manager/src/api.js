import { userHelper } from "./userHelper.js";

const baseUrl = "http://localhost:3030/";

async function requester(url, method, data) {
    const options = {
        method,
        headers: {}
    }

    const userData = userHelper.getUserData();

    if (userData) {
        options.headers["x-authorization"] = userData.accessToken;
    }


    if (data) {
        options.headers["content-type"] = "application/json";
        options.body = JSON.stringify(data);
    }


    try {
        const response = await fetch(baseUrl + url, options);

        if (!response.ok) {
            let err = await response.json();
            throw new Error(err.message);
        }

        if (response.status === 204) {
            return response;
        }


        return response.json();

    } catch (error) {
        throw new error;
    }
}



async function get(url) {
    return await requester(url, "GET");
}


async function post(url, data) {
    return await requester(url, "POST", data);
}


async function put(url, data) {
    return await requester(url, "PUT", data);
}


async function del(url) {
    return await requester(url, "DELETE");
}


export const api = {
    get,
    post,
    put,
    del
}