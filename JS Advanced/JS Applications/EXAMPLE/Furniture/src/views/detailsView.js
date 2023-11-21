import { html, render } from "../../../node_modules/lit-html/lit-html.js";
import { get, del } from "../api.js"
import { userData } from "../userDataHelper.js";
import page from "../../../node_modules/page/page.mjs";

const root = document.querySelector("div.container");


// Приемаме допълнителен isOwner параметър за да рендедираме правилно според това дали сме owner на item-a
const detailsTemplate = (data, isOwner) => {
    return html`<div class="row space-top">
<div class="col-md-12">
    <h1>Furniture Details</h1>
</div>
</div>
<div class="row space-top">
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="../../${data.img}" />
        </div>
    </div>
</div>
<div class="col-md-4">
    <p>Make: <span>${data.make}</span></p>
    <p>Model: <span>${data.model}</span></p>
    <p>Year: <span>${data.year}</span></p>
    <p>Description: <span>${data.description}</span></p>
    <p>Price: <span>${data.price}</span></p>
    <p>Material: <span>${data.material}</span></p>
    <div>

    <!-- Проверяваме дали е owner - TRUE/FALSE ако е рендерираме бутоните ако не е рендерираме "" демек няма да има бутони -->
    ${isOwner ?
            html`<a href="/edit/${data._id}" class="btn btn-info">Edit</a>
                 <a href="javascript:void(0)" data-id=${data._id} @click=${deleteFunc} class="btn btn-red">Delete</a>` : ""} 
        
    </div>
</div>
</div>`
}


export async function detailsView(context) { // Приемаме контекст, който се поддава от PAGE от него може да си вземем ид-то на елемента
    const id = context.params.id;
    const data = await get(`data/catalog/${id}`);
    let isOwner; // празна променлива за да й дадем стойност по-късно след проверка

    const userInfo = userData.getUserData(); // Запазваме резултат от проверката за логнат юзер

    // Ако има логнат юзер тогава проверяваме дали е owner ако не проверим ще дава като не сме логнати !!!
    if (userInfo) {
        isOwner = userData.getUserID() === data._ownerId; // Сравняваме ид-то на логнатия юзер с ид-то на създателя на item-a връща true/false
    } else {
        isOwner = false;
    }
    render(detailsTemplate(data, isOwner), root) // Подаваме инфото за създаване на темплейт и isOwner за да решим дали да рендерираме бутони
}



// Delete function
async function deleteFunc(e) {
    e.preventDefault();
    alert("Deleting item!");
    let id = e.target.dataset.id
    await del(`data/catalog/${id}`)
    page.redirect("/catalog");
}



