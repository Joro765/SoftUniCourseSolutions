import { post, put, del, get } from "./api.js";


const dataEndpoints = {
    getAll: "data/fruits?sortBy=_createdOn%20desc",
    singleFruit: `data/fruits/`
}


async function getAllFruits() {
    return get(dataEndpoints.getAll);
}


async function getDetails(id) {
    return get(dataEndpoints.singleFruit + id);
}

async function createFruit(data) {
    return post(dataEndpoints.singleFruit, data);
}

async function updateFruit(id, data) {
    return put(dataEndpoints.singleFruit + id, data)
}


async function deleteFruit(id) {
    return del(dataEndpoints.singleFruit + id);
}



export const dataService = {
    getAllFruits,
    getDetails,
    createFruit,
    updateFruit,
    deleteFruit
}