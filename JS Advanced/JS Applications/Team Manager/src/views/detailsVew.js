import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { userHelper } from "../userHelper.js";
import { api } from "../api.js";
import { dataService } from "../dataService.js";

const root = document.querySelector("main");


const detailsTemplate = (userData, teamInfo, members, isOwner) => {
    return html`<section id="team-home">
    <article class="layout">
        <img src=${teamInfo.logoUrl} class="team-logo left-col">
            <div class="tm-preview">
                <h2>${teamInfo.name}</h2>
                <p>${teamInfo.description}</p>
                <span class="details">${members.length} Members</span>
                ${userData ? teamActionButtons(isOwner) : ""}
            </div>
            <div class="pad-large">
                <h3>Members</h3>
                ${membersTemplate(isOwner, members)}
            </div>
            <div class="pad-large">
                <h3>Membership Requests</h3>
                ${memberRequestsTemplate(isOwner, members)}
            </div>
    </article>
</section> `
}



const teamActionButtons = (isOwner) => {
    return html`<div>
        ${isOwner ? html`<a href="#" class="action">Edit team</a>` : html` <a href="#" class="action">Join team</a>
    <a href="#" class="action invert">Leave team</a>
    Membership pending. <a href="#">Cancel request</a>`}
</div>`

}




// MEMBERS
const membersTemplate = (isOwner, members) => {
    return html`<ul class="tm-members">
    <li>My Username</li>
    ${members.map(member => userTemp(member, isOwner))}
</ul>`
}

const userTemp = (member, isOwner) => {
    return html`
    ${isOwner ? html`<li>${member.user.username}<a href="#" class="tm-control action">Remove from team</a></li>`
            : html`<li>${member.user.username}</li>`}
    `
}



// MEMBER REQUESTS
const memberRequestsTemplate = (isOwner, members) => {
    return html`<ul class="tm-members">
    ${members.map(member => userTempRequests(member, isOwner))}
</ul>`
}


const userTempRequests = (member, isOwner) => {
    return html`
    ${isOwner ? html`<li>${member.user.username}
        <a href="#" class="tm-control action">Approve</a>
        <a href="#" class="tm-control action">Decline</a>
    </li>`
            : html`<li>${member.user.username}</li>`}`
}





export async function detailsView(ctx) {
    const userData = userHelper.getUserData();
    const id = ctx.params.id;
    const teamInfo = await dataService.getTeam(id);
    const members = await dataService.getMembersByTeam(id);
    const isOwner = id === userHelper.getUserID() === teamInfo._ownerId;

    render(detailsTemplate(userData, teamInfo, members, isOwner), root)
}







