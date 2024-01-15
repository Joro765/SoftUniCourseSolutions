import { html, render } from "../..//node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { userData, updateNav } from "../userDataHelper.js";
import { post } from "../api.js";

const root = document.querySelector("main");


const loginTemplate = () => {
    return html`<section id="login">
    <div class="form">
      <h2>Login</h2>
      <form @submit=${onSubmit} class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>`
}


export function loginView() {
    render(loginTemplate(), root);
}


async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        alert("Incorrect input!");
        e.target.reset();
        return;
    }

    const data = await post("users/login", { email, password });
    userData.setUserData(data);
    e.target.reset();
    updateNav();
    page.redirect("/catalog");


}