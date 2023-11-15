import { html, render } from "../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const button = document.querySelector("button");
const section = document.getElementById("towns");
button.addEventListener("click", search);

// Fill the list with the cities
const ul = html`<ul>${towns.map(town => template(town))}</ul>`;
render(ul, section);

// Create LI element for each city
function template(city) {
   return html`<li>${city}</li>`
}


// When seach btn is clicked
function search() {
   let counter = 0;
   const result = document.getElementById("result");
   const element = document.getElementById("searchText");
   const input = element.value;

   const cities = Array.from(document.querySelectorAll("li"));

   for (const city of cities) {
      if (input != " " && input.length > 0 && city.textContent.includes(input)) {
         city.classList = "active";
         counter++;
      } else if (!city.textContent.includes(input)) {
         city.classList = "";
      }
   }
   if (counter > 0) {
      result.textContent = `${counter} matches found`;
   }
   element.value = "";
}



