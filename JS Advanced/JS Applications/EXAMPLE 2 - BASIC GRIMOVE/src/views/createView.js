import { html, render } from "../..//node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { userData, updateNav } from "../userDataHelper.js";
import { post } from "../api.js";

const root = document.querySelector("main");


const createTemplate = () => {
    return html`<section id="create">
    <div class="form">
      <h2>Add Product</h2>
      <form @submit=${onSubmit} class="create-form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Product Name"
        />
        <input
          type="text"
          name="imageUrl"
          id="product-image"
          placeholder="Product Image"
        />
        <input
          type="text"
          name="category"
          id="product-category"
          placeholder="Category"
        />
        <textarea
          id="product-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
        ></textarea>
        
        <input
          type="text"
          name="price"
          id="product-price"
          placeholder="Price"
        />

        <button type="submit">Add</button>
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
    let category = formData.get("category");
    let description = formData.get("description");
    let price = formData.get("price");


    if (!name || !imageUrl || !category || !description || !price) {
        alert("Incorrect input");
        e.target.reset();
        return;
    }

    const data = await post("data/products", { name, imageUrl, category, description, price });
    e.target.reset();
    page.redirect("/catalog");


}