import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { userService } from "../userService.js";

const root = document.querySelector("main");


const loginTemplate = () => {
    return html`<section id="login">
    <div class="form">
      <h2>Login</h2>
      <form @submit = ${onSubmit} class="login-form">
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

    let formData = new FormData(e.target);

    let email = formData.get("email");
    let password = formData.get("password");


    if (!email || !password) {
        window.alert("Incorrect input");
        e.target.reset();
        return;
    }

    await userService.login(email, password);
    page.redirect("/");

}