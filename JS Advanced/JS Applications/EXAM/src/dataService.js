import { post, put, del, get } from "./api.js";


const dataLinks = {
    allHeroes: "data/characters?sortBy=_createdOn%20desc",
    singleHero: `data/characters`,
    singleHeroDash: "data/characters/"
}


async function getHeroes() {
    return get(dataLinks.allHeroes);
}


async function getDetails(id) {
    return get(dataLinks.singleHeroDash + id);
}

async function createHero(data) {
    return post(dataLinks.singleHero, data);
}

async function updateHero(id, data) {
    return put(dataLinks.singleHeroDash + id, data)
}


async function deleteHero(id) {
    return del(dataLinks.singleHeroDash + id);
}



export const dataService = {
    getHeroes,
    getDetails,
    createHero,
    updateHero,
    deleteHero
}