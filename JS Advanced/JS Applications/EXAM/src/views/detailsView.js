import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { dataService } from "../dataService.js";
import { userData } from "../userDataHelper.js";


const root = document.querySelector("main");


const detailsTemplate = (hero, isOwner) => {
  return html`<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${hero.imageUrl} alt="example1" />
      <div>
      <p id="details-category">${hero.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">${hero.description}</p>
             <p id ="more-info">${hero.moreInfo}</p>
        </div>
      </div>
        <h3>Is This Useful:<span id="likes">0</span></h3>

         ${isOwner ? html`<div id="action-buttons">
            <a href="/edit/${hero._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" data-id=${hero._id} @click=${deleteFunc} id="delete-btn">Delete</a>

            </div>` : ""}
    
      </div>
  </div>
</section>`
}





// render View
export async function detailsView(context) {
  let id = context.params.id;
  let hero = await dataService.getDetails(id);
  let isOwner;

  const user = await userData.getUserData();

  // check if currently logged-in user is also owner
  if (user) {
    isOwner = userData.getUserID() === hero._ownerId;
  } else {
    isOwner = false;
  }

  render(detailsTemplate(hero, isOwner), root);
}


// delete function
async function deleteFunc(e) {
  e.preventDefault();
  let id = e.target.dataset.id
  let text;
  if (confirm("Press a button!") == true) {
    await dataService.deleteHero(id);
    page.redirect("/catalog");
  }

}