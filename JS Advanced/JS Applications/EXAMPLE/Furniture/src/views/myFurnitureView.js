import { html, render } from "../../../node_modules/lit-html/lit-html.js";
import { get } from "../api.js";
import { userData } from "../userDataHelper.js";




const root = document.querySelector("div.container");


const catalogTemplate = (items) => {
    return html`<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
    ${items.map(x => html`<div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src=${x.img} />
                            <p>${x.description}</p>
                            <footer>
                                <p>Price: <span>${x.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${x._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>`)}
</div>`

}

// При зареждане на страницата си викам даните от базата и ги изчаквам
export async function myFurnitureView() {
    let id = userData.getUserID();
    const data = await get(`data/catalog?where=_ownerId%3D%22${id}%22`);
    const items = Object.values(data); // обработвам ги
    render(catalogTemplate(items), root) // подавам ги на темплейта
}





