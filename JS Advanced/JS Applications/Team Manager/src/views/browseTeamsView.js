import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { userHelper } from "../userHelper.js";
import { api } from "../api.js";
import { dataService } from "../dataService.js";

const root = document.querySelector("main");


const browseTeamsTemplate = (teams, userData) => {
    return html`<section id="browse">

    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>
    ${teams.map(team => cardTemplate(team))}

    ${userData ? html` <article class="layout narrow">
    <div class="pad-small"><a href="/createTeam" class="action cta">Create Team</a></div>
    </article>` : ""}

</section>`
}

const cardTemplate = (team) => {
    return html` <article class="layout">
    <img src=${team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${team.members} Members</span>
            <div><a href="/details/${team._id}" class="action">See details</a></div>
        </div>
</article>`
}


export async function browseTeamsView() {
    const userData = userHelper.getUserData();
    let teams = await dataService.getAllTeams();
    let members = await dataService.getAllMembers();

    // Събираме резултатите за отборите и участиците за да проверим кой отбор колко участника има
    const result = combineData(teams, members);
    render(browseTeamsTemplate(result, userData), root);
}



// Взима масив от обекти за всеки обект добавя пропърти и го добавя в нов масив, който връща накрая
function combineData(teams, members) {
    const result = [];

    // за всеки отбор
    teams.forEach(team => {
        const findMember = members.filter(x => x.teamId === team._id && x.status === "member"); // взимаме броя на мембъри за този отбор
        team.members = findMember.length; // добавяме като пропърти на обекта team - броят на мембърите
        result.push(team); // добавяме отборът с броят мембъри в масив
    });
    // връщаме масив от обекти (отборите), които имат пропърти members (броят участници)
    return result;
}









