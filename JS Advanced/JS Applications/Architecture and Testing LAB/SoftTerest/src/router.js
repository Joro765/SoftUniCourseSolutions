import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showDashboard } from "./dashboard.js";
import { showRegister } from "./register.js";
import { showCreate } from "./create.js";
import { logout } from "./logout.js";


// LINKS FOR NAVIGATION
export const links = {
    "/": showHome,
    "/dashboard": showDashboard,
    "/login": showLogin,
    "/register": showRegister,
    "/create": showCreate,
    "/logout": logout
}
