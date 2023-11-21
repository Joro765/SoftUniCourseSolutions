import { html, render } from "../../../node_modules/lit-html/lit-html.js";
import { post } from "../api.js";
import { userData, updateNav } from "../userDataHelper.js";
import page from "../../../node_modules/page/page.mjs";


const root = document.querySelector("div.container"); // root element



// Logi template - creates the content for the page
const loginTemplate = () => {
    return html`<div class="row space-top">
    <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control" id="password" type="password" name="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
        </div>
    </div>
</form>`
}



// event handler for FORM
async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        alert("Incorrect!");
        e.target.reset();
        return;
    }

    const data = await post("users/login", { email, password });
    userData.setUserData(data);
    e.target.reset();
    updateNav();
    page.redirect("/")

}





// Render content on page
export function loginView() {
    render(loginTemplate(), root);
}