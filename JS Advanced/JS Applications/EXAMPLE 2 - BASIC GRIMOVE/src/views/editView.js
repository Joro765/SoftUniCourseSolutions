import { html, render } from "../..//node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { userData, updateNav } from "../userDataHelper.js";
import { get, put } from "../api.js";


const root = document.querySelector("main");


const editTemplate = (data) => {
    return html`<section id="edit">
    <div class="form">
      <h2>Edit Product</h2>
      <form @submit =${onSubmit} class="edit-form">
        <input type="text" name="name" id="name" placeholder="Product Name" value=${data.name}
        />
        <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" value=${data.imageUrl}
        />
        <input type="text" name="category" id="product-category" placeholder="Category" value=${data.category}
        />
        <textarea id="product-description" name="description" placeholder="Description" rows="5" cols="50">${data.description}</textarea>
        <input type="text" name="price" id="product-price" placeholder="Price" value=${data.price}
        />
        <button type="submit">post</button>
      </form>
    </div>
  </section>`
}


let id;
export async function editView(context) {
    id = context.params.id;
    let data = await get(`data/products/${id}`);
    render(editTemplate(data), root);
}


async function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let name = formData.get("name");
    let imageUrl = formData.get("imageUrl");
    let category = formData.get("category");
    let description = formData.get("description");
    let price = formData.get("price");


    if (!name || !imageUrl || !category || !description || !price) {
        alert("Incorrect input");
        return;
    }

    const data = await put(`data/products/${id}`, { name, imageUrl, category, description, price });
    page.redirect(`/details/${id}`);



}