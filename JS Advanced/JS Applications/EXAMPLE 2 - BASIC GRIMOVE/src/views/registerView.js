import { html, render } from "../..//node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { userData, updateNav } from "../userDataHelper.js";
import { post } from "../api.js";

const root = document.querySelector("main");


const registerTemplate = () => {
  return html`<section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit=${onSubmit} class="register-form">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>`
}

export function registerView() {
  render(registerTemplate(), root);
}


async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const email = formData.get("email");
  const password = formData.get("password");
  const rePass = formData.get("re-password");

  if (!email || !password || !rePass || (password !== rePass)) {
    alert("Incorrect input");
    e.target.reset();
    return;
  }

  const data = await post("users/register", { email, password });
  userData.setUserData(data);
  e.target.reset();
  updateNav();
  page.redirect("/catalog");

}