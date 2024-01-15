import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { dataService } from "../dataService.js";
import { userData } from "../userDataHelper.js";


const root = document.querySelector("main");


const detailsTemplate = (fruit, isOwner) => {
  return html`<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${fruit.imageUrl} alt="example1" />
      <p id="details-title">${fruit.name}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p>${fruit.description}</p>
              <p id="nutrition">Nutrition</p>
             <p id = "details-nutrition">${fruit.nutrition}</p>
        </div>
         
${isOwner ? html`<div id="action-buttons">
      <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
      <a href="javascript:void(0)" data-id=${fruit._id} @click=${deleteFunc} id = "delete-btn" > Delete</a >
    </div > ` : ""}

      </div>
  </div>
</section>`
}



export async function detailsView(context) {
  let id = context.params.id;
  let fruit = await dataService.getDetails(id);
  let isOwner;

  const user = await userData.getUserData();

  if (user) {
    isOwner = userData.getUserID() === fruit._ownerId;
  } else {
    isOwner = false;
  }

  render(detailsTemplate(fruit, isOwner), root);
}


async function deleteFunc(e) {
  e.preventDefault();
  alert("Deleting item!");
  let id = e.target.dataset.id
  await dataService.deleteFruit(id);
  page.redirect("/catalog");
}
