import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { userService } from "../userService.js";
import page from "../../node_modules/page/page.mjs";
import { updateNav } from "../updateNav.js";

const root = document.querySelector("main");

const loginTemplate = (error) => {
    return html`<section id="login">
    <article class="narrow">
        <header class="pad-med">
            <h1>Login</h1>
        </header>
        <form @submit = ${onSubmit} id="login-form" class="main-form pad-large">
        ${error ? html`<div class="error">${error}</div>` : ""}
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input class="action cta" type="submit" value="Sign In">
        </form>
        <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
        </footer>
    </article>
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
        render(loginTemplate("Invalid input"), root);
    }

    await userService.login(email, password);
    updateNav();
    page.redirect("/");
}