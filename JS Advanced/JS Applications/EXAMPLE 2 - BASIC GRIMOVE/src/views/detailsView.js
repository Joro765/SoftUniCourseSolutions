import { html, render } from "../..//node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { userData, updateNav } from "../userDataHelper.js";
import { get, del } from "../api.js";

const root = document.querySelector("main");


const detailsTemplate = (data, isOwner) => {
    return html`<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${data.imageUrl} alt="example1" />
        <p id="details-title">${data.name}</p>
        <p id="details-category">
            Category: <span id="categories">${data.category}</span>
        </p>
        <p id="details-price">
            Price: <span id="price-number">${data.price}</span>$</p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Bought: <span id="buys">0</span> times.</h4>
                <span>${data.description}</span
                >
            </div>
        </div>
        ${isOwner ? html`<div id="action-buttons">
    <a href="/edit/${data._id}" id="edit-btn">Edit</a>
    <a href="javascript:void(0)" data-id=${data._id} @click=${deleteFunc} id="delete-btn">Delete</a>
</div> ` : ""}

    </div>
</section>`
}


export async function detailsView(context) {
    let id = context.params.id;
    let data = await get(`data/products/${id}`);
    let isOwner; // празна променлива за да й дадем стойност по-късно след проверка

    const user = userData.getUserData(); // Запазваме резултат от проверката за логнат юзер

    // Ако има логнат юзер тогава проверяваме дали е owner ако не проверим ще дава грешка като не сме логнати !!!
    if (user) {
        isOwner = userData.getUserID() === data._ownerId; // Сравняваме ид-то на логнатия юзер с ид-то на създателя на item-a връща true/false
    } else {
        isOwner = false;
    }

    render(detailsTemplate(data, isOwner), root);
}




// Delete function
async function deleteFunc(e) {
    e.preventDefault();
    alert("Deleting item!");
    let id = e.target.dataset.id
    await del(`data/products/${id}`)
    page.redirect("/catalog");
}




