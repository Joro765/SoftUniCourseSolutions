import { api } from "./api.js"

const dataEndPoints = {
    allTeams: "data/teams",
    allMembers: "data/members?where=status%3D%22member%22",
    teamByID: "data/teams/",
    membersByTeam: "data/members"

}


async function getAllTeams() {
    return api.get(dataEndPoints.allTeams);
}

async function getAllMembers() {
    return api.get(dataEndPoints.allMembers);
}

async function getTeam(id) {
    return api.get(dataEndPoints.teamByID + id);
}

async function getMembersByTeam(id) {
    const queryParam = `?where=teamId%3D%22${id}%22&load=user%3D_ownerId%3Ausers`;
    return api.get(dataEndPoints.membersByTeam + queryParam);
}



export const dataService = {
    getAllTeams,
    getAllMembers,
    getTeam,
    getMembersByTeam
}