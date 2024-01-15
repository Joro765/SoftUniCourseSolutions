import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { userService } from "../userService.js";
import { dataService } from "../dataService.js";

const root = document.querySelector("main");



const catalogTemplate = (heroes, isEmpty) => {
    return html`<h2>Characters</h2>
  
      ${!isEmpty ?

            html`<section id="characters">
                ${heroes.map(hero => heroTemplate(hero))}
            </section>` : html`<h2>No added Heroes yet.</h2>`}

        `
}



// render a single hero
const heroTemplate = (hero) => {
    return html`<div class="character">
    <img src=${hero.imageUrl} alt="example2" />
    <div class="hero-info">
      <h3 class="category">${hero.category}</h3>
      <p class="description">${hero.description}</p>
      <a class="details-btn" href="/details/${hero._id}">More Info</a>
    </div>`
}


// render View
export async function catalogView() {
    const heroes = await dataService.getHeroes();
    let isEmpty = false;

    // check if servers response is an empty array
    if (heroes.length < 1) {
        isEmpty = true;
    }
    render(catalogTemplate(heroes, isEmpty), root);
}
