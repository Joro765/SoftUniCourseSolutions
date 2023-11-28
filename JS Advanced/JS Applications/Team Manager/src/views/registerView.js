import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { userService } from "../userService.js";
import page from "../../node_modules/page/page.mjs";
import { updateNav } from "../updateNav.js";

const root = document.querySelector("main");

const registerTemplate = (error) => {
    return html`<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form @submit=${onSubmit} id="register-form" class="main-form pad-large">
        ${error ? html`<div class="error">${error}</div>` : ""}
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
        </footer>
    </article>
</section>`
}


export function registerView() {
    render(registerTemplate(), root);
}


async function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let email = formData.get("email");
    let username = formData.get("username");
    let password = formData.get("password");
    let repass = formData.get("repass");

    if (!email || username.length < 3 || password.length < 3 || (password !== repass)) {
        render(registerTemplate("Invalid input"), root);
    }

    await userService.register(email, username, password);
    updateNav();
    page.redirect("/");

}