import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { dataService } from "../dataService.js";
import { userService } from "../userService.js";

const root = document.querySelector("main");



const createTemplate = () => {
  return html`<section id="create">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Add Character</h2>
      <form @submit = ${onSubmit} class="create-form">
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Character Type"
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
        />
        <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="2"
        cols="10"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="2"
        cols="10"
      ></textarea>
        <button type="submit">Add Character</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>`
}





// render View
export function createView() {
  render(createTemplate(), root);
}



async function onSubmit(e) {
  e.preventDefault();

  let formData = new FormData(e.target);

  let category = formData.get("category");
  let imageUrl = formData.get("image-url");
  let description = formData.get("description");
  let moreInfo = formData.get("additional-info");

  // validate inputs
  if (!category || !imageUrl || !description || !moreInfo) {
    window.alert("Incorrect input");
    e.target.reset();
    return;
  }

  // send post request
  await dataService.createHero({ category, imageUrl, description, moreInfo });
  page.redirect("/catalog");

}