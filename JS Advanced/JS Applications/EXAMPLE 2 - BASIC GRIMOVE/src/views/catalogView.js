import { html, render } from "../..//node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { userData, updateNav } from "../userDataHelper.js";
import { get } from "../api.js";

const root = document.querySelector("main");


const catalogTemplate = (data, isEmpty) => {
    return html`<h2>Products</h2>
    ${!isEmpty ? html`<section id="dashboard">
        ${data.map(product => productTemplate(product))}
      </section>` : html`<h2>No products yet.</h2>`}
    
     `

}


const productTemplate = (product) => {
    return html`<div class="product">
    <img src=${product.imageUrl} alt="example1" />
    <p class="title">${product.name}</p>
    <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
    <a class="details-btn" href="/details/${product._id}">Details</a>
</div>`
}


export async function catalogView() {
    const data = await get("data/products?sortBy=_createdOn%20desc");
    let isEmpty = false;

    // Ако няма продукти
    if (data.length < 1) {
        isEmpty = true;
    }

    render(catalogTemplate(data, isEmpty), root);
}





