import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { userHelper } from "../userHelper.js";

const root = document.querySelector("main");

const homeTemplate = (userData) => {
    return html`<section id="home">
    <article class="hero layout">
        <img src="./assets/team.png" class="left-col pad-med">
        <div class="pad-med tm-hero-col">
            <h2>Welcome to Team Manager!</h2>
            <p>Want to organize your peers? Create and manage a team for free.</p>
            <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
            ${userData ? html`<a href="/browseTeams" class="action cta">Browse Teams</a>` : html`<a href="/register" class="action cta">Sign Up Now</a>`}
        </div>
    </article>
</section>`
}


export function homeView() {
    const userData = userHelper.getUserData(); // check if user
    render(homeTemplate(userData), root); // pass user boolean to template to show correct buttons
}