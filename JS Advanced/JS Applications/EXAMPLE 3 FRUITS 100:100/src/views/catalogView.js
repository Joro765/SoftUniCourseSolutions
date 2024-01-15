import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { userService } from "../userService.js";
import { dataService } from "../dataService.js";

const root = document.querySelector("main");


const catalogTemplate = (fruits, isEmpty) => {
    return html`<h2>Fruits</h2>
  
      ${!isEmpty ?

            html`<section id="dashboard">
                ${fruits.map(fruit => fruitTemplate(fruit))}
            </section>` : html`<h2> No fruit info yet.</h2 > `}

        `
}



const fruitTemplate = (fruit) => {
    return html`<div class="fruit">
    <img src=${fruit.imageUrl} alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/details/${fruit._id}">More Info</a>
  </div > `
}


export async function catalogView() {
    const fruits = await dataService.getAllFruits();
    let isEmpty = false;

    if (fruits.length < 1) {
        isEmpty = true;
    }
    render(catalogTemplate(fruits, isEmpty), root);
}

