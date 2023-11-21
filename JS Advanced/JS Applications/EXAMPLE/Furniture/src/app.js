import page from "../../node_modules/page/page.mjs";

import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/createView.js";
import { myFurnitureView } from "./views/myFurnitureView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { userData, updateNav, logout } from "./userDataHelper.js";




page("/", catalogView);
page("/catalog", catalogView);
page("/create", createView);
page("/myFurniture", myFurnitureView);
page("/login", loginView);
page("/logout", logout);
page("/register", registerView);
page("/details/:id", detailsView);
page("/edit/:id", editView);
updateNav(); // update nav at start of app
page.start(); // start app