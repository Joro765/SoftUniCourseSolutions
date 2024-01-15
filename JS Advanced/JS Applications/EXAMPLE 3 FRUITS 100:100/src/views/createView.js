import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { dataService } from "../dataService.js";
import { userService } from "../userService.js";

const root = document.querySelector("main");


const createTemplate = () => {
  return html`<section id="create">
    <div class="form">
      <h2>Add Fruit</h2>
      <form @submit = ${onSubmit} class="create-form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Fruit Name"
        />
        <input
          type="text"
          name="imageUrl"
          id="Fruit-image"
          placeholder="Fruit Image"
        />
        <textarea
        id="fruit-description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="fruit-nutrition"
        name="nutrition"
        placeholder="Nutrition"
        rows="10"
        cols="50"
      ></textarea>
        <button type="submit">Add Fruit</button>
      </form>
    </div>
  </section>`
}


export function createView() {
  render(createTemplate(), root);
}

async function onSubmit(e) {
  e.preventDefault();

  let formData = new FormData(e.target);

  let name = formData.get("name");
  let imageUrl = formData.get("imageUrl");
  let description = formData.get("description");
  let nutrition = formData.get("nutrition");

  if (!name || !imageUrl || !description || !nutrition) {
    window.alert("Incorrect input");
    e.target.reset();
    return;
  }

  await dataService.createFruit({ name, imageUrl, description, nutrition });
  page.redirect("/catalog");

}