import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { dataService } from "../dataService.js";


const root = document.querySelector("main");


const editTemplate = (data) => {
    return html`<section id="edit">
   <div class="form">
       <h2>Edit Fruit</h2>
       <form @submit=${onSubmit} class="edit-form">
           <input
               type="text"
               name="name"
               id="name"
               value= ${data.name}
               placeholder="Fruit Name"
           />
           <input
               type="text"
               name="imageUrl"
               id="Fruit-image"
               value= ${data.imageUrl}
               placeholder="Fruit Image URL"
           />
           <textarea
               id="fruit-description"
               name="description"
               placeholder="Description"
               rows="10"
               cols="50"
           >${data.description}</textarea>
           <textarea
               id="fruit-nutrition"
               name="nutrition"
               placeholder="Nutrition"
               rows="10"
               cols="50"
           >${data.nutrition}</textarea>
           <button type="submit">post</button>
       </form>
   </div>
</section>`
}

let id;
export async function editView(context) {
    id = context.params.id;
    let data = await dataService.getDetails(id);

    render(editTemplate(data), root);
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

    await dataService.updateFruit(id, { name, imageUrl, description, nutrition });
    page.redirect(`/details/${id}`);


}
