import { html, render } from "../../../node_modules/lit-html/lit-html.js";
import { post } from "../api.js";
import { userData, updateNav } from "../userDataHelper.js";
import page from "../../../node_modules/page/page.mjs";


const root = document.getElementById("root"); // root element



// Login template - creates the content for the page
const loginTemplate = () => {
    return html`<div class="login-page">
        <h1>LOGIN PAGE</h1>
    <form @submit=${onSubmit}>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" name="password" class="form-control" id="exampleInputPassword1">
</div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>`
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