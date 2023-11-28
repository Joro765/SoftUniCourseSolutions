import page from "./node_modules/page/page.mjs";
import { userService } from "./src/userService.js";
import { homeView } from "./src/views/homeView.js";
import { loginView } from "./src/views/loginView.js";
import { registerView } from "./src/views/registerView.js";
import { updateNav } from "./src/updateNav.js";
import { browseTeamsView } from "./src/views/browseTeamsView.js";
import { detailsView } from "./src/views/detailsVew.js";


page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/browseTeams", browseTeamsView);
page("/myTeams", () => console.log("My Teams"));
page("/logout", logoutNavUpdate);
page("/details/:id", detailsView)


async function logoutNavUpdate() {
    await userService.logout();
    updateNav();
    page.redirect("/");
}

updateNav();
page.start();