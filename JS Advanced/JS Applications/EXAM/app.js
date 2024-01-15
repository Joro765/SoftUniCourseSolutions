import page from "./node_modules/page/page.mjs";
import { homeView } from "./src/views/homeView.js";
import { updateNav } from "./src/userDataHelper.js";
import { loginView } from "./src/views/loginView.js";
import { userService } from "./src/userService.js";
import { registerView } from "./src/views/registerView.js";
import { catalogView } from "./src/views/catalogView.js";
import { detailsView } from "./src/views/detailsView.js";
import { createView } from "./src/views/createView.js";
import { editView } from "./src/views/editView.js";


page("/", homeView);
page("/catalog", catalogView);
page("/login", loginView);
page("/register", registerView);
page("/logout", userService.logout);
page("/create", createView);
page("/details/:id", detailsView);
page("/edit/:id", editView);


updateNav();
page.start();
