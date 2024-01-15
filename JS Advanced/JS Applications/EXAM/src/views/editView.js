import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { dataService } from "../dataService.js";


const root = document.querySelector("main");


const editTemplate = (data) => {
    return html`<section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Edit Character</h2>
      <form @submit = ${onSubmit} class="edit-form">
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Character Type"
        value= ${data.category}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        value= ${data.imageUrl}
      />
      <textarea
      id="description"
      name="description"
      placeholder="Description"
      rows="2"
      cols="10"
    >${data.description}</textarea>
    <textarea
      id="additional-info"
      name="additional-info"
      placeholder="Additional Info"
      rows="2"
      cols="10"
    >${data.moreInfo}</textarea>
        <button type="submit">Edit</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>`
}




let id;

// render view
export async function editView(context) {
    id = context.params.id;
    let data = await dataService.getDetails(id); // await data

    render(editTemplate(data), root);
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


    await dataService.updateHero(id, { category, imageUrl, description, moreInfo });
    page.redirect(`/details/${id}`);


}