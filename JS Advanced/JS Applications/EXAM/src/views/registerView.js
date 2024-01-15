import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { userService } from "../userService.js";

const root = document.querySelector("main");


const registerTemplate = () => {
    return html`<section id="register">
          
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Register</h2>
      <form @submit = ${onSubmit} class="register-form">
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
      <img class="border" src="./images/border.png" alt="">
    </div>
   
  </section>`
}

// render View
export function registerView() {
    render(registerTemplate(), root);
}


async function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let email = formData.get("email");
    let password = formData.get("password");
    let rePass = formData.get("re-password");

    // validate inputs
    if (!email || !password || !rePass || password !== rePass) {
        window.alert("Incorrect input");
        e.target.reset();
        return;
    }

    // Send request
    await userService.register(email, password);
    page.redirect("/");

}