import page from "../node_modules/page/page.mjs";
import { collectionView } from "./views/collectionView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { detailsView } from "./views/detailsView.js";
import { logout, updateNav } from "./userDataHelper.js";

page("/", homeView);
page("/home", homeView);
page("/collection", collectionView);
page("/login", loginView);
page("/logout", logout);
page("/register", registerView);
page("/details/:id", detailsView);

page.start();
updateNav();